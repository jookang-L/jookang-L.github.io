/**
 * JooK playground — 피드백을 스프레드시트에 append
 *
 * 사용 순서는 프로젝트 루트에서 안내하거나 README를 참고하세요.
 * 이 파일을 Google Apps Script 편집기에 그대로 붙여넣습니다.
 */

/** 스프레드시트 URL의 ID ( /d/ 이후 ) */
const SPREADSHEET_ID = '1VuBjOSNv4zhGGACZDbbwZWhb35ehrNvSbWbW_j-YGLw'

/** 응답을 쌓을 시트 탭 이름 (없으면 자동 생성) */
const SHEET_NAME = '피드백'

/**
 * Next.js API에서만 알고 보내는 비밀값과 동일하게 맞추세요.
 * 배포 후에는 스크립트 속성으로 옮기는 것을 권장합니다.
 */
const WEBHOOK_SECRET = '여기에_긴_랜덤_문자열_입력'

function doPost(e) {
  const lock = LockService.getScriptLock()
  try {
    lock.waitLock(15000)
  } catch (err) {
    return jsonOut({ ok: false, error: 'lock_timeout' })
  }

  try {
    if (!e.postData || !e.postData.contents) {
      return jsonOut({ ok: false, error: 'no_body' })
    }

    const payload = JSON.parse(e.postData.contents)

    if (payload.secret !== WEBHOOK_SECRET) {
      return jsonOut({ ok: false, error: 'unauthorized' })
    }

    const name = String(payload.name || '').trim()
    const email = String(payload.email || '').trim()
    const category = String(payload.category || '').trim()
    const message = String(payload.message || '').trim()

    if (!name || !email || !message) {
      return jsonOut({ ok: false, error: 'validation' })
    }

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID)
    let sheet = ss.getSheetByName(SHEET_NAME)
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME)
    }

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['접수 시각', '이름', '이메일', '질문 유형', '내용'])
    }

    sheet.appendRow([new Date(), name, email, category, message])
    return jsonOut({ ok: true })
  } catch (err) {
    return jsonOut({ ok: false, error: String(err) })
  } finally {
    lock.releaseLock()
  }
}

function jsonOut(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON)
}

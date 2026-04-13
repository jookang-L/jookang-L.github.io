/**
 * public/ 안의 "Jook Board Setup x.y.z.exe" (및 선택적 mac용 dmg|zip|pkg) 중
 * 시맨틱 버전이 가장 높은 파일을 골라 constants/dashboard-download.generated.ts 생성
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const publicDir = path.join(root, 'public')
const outFile = path.join(root, 'constants', 'dashboard-download.generated.ts')

function compareSemver(a, b) {
  const pa = a.split('.').map((x) => parseInt(x, 10) || 0)
  const pb = b.split('.').map((x) => parseInt(x, 10) || 0)
  const n = Math.max(pa.length, pb.length, 3)
  for (let i = 0; i < n; i++) {
    const da = pa[i] ?? 0
    const db = pb[i] ?? 0
    if (da > db) return 1
    if (da < db) return -1
  }
  return 0
}

function pickBest(files, regex) {
  let best = null
  for (const f of files) {
    const m = f.match(regex)
    if (!m) continue
    const version = m[1]
    if (!best || compareSemver(version, best.version) > 0) {
      best = { filename: f, version }
    }
  }
  return best
}

function publicUrlPath(filename) {
  if (!filename) return ''
  return '/' + filename.split('/').map((seg) => encodeURIComponent(seg)).join('/')
}

function main() {
  let files = []
  try {
    files = fs.readdirSync(publicDir)
  } catch {
    console.warn('[resolve-dashboard-setup] public/ 읽기 실패 — 빈 값으로 생성')
  }

  const winRe = /^Jook Board Setup (\d+\.\d+\.\d+)\.exe$/i
  const macRe = /^Jook Board Setup (\d+\.\d+\.\d+)\.(dmg|zip|pkg)$/i

  const win = pickBest(files, winRe)
  const mac = pickBest(files, macRe)

  const winPath = publicUrlPath(win?.filename ?? '')
  const macPath = publicUrlPath(mac?.filename ?? '')

  const ts = `/* eslint-disable */
// 이 파일은 scripts/resolve-dashboard-setup.mjs 가 자동 생성합니다. 직접 수정하지 마세요.
// 새 설치 파일을 public/ 에 넣고 npm run dev / npm run build 시 최신 버전이 반영됩니다.

export const DASHBOARD_SETUP_VERSION = ${JSON.stringify(win?.version ?? '')}
export const DASHBOARD_WINDOWS_FILENAME = ${JSON.stringify(win?.filename ?? '')}
export const DASHBOARD_WINDOWS_PUBLIC_PATH = ${JSON.stringify(winPath)}

export const DASHBOARD_MAC_VERSION = ${JSON.stringify(mac?.version ?? '')}
export const DASHBOARD_MAC_FILENAME = ${JSON.stringify(mac?.filename ?? '')}
export const DASHBOARD_MAC_PUBLIC_PATH = ${JSON.stringify(macPath)}
`

  fs.writeFileSync(outFile, ts, 'utf8')
  console.log(
    '[resolve-dashboard-setup]',
    win ? `Windows ${win.version} → ${win.filename}` : 'Windows 설치 파일 없음',
    '|',
    mac ? `macOS ${mac.version} → ${mac.filename}` : 'macOS 설치 파일 없음',
  )
}

main()

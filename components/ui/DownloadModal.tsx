'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useModal } from '@/app/providers'
import {
  DASHBOARD_WINDOWS_PUBLIC_PATH,
  DASHBOARD_WINDOWS_FILENAME,
  DASHBOARD_MAC_PUBLIC_PATH,
  DASHBOARD_MAC_FILENAME,
} from '@/constants/dashboard-download.generated'

const DASHBOARD_APP_NAME = '올인원 대시보드'

/** GitHub 100MB 제한으로 public에 exe를 못 올릴 때 — Releases 등 전체 URL */
const WIN_URL =
  typeof process.env.NEXT_PUBLIC_DASHBOARD_WINDOWS_URL === 'string' &&
  process.env.NEXT_PUBLIC_DASHBOARD_WINDOWS_URL.length > 0
    ? process.env.NEXT_PUBLIC_DASHBOARD_WINDOWS_URL
    : ''

const WIN_FILENAME =
  typeof process.env.NEXT_PUBLIC_DASHBOARD_WINDOWS_FILENAME === 'string' &&
  process.env.NEXT_PUBLIC_DASHBOARD_WINDOWS_FILENAME.length > 0
    ? process.env.NEXT_PUBLIC_DASHBOARD_WINDOWS_FILENAME
    : DASHBOARD_WINDOWS_FILENAME

const MAC_URL =
  typeof process.env.NEXT_PUBLIC_DASHBOARD_MAC_URL === 'string' &&
  process.env.NEXT_PUBLIC_DASHBOARD_MAC_URL.length > 0
    ? process.env.NEXT_PUBLIC_DASHBOARD_MAC_URL
    : ''

const MAC_FILENAME =
  typeof process.env.NEXT_PUBLIC_DASHBOARD_MAC_FILENAME === 'string' &&
  process.env.NEXT_PUBLIC_DASHBOARD_MAC_FILENAME.length > 0
    ? process.env.NEXT_PUBLIC_DASHBOARD_MAC_FILENAME
    : DASHBOARD_MAC_FILENAME

function triggerDownload(href: string, filename: string) {
  const a = document.createElement('a')
  a.href = href
  if (filename) a.setAttribute('download', filename)
  a.rel = 'noopener noreferrer'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export default function DownloadModal() {
  const { isOpen, close, currentApp } = useModal()

  const isDashboard = currentApp === DASHBOARD_APP_NAME
  const winHref = WIN_URL || DASHBOARD_WINDOWS_PUBLIC_PATH
  const macHref = MAC_URL || DASHBOARD_MAC_PUBLIC_PATH
  const hasWin = Boolean(winHref && WIN_FILENAME)
  const hasMac = Boolean(macHref && MAC_FILENAME)

  function doDownload(os: 'windows' | 'mac') {
    if (!isDashboard) {
      alert(`📦 ${currentApp}\n\n해당 앱의 설치 파일은 아직 연결되지 않았습니다.`)
      close()
      return
    }
    if (os === 'windows') {
      if (!hasWin) return
      triggerDownload(winHref, WIN_FILENAME)
      close()
      return
    }
    if (os === 'mac') {
      if (!hasMac) return
      triggerDownload(macHref, MAC_FILENAME)
      close()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="dl-modal"
          className="fixed inset-0 z-[950] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
        >
          <div
            className="absolute inset-0 bg-black/65 backdrop-blur-sm"
            onClick={close}
          />

          <motion.div
            className="relative z-10 w-full max-w-lg rounded-3xl p-10 max-h-[min(92vh,900px)] overflow-y-auto"
            style={{ background: '#111827', border: '1px solid rgba(255,222,0,0.3)' }}
            initial={{ scale: 0.88, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: 20 }}
            transition={{ duration: 0.28, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 text-gray-500 hover:text-white text-2xl transition-colors"
            >
              &times;
            </button>

            <div className="text-center mb-7">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4"
                style={{ background: 'rgba(255,222,0,0.1)', border: '1px solid rgba(255,222,0,0.3)' }}
              >
                📦
              </div>
              <h3 className="text-white text-xl font-bold mb-1">{currentApp} 다운로드</h3>
              <p className="text-gray-400 text-base">운영체제를 선택해주세요</p>
            </div>

            {isDashboard && hasWin && (
              <div className="mb-6 space-y-3">
                <div
                  className="rounded-xl overflow-hidden flex justify-center py-2"
                  style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.25)' }}
                >
                  <img
                    src="/ico/edge-download-smartscreen-hint.png"
                    alt="Microsoft Edge 다운로드 창: ⋯ 메뉴에서 유지 선택"
                    className="h-auto w-auto max-w-[min(100%,320px)] max-h-[200px] object-contain"
                  />
                </div>
                <p className="text-center text-base leading-relaxed px-1 font-semibold text-gray-200">
                  직접 제작·배포한 <span className="text-white font-bold">안전한 파일</span>입니다. 위와 같이 안내가 뜨면,
                  다운로드 창
                  <br />
                  오른쪽 위 <span className="text-white font-bold">⋯</span>을 누른 뒤{' '}
                  <span className="text-white font-bold">유지</span>를 선택해 다운로드를 계속 진행해 주세요.
                </p>
              </div>
            )}

            <div className="space-y-3 mb-4">
              <button
                type="button"
                onClick={() => doDownload('windows')}
                disabled={isDashboard && !hasWin}
                className="w-full py-3.5 rounded-full font-bold text-base bg-pikachu text-[#0a0a14] hover:scale-105 hover:shadow-[0_0_32px_rgba(255,222,0,0.55)] transition-all disabled:opacity-45 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                🪟 Windows 버전 다운로드
              </button>
              <button
                type="button"
                onClick={() => doDownload('mac')}
                disabled={isDashboard && !hasMac}
                className="w-full py-3.5 rounded-full font-bold text-base text-white hover:scale-105 transition-all disabled:opacity-45 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)' }}
              >
                🍎 macOS 버전 다운로드
              </button>
            </div>

            {isDashboard && !hasMac && (
              <p className="text-center text-gray-400 text-sm mb-3">macOS용 파일은 준비중에 있습니다</p>
            )}

            <div
              className="p-3 rounded-xl text-sm text-gray-500 text-center"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              ⚠️ 파일 실행 시 백신 경고가 뜰 수 있습니다.
              <br />
              직접 제작한 앱이므로 안심하고 사용하셔도 됩니다.
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

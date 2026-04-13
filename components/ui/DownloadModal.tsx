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
            className="relative z-10 w-full max-w-md rounded-3xl p-10"
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
              <p className="text-center text-amber-200/90 text-sm mb-3">
                macOS용 파일을 <code className="text-xs opacity-90">public/</code>에{' '}
                <code className="text-xs opacity-90">Jook Board Setup x.y.z.dmg</code> 형식으로 넣으면 자동으로
                인식됩니다.
              </p>
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

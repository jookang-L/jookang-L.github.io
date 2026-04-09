'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useModal } from '@/app/providers'

export default function DownloadModal() {
  const { isOpen, close, currentApp } = useModal()

  function doDownload(os: 'windows' | 'mac') {
    const osName = os === 'windows' ? 'Windows' : 'macOS'
    /* TODO: 실제 다운로드 URL로 교체 */
    alert(`📦 ${currentApp} · ${osName} 버전\n\n현재 파일을 준비 중입니다.\n빠른 시일 내에 업로드하겠습니다! ⚡`)
    close()
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
          {/* 배경 오버레이 */}
          <div
            className="absolute inset-0 bg-black/65 backdrop-blur-sm"
            onClick={close}
          />

          {/* 모달 박스 */}
          <motion.div
            className="relative z-10 w-full max-w-md rounded-3xl p-10"
            style={{ background: '#111827', border: '1px solid rgba(255,222,0,0.3)' }}
            initial={{ scale: 0.88, opacity: 0, y: 20 }}
            animate={{ scale: 1,    opacity: 1, y: 0  }}
            exit={{   scale: 0.88, opacity: 0, y: 20 }}
            transition={{ duration: 0.28, ease: [0.34,1.56,0.64,1] }}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={close}
              className="absolute top-4 right-4 text-gray-500 hover:text-white text-2xl transition-colors"
            >&times;</button>

            {/* 헤더 */}
            <div className="text-center mb-7">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4"
                style={{ background: 'rgba(255,222,0,0.1)', border: '1px solid rgba(255,222,0,0.3)' }}
              >📦</div>
              <h3 className="text-white text-xl font-bold mb-1">{currentApp} 다운로드</h3>
              <p className="text-gray-400 text-sm">운영체제를 선택해주세요</p>
            </div>

            {/* 버튼들 */}
            <div className="space-y-3 mb-4">
              <button
                onClick={() => doDownload('windows')}
                className="w-full py-3.5 rounded-full font-bold text-sm bg-pikachu text-[#0a0a14] hover:scale-105 hover:shadow-[0_0_32px_rgba(255,222,0,0.55)] transition-all"
              >🪟 Windows 버전 다운로드</button>
              <button
                onClick={() => doDownload('mac')}
                className="w-full py-3.5 rounded-full font-bold text-sm text-white hover:scale-105 transition-all"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)' }}
              >🍎 macOS 버전 다운로드</button>
            </div>

            <div
              className="p-3 rounded-xl text-xs text-gray-500 text-center"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              ⚠️ 파일 실행 시 백신 경고가 뜰 수 있습니다.<br/>
              직접 제작한 앱이므로 안심하고 사용하셔도 됩니다.
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

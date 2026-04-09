'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Loader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1700)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="fixed inset-0 z-[9999] bg-[#0a0a14] flex flex-col items-center justify-center"
        >
          {/* 몬스터볼 — globals.css의 pb-spin으로 회전 */}
          <div className="pokeball mb-6" role="img" aria-label="로딩 중" />
          <p className="text-white/50 text-sm tracking-widest">Loading JooK&apos;s Playground...</p>
          <p className="mt-1.5 text-pikachu/70 text-xs">주크의 놀이터에 오신 것을 환영합니다 ⚡</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

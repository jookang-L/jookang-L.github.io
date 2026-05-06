'use client'

import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  open: boolean
  onClose: () => void
}

const DRAWER_LINKS = [
  { label: 'ABOUT',          links: [{ href: '#about-section', text: '🎮 주크의 놀이터 소개' }, { href: '#updates-section', text: '📢 업데이트 소식' }] },
  { label: '생활기록부',     links: [{ href: '#greninja-section', text: '📚 사용법 가이드' }, { href: '#greninja-section', text: '📊 데이터 분석 Q&A' }] },
  { label: '올인원 대시보드', links: [{ href: '#infernape-section', text: '⬇️ 설치 파일 다운로드' }, { href: '#contact-section', text: '🐛 버그 제보' }] },
  { label: 'Pandas',         links: [{ href: '#pandas-section', text: '🐼 PokéPandas 소개' }, { href: 'https://df-one-sigma.vercel.app/', text: '🚀 PokéPandas 열기' }] },
  { label: '판사시스템',     links: [{ href: '#aipom-section', text: '⚖️ 판사시스템 소개' }, { href: 'https://judge-chi.vercel.app/', text: '🚀 판사시스템 열기' }] },
  { label: 'CONTACT',        links: [{ href: '#contact-section', text: '💬 1:1 질문하기' }, { href: '#faq-section', text: '❓ FAQ' }] },
]

export default function MobileDrawer({ open, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  function smoothClose(href: string) {
    onClose()
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 350)
  }

  function handleDrawerLink(href: string) {
    if (href.startsWith('http://') || href.startsWith('https://')) {
      onClose()
      window.open(href, '_blank', 'noopener,noreferrer')
      return
    }
    smoothClose(href)
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* 오버레이 */}
          <motion.div
            key="overlay"
            className="fixed inset-0 bg-black/70 z-[890] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* 드로어 */}
          <motion.div
            key="drawer"
            className="fixed top-0 right-0 h-full z-[900] md:hidden overflow-y-auto"
            style={{
              width: 280,
              background: '#0f0f1e',
              borderLeft: '1px solid rgba(255,222,0,0.2)',
              paddingTop: 80,
            }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* 닫기 버튼 */}
            <button
              className="absolute top-5 right-5 text-gray-400 hover:text-white text-2xl transition-colors"
              onClick={onClose}
            >&times;</button>

            {/* 로고 */}
            <div className="px-6 mb-6">
              <span className="chalk-font text-pikachu text-base">JooK&apos;s Playground</span>
            </div>

            {/* 링크 목록 */}
            <div className="px-4 space-y-1">
              {DRAWER_LINKS.map((section) => (
                <div key={section.label}>
                  <div className="text-sm text-gray-500 px-2 mt-4 mb-1.5 font-bold tracking-widest">
                    {section.label}
                  </div>
                  {section.links.map((link) => (
                    <button
                      key={link.text}
                      className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/8 transition-colors text-base"
                      onClick={() => handleDrawerLink(link.href)}
                    >
                      {link.text}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

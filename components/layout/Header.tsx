'use client'

import { useEffect, useState } from 'react'
import MobileDrawer from './MobileDrawer'
import { LINK_MACHINE_LEARNING } from '@/constants/links'

const NAV_ITEMS = [
  {
    label: '⚡ ABOUT',
    links: [
      { href: '#about-section',   icon: '🎮', title: '주크의 놀이터 소개', desc: '이 사이트의 목적과 제작자 소개' },
      { href: '#updates-section', icon: '📢', title: '업데이트 소식',        desc: '최신 패치 및 변경 사항 확인' },
    ],
    cols: 2,
  },
  {
    label: '💧 생활기록부',
    links: [
      { href: '#greninja-section', icon: '📚', title: '생활기록부 분석 사용법', desc: '단계별 사용 가이드' },
      { href: '#greninja-section', icon: '📊', title: '데이터 분석 Q&A',      desc: '자주 묻는 분석 관련 질문' },
      { href: '#contact-section',  icon: '💡', title: '개선 제안',            desc: '기능 요청 및 피드백' },
    ],
    cols: 3,
  },
  {
    label: '🔥 올인원 대시보드',
    links: [
      { href: '#infernape-section', icon: '⬇️', title: '설치 파일 다운로드', desc: '최신 버전 다운로드' },
      { href: '#infernape-section', icon: '⚙️', title: '설정 공유',          desc: '추천 설정 파일 공유' },
      { href: '#contact-section',   icon: '🐛', title: '버그 제보',          desc: '오류 신고 및 개선 요청' },
    ],
    cols: 3,
  },
  {
    label: '🐼 Pandas',
    links: [
      { href: '#pandas-section', icon: '🐼', title: 'PokéPandas 소개', desc: 'Pandas 시각화 학습 · 섹션으로 이동' },
      { href: 'https://df-one-sigma.vercel.app/', icon: '🚀', title: '웹에서 바로 실행', desc: '새 탭에서 PokéPandas 열기' },
    ],
    cols: 2,
  },
  {
    label: '⚖️ 판사시스템',
    links: [
      { href: '#aipom-section', icon: '⚖️', title: '판사시스템 소개', desc: 'AI 법정 섹션으로 이동' },
      { href: 'https://judge-chi.vercel.app/', icon: '🚀', title: '웹에서 바로 실행', desc: '새 탭에서 AI 법정 열기' },
    ],
    cols: 2,
  },
  {
    label: '🦊 기계학습',
    links: [
      { href: '#eevee-section', icon: '🧠', title: '기계학습 실습 소개', desc: 'sklearn 실습 플랫폼 섹션으로 이동' },
      { href: LINK_MACHINE_LEARNING, icon: '🚀', title: '웹에서 바로 실행', desc: '새 탭에서 기계학습 실습 열기' },
    ],
    cols: 2,
  },
  {
    label: '🌟 CONTACT',
    links: [
      { href: '#contact-section', icon: '💬', title: '1:1 질문하기', desc: '직접 문의 및 질문 보내기' },
      { href: '#faq-section',     icon: '❓', title: 'FAQ',          desc: '자주 묻는 질문 모음' },
    ],
    cols: 2,
  },
]

export default function Header() {
  const [scrolled, setScrolled]         = useState(false)
  const [drawerOpen, setDrawerOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function smoothScroll(href: string) {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  function navigateMegaMenu(href: string) {
    if (href.startsWith('http://') || href.startsWith('https://')) {
      window.open(href, '_blank', 'noopener,noreferrer')
    } else {
      smoothScroll(href)
    }
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 h-16 z-[800] transition-shadow duration-300"
        style={{
          background: 'rgba(10,10,20,0.92)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255,222,0,0.15)',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-5 h-full flex items-center justify-between">

          {/* 로고 */}
          <a
            href="#"
            className="flex items-center gap-3"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold animate-pulse-glow"
              style={{ background: 'var(--pikachu)', color: '#0a0a14' }}
            >⚡</div>
            <div className="hidden md:block">
              <span className="chalk-font text-pikachu text-lg">JooK&apos;s Playground</span>
              <span
                className="ml-2 text-sm font-bold px-2 py-0.5 rounded-full"
                style={{ background: 'rgba(255,222,0,0.15)', color: 'var(--pikachu)' }}
              >주크의 놀이터</span>
            </div>
          </a>

          {/* 데스크탑 메뉴 */}
          <div className="hidden xl:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="nav-item relative">
                <button
                  className="flex items-center gap-1.5 px-3.5 py-2 text-white/85 hover:text-pikachu hover:bg-pikachu/8 text-base font-medium rounded-lg transition-all"
                  style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
                >
                  {item.label}
                </button>

                {/* 메가 드롭다운 */}
                <div className="mega-menu">
                  <div
                    className={`max-w-7xl mx-auto px-8 grid gap-3`}
                    style={{ gridTemplateColumns: `repeat(${item.cols}, 1fr)`, maxWidth: item.cols === 2 ? 600 : 800 }}
                  >
                    {item.links.map((link) => (
                      <a
                        key={link.title}
                        href={link.href}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/6 transition-colors text-white no-underline"
                        onClick={(e) => { e.preventDefault(); navigateMegaMenu(link.href) }}
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                          style={{ background: 'rgba(255,222,0,0.1)' }}
                        >{link.icon}</div>
                        <div>
                          <div className="font-bold text-base mb-0.5">{link.title}</div>
                          <div className="text-gray-400 text-sm">{link.desc}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 모바일 햄버거 */}
          <button
            className="xl:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setDrawerOpen(true)}
            aria-label="메뉴 열기"
          >
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
          </button>
        </div>
      </nav>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  )
}

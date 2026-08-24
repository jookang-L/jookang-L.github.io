'use client'

import { useEffect, useState } from 'react'
import MobileDrawer from './MobileDrawer'

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
    label: '💧 교사용',
    links: [
      { href: '#greninja-section',  icon: '📊', title: '생활기록부 분석', desc: '웹에서 바로 분석하는 생활기록부 분석 도우미' },
      { href: '#infernape-section', icon: '🔖', title: '가장 편한 메모앱', desc: '화면 오른쪽 가장자리에 붙는 책갈피형 메모' },
    ],
    cols: 2,
  },
  {
    label: '⚡ 학생용',
    links: [
      { href: '#eevee-section',    icon: '🧠', title: '기계학습 실습',  desc: 'sklearn으로 배우는 고등학생용 기계학습 실습 플랫폼' },
      { href: '#pandas-section',   icon: '🐼', title: 'pokepandas',   desc: '포켓몬 데이터로 배우는 Pandas 시각화 학습' },
      { href: '#electrode-section', icon: '🕹️', title: 'pygame',      desc: '고교 프로그래밍 수업용 Pygame 대시보드' },
      { href: '#aipom-section',    icon: '⚖️', title: '판사시스템',   desc: '학생 참여형 AI 법정 · 사건 정리와 판례 탐색' },
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

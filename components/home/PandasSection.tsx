'use client'

import PokemonImage from '@/components/ui/PokemonImage'
import { FadeIn } from '@/components/ui/FadeIn'
import { LINK_POKEPANDAS } from '@/constants/links'

const HIGHLIGHTS = [
  { icon: '🎬', title: '단계별 실행 시각화', desc: '코드 실행 과정을 애니메이션으로 눈으로 확인' },
  { icon: '📊', title: '포켓몬 샘플 데이터', desc: '실제 데이터에 가까운 샘플로 인덱싱·슬라이싱 연습' },
  { icon: '🔍', title: '에러 원인 시각화', desc: 'KeyError, IndexError 등 왜 터졌는지 직관적으로 이해' },
]

export default function PandasSection() {
  return (
    <section
      id="pandas-section"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          'linear-gradient(168deg, #06120d 0%, #0a1f17 32%, #0d2a1f 65%, #071510 100%)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(circle at 22% 28%, rgba(52, 140, 95, 0.28) 0%, transparent 46%), radial-gradient(circle at 78% 68%, rgba(28, 95, 68, 0.22) 0%, transparent 42%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <FadeIn className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full text-xs font-bold"
            style={{
              background: 'rgba(30, 95, 65, 0.35)',
              border: '1px solid rgba(65, 160, 115, 0.4)',
              color: '#a3e4c0',
            }}
          >
            🌿 나무킹의 인내로 성공하는
          </div>
          <h2 className="chalk-font text-white mb-3" style={{ fontSize: 'clamp(28px,5.5vw,52px)' }}>
            PokéPandas
          </h2>
          <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed text-green-100/80">
            포켓몬 데이터로 배우는 Pandas 인덱싱 &amp; 슬라이싱.
            <br className="hidden sm:block" />
            고등학생 컴퓨터과학 수업용 — 코드 실행을 단계별로 시각화합니다.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          {/* 생기부·대시보드와 동일 (기본 320px) */}
          <FadeIn direction="right" className="flex justify-center">
            <div className="relative p-4">
              <span
                className="animate-shuriken absolute -top-2 -right-2 text-2xl select-none z-[2]"
                style={{ color: 'rgba(120,220,160,0.9)' }}
                aria-hidden
              >
                🍃
              </span>
              <span
                className="animate-shuriken-r absolute top-8 -left-4 text-xl select-none z-[2]"
                style={{ color: 'rgba(100,200,150,0.75)' }}
                aria-hidden
              >
                🍃
              </span>
              <span
                className="animate-shuriken absolute -bottom-2 right-6 text-lg select-none z-[2]"
                style={{ color: 'rgba(90,190,140,0.65)' }}
                aria-hidden
              >
                🍃
              </span>
              <PokemonImage
                src="/ico/sceptile.png"
                alt="나무킹(스커틀) 캐릭터 — PokéPandas"
                type="sceptile"
                knockoutWhite
                sparkleBorder
              />
            </div>
          </FadeIn>

          <div className="space-y-4">
            {HIGHLIGHTS.map((h, i) => (
              <FadeIn key={h.title} direction="left" delay={i * 0.06}>
                <div
                  className="glass p-5"
                  style={{ borderColor: 'rgba(72, 150, 110, 0.22)' }}
                >
                  <div className="flex gap-4">
                    <span className="text-2xl">{h.icon}</span>
                    <div>
                      <h3 className="text-white font-bold text-base mb-1">{h.title}</h3>
                      <p className="text-sm leading-relaxed text-green-100/70">{h.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}

            <FadeIn direction="up" delay={0.25} className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={LINK_POKEPANDAS}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 rounded-full font-bold text-sm text-center text-[#f0fdf4] hover:scale-[1.02] transition-all shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #2f8f5f 0%, #1e6b47 45%, #124a30 100%)',
                  boxShadow: '0 8px 28px rgba(30, 95, 65, 0.45)',
                }}
              >
                🚀 PokéPandas 열기
              </a>
              <button
                type="button"
                onClick={() => document.getElementById('hub-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex-1 py-3.5 rounded-full font-bold text-sm text-green-50 border border-green-400/30 hover:bg-[#071510]/70 transition-all"
              >
                📦 허브에서 보기
              </button>
            </FadeIn>
            <p className="text-green-200/45 text-xs text-center">v1.0.0</p>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import PokemonImage from '@/components/ui/PokemonImage'
import { FadeIn } from '@/components/ui/FadeIn'
import { LINK_JUDGE } from '@/constants/links'

const HIGHLIGHTS = [
  {
    icon: '📋',
    title: '사건 유형 선택',
    desc: '형사·민사·학교생활·노동·인터넷·소비자 등 상황에 맞는 유형으로 시작할 수 있어요',
  },
  {
    icon: '🤖',
    title: 'AI 사건 정리',
    desc: '학생이 입력한 내용을 바탕으로 사건을 단계별로 정리하고 판례 탐색으로 이어집니다',
  },
  {
    icon: '📚',
    title: '교육용 참고',
    desc: '수업·토론용 참고 자료입니다. 실제 법률 문제는 반드시 전문가 상담이 필요합니다',
  },
]

export default function AipomSection() {
  return (
    <section
      id="aipom-section"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          'linear-gradient(152deg, #2a1d42 0%, #3d2a5c 38%, #4f3a72 62%, #2f2148 100%)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 18% 22%, rgba(245, 230, 196, 0.09) 0%, transparent 45%), radial-gradient(circle at 82% 78%, rgba(58, 143, 183, 0.12) 0%, transparent 42%), radial-gradient(circle at 50% 100%, rgba(165, 122, 196, 0.15) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <FadeIn className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full text-sm font-bold"
            style={{
              background: 'rgba(165, 122, 196, 0.22)',
              border: '1px solid rgba(200, 170, 235, 0.38)',
              color: '#f5ead9',
            }}
          >
            ⚖️ 에이팜과 함께하는
          </div>
          <h2 className="chalk-font mb-3" style={{ fontSize: 'clamp(28px,5.5vw,52px)', color: '#efe4ff' }}>
            판사시스템
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(245, 236, 255, 0.82)' }}>
            AI 법정 — 학생 입력으로 사건을 정리하고 판례를 탐색하는 교육용 웹 서비스입니다.
            <br className="hidden sm:block" />
            브라우저에서 바로 이용할 수 있습니다.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          <FadeIn direction="right" className="flex justify-center">
            <div className="relative p-4">
              <span
                className="animate-shuriken absolute -top-2 -right-2 text-2xl select-none z-[2]"
                style={{ color: 'rgba(200, 170, 240, 0.95)' }}
                aria-hidden
              >
                ✦
              </span>
              <span
                className="animate-shuriken-r absolute top-10 -left-5 text-xl select-none z-[2]"
                style={{ color: 'rgba(74, 143, 183, 0.85)' }}
                aria-hidden
              >
                ✦
              </span>
              <span
                className="animate-shuriken absolute -bottom-1 right-8 text-lg select-none z-[2]"
                style={{ color: 'rgba(245, 230, 196, 0.55)' }}
                aria-hidden
              >
                ✦
              </span>
              <PokemonImage
                src="/ico/aipom.png"
                alt="에이팜 캐릭터 — 판사시스템"
                type="aipom"
                sparkleBorder
              />
            </div>
          </FadeIn>

          <div className="space-y-4">
            {HIGHLIGHTS.map((h, i) => (
              <FadeIn key={h.title} direction="left" delay={i * 0.06}>
                <div
                  className="glass p-5"
                  style={{ borderColor: 'rgba(180, 140, 215, 0.28)' }}
                >
                  <div className="flex gap-4">
                    <span className="text-2xl">{h.icon}</span>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">{h.title}</h3>
                      <p className="text-base leading-relaxed" style={{ color: 'rgba(232, 220, 248, 0.78)' }}>
                        {h.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}

            <FadeIn direction="up" delay={0.22} className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={LINK_JUDGE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 rounded-full font-bold text-base text-center hover:scale-[1.02] transition-all shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #9d73c4 0%, #7d529f 42%, #5c3d78 100%)',
                  color: '#fffbf5',
                  boxShadow: '0 8px 28px rgba(120, 80, 160, 0.45)',
                }}
              >
                ⚖️ 판사시스템 열기
              </a>
              <button
                type="button"
                onClick={() => document.getElementById('hub-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex-1 py-3.5 rounded-full font-bold text-base border hover:bg-[#2a1d42]/70 transition-all"
                style={{
                  color: '#f0e8ff',
                  borderColor: 'rgba(200, 170, 235, 0.35)',
                }}
              >
                📦 허브에서 보기
              </button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

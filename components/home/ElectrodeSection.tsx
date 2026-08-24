'use client'

import PokemonImage from '@/components/ui/PokemonImage'
import { FadeIn } from '@/components/ui/FadeIn'
import { LINK_CODEARCADE } from '@/constants/links'

const HIGHLIGHTS = [
  {
    icon: '🔐',
    title: '학번으로 간편 로그인',
    desc: '별도 회원가입 없이 학번과 이름만 입력하면 로그인되고 세션이 유지돼요',
  },
  {
    icon: '📂',
    title: '주차별 수업 자료 다운로드',
    desc: 'PDF · PY · DOCX · IPYNB 형식의 수업 자료를 주차별로 바로 받아볼 수 있어요',
  },
  {
    icon: '🕹️',
    title: '과제 제출 & 게임 갤러리',
    desc: '마감 안에 과제를 제출하고, 내가 만든 Pygame 프로젝트를 전시할 수 있어요',
  },
]

export default function ElectrodeSection() {
  return (
    <section
      id="electrode-section"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          'linear-gradient(152deg, #1c2230 0%, #2f3a4a 38%, #5c4356 62%, #241823 100%)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 18% 22%, rgba(200, 210, 225, 0.1) 0%, transparent 45%), radial-gradient(circle at 82% 78%, rgba(180, 90, 115, 0.14) 0%, transparent 42%), radial-gradient(circle at 50% 100%, rgba(120, 60, 80, 0.16) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <FadeIn className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full text-sm font-bold"
            style={{
              background: 'rgba(170, 180, 200, 0.22)',
              border: '1px solid rgba(210, 215, 230, 0.4)',
              color: '#f5eef2',
            }}
          >
            ⚡ 찌리리공과 함께하는
          </div>
          <h2 className="chalk-font mb-3" style={{ fontSize: 'clamp(28px,5.5vw,52px)', color: '#f3eef5' }}>
            pygame
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(245, 238, 245, 0.82)' }}>
            Pygame으로 진행하는 프로그래밍 수업 전용 웹 서비스입니다.
            <br className="hidden sm:block" />
            직접 만든 Pygame을 전시하세요.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          <FadeIn direction="right" className="flex justify-center">
            <div className="relative p-4">
              <span
                className="animate-shuriken absolute -top-2 -right-2 text-2xl select-none z-[2]"
                style={{ color: 'rgba(210, 220, 235, 0.95)' }}
                aria-hidden
              >
                ✦
              </span>
              <span
                className="animate-shuriken-r absolute top-10 -left-5 text-xl select-none z-[2]"
                style={{ color: 'rgba(180, 90, 120, 0.85)' }}
                aria-hidden
              >
                ✧
              </span>
              <span
                className="animate-shuriken absolute -bottom-1 right-8 text-lg select-none z-[2]"
                style={{ color: 'rgba(245, 235, 240, 0.55)' }}
                aria-hidden
              >
                ★
              </span>
              <PokemonImage
                src="/ico/voltorb.png"
                alt="찌리리공 캐릭터 — pygame"
                type="electrode"
                sparkleBorder
                imgStyle={{ borderRadius: 12 }}
              />
            </div>
          </FadeIn>

          <div className="space-y-4">
            {HIGHLIGHTS.map((h, i) => (
              <FadeIn key={h.title} direction="left" delay={i * 0.06}>
                <div
                  className="glass p-5"
                  style={{ borderColor: 'rgba(190, 150, 170, 0.28)' }}
                >
                  <div className="flex gap-4">
                    <span className="text-2xl">{h.icon}</span>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">{h.title}</h3>
                      <p className="text-base leading-relaxed" style={{ color: 'rgba(235, 225, 232, 0.78)' }}>
                        {h.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}

            <FadeIn direction="up" delay={0.22} className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={LINK_CODEARCADE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 rounded-full font-bold text-base text-center hover:scale-[1.02] transition-all shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #b98098 0%, #8a4a63 42%, #5c2f42 100%)',
                  color: '#fdf6f8',
                  boxShadow: '0 8px 28px rgba(140, 70, 95, 0.45)',
                }}
              >
                🚀 pygame 열기
              </a>
              <button
                type="button"
                onClick={() => document.getElementById('hub-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex-1 py-3.5 rounded-full font-bold text-base border hover:bg-[#1c2230]/70 transition-all"
                style={{
                  color: '#f0e8ec',
                  borderColor: 'rgba(210, 215, 230, 0.35)',
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

'use client'

import PokemonImage from '@/components/ui/PokemonImage'
import { FadeIn } from '@/components/ui/FadeIn'
import { LINK_MACHINE_LEARNING } from '@/constants/links'

const HIGHLIGHTS = [
  {
    icon: '🧠',
    title: 'sklearn 실습 흐름',
    desc: '데이터 준비부터 모델 학습까지 기계학습의 기본 흐름을 웹에서 따라갈 수 있어요',
  },
  {
    icon: '🔑',
    title: 'Gemini API Key 연결',
    desc: 'API Key를 입력하면 바로 시작할 수 있고, 키는 브라우저 메모리에만 저장됩니다',
  },
  {
    icon: '📘',
    title: '고등학생 수업용 구성',
    desc: '복잡한 설치 없이 브라우저에서 기계학습 개념과 실습을 함께 진행합니다',
  },
]

export default function EeveeSection() {
  return (
    <section
      id="eevee-section"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          'linear-gradient(150deg, #24140d 0%, #3a2417 36%, #5b3920 64%, #2b1a10 100%)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.58]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 18% 22%, rgba(255, 222, 185, 0.12) 0%, transparent 44%), radial-gradient(circle at 82% 76%, rgba(199, 129, 62, 0.18) 0%, transparent 42%), radial-gradient(circle at 50% 100%, rgba(92, 52, 28, 0.26) 0%, transparent 54%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <FadeIn className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full text-sm font-bold"
            style={{
              background: 'rgba(190, 135, 72, 0.24)',
              border: '1px solid rgba(245, 200, 140, 0.38)',
              color: '#ffedd5',
            }}
          >
            🦊 이브이와 함께하는
          </div>
          <h2 className="chalk-font mb-3" style={{ fontSize: 'clamp(28px,5.5vw,52px)', color: '#fff7ed' }}>
            기계학습 실습 웹사이트
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255, 237, 213, 0.82)' }}>
            고등학생을 위한 sklearn 실습 플랫폼입니다.
            <br className="hidden sm:block" />
            Gemini API Key를 연결하고 브라우저에서 바로 기계학습을 실습하세요.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          <FadeIn direction="right" className="flex justify-center">
            <div className="relative p-4">
              <span
                className="animate-shuriken absolute -top-2 -right-2 text-2xl select-none z-[2]"
                style={{ color: 'rgba(255, 220, 175, 0.95)' }}
                aria-hidden
              >
                ✦
              </span>
              <span
                className="animate-shuriken-r absolute top-10 -left-5 text-xl select-none z-[2]"
                style={{ color: 'rgba(215, 161, 95, 0.85)' }}
                aria-hidden
              >
                ✧
              </span>
              <span
                className="animate-shuriken absolute -bottom-1 right-8 text-lg select-none z-[2]"
                style={{ color: 'rgba(255, 245, 220, 0.6)' }}
                aria-hidden
              >
                ★
              </span>
              <PokemonImage
                src="/ico/eevee.png"
                alt="이브이 캐릭터 — 기계학습 실습 웹사이트"
                type="eevee"
                sparkleBorder
              />
            </div>
          </FadeIn>

          <div className="space-y-4">
            {HIGHLIGHTS.map((h, i) => (
              <FadeIn key={h.title} direction="left" delay={i * 0.06}>
                <div
                  className="glass p-5"
                  style={{ borderColor: 'rgba(210, 155, 92, 0.28)' }}
                >
                  <div className="flex gap-4">
                    <span className="text-2xl">{h.icon}</span>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">{h.title}</h3>
                      <p className="text-base leading-relaxed" style={{ color: 'rgba(255, 237, 213, 0.78)' }}>
                        {h.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}

            <FadeIn direction="up" delay={0.22} className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={LINK_MACHINE_LEARNING}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 rounded-full font-bold text-base text-center hover:scale-[1.02] transition-all shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #d7a15f 0%, #9b6534 45%, #5b341d 100%)',
                  color: '#fff7ed',
                  boxShadow: '0 8px 28px rgba(140, 82, 40, 0.45)',
                }}
              >
                🚀 실습 웹사이트 열기
              </a>
              <button
                type="button"
                onClick={() => document.getElementById('hub-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex-1 py-3.5 rounded-full font-bold text-base border hover:bg-[#24140d]/70 transition-all"
                style={{
                  color: '#ffedd5',
                  borderColor: 'rgba(245, 200, 140, 0.35)',
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

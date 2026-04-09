'use client'

import PokemonImage from '@/components/ui/PokemonImage'
import { FadeIn } from '@/components/ui/FadeIn'
import { useGiboLink } from '@/components/guards/GiboLinkProvider'

const FEATURES = [
  { icon: '📄', title: 'PDF 분석 & 자동 정리',    desc: '업로드된 생기부 PDF를 AI가 자동으로 분석하고 핵심을 한눈에 정리해드려요' },
  { icon: '✏️', title: '맞춤형 초안 작성',          desc: '학생 데이터를 기반으로 개인별 맞춤 생기부 초안을 순식간에 생성' },
  { icon: '🔒', title: '완전한 개인정보 보호',     desc: '모든 데이터는 선생님의 기기에서만 처리 — 외부 서버 전송 없음' },
]

export default function GreninjaSection() {
  const { openGibo } = useGiboLink()

  return (
    <section
      id="greninja-section"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #002d6e 0%, #0044a0 45%, #1a60cc 100%)' }}
    >
      {/* 배경 오브 */}
      <div className="absolute" style={{ width:500, height:500, borderRadius:'50%', background:'rgba(0,150,255,0.08)', top:-150, right:-150, filter:'blur(60px)', pointerEvents:'none' }} />
      <div className="absolute" style={{ width:400, height:400, borderRadius:'50%', background:'rgba(0,80,200,0.1)',  bottom:-100, left:-100,  filter:'blur(60px)', pointerEvents:'none' }} />

      <div className="max-w-7xl mx-auto px-5 relative z-10">

        {/* 헤더 */}
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full" style={{ background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.15)' }}>
            <span>💧</span>
            <span className="text-white text-xs font-medium" style={{ letterSpacing:'0.06em' }}>개굴닌자와 함께하는</span>
          </div>
          <h2 className="chalk-font text-white mb-4" style={{ fontSize:'clamp(30px,6vw,60px)' }}>생기부 도우미 with JooK</h2>
          <p className="text-blue-200 text-base md:text-lg max-w-xl mx-auto">번거로운 생활기록부 작성, 스마트하게 해결하세요</p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* 개굴닌자 */}
          <FadeIn direction="right" className="flex justify-center">
            <div className="relative p-4">
              <span className="animate-shuriken   absolute -top-4 -right-4 text-3xl select-none" style={{ color:'rgba(100,180,255,0.85)' }}>✦</span>
              <span className="animate-shuriken-r absolute top-6 -left-6 text-2xl select-none"   style={{ color:'rgba(100,200,255,0.65)' }}>✦</span>
              <span className="animate-shuriken   absolute -bottom-4 right-2 text-xl select-none" style={{ color:'rgba(80,160,255,0.55)' }}>✦</span>
              <PokemonImage
                src="/ico/greninja.png"
                alt="개굴닌자 캐릭터 이미지 - 물수리검을 날리는 포즈"
                type="greninja"
                sparkleBorder
              />
            </div>
          </FadeIn>

          {/* 기능 카드 */}
          <div className="space-y-4">
            {FEATURES.map((f, i) => (
              <FadeIn key={f.title} direction="left" delay={i * 0.08}>
                <div className="glass p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background:'rgba(100,180,255,0.15)' }}>{f.icon}</div>
                    <div>
                      <h3 className="text-white font-bold text-base mb-1">{f.title}</h3>
                      <p className="text-blue-200 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}

            <FadeIn direction="up" delay={0.4} className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={() => void openGibo()}
                className="flex-1 py-3.5 rounded-full font-bold text-sm bg-white text-greninja hover:scale-105 hover:shadow-xl transition-all text-center"
              >🌐 웹사이트에서 사용하기</button>
              <a
                href="#faq-section"
                className="flex-1 py-3.5 rounded-full font-bold text-sm text-white text-center hover:scale-105 transition-all"
                style={{ background:'rgba(255,255,255,0.1)', border:'1px solid rgba(255,255,255,0.25)' }}
              >❓ FAQ 보기</a>
            </FadeIn>
            <p className="text-blue-300 text-xs text-center">v1.0.0</p>
          </div>
        </div>
      </div>
    </section>
  )
}

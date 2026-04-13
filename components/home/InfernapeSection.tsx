'use client'

import PokemonImage from '@/components/ui/PokemonImage'
import { FadeIn, ZoomIn } from '@/components/ui/FadeIn'
import { useModal } from '@/app/providers'
import {
  DASHBOARD_SETUP_VERSION,
  DASHBOARD_MAC_PUBLIC_PATH,
} from '@/constants/dashboard-download.generated'

const dashboardVer =
  (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_DASHBOARD_SETUP_VERSION) ||
  DASHBOARD_SETUP_VERSION

const FEATURE_GRID = [
  { icon: '📁', label: '파일함',   desc: '수업자료\n통합관리' },
  { icon: '📅', label: '캘린더',   desc: '일정&시간표\n자동연동' },
  { icon: '🍱', label: '급식 정보', desc: '나이스 연동\n실시간조회' },
]

const FEATURE_LIST = [
  '학사 일정 자동 연동 및 스마트 알림',
  '나이스(NEIS) API 급식 정보 실시간 조회',
  '수업 자료 원클릭 정리 및 공유',
  '교사 전용 위젯 커스터마이징',
  '다크 / 라이트 모드 지원',
]

export default function InfernapeSection() {
  const { open } = useModal()

  return (
    <>
      {/* 웨이브 디바이더 */}
      <div className="wave-divider" style={{ background: 'linear-gradient(135deg,#002d6e,#1a60cc)' }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height:60, width:'100%' }}>
          <path d="M0,30 C360,80 1080,-20 1440,30 L1440,60 L0,60 Z" fill="#8a1a00"/>
        </svg>
      </div>

      <section
        id="infernape-section"
        className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #8a1a00 0%, #cc3300 45%, #ff5500 100%)' }}
      >
        <div className="absolute" style={{ width:500, height:500, borderRadius:'50%', background:'rgba(255,180,0,0.12)', top:-200, left:-200, filter:'blur(80px)', pointerEvents:'none' }} />
        <div className="absolute" style={{ width:350, height:350, borderRadius:'50%', background:'rgba(255,80,0,0.15)',  bottom:-100, right:-100, filter:'blur(70px)', pointerEvents:'none' }} />

        <div className="max-w-7xl mx-auto px-5 relative z-10">

          {/* 헤더 */}
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full" style={{ background:'rgba(255,255,255,0.12)', border:'1px solid rgba(255,255,255,0.2)' }}>
              <span className="animate-flame">🔥</span>
              <span className="text-white text-sm font-medium" style={{ letterSpacing:'0.06em' }}>초염몽의 열정으로 만든</span>
            </div>
            <h2 className="chalk-font text-white mb-4" style={{ fontSize:'clamp(30px,6vw,60px)' }}>교사용 올인원 대시보드</h2>
            <p className="text-orange-100 text-lg md:text-xl max-w-xl mx-auto">파일함 · 캘린더 · 급식 정보 — 모든 것이 하나의 화면에</p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* 기능 설명 */}
            <div className="space-y-5 order-2 lg:order-1">

              <div className="grid grid-cols-3 gap-3">
                {FEATURE_GRID.map((f, i) => (
                  <ZoomIn key={f.label} delay={i * 0.07}>
                    <div className="glass p-4 text-center" style={{ borderColor:'rgba(255,220,0,0.2)' }}>
                      <div className="text-3xl mb-2 animate-flame">{f.icon}</div>
                      <h3 className="text-white font-bold text-sm">{f.label}</h3>
                      <p className="text-orange-200 text-sm mt-1 whitespace-pre-line">{f.desc}</p>
                    </div>
                  </ZoomIn>
                ))}
              </div>

              <FadeIn direction="up" delay={0.2}>
                <div className="glass p-6">
                  <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                    <span className="animate-flame">🔥</span> 핵심 기능
                  </h3>
                  <ul className="space-y-3">
                    {FEATURE_LIST.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-orange-100 text-base">
                        <span className="text-yellow-300 font-bold">✓</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.34}>
                <button
                  onClick={() => open('올인원 대시보드')}
                  className="w-full py-3.5 rounded-full font-bold text-base bg-pikachu text-[#0a0a14] hover:scale-105 hover:shadow-[0_0_32px_rgba(255,222,0,0.55)] transition-all"
                >⬇️ 최신 버전 다운로드</button>
                <p className="text-orange-200 text-sm text-center mt-2">
                  {dashboardVer ? `v${dashboardVer}` : '최신'} · Windows
                  {DASHBOARD_MAC_PUBLIC_PATH ? ' / macOS' : ''} · 무료
                </p>
              </FadeIn>
            </div>

            {/* 초염몽 */}
            <div className="flex justify-center order-1 lg:order-2">
              <FadeIn direction="left">
                <div className="relative p-4">
                  <span className="animate-flame absolute text-5xl" style={{ top:-52, left:'50%', transform:'translateX(-50%)', zIndex:2 }}>🔥</span>
                  <span className="animate-flame absolute text-3xl" style={{ top:-36, left:'26%', animationDelay:'0.15s', zIndex:2 }}>🔥</span>
                  <span className="animate-flame absolute text-3xl" style={{ top:-36, right:'26%', animationDelay:'0.3s', zIndex:2 }}>🔥</span>
                  <PokemonImage
                    src="/ico/infernape.png"
                    alt="초염몽 캐릭터 이미지 - 머리 위 불꽃이 타오르는 힘찬 포즈"
                    type="infernape"
                    sparkleBorder
                    imgStyle={{ borderRadius: 12 }}
                  />
                  {/* 라이브 프리뷰 카드 */}
                  <div
                    className="absolute -right-6 bottom-10 w-44 p-3 rounded-xl"
                    style={{ background:'rgba(15,15,28,0.92)', border:'1px solid rgba(255,222,0,0.3)', boxShadow:'0 8px 24px rgba(0,0,0,0.4)' }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="animate-updot w-2 h-2 rounded-full bg-green-500" />
                      <span style={{ color:'var(--pikachu)', fontSize:10, fontFamily:'"Courier New",monospace' }}>LIVE</span>
                    </div>
                    <div className="space-y-1.5">
                      {[85, 65, 92, 50].map((w, i) => (
                        <div key={i} className="h-1.5 rounded-full" style={{ background:`rgba(255,222,0,${0.2+i*0.1})`, width:`${w}%` }} />
                      ))}
                    </div>
                    <p style={{ color:'rgba(255,255,255,0.4)', fontSize:9, marginTop:8, fontFamily:'"Noto Sans KR",sans-serif' }}>대시보드 미리보기</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 웨이브 디바이더 */}
      <div className="wave-divider" style={{ background:'linear-gradient(135deg,#8a1a00,#ff5500)' }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height:60, width:'100%' }}>
          <path d="M0,20 C480,70 960,-10 1440,20 L1440,60 L0,60 Z" fill="#0a0a14"/>
        </svg>
      </div>
    </>
  )
}

import { FadeIn } from '@/components/ui/FadeIn'

const PROFILE_ITEMS = [
  { icon: '🎯', text: '목표: 선생님의 행정 부담 줄이기' },
  { icon: '🛠️', text: '스택: Cursor · Python' },
  { icon: '📦', text: '배포 방식: Website Links' },
  { icon: '💖', text: '모든 도구 완전 무료 제공' },
]

const BADGES = [
  { style: { background:'rgba(255,222,0,0.1)', color:'var(--pikachu)' }, text: '⚡ 피카츄 — 아이디어' },
  { style: { background:'rgba(0,86,191,0.15)',  color:'#60a5fa'        }, text: '💧 개굴닌자 — 분석' },
  { style: { background:'rgba(255,69,0,0.15)',  color:'#fb923c'        }, text: '🔥 초염몽 — 열정' },
  { style: { background:'rgba(30,95,65,0.35)',  color:'#a3e4c0'        }, text: '🍃 나무킹 — 끈기' },
]

export default function About() {
  return (
    <section id="about-section" className="py-24" style={{ background: '#0a0a14' }}>
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* 소개 텍스트 */}
          <FadeIn direction="right">
            <div
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold mb-4"
              style={{ background:'rgba(255,222,0,0.12)', color:'var(--pikachu)' }}
            >⚡ ABOUT</div>
            <h2
              className="chalk-font text-white mb-5"
              style={{ fontSize:'clamp(28px,5vw,50px)' }}
            >
              주크(JooK)의<br />놀이터를 소개합니다
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              안녕하세요! 저는 현직 교사이자 독학 개발자{' '}
              <strong style={{ color:'var(--pikachu)' }}>주강(JooK)</strong>입니다.<br />
              매일 반복되는 생활기록부 작성과 업무 관리에 지쳐, 직접 만들기 시작했습니다.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              이 놀이터는 제가 만든 웹앱들을 동료 선생님들과 자유롭게 나누는 공간입니다.
              <br />
              모든 도구는{' '}
              <span style={{ color:'var(--pikachu)' }}>완전 무료</span>이며, 개인정보를 수집하지 않습니다.
            </p>
            <div className="flex flex-wrap gap-3">
              {BADGES.map((b) => (
                <span
                  key={b.text}
                  className="text-xs font-bold px-3 py-1.5 rounded-full"
                  style={b.style}
                >{b.text}</span>
              ))}
            </div>
          </FadeIn>

          {/* 프로필 카드 */}
          <FadeIn direction="left">
            <div className="p-8 rounded-2xl" style={{ background:'#111827', border:'1px solid rgba(255,222,0,0.12)' }}>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                  style={{ background:'rgba(255,222,0,0.12)', border:'2px solid rgba(255,222,0,0.3)' }}
                >👨‍💻</div>
                <div>
                  <div className="text-white font-bold text-lg">주강 (JooK)</div>
                  <div className="text-gray-400 text-sm">현직 교사 · 독학 개발자</div>
                </div>
              </div>
              <div className="space-y-3">
                {PROFILE_ITEMS.map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-sm">
                    <span style={{ color:'var(--pikachu)' }}>{item.icon}</span>
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

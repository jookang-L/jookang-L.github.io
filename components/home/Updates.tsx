import { FadeIn } from '@/components/ui/FadeIn'

const UPDATES = [
  {
    badge:    '최신',
    badgeStyle: { background:'rgba(255,222,0,0.18)', color:'var(--pikachu)' },
    borderColor: 'rgba(255,222,0,0.2)',
    date:    '2026.03',
    title:   '생활기록부 분석 v1.0 출시',
    desc:    '웹에서 자율·진로·동아리·봉사·교과세특 등 카테고리별 생기부 내용 분석을 바로 이용해 보세요.',
    dotColor: '#22c55e',
    dotLabel: '배포 중',
    dotLabelColor: 'text-green-400',
  },
  {
    badge:    '업데이트',
    badgeStyle: { background:'rgba(255,69,0,0.18)', color:'#fb923c' },
    borderColor: 'rgba(255,69,0,0.3)',
    date:    '2026.06',
    title:   'Bookmark v0.2.4 출시',
    desc:    '화면 오른쪽 가장자리 책갈피형 메모 앱 Bookmark를 GitHub Releases에서 설치할 수 있습니다.',
    dotColor: '#fb923c',
    dotLabel: '배포 완료',
    dotLabelColor: 'text-orange-400',
  },
  {
    badge:    '패치',
    badgeStyle: { background:'rgba(0,86,191,0.2)', color:'#60a5fa' },
    borderColor: 'rgba(0,86,191,0.3)',
    date:    '2025.01',
    title:   '모바일 반응형 전면 개선',
    desc:    '스마트폰에서도 편리하게 사용할 수 있도록 UI를 전면 개선했습니다.',
    dotColor: '#fb923c',
    dotLabel: '패치 완료',
    dotLabelColor: 'text-orange-400',
  },
]

export default function Updates() {
  return (
    <section id="updates-section" className="pb-24" style={{ background: '#0a0a14' }}>
      <div className="max-w-7xl mx-auto px-5">

        <FadeIn className="text-center mb-12">
          <h2 className="chalk-font text-white" style={{ fontSize:'clamp(26px,5vw,48px)' }}>
            <span style={{ color:'var(--pikachu)' }}>📢</span> 업데이트 소식
          </h2>
          <p className="text-gray-500 mt-2 text-base">주크의 놀이터에서 만들어가는 새로운 이야기들</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {UPDATES.map((u, i) => (
            <FadeIn key={u.title} direction="up" delay={i * 0.08}>
              <div
                className="p-6 rounded-2xl h-full"
                style={{ background:'#111827', border:`1px solid ${u.borderColor}` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full sm:text-sm" style={u.badgeStyle}>{u.badge}</span>
                  <span className="text-gray-500 text-sm">{u.date}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{u.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed">{u.desc}</p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="animate-updot w-2 h-2 rounded-full" style={{ background: u.dotColor }} />
                  <span className={`${u.dotLabelColor} text-sm`}>{u.dotLabel}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

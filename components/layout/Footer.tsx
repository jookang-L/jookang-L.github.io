const FOOTER_LINKS = [
  {
    title: 'ABOUT',
    links: [
      { label: '소개',      href: '#about-section' },
      { label: '업데이트', href: '#updates-section' },
    ],
  },
  {
    title: '도구',
    links: [
      { label: '생활기록부 분석', href: '#greninja-section' },
      { label: 'PokéPandas',      href: '#pandas-section' },
      { label: '올인원 대시보드', href: '#infernape-section' },
    ],
  },
  {
    title: '지원',
    links: [
      { label: '1:1 문의', href: '#contact-section' },
      { label: 'FAQ',      href: '#faq-section' },
    ],
  },
]

export default function Footer() {
  return (
    <footer
      className="py-14"
      style={{ background: '#04040c', borderTop: '1px solid rgba(255,222,0,0.1)' }}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* 로고 & 설명 */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                style={{ background: 'var(--pikachu)', color: '#0a0a14' }}
              >⚡</div>
              <span className="chalk-font text-white text-lg">주크(JooK)의 놀이터</span>
            </div>
            <p className="text-white text-base">교사를 위한 무료 디지털 도구 모음</p>
            <p className="text-white text-sm mt-1">Made with ❤️ by 주강(JooK)</p>
          </div>

          {/* 메뉴 링크 */}
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {FOOTER_LINKS.map((section) => (
              <div key={section.title}>
                <div className="text-xs text-white mb-2 font-bold tracking-wider">{section.title}</div>
                <div className="space-y-1">
                  {section.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block text-white hover:text-white/80 text-xs transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 하단 바 */}
        <div
          className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-white text-sm">© 2026 JooK&apos;s Playground. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-white hover:text-white/80 text-sm transition-colors">이용약관</a>
            <a href="#" className="text-white hover:text-white/80 text-sm transition-colors">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

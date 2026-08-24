import { LINK_BOOKMARK, LINK_POKEPANDAS, LINK_MACHINE_LEARNING } from '@/constants/links'

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
      { label: 'PokéPandas',      href: LINK_POKEPANDAS },
      { label: '가장 편한 메모앱', href: LINK_BOOKMARK },
      { label: '판사시스템',      href: '#aipom-section' },
      { label: '기계학습 실습',   href: LINK_MACHINE_LEARNING },
      { label: 'pygame',          href: '#electrode-section' },
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

const CONTACT_EMAIL = 'wnrkd1@g.cnees.kr'

export default function Footer() {
  return (
    <footer
      className="py-10"
      style={{ background: '#04040c', borderTop: '1px solid rgba(255,222,0,0.1)' }}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">

          <div className="flex-1 min-w-0 max-w-3xl text-left">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0"
                style={{ background: 'var(--pikachu)', color: '#0a0a14' }}
              >⚡</div>
              <span className="chalk-font text-white text-lg">주크(JooK)의 놀이터</span>
            </div>

            <div className="space-y-3 text-sm leading-relaxed text-gray-400">
              <p className="text-gray-300">
                본 페이지는 교육 목적으로 제작된 비영리 비공식 페이지입니다.
                <br />
                포켓몬 관련 이미지와 상표의 권리는 각 권리자에게 있습니다.
                <br />
                권리 침해 우려가 있는 콘텐츠는 요청 시 수정 또는 삭제하겠습니다.
              </p>
              <p>
                This is a non-commercial, unofficial webpage created for educational purposes.
                All Pokémon-related images, names, trademarks, and other materials belong to
                their respective rights holders. This website is not affiliated with or
                endorsed by the official Pokémon brand. Please contact us if any content
                needs to be removed or revised.
              </p>
              <p>
                문의:{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-pikachu hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-4 shrink-0 lg:pt-1">
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

        <div
          className="mt-8 pt-6 w-full flex justify-center"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-gray-500 text-sm text-center">
            © 2026 JooK&apos;s Playground. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

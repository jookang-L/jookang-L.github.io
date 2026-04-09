import { PROJECTS } from '@/constants/projects'
import ProjectCard from './ProjectCard'
import { FadeIn } from '@/components/ui/FadeIn'

export default function ProjectHub() {
  return (
    <section
      id="hub-section"
      className="py-20"
      style={{ background: 'linear-gradient(180deg, #0a0a14 0%, #0d0d1c 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-5">

        {/* 헤더 */}
        <FadeIn className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-4"
            style={{ background:'rgba(255,222,0,0.1)', border:'1px solid rgba(255,222,0,0.25)', color:'var(--pikachu)' }}
          >⚡ PROJECTS HUB</div>
          <h2
            className="chalk-font text-white mb-3"
            style={{ fontSize:'clamp(26px,5vw,50px)' }}
          >주크의 도구 모음</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            새로운 도구가 추가될 때마다 여기에 자동으로 등록됩니다
          </p>
        </FadeIn>

        {/* 카드 그리드
            ─ constants/projects.ts 에 항목을 추가하면 자동으로 카드가 생성됩니다 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* 더 추가될 예정 안내 */}
        <FadeIn direction="up" delay={0.3} className="mt-10 text-center">
          <p className="text-gray-600 text-sm">
            🛠️ 더 많은 도구가 준비 중입니다 — 업데이트 소식을 기대해주세요!
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

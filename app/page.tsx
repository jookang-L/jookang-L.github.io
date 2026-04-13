import Header        from '@/components/layout/Header'
import Footer        from '@/components/layout/Footer'
import Loader        from '@/components/ui/Loader'
import DownloadModal from '@/components/ui/DownloadModal'
import Hero          from '@/components/home/Hero'
import GreninjaSection   from '@/components/home/GreninjaSection'
import InfernapeSection  from '@/components/home/InfernapeSection'
import PandasSection     from '@/components/home/PandasSection'
import ProjectHub    from '@/components/cards/ProjectHub'
import About         from '@/components/home/About'
import Updates       from '@/components/home/Updates'
import Contact       from '@/components/home/Contact'

export default function Page() {
  return (
    <>
      {/* 몬스터볼 로더 */}
      <Loader />

      {/* 다운로드 모달 */}
      <DownloadModal />

      {/* 상단 네비게이션 */}
      <Header />

      <main>
        {/* S1 : Hero — 피카츄의 전기에너지 */}
        <Hero />

        {/* S2 : 프로젝트 허브 카드 */}
        <ProjectHub />

        {/* S3 : 생활기록부 분석 — 개굴닌자 */}
        <GreninjaSection />

        {/* S4 : 올인원 대시보드 — 초염몽 */}
        <InfernapeSection />

        {/* S5 : PokéPandas — 나무킹 테마 */}
        <PandasSection />

        {/* S6 : ABOUT & 업데이트 */}
        <About />
        <Updates />

        {/* S7 : Contact & FAQ */}
        <Contact />
      </main>

      <Footer />
    </>
  )
}

import Header        from '@/components/layout/Header'
import Footer        from '@/components/layout/Footer'
import Loader        from '@/components/ui/Loader'
import DownloadModal from '@/components/ui/DownloadModal'
import Hero          from '@/components/home/Hero'
import GreninjaSection   from '@/components/home/GreninjaSection'
import InfernapeSection  from '@/components/home/InfernapeSection'
import PandasSection     from '@/components/home/PandasSection'
import AipomSection      from '@/components/home/AipomSection'
import EeveeSection      from '@/components/home/EeveeSection'
import ElectrodeSection  from '@/components/home/ElectrodeSection'
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

        {/* S4 : Bookmark 메모앱 — 초염몽 */}
        <InfernapeSection />

        {/* S5 : PokéPandas — 나무킹 테마 */}
        <PandasSection />

        {/* S6 : 판사시스템 — 에이팜 테마 */}
        <AipomSection />

        {/* S7 : 기계학습 실습 웹사이트 — 이브이 테마 */}
        <EeveeSection />

        {/* S8 : 코드아케이드 — 일렉트로드 테마 */}
        <ElectrodeSection />

        {/* S9 : ABOUT & 업데이트 */}
        <About />
        <Updates />

        {/* S10 : Contact & FAQ */}
        <Contact />
      </main>

      <Footer />
    </>
  )
}

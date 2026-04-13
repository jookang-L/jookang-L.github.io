import { LINK_GIBO, LINK_POKEPANDAS } from '@/constants/links'
import { DASHBOARD_SETUP_VERSION } from '@/constants/dashboard-download.generated'

const dashboardVer =
  (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_DASHBOARD_SETUP_VERSION) ||
  DASHBOARD_SETUP_VERSION

export type PokemonType = 'pikachu' | 'greninja' | 'infernape' | 'pokepandas'
export type ProjectStatus = 'live' | 'beta' | 'soon'

export interface Project {
  id: string
  name: string
  description: string
  longDesc: string
  icon: string
  pokemon: PokemonType
  status: ProjectStatus
  badge: string
  /** 데스크톱 앱 등 파일 다운로드 (모달) — 웹 서비스는 비워 두고 externalUrl만 사용 */
  downloadUrl?: { windows?: string; mac?: string }
  /** 웹에서 바로 사용 — externalUrl이 있으면 카드에서 우선 적용 */
  externalUrl?: string
  tags: string[]
  isNew?: boolean
}

/* ════════════════════════════════════════
   허브에 추가할 프로젝트를 여기에 관리
════════════════════════════════════════ */
export const PROJECTS: Project[] = [
  {
    id: 'gibo-helper',
    name: '생활기록부 분석',
    description: '웹에서 바로 분석하는 생활기록부 분석 도우미',
    longDesc:
      '자율, 진로, 동아리, 봉사, 교과세특 카테고리별 생기부 내용 분석을 돕는 웹 서비스입니다. 별도 설치 없이 브라우저에서 이용하세요.',
    icon: '📚',
    pokemon: 'greninja',
    status: 'live',
    badge: 'Web',
    isNew: true,
    externalUrl: LINK_GIBO,
    tags: ['생기부', '웹', 'NEIS'],
  },
  {
    id: 'all-in-one-dashboard',
    name: '올인원 대시보드',
    description: '파일함 · 캘린더 · 급식 정보를 하나의 화면에',
    longDesc:
      '나이스(NEIS) API 연동 급식 정보, 학사 일정 캘린더, 수업 자료 파일함을 하나의 대시보드로 통합합니다.',
    icon: '📊',
    pokemon: 'infernape',
    status: 'live',
    badge: dashboardVer ? `v${dashboardVer}` : 'Desktop',
    downloadUrl: {
      windows: '',
      mac: '',
    },
    tags: ['대시보드', '캘린더', '급식'],
  },
  {
    id: 'pandas-simulator',
    name: 'PokéPandas',
    description: '포켓몬 데이터로 배우는 Pandas 시각화 학습',
    longDesc:
      'df로 인덱싱·슬라이싱을 단계별 애니메이션으로 확인하고, 미션 모드로 실력을 쌓을 수 있습니다. 설치 없이 브라우저에서 실행됩니다.',
    icon: '🐼',
    pokemon: 'pokepandas',
    status: 'live',
    badge: 'Web',
    externalUrl: LINK_POKEPANDAS,
    tags: ['Python', 'Pandas', '코딩 교육'],
  },
]

export const STATUS_LABEL: Record<ProjectStatus, string> = {
  live: '배포 중',
  beta: '베타',
  soon: '준비중',
}

export const STATUS_COLOR: Record<ProjectStatus, string> = {
  live: 'bg-green-500/20 text-green-400 border-green-500/30',
  beta: 'bg-blue-500/20   text-blue-400  border-blue-500/30',
  soon: 'bg-gray-500/20   text-gray-400  border-gray-500/30',
}

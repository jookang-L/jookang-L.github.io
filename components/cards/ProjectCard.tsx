'use client'

import { motion } from 'framer-motion'
import { Project, STATUS_LABEL, STATUS_COLOR } from '@/constants/projects'
import { useModal } from '@/app/providers'
import { useGiboLink } from '@/components/guards/GiboLinkProvider'
import clsx from 'clsx'

type Theme = {
  glow: string
  border: string
  /** 카드 상단 라인용 단색 (btn이 gradient일 때 사용) */
  accent: string
  btn: string
  btnText: string
  iconBg: string
  tagBg: string
  tagColor: string
}

const THEME: Record<string, Theme> = {
  pikachu: {
    glow:     'rgba(255,222,0,0.2)',
    border:   'rgba(255,222,0,0.3)',
    accent:   'var(--pikachu)',
    btn:      'var(--pikachu)',
    btnText:  '#0a0a14',
    iconBg:   'rgba(255,222,0,0.1)',
    tagBg:    'rgba(255,222,0,0.08)',
    tagColor: '#fde68a',
  },
  greninja: {
    glow:     'rgba(0,86,191,0.25)',
    border:   'rgba(0,120,255,0.3)',
    accent:   '#60a5fa',
    btn:      '#60a5fa',
    btnText:  '#0a1a2e',
    iconBg:   'rgba(0,120,255,0.12)',
    tagBg:    'rgba(0,120,255,0.08)',
    tagColor: '#93c5fd',
  },
  /* 올인원 대시보드 — 네비 🔥 초염몽(주황·불꽃) */
  infernape: {
    glow:     'rgba(255,85,30,0.38)',
    border:   'rgba(255,110,45,0.5)',
    accent:   '#ff6b35',
    btn:      'linear-gradient(135deg, #ff6b35 0%, #ff4500 50%, #e63900 100%)',
    btnText:  '#fff8f5',
    iconBg:   'rgba(255,95,40,0.2)',
    tagBg:    'rgba(255,120,60,0.14)',
    tagColor: '#fed7aa',
  },
  /* PokéPandas — PandasSection.tsx와 동일 계열(진한 숲 녹색) */
  pokepandas: {
    glow:     'rgba(52, 140, 95, 0.38)',
    border:   'rgba(65, 160, 115, 0.45)',
    accent:   '#4a9f72',
    btn:      'linear-gradient(135deg, #2f8f5f 0%, #1e6b47 45%, #124a30 100%)',
    btnText:  '#f0fdf4',
    iconBg:   'rgba(30, 95, 65, 0.38)',
    tagBg:    'rgba(52, 140, 95, 0.2)',
    tagColor: '#a3e4c0',
  },
  /* 판사시스템 — 에이팜(라벤더 퍼플 · 크림 악센트) */
  aipom: {
    glow:     'rgba(165, 122, 196, 0.42)',
    border:   'rgba(180, 140, 215, 0.48)',
    accent:   '#b894d9',
    btn:      'linear-gradient(135deg, #9d73c4 0%, #7d529f 42%, #5c3d78 100%)',
    btnText:  '#fffbf5',
    iconBg:   'rgba(140, 100, 180, 0.28)',
    tagBg:    'rgba(165, 122, 196, 0.18)',
    tagColor: '#e8d4f5',
  },
}

interface Props {
  project: Project
  index:   number
}

export default function ProjectCard({ project, index }: Props) {
  const { open } = useModal()
  const { openGibo } = useGiboLink()
  const t = THEME[project.pokemon]

  const hasLink = project.status === 'live' || project.status === 'beta'

  function handleAction() {
    if (!hasLink) return
    if (project.externalUrl) {
      if (project.id === 'gibo-helper') {
        void openGibo()
        return
      }
      window.open(project.externalUrl, '_blank', 'noopener,noreferrer')
      return
    }
    if (project.downloadUrl) {
      open(project.name)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: index * 0.1 }}
      whileHover={{ y: -8, boxShadow: `0 24px 60px ${t.glow}` }}
      className="relative flex flex-col rounded-3xl overflow-hidden cursor-pointer"
      style={{
        background: '#111827',
        border: `1px solid ${t.border}`,
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {/* 상단 그라디언트 바 */}
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
        style={{ background: `linear-gradient(90deg, transparent, ${t.accent}, transparent)` }}
      />

      {/* 헤더 */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
            style={{ background: t.iconBg }}
          >{project.icon}</div>
          <div className="flex flex-col items-end gap-1.5">
            <span
              className={clsx('text-xs font-bold px-2.5 py-1 rounded-full border', STATUS_COLOR[project.status])}
            >{STATUS_LABEL[project.status]}</span>

            <span className="text-xs text-gray-600">{project.badge}</span>
          </div>
        </div>

        <h3 className="text-white font-bold text-lg mb-2">{project.name}</h3>
        <p className="text-gray-400 text-base leading-relaxed">{project.description}</p>
      </div>

      {/* 본문 */}
      <div className="px-6 pb-4 flex-1">
        <p className="text-gray-500 text-xs leading-relaxed mb-4">{project.longDesc}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{ background: t.tagBg, color: t.tagColor }}
            >{tag}</span>
          ))}
        </div>
      </div>

      {/* 푸터 버튼 */}
      <div className="px-6 pb-6 mt-auto">
        <button
          onClick={handleAction}
          disabled={!hasLink}
          className={clsx(
            'w-full py-3 rounded-full font-bold text-base transition-all',
            hasLink ? 'hover:scale-105 hover:shadow-lg' : 'opacity-50 cursor-not-allowed'
          )}
          style={{
            background: hasLink ? t.btn : 'rgba(255,255,255,0.06)',
            color: hasLink ? t.btnText : 'rgba(255,255,255,0.3)',
          }}
        >
          {project.status === 'soon'
            ? '🔜 준비중'
            : project.externalUrl
            ? '🔗 웹사이트 열기'
            : project.downloadUrl
            ? '⬇️ 다운로드'
            : '🔗 바로가기'}
        </button>
      </div>
    </motion.div>
  )
}

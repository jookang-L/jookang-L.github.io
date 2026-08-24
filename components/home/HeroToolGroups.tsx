'use client'

import { useEffect, useRef, useState } from 'react'
import {
  LINK_BOOKMARK,
  LINK_POKEPANDAS,
  LINK_JUDGE,
  LINK_MACHINE_LEARNING,
  LINK_CODEARCADE,
} from '@/constants/links'

const BTN =
  'inline-flex shrink-0 items-center justify-center px-4 py-2.5 rounded-full font-bold text-xs sm:text-sm md:text-base transition-all whitespace-nowrap no-underline'

/** "학생을 위한" 줄에서 스크롤 없이 바로 보일 버튼 개수 — 나머지는 가로 스크롤해야 나옴 */
const STUDENT_VISIBLE_COUNT = 3

interface Props {
  openGibo: () => void | Promise<void>
}

export default function HeroToolGroups({ openGibo }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [visibleWidth, setVisibleWidth] = useState<number | undefined>(undefined)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const mq = window.matchMedia('(min-width: 640px)')

    function measure() {
      if (!el || !mq.matches) {
        setVisibleWidth(undefined)
        return
      }
      const items = Array.from(el.children) as HTMLElement[]
      const lastVisible = items[STUDENT_VISIBLE_COUNT - 1]
      if (!lastVisible) return
      const elRect = el.getBoundingClientRect()
      const lastRect = lastVisible.getBoundingClientRect()
      // 버튼 사이 gap의 절반만 여백으로 더해서, 다음(숨겨야 할) 버튼이 살짝이라도 비치지 않게 함
      const gapPx = parseFloat(getComputedStyle(el).columnGap) || 0
      setVisibleWidth(lastRect.right - elRect.left + gapPx / 2)
    }

    measure()
    // 폰트 스왑·줌 등으로 버튼 실제 크기가 바뀔 때마다 다시 측정 (고정 px로는 정확히 3개만 보이게 맞출 수 없음)
    const ro = new ResizeObserver(measure)
    Array.from(el.children).forEach((child) => ro.observe(child))
    window.addEventListener('resize', measure)
    mq.addEventListener('change', measure)

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
      mq.removeEventListener('change', measure)
    }
  }, [])

  return (
    <div
      className="relative z-30 w-full max-w-4xl mx-auto pointer-events-auto rounded-2xl overflow-hidden text-left"
      style={{
        background: 'rgba(0,0,0,0.32)',
        border: '1px solid rgba(255, 222, 0, 0.45)',
        boxShadow: '0 12px 40px rgba(0,0,0,0.25), 0 0 24px rgba(255, 222, 0, 0.12)',
      }}
    >
      <div
        className="grid grid-cols-2 text-center text-sm md:text-base font-bold tracking-wide"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
      >
        <div className="py-3 text-white/85" style={{ borderRight: '1px solid rgba(255,255,255,0.1)' }}>
          💧 교사를 위한
        </div>
        <div className="py-3 text-white/85">⚡ 학생을 위한</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:items-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
        <div className="flex flex-nowrap items-center justify-center gap-2 sm:gap-2.5 px-3 py-4 sm:px-4 sm:py-5 min-h-[52px]">
          <button
            type="button"
            onClick={() => void openGibo()}
            className={`${BTN} bg-greninja text-white hover:scale-105 hover:shadow-[0_0_28px_rgba(0,140,255,0.5)]`}
          >
            📊 생활기록부 분석
          </button>
          <a
            href={LINK_BOOKMARK}
            target="_blank"
            rel="noopener noreferrer"
            className={`${BTN} bg-infernape text-white hover:scale-105 hover:shadow-[0_0_28px_rgba(255,100,40,0.55)]`}
          >
            🔥 가장 편한 메모앱
          </a>
        </div>

        <div
          ref={scrollRef}
          className="tool-scroll flex flex-nowrap items-center justify-start gap-2 sm:gap-2.5 px-3 py-4 sm:px-4 sm:py-5 min-h-[52px] sm:mx-auto overflow-x-auto"
          style={visibleWidth ? { maxWidth: visibleWidth } : undefined}
        >
          <a
            href={LINK_MACHINE_LEARNING}
            target="_blank"
            rel="noopener noreferrer"
            className={`${BTN} hover:scale-105 hover:shadow-[0_0_24px_rgba(190,135,72,0.55)]`}
            style={{
              background: 'linear-gradient(135deg, #d7a15f 0%, #9b6534 48%, #5b341d 100%)',
              color: '#fff7ed',
            }}
          >
            🦊 기계학습 실습
          </a>
          <a
            href={LINK_POKEPANDAS}
            target="_blank"
            rel="noopener noreferrer"
            className={`${BTN} bg-[#2f8f5f] text-[#f0fdf4] hover:scale-105 hover:shadow-[0_0_24px_rgba(47,143,95,0.55)]`}
          >
            🐼 pokepandas
          </a>
          <a
            href={LINK_CODEARCADE}
            target="_blank"
            rel="noopener noreferrer"
            className={`${BTN} hover:scale-105 hover:shadow-[0_0_24px_rgba(180,90,120,0.55)]`}
            style={{
              background: 'linear-gradient(135deg, #b98098 0%, #8a4a63 48%, #5c2f42 100%)',
              color: '#fdf6f8',
            }}
          >
            🕹️ pygame
          </a>
          <a
            href={LINK_JUDGE}
            target="_blank"
            rel="noopener noreferrer"
            className={`${BTN} hover:scale-105 hover:shadow-[0_0_24px_rgba(165,122,196,0.55)]`}
            style={{
              background: 'linear-gradient(135deg, #9d73c4 0%, #7d529f 48%, #6b4588 100%)',
              color: '#fffbf5',
            }}
          >
            ⚖️ 판사시스템
          </a>
        </div>
      </div>
    </div>
  )
}

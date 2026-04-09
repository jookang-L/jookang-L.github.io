'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import PokemonImage from '@/components/ui/PokemonImage'
import { LINK_POKEPANDAS } from '@/constants/links'
import { useGiboLink } from '@/components/guards/GiboLinkProvider'

const CODE_LINES = `import pandas as pd
import numpy as np
from ai_model import StudentAnalyzer

class SchoolDashboard:
    def __init__(self, school_code):
        self.meal_api  = MealAPI(school_code)
        self.calendar  = SchoolCalendar()
        self.analyzer  = StudentAnalyzer()

    def get_today_meal(self):
        return self.meal_api.fetch(date="today")

# 생기부 도우미
def analyze_student_record(pdf_path):
    data    = extract_text(pdf_path)
    summary = ai_summarize(data)
    draft   = ai_generate_draft(summary)
    return draft

# 교사용 대시보드 v1.0.0
if __name__ == '__main__':
    board = SchoolDashboard("B100000000")
    board.run()  # 🔥 열정을 코드로`

function smoothScroll(href: string) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function openExternal(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer')
}

export default function Hero() {
  const { openGibo } = useGiboLink()
  const heroRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  /* 칠판 → IDE 전환 */
  const chalkOp = useTransform(scrollYProgress, [0, 0.45], [1, 0])
  const ideOp   = useTransform(scrollYProgress, [0, 0.45], [0, 1])
  const sparksOp = useTransform(scrollYProgress, [0.05, 0.3], [0, 1])

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden"
      style={{ height: '100vh', minHeight: 620, paddingTop: 64 }}
    >
      {/* ── 칠판 배경 ── */}
      <motion.div
        id="chalk-layer"
        className="absolute inset-0"
        style={{ opacity: chalkOp }}
      />

      {/* ── IDE 배경 ── */}
      <motion.div
        className="absolute inset-0"
        style={{ background: 'var(--dark-ide)', opacity: ideOp }}
      >
        {/* IDE 탭 바 */}
        <div className="absolute top-3 left-4 flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div
          className="absolute top-8 left-16 flex"
          style={{ fontFamily: '"Courier New",monospace', fontSize: 12 }}
        >
          <div style={{ background: '#252540', color: 'var(--pikachu)', padding: '4px 14px', borderRadius: '6px 6px 0 0', borderTop: '1px solid rgba(255,222,0,0.3)' }}>
            main.py ×
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.4)', padding: '4px 14px', borderRadius: '6px 6px 0 0' }}>
            dashboard.js
          </div>
        </div>
        {/* 코드 레인 */}
        <div id="code-canvas">{CODE_LINES}</div>
      </motion.div>

      {/* ── 전기 파티클 ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: sparksOp }}
      >
        {[
          { top:'15%', left:'8%',   size:'text-4xl', delay:'0s'    },
          { top:'25%', left:'20%',  size:'text-2xl', delay:'0.08s' },
          { top:'10%', right:'25%', size:'text-3xl', delay:'0.15s' },
          { top:'40%', left:'5%',   size:'text-xl',  delay:'0.22s' },
          { top:'60%', right:'10%', size:'text-2xl', delay:'0.05s' },
          { bottom:'20%', left:'30%', size:'text-3xl', delay:'0.18s' },
        ].map((s, i) => (
          <span
            key={i}
            className={`absolute animate-spark ${s.size}`}
            style={{ ...s, animationDelay: s.delay } as React.CSSProperties}
          >⚡</span>
        ))}
      </motion.div>

      {/* ── 피카츄 이미지 ── */}
      <div className="absolute bottom-0 z-10" style={{ right: '4%', width: 'min(300px, 38vw)' }}>
        <PokemonImage
          src="/ico/pikachu.png"
          alt="피카츄 캐릭터 이미지 - 전기를 뿜는 전투 포즈"
          type="pikachu"
          priority
        />
      </div>

      {/* ── 히어로 텍스트 ── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-10">

        {/* 칠판 버전 */}
        <motion.div style={{ opacity: chalkOp }}>
          <p
            className="chalk-font text-white/60 text-base md:text-lg mb-3"
            style={{ letterSpacing: '0.25em' }}
          >✏️ 교사를 위한 디지털 도구</p>
          <h1
            className="chalk-font text-white/93 mb-5 leading-tight"
            style={{ fontSize: 'clamp(40px,9vw,96px)' }}
          >
            주크(JooK)의<br />놀이터
          </h1>
          <p className="text-white/75 text-base md:text-xl mb-10">
            선생님의 업무를 조금 더 가볍게 만들어드릴게요
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 max-w-xl mx-auto">
            <button
              type="button"
              onClick={() => void openGibo()}
              className="px-7 py-3.5 rounded-full font-bold text-base bg-pikachu text-[#0a0a14] hover:scale-105 hover:shadow-[0_0_32px_rgba(255,222,0,0.55)] transition-all"
            >📚 생기부 도우미 (웹)</button>
            <button
              type="button"
              onClick={() => openExternal(LINK_POKEPANDAS)}
              className="px-7 py-3.5 rounded-full font-bold text-base bg-pikachu/90 text-[#0a0a14] hover:scale-105 hover:shadow-[0_0_28px_rgba(255,222,0,0.45)] transition-all"
            >🐼 PokéPandas</button>
            <button
              type="button"
              onClick={() => smoothScroll('#infernape-section')}
              className="px-7 py-3.5 rounded-full font-bold text-base text-white hover:scale-105 transition-all"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)' }}
            >🔥 대시보드 다운로드</button>
          </div>
        </motion.div>

        {/* IDE 버전 */}
        <motion.div
          style={{
            opacity: ideOp,
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: '90%', maxWidth: 560,
            pointerEvents: 'none',
          }}
        >
          <div
            className="text-left rounded-xl p-6"
            style={{
              background: 'rgba(37,37,64,0.88)',
              border: '1px solid rgba(255,222,0,0.2)',
              fontFamily: '"Courier New",monospace',
            }}
          >
            <p style={{ color: '#6a9955', fontSize: 13 }}># 주크(JooK)의 놀이터 — 교사를 위한 도구</p>
            <p style={{ color: '#569cd6', marginTop: 4, fontSize: 14 }}>
              def <span style={{ color: '#dcdcaa' }}>welcome</span>(<span style={{ color: '#9cdcfe' }}>teacher</span>):
            </p>
            <p style={{ color: '#ce9178', marginLeft: 24, fontSize: 14 }}>&quot;선생님의 업무를 더 쉽고 가볍게&quot;</p>
            <p style={{ color: '#569cd6', marginLeft: 24, fontSize: 14 }}>return <span style={{ color: '#b5cea8' }}>True</span></p>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: 8, fontSize: 14 }}>
              &gt; <span style={{ color: 'var(--pikachu)' }}>welcome</span>
              (<span style={{ color: '#ce9178' }}>&quot;선생님&quot;</span>)
              <span className="animate-blink" style={{ color: 'var(--pikachu)', fontSize: 16 }}>█</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 mt-8 max-w-xl mx-auto" style={{ pointerEvents: 'auto' }}>
            <button
              type="button"
              onClick={() => void openGibo()}
              className="px-7 py-3.5 rounded-full font-bold text-base bg-pikachu text-[#0a0a14] hover:scale-105 hover:shadow-[0_0_32px_rgba(255,222,0,0.55)] transition-all"
            >📚 생기부 도우미 (웹)</button>
            <button
              type="button"
              onClick={() => openExternal(LINK_POKEPANDAS)}
              className="px-7 py-3.5 rounded-full font-bold text-base bg-pikachu/90 text-[#0a0a14] hover:scale-105 hover:shadow-[0_0_28px_rgba(255,222,0,0.45)] transition-all"
            >🐼 PokéPandas</button>
            <button
              type="button"
              onClick={() => smoothScroll('#infernape-section')}
              className="px-7 py-3.5 rounded-full font-bold text-base text-white hover:scale-105 transition-all"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)' }}
            >🔥 대시보드 다운로드</button>
          </div>
        </motion.div>
      </div>

      {/* ── 스크롤 힌트 ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-white/40 text-sm tracking-widest">스크롤을 내려보세요</span>
        <div className="animate-bounce-y text-white/40 text-lg">↓</div>
      </div>
    </section>
  )
}

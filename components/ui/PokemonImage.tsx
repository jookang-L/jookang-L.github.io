'use client'

import Image from 'next/image'
import { useRef, useEffect } from 'react'
import clsx from 'clsx'

type PokeType = 'pikachu' | 'greninja' | 'infernape' | 'sceptile'

interface Props {
  src:       string
  alt:       string
  type:      PokeType
  className?: string
  imgStyle?:  React.CSSProperties
  priority?: boolean
  /** 흰 배경 JPG/JFIF 등 — 배경색과 multiply 블렌드로 자연스럽게 제거 */
  knockoutWhite?: boolean
  /** 호버 시 테두리 반짝임 (생기부 섹션과 동일 계열) */
  sparkleBorder?: boolean
  /** 렌더 크기(px). 기본 320 — 섹션별로 키울 때 사용 */
  size?: number
}

/* 파티클 설정 */
const PARTICLE_CONFIGS = {
  electric: {
    emojis:   ['⚡', '✦', '✧', '★', '⚡'],
    cssClass: 'electric',
    interval: 80,
    upBias:   0.4,
    minDist: 55, maxDist: 125,
    minSize: 12, maxSize: 22,
  },
  water: {
    emojis:   ['💧', '🌊', '💦', '●', '○'],
    cssClass: 'water',
    interval: 105,
    upBias:   0.2,
    minDist: 45, maxDist: 115,
    minSize: 10, maxSize: 20,
  },
  fire: {
    emojis:   ['🔥', '✦', '🌟', '💥', '🔥'],
    cssClass: 'fire',
    interval: 70,
    upBias:   0.7,
    minDist: 55, maxDist: 135,
    minSize: 12, maxSize: 24,
  },
  grass: {
    emojis:   ['🍃', '🌿', '✦', '💚', '●'],
    cssClass: 'grass',
    interval: 95,
    upBias:   0.25,
    minDist: 48, maxDist: 118,
    minSize: 11, maxSize: 21,
  },
}

const TYPE_MAP: Record<PokeType, keyof typeof PARTICLE_CONFIGS> = {
  pikachu:   'electric',
  greninja:  'water',
  infernape: 'fire',
  sceptile:  'grass',
}

export default function PokemonImage({
  src,
  alt,
  type,
  className,
  imgStyle,
  priority,
  knockoutWhite,
  sparkleBorder,
  size = 320,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const timer   = useRef<ReturnType<typeof setInterval> | null>(null)
  const partKey = TYPE_MAP[type]
  const cfg     = PARTICLE_CONFIGS[partKey]

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return

    function spawn() {
      if (!wrap) return
      const p  = document.createElement('span')
      p.className = `poke-particle ${cfg.cssClass}`

      const w = wrap.offsetWidth, h = wrap.offsetHeight
      p.style.left = (w * 0.15 + Math.random() * w * 0.7) + 'px'
      p.style.top  = (h * 0.15 + Math.random() * h * 0.7) + 'px'

      const angle = Math.random() * Math.PI * 2
      const dist  = cfg.minDist + Math.random() * (cfg.maxDist - cfg.minDist)
      p.style.setProperty('--pdx', (Math.cos(angle) * dist).toFixed(1) + 'px')
      p.style.setProperty('--pdy', (Math.sin(angle) * dist - dist * cfg.upBias * 1.5).toFixed(1) + 'px')

      const size = cfg.minSize + Math.random() * (cfg.maxSize - cfg.minSize)
      p.style.fontSize = size.toFixed(1) + 'px'
      p.style.setProperty('--rot', (Math.random() > 0.5 ? '' : '-') + (90 + Math.random() * 180).toFixed(0) + 'deg')

      const dur = 0.7 + Math.random() * 0.4
      p.style.setProperty('--dur', dur.toFixed(2) + 's')
      p.textContent = cfg.emojis[Math.floor(Math.random() * cfg.emojis.length)]

      wrap.appendChild(p)
      setTimeout(() => p.remove(), dur * 1000 + 60)
    }

    function onEnter() {
      for (let i = 0; i < 3; i++) spawn()
      timer.current = setInterval(spawn, cfg.interval)
    }
    function onLeave() {
      if (timer.current) clearInterval(timer.current)
    }
    function onMove() { if (Math.random() < 0.25) spawn() }

    wrap.addEventListener('mouseenter', onEnter)
    wrap.addEventListener('mouseleave', onLeave)
    wrap.addEventListener('mousemove',  onMove)

    return () => {
      wrap.removeEventListener('mouseenter', onEnter)
      wrap.removeEventListener('mouseleave', onLeave)
      wrap.removeEventListener('mousemove',  onMove)
      if (timer.current) clearInterval(timer.current)
    }
  }, [cfg, partKey])

  /* 흰 배경 제거(blend)는 next/image의 span 래퍼 + img의 filter와 충돌하므로 네이티브 img 사용 */
  if (knockoutWhite) {
    return (
      <div
        ref={wrapRef}
        className={clsx(
          'pokemon-wrap',
          type,
          'animate-float',
          'pokemon-wrap--knockout',
          sparkleBorder && 'pokemon-sparkle',
          className,
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          width={size}
          height={size}
          className={clsx('pokemon-img', 'pokemon-img--knockout')}
          style={imgStyle}
          draggable={false}
        />
      </div>
    )
  }

  return (
    <div
      ref={wrapRef}
      className={clsx(
        'pokemon-wrap',
        type,
        'animate-float',
        sparkleBorder && 'pokemon-sparkle',
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="pokemon-img"
        style={imgStyle}
        priority={priority}
        unoptimized
      />
    </div>
  )
}

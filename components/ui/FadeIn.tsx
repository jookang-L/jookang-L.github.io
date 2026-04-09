'use client'

import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface FadeInProps {
  children: ReactNode
  delay?:   number
  duration?: number
  direction?: Direction
  className?: string
  once?: boolean
}

const variants: Record<Direction, Variants> = {
  up:    { hidden: { opacity: 0, y: 32 },  visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -32 }, visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: 48 },  visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -48 }, visible: { opacity: 1, x: 0 } },
  none:  { hidden: { opacity: 0 },         visible: { opacity: 1 } },
}

export function FadeIn({
  children,
  delay    = 0,
  duration = 0.75,
  direction = 'up',
  className,
  once = false,
}: FadeInProps) {
  return (
    <motion.div
      variants={variants[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      transition={{ duration, ease: [0.4, 0, 0.2, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* 줌인 변형 */
export function ZoomIn({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

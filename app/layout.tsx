import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ModalProvider } from './providers'
import { GiboLinkProvider } from '@/components/guards/GiboLinkProvider'

/** 교보 손글씨 2025 — 전역 본문/타이틀 폰트 */
const kyoboHandwriting = localFont({
  src: '../public/ico/KyoboHandwriting2025lyb.ttf',
  display: 'swap',
  variable: '--font-kyobo',
  fallback: ['system-ui', 'sans-serif'],
})

export const metadata: Metadata = {
  title: '주크(JooK)의 놀이터 — 교사를 위한 디지털 도구',
  description: '현직 교사 주강(JooK)이 만드는 교사용 웹앱 허브. 생활기록부 분석, 판사시스템, 가장 편한 메모앱 등 무료 제공.',
  icons: { icon: '/ico/pikachu.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={kyoboHandwriting.variable} suppressHydrationWarning>
      <body className="antialiased">
        <ModalProvider>
          <GiboLinkProvider>{children}</GiboLinkProvider>
        </ModalProvider>
      </body>
    </html>
  )
}

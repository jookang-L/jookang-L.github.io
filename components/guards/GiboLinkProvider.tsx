'use client'

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from 'react'
import { LINK_GIBO } from '@/constants/links'

type GiboCtx = {
  openGibo: () => Promise<void>
}

const GiboLinkContext = createContext<GiboCtx>({
  openGibo: async () => {},
})

export function useGiboLink() {
  return useContext(GiboLinkContext)
}

function openInNewTab() {
  window.open(LINK_GIBO, '_blank', 'noopener,noreferrer')
}

export function GiboLinkProvider({ children }: { children: ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const openGibo = useCallback(async () => {
    try {
      const res = await fetch('/api/verify-gibo')
      if (!res.ok) {
        setPassword('')
        setError('연결을 확인할 수 없습니다.')
        setModalOpen(true)
        return
      }
      const data = (await res.json()) as { gateEnabled?: boolean }
      if (!data.gateEnabled) {
        openInNewTab()
        return
      }
      setPassword('')
      setError(null)
      setModalOpen(true)
    } catch {
      setPassword('')
      setError('연결을 확인할 수 없습니다.')
      setModalOpen(true)
    }
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)
    try {
      const res = await fetch('/api/verify-gibo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const data = (await res.json()) as { ok?: boolean }
      if (res.ok && data.ok) {
        setModalOpen(false)
        setPassword('')
        openInNewTab()
        return
      }
      setError('암호가 올바르지 않습니다.')
    } catch {
      setError('전송에 실패했습니다.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <GiboLinkContext.Provider value={{ openGibo }}>
      {children}

      {modalOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ background: 'rgba(5,5,12,0.82)' }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="gibo-gate-title"
        >
          <div
            className="w-full max-w-md rounded-2xl p-6 shadow-2xl"
            style={{
              background: '#111827',
              border: '1px solid rgba(0,120,255,0.35)',
            }}
          >
            <h2 id="gibo-gate-title" className="text-white font-bold text-lg mb-1">
              생활기록부 분석
            </h2>
            <p className="text-gray-400 text-base mb-5">
              사이트로 이동하려면 암호를 입력하세요.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="gibo-password" className="sr-only">
                  암호
                </label>
                <input
                  id="gibo-password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="암호 입력"
                  className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                  autoFocus
                />
              </div>
              {error && (
                <p className="text-red-400 text-sm" role="alert">
                  {error}
                </p>
              )}
              <div className="flex gap-2 justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setModalOpen(false)
                    setPassword('')
                    setError(null)
                  }}
                  className="px-4 py-2.5 rounded-full text-base font-medium text-gray-400 hover:text-white transition-colors"
                >
                  취소
                </button>
                <button
                  type="submit"
                  disabled={submitting || !password.trim()}
                  className="px-5 py-2.5 rounded-full text-base font-bold text-[#0a1a2e] disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.02]"
                  style={{ background: '#60a5fa' }}
                >
                  {submitting ? '확인 중…' : '이동'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </GiboLinkContext.Provider>
  )
}

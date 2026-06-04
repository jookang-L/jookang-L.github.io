'use client'

import { useState } from 'react'
import { FadeIn } from '@/components/ui/FadeIn'

const FAQ_ITEMS = [
  { q: '파일을 다운로드 받으면 어떻게 사용하나요?',           a: '다운로드된 파일을 실행하시면 별도 설치 없이 바로 사용 가능합니다. 각 앱의 사용법 가이드를 참고해주세요.' },
  { q: '개인정보가 외부로 수집되나요?',                       a: '아니요! 모든 데이터는 선생님의 기기에서만 처리됩니다. 외부 서버에 어떠한 개인정보도 전송되지 않습니다.' },
  { q: 'Windows와 macOS 모두 지원하나요?',                    a: '네! 현재 Windows와 macOS 버전 모두 제공하고 있습니다. 다운로드 시 운영체제에 맞는 파일을 선택해주세요.' },
  { q: '완전히 무료인가요?',                                   a: '네, 완전히 무료입니다! 선생님들을 위해 제가 직접 만들고 무료로 배포하는 도구들이에요 😊' },
  { q: '새 버전 업데이트는 어떻게 받나요?',                   a: '이 사이트의 업데이트 소식 섹션을 확인하세요! 새 버전이 나오면 다운로드 페이지에서 최신 파일을 받으시면 됩니다.' },
  { q: '버그를 발견했어요. 어떻게 제보하나요?',               a: "위의 1:1 질문하기에서 '버그 제보'를 선택하고, 발생 상황을 자세하게 적어 보내주시면 빠르게 수정하겠습니다!" },
]

export default function Contact() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    const form = e.currentTarget
    const fd = new FormData(form)
    const name = String(fd.get('name') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    const category = String(fd.get('category') ?? '').trim()
    const message = String(fd.get('message') ?? '').trim()

    setSubmitting(true)
    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, category, message }),
      })
      const data = (await res.json()) as { ok?: boolean; error?: string }

      if (!res.ok || !data.ok) {
        if (data.error === 'not_configured') {
          setError('서버에 피드백 연동이 설정되지 않았습니다. 관리자에게 문의해 주세요.')
        } else {
          setError('전송에 실패했습니다. 잠시 후 다시 시도해 주세요.')
        }
        return
      }

      setStatus('sent')
      setTimeout(() => {
        setStatus('idle')
        form.reset()
      }, 4000)
    } catch {
      setError('네트워크 오류가 났습니다. 연결을 확인해 주세요.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact-section" className="py-24" style={{ background: '#080810' }}>
      <div className="max-w-7xl mx-auto px-5">

        <FadeIn className="text-center mb-16">
          <h2 className="chalk-font text-white" style={{ fontSize:'clamp(26px,5vw,48px)' }}>함께 만들어가요</h2>
          <p className="text-gray-500 mt-2 text-base">질문, 버그 제보, 개선 제안 무엇이든 환영합니다</p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* 문의 폼 */}
          <FadeIn direction="right">
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">💬 1:1 질문하기</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label:'이름',   type:'text',  placeholder:'선생님 성함' },
                  { label:'이메일', type:'email', placeholder:'email@example.com' },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="block text-sm text-gray-400 mb-1.5">{f.label}</label>
                    <input
                      name={f.label === '이름' ? 'name' : 'email'}
                      type={f.type}
                      placeholder={f.placeholder}
                      required
                      className="w-full px-4 py-3 rounded-xl text-white text-base outline-none transition-colors"
                      style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)' }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(255,222,0,0.5)')}
                      onBlur={(e)  => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1.5">질문 유형</label>
                <select
                  name="category"
                  className="w-full px-4 py-3 rounded-xl text-white text-base outline-none"
                  style={{ background:'#0f0f1e', border:'1px solid rgba(255,255,255,0.1)' }}
                  defaultValue="생활기록부 분석"
                >
                  {['생활기록부 분석','가장 편한 메모앱','PokéPandas','판사시스템','기능 제안','버그 제보 🐛','기타'].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1.5">내용</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="질문 내용을 자세히 적어주세요 :)"
                  className="w-full px-4 py-3 rounded-xl text-white text-base outline-none resize-none"
                  style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)' }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(255,222,0,0.5)')}
                  onBlur={(e)  => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                />
              </div>

              <button
                type="submit"
                disabled={submitting || status === 'sent'}
                className="w-full py-3.5 rounded-full font-bold text-base transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                style={
                  status === 'sent'
                    ? { background: '#22c55e', color: 'white' }
                    : { background: 'var(--pikachu)', color: '#0a0a14' }
                }
              >
                {status === 'sent'
                  ? '✅ 접수되었어요'
                  : submitting
                    ? '보내는 중…'
                    : '⚡ 질문 보내기'}
              </button>
              {error && (
                <p className="text-red-400/90 text-sm text-center leading-relaxed" role="alert">
                  {error}
                </p>
              )}
            </form>
          </FadeIn>

          {/* FAQ */}
          <div id="faq-section">
          <FadeIn direction="left">
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">❓ 자주 묻는 질문</h3>
            <div className="space-y-3">
              {FAQ_ITEMS.map((item, i) => (
                <div
                  key={item.q}
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="p-4 rounded-xl cursor-pointer transition-colors"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: `1px solid ${openIdx === i ? 'rgba(255,222,0,0.4)' : 'rgba(255,255,255,0.08)'}`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white text-base font-medium pr-4">{item.q}</span>
                    <span
                      className="text-gray-400 text-xl font-light flex-shrink-0 transition-transform duration-300"
                      style={{ transform: openIdx === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    >+</span>
                  </div>
                  {openIdx === i && (
                    <p className="mt-3 text-gray-400 text-base leading-relaxed">{item.a}</p>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

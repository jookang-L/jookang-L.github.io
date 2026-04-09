'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

/* ─── 다운로드 모달 Context ─── */
type ModalCtx = {
  open: (appName: string) => void
  close: () => void
  currentApp: string
  isOpen: boolean
}

const ModalContext = createContext<ModalCtx>({
  open: () => {},
  close: () => {},
  currentApp: '',
  isOpen: false,
})

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen]       = useState(false)
  const [currentApp, setCurrentApp] = useState('')

  return (
    <ModalContext.Provider value={{
      open:  (name) => { setCurrentApp(name); setIsOpen(true) },
      close: () => setIsOpen(false),
      currentApp,
      isOpen,
    }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)

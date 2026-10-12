import { useState, useCallback, type ReactNode } from 'react'
import { resumeConfig } from '@/data/resume-config'
import { ConfidentialContext } from './ConfidentialContext'

const STORAGE_KEY = 'resume-confidential-unlocked'

/**
 * Confidential mode provider - UX-only masking of personal/employer data.
 *
 * ⚠️ This is NOT a security mechanism. The site is a fully static, client-side
 * bundle hosted on GitHub Pages: both the "hidden" data and the unlock code are
 * shipped in the public JavaScript and can be recovered by anyone inspecting it.
 * This feature only controls what the page shows BY DEFAULT. It never protects
 * data and must never hold real secrets, API keys, or passwords.
 *
 * Unlock state is kept in `sessionStorage`, so it persists across reloads within
 * the same tab/session but resets when a new session starts.
 *
 * Supported URL params (convenience, not security):
 *   ?unlock=<code>     auto-reveals the full profile (for sharing a "full link")
 *   ?confidential=1    forces the confidential view
 */
export function ConfidentialProvider({ children }: { children: ReactNode }) {
  const conf = resumeConfig.confidential
  const enabled = conf?.enabled ?? false
  const defaultMode = conf?.defaultMode ?? 'confidential'

  // Effective unlock code: a build-time env var (e.g. injected from a GitHub
  // Actions secret as VITE_UNLOCK_CODE) takes precedence over the value in
  // resume-config.ts. This keeps the code out of the committed source.
  //
  // ⚠️ It does NOT keep the code secret at runtime: Vite inlines VITE_* vars into
  // the client bundle at build time, so the deployed JavaScript still contains it
  // and anyone inspecting the site can recover it. Confidential mode stays a
  // presentation-only feature — never rely on this code to protect real data.
  const unlockCode = import.meta.env.VITE_UNLOCK_CODE || conf?.unlockCode

  const [isFull, setIsFull] = useState(() => {
    if (!enabled) return true

    const params = new URLSearchParams(window.location.search)
    if (unlockCode && params.get('unlock') === unlockCode) {
      sessionStorage.setItem(STORAGE_KEY, '1')
      return true
    }
    if (params.get('confidential') === '1') return false
    if (sessionStorage.getItem(STORAGE_KEY) === '1') return true

    return defaultMode === 'full'
  })

  const unlock = useCallback(
    (code: string) => {
      if (!unlockCode) return false
      if (code === unlockCode) {
        sessionStorage.setItem(STORAGE_KEY, '1')
        setIsFull(true)
        return true
      }
      return false
    },
    [unlockCode],
  )

  const lock = useCallback(() => {
    sessionStorage.removeItem(STORAGE_KEY)
    setIsFull(false)
  }, [])

  return (
    <ConfidentialContext.Provider
      value={{ enabled, isConfidential: enabled && !isFull, unlock, lock }}
    >
      {children}
    </ConfidentialContext.Provider>
  )
}

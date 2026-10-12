import { createContext } from 'react'

export interface ConfidentialContextValue {
  /** Whether the confidential feature is enabled at all. */
  enabled: boolean
  /** True when personal/employer data is currently masked. */
  isConfidential: boolean
  /** Attempt to reveal the full profile. Returns true on success. */
  unlock: (code: string) => boolean
  /** Re-mask the profile (back to confidential view). */
  lock: () => void
}

export const ConfidentialContext = createContext<ConfidentialContextValue | null>(null)

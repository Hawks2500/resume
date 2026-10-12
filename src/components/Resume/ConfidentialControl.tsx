import { useState } from 'react'
import { LockIcon, LockOpenIcon } from '@/components/icons'
import { Modal } from '@/components/ui/Modal'
import { useConfidential } from '@/lib/confidential'
import { useTranslation } from '@/lib/i18n'
import { ui } from '@/lib/i18n/ui-strings'
import { cn } from '@/lib/utils'

/**
 * Button + unlock modal controlling confidential mode.
 *
 * Reminder: confidential mode is a presentation-only mask, not a security
 * control - see ConfidentialProvider for the full caveat.
 */
export function ConfidentialControl({ compact = false }: { compact?: boolean }) {
  const { enabled, isConfidential, unlock, lock } = useConfidential()
  const { resolve } = useTranslation()
  const [modalOpen, setModalOpen] = useState(false)
  const [code, setCode] = useState('')
  const [error, setError] = useState(false)

  if (!enabled) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (unlock(code.trim())) {
      setModalOpen(false)
      setCode('')
      setError(false)
    } else {
      setError(true)
    }
  }

  const handleClose = () => {
    setModalOpen(false)
    setCode('')
    setError(false)
  }

  const label = isConfidential ? resolve(ui.showFullProfile) : resolve(ui.lockProfile)
  const Icon = isConfidential ? LockOpenIcon : LockIcon

  return (
    <>
      <button
        onClick={() => (isConfidential ? setModalOpen(true) : lock())}
        className={cn(
          'inline-flex items-center gap-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer',
          'bg-resume-primary/10 text-resume-primary hover:bg-resume-primary/20',
          compact ? 'p-2' : 'px-3 py-2',
        )}
        aria-label={label}
        title={label}
      >
        <Icon className="w-4 h-4" />
        {!compact && <span className="hidden sm:inline">{label}</span>}
      </button>

      <Modal
        isOpen={modalOpen}
        onClose={handleClose}
        header={
          <div>
            <h2 className="font-semibold text-lg text-resume-text">{resolve(ui.unlockTitle)}</h2>
          </div>
        }
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-sm text-resume-text-secondary">{resolve(ui.unlockDescription)}</p>
          <div>
            <input
              type="password"
              autoFocus
              value={code}
              onChange={(e) => {
                setCode(e.target.value)
                setError(false)
              }}
              placeholder={resolve(ui.unlockPlaceholder)}
              aria-label={resolve(ui.unlockPlaceholder)}
              aria-invalid={error}
              className={cn(
                'w-full rounded-lg border bg-resume-bg px-3 py-2 text-sm text-resume-text outline-none transition-colors',
                error
                  ? 'border-red-400 focus:border-red-500'
                  : 'border-resume-primary/20 focus:border-resume-primary/50',
              )}
            />
            {error && <p className="mt-1.5 text-xs text-red-500">{resolve(ui.unlockError)}</p>}
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-resume-primary px-4 py-2 text-sm font-medium text-resume-bg-card transition-opacity hover:opacity-90 cursor-pointer"
          >
            {resolve(ui.unlock)}
          </button>
        </form>
      </Modal>
    </>
  )
}

/** Small state chip: "🔒 Confidential view" / "🔓 Full profile". */
export function ConfidentialIndicator({ className }: { className?: string }) {
  const { enabled, isConfidential } = useConfidential()
  const { resolve } = useTranslation()

  if (!enabled) return null

  const Icon = isConfidential ? LockIcon : LockOpenIcon
  const label = isConfidential ? resolve(ui.confidentialView) : resolve(ui.fullProfile)

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium',
        isConfidential
          ? 'border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300'
          : 'border-resume-primary/20 bg-resume-primary/5 text-resume-text-secondary',
        className,
      )}
    >
      <Icon className="w-3.5 h-3.5" />
      {label}
    </span>
  )
}

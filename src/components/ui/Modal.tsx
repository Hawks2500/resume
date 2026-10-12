import { useEffect, useRef, useId } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CloseIcon } from '@/components/icons'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
  header?: React.ReactNode
  closeLabel?: string
}

export function Modal({ isOpen, onClose, children, title, header, closeLabel = 'Close' }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)
  const titleId = useId()

  // Keep a stable ref to onClose so the focus/keydown effect below only re-runs
  // when `isOpen` changes. Otherwise an inline onClose (re-created on every parent
  // render, e.g. on each keystroke in a modal input) would re-run this effect and
  // steal focus back to the modal container after the first character.
  const onCloseRef = useRef(onClose)
  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  useEffect(() => {
    if (!isOpen) return

    previousActiveElement.current = document.activeElement as HTMLElement
    // Focus the first form field if present (e.g. the unlock input), else the dialog.
    const firstField = modalRef.current?.querySelector<HTMLElement>('input, textarea, select')
    ;(firstField ?? modalRef.current)?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCloseRef.current()
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      previousActiveElement.current?.focus()
    }
  }, [isOpen])

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? titleId : undefined}
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed left-4 right-4 top-4 bottom-4 md:top-1/2 md:bottom-auto md:-translate-y-1/2 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-full md:max-w-lg md:max-h-[calc(100vh-4rem)] max-h-full overflow-y-auto z-50 rounded-2xl bg-resume-bg-card border border-resume-primary/20 shadow-2xl outline-none"
          >
            <div className="sticky top-0 bg-resume-bg-card border-b border-resume-primary/10 p-4 flex items-center justify-between">
              {header || (
                <h2 id={titleId} className="font-medium text-resume-text">
                  {title}
                </h2>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-resume-primary/10 transition-colors"
                aria-label={closeLabel}
              >
                <CloseIcon className="w-5 h-5 text-resume-text-secondary" />
              </button>
            </div>
            <div className="p-5">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  )
}

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShareIcon, LinkedInIcon, ClipboardIcon, CheckIcon } from '@/components/icons'
import { useTranslation } from '@/lib/i18n'
import { ui } from '@/lib/i18n/ui-strings'
import { resumeConfig } from '@/data/resume-config'

function getPublicUrl(): string {
  return resumeConfig.meta?.publicUrl ?? window.location.href
}

export function ShareButton() {
  const { resolve } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const url = getPublicUrl()
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable - no-op */
    }
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium bg-resume-primary/10 text-resume-primary hover:bg-resume-primary/20 transition-colors cursor-pointer"
        aria-label={resolve(ui.shareResume)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        <ShareIcon className="w-4 h-4" />
        <span className="hidden sm:inline">{resolve(ui.shareResume)}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            role="menu"
            className="absolute right-0 mt-1 min-w-[12rem] rounded-lg bg-resume-bg-card border border-resume-primary/15 shadow-lg overflow-hidden z-50"
          >
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 w-full px-3 py-2.5 text-sm text-resume-text-secondary hover:bg-resume-primary/5 hover:text-resume-primary transition-colors"
            >
              <LinkedInIcon className="w-4 h-4 shrink-0" />
              {resolve(ui.shareOnLinkedin)}
            </a>
            <button
              onClick={handleCopy}
              role="menuitem"
              className="flex items-center gap-2 w-full px-3 py-2.5 text-sm text-resume-text-secondary hover:bg-resume-primary/5 hover:text-resume-primary transition-colors cursor-pointer"
            >
              {copied ? (
                <CheckIcon className="w-4 h-4 shrink-0 text-emerald-500" />
              ) : (
                <ClipboardIcon className="w-4 h-4 shrink-0" />
              )}
              {copied ? resolve(ui.linkCopied) : resolve(ui.copyLink)}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

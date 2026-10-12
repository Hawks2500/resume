import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MenuIcon, CloseIcon } from '@/components/icons'
import { useTranslation } from '@/lib/i18n'
import { ui } from '@/lib/i18n/ui-strings'
import { resumeConfig } from '@/data/resume-config'
import { useConfidential, anonymizeName } from '@/lib/confidential'
import type { LocalizedString } from '@/data/types'
import { LanguageToggle } from './LanguageToggle'
import { ThemeToggle } from './ThemeToggle'
import { cn } from '@/lib/utils'

interface NavSection {
  id: string
  label: LocalizedString
}

function useNavSections(): NavSection[] {
  // resumeConfig is static, so this list is stable for the component's lifetime.
  return useMemo(() => {
    const { projects, hobbies, certifications } = resumeConfig
    const sections: NavSection[] = [
      { id: 'profile', label: ui.navProfile },
      { id: 'skills', label: ui.navSkills },
      { id: 'experience', label: ui.navExperience },
      { id: 'education', label: ui.navEducation },
    ]
    if (certifications && certifications.length > 0) sections.push({ id: 'certifications', label: ui.navCertifications })
    if (projects && projects.length > 0) sections.push({ id: 'projects', label: ui.navProjects })
    if (hobbies && hobbies.length > 0) sections.push({ id: 'hobbies', label: { fr: 'Loisirs', en: 'Hobbies', de: 'Hobbys' } })
    sections.push({ id: 'contact', label: ui.navContact })
    return sections
  }, [])
}

/** Tracks which section is currently in view. */
function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(ids[0] ?? null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    )
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [ids])

  return active
}

export function SectionNav() {
  const { resolve } = useTranslation()
  const sections = useNavSections()
  const ids = useMemo(() => sections.map((s) => s.id), [sections])
  const active = useActiveSection(ids)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { isConfidential } = useConfidential()

  const { personal } = resumeConfig
  const brandName = isConfidential
    ? personal.confidentialName ?? anonymizeName(personal.name)
    : personal.name

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="sticky top-0 z-40 border-b border-resume-primary/10 bg-resume-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2.5">
        {/* Brand + state */}
        <a
          href="#profile"
          onClick={(e) => handleNav(e, 'profile')}
          className="flex shrink-0 items-center gap-2"
        >
          <span className="text-sm font-bold tracking-wide text-resume-text">{brandName}</span>
        </a>

        {/* Desktop anchors */}
        <ul className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={(e) => handleNav(e, s.id)}
                className={cn(
                  'rounded-md px-2.5 py-1.5 text-xs font-medium tracking-wide transition-colors',
                  active === s.id
                    ? 'bg-resume-primary/10 text-resume-primary'
                    : 'text-resume-text-secondary hover:text-resume-primary',
                )}
                aria-current={active === s.id ? 'true' : undefined}
              >
                {resolve(s.label)}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-1.5">
          <LanguageToggle />
          <ThemeToggle label={resolve(resumeConfig.labels.actions.switchTheme)} />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 rounded-full hover:bg-resume-primary/10 transition-colors md:hidden"
            aria-label={resolve(ui.menu)}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <CloseIcon className="w-5 h-5 text-resume-primary" />
            ) : (
              <MenuIcon className="w-5 h-5 text-resume-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-resume-primary/10 md:hidden"
          >
            <ul className="mx-auto flex max-w-5xl flex-col px-4 py-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={(e) => handleNav(e, s.id)}
                    className={cn(
                      'block rounded-md px-2 py-2.5 text-sm font-medium transition-colors',
                      active === s.id
                        ? 'bg-resume-primary/10 text-resume-primary'
                        : 'text-resume-text-secondary hover:text-resume-primary',
                    )}
                  >
                    {resolve(s.label)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

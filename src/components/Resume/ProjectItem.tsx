import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDownIcon, GitHubIcon, ExternalLinkIcon } from '@/components/icons'
import { Modal } from '@/components/ui/Modal'
import { useBreakpoints } from '@/lib/hooks/useBreakpoints'
import { assetUrl } from '@/lib/utils'
import { useTheme } from '@/lib/theme'
import { TechBadge } from './TechBadge'

interface ProjectItemProps {
  title: string
  logo?: string
  themeLogos?: {
    light?: string
    dark?: string
  }
  description: string
  techs: string[]
  projectDetails?: string[]
  expanded: boolean
  onToggle: () => void
  url?: string
  github?: string
}

export function ProjectItem({
  title,
  logo,
  themeLogos,
  description,
  techs,
  projectDetails,
  expanded,
  onToggle,
  url,
  github,
}: ProjectItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { isDesktop } = useBreakpoints()
  const { isDark } = useTheme()

  const hasDetails = !!projectDetails && projectDetails.length > 0
  const resolvedLogo = isDark ? themeLogos?.dark ?? logo : themeLogos?.light ?? logo

  const handleClick = () => {
    if (!hasDetails) return
    if (isDesktop) {
      onToggle()
    } else {
      setIsModalOpen(true)
    }
  }

  return (
    <div>
      <div
        className="py-3 px-3 -mx-3 rounded-lg hover:bg-resume-primary/5 transition-colors cursor-pointer"
        role={hasDetails ? 'button' : undefined}
        tabIndex={hasDetails ? 0 : undefined}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (!hasDetails) return
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleClick()
          }
        }}
        aria-expanded={hasDetails ? expanded : undefined}
      >
        <div className="flex items-center gap-2 mb-1 relative">
          {resolvedLogo && (
            <div className="h-7 flex items-center flex-shrink-0">
              <img
                src={assetUrl(resolvedLogo)}
                alt={`${title} logo`}
                className="h-full w-auto max-w-[4rem] object-contain"
                loading="lazy"
              />
            </div>
          )}
          <h3 className="text-sm font-semibold text-resume-text pr-5">{title}</h3>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${title}`}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLinkIcon className="w-3.5 h-3.5 text-resume-primary" />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} on GitHub`}
              onClick={(e) => e.stopPropagation()}
            >
              <GitHubIcon className="w-3.5 h-3.5 text-resume-primary" />
            </a>
          )}
          {hasDetails && (
            <motion.div animate={{ rotate: expanded ? 180 : 0 }} className="absolute right-0 top-0">
              <ChevronDownIcon className="w-4 h-4 text-resume-primary" />
            </motion.div>
          )}
        </div>
        <p className="text-xs text-resume-text-secondary mb-2">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {techs.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
      </div>

      {hasDetails && isDesktop && (
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-2 mb-1 p-4 bg-resume-bg rounded-lg border border-resume-primary/20">
                <ul className="text-sm text-resume-text-secondary space-y-1.5">
                  {projectDetails.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-resume-primary">&#8226;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {hasDetails && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          header={
            <div>
              <h2 className="font-semibold text-lg text-resume-text">{title}</h2>
              <p className="text-sm text-resume-text-secondary mt-1">{description}</p>
            </div>
          }
        >
          <ul className="text-sm text-resume-text-secondary space-y-2">
            {projectDetails.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-resume-primary">&#8226;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Modal>
      )}
    </div>
  )
}

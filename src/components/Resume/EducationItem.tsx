import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDownIcon } from '@/components/icons'
import { Modal } from '@/components/ui/Modal'
import { useBreakpoints } from '@/lib/hooks/useBreakpoints'
import { assetUrl } from '@/lib/utils'
import { TechBadge } from './TechBadge'

interface EducationItemProps {
  school: string
  degree: string
  specialty?: string
  period?: string
  logo?: string
  techs?: string[]
  details?: string[]
  expanded: boolean
  onToggle: () => void
}

export function EducationItem({
  school,
  degree,
  specialty,
  period,
  logo,
  techs,
  details,
  expanded,
  onToggle,
}: EducationItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { isDesktop } = useBreakpoints()

  const hasDetails = !!details && details.length > 0

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
      <button
        onClick={handleClick}
        aria-expanded={hasDetails ? expanded : undefined}
        className="w-full text-left"
      >
        <div className="flex items-start gap-4 py-2 rounded-lg px-3 -mx-3 transition-colors duration-200 hover:bg-resume-primary/5">
          {logo && (
            <div className="h-12 flex items-center flex-shrink-0">
              <img src={assetUrl(logo)} alt={`${school} logo`} className="h-full w-auto max-w-[5rem] object-contain" loading="lazy" />
            </div>
          )}

          <div className="flex-1 min-w-0 relative">
            {hasDetails && (
              <motion.div animate={{ rotate: expanded ? 180 : 0 }} className="absolute top-0 right-0">
                <ChevronDownIcon className="w-4 h-4 text-resume-primary" />
              </motion.div>
            )}

            <p className="text-base font-semibold text-resume-text pr-6">{school}</p>
            <p className="text-sm text-resume-text-secondary">{degree}</p>
            {specialty && <p className="text-sm text-resume-primary">{specialty}</p>}
            {period && <p className="text-xs text-resume-text-secondary mt-0.5">{period}</p>}
            {techs && techs.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {techs.map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </div>
            )}
          </div>
        </div>
      </button>

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
                  {details.map((item, i) => (
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
              <h2 className="font-semibold text-lg text-resume-text">{school}</h2>
              <p className="text-sm text-resume-primary">{degree}</p>
              {period && <p className="text-xs text-resume-text-secondary mt-1">{period}</p>}
            </div>
          }
        >
          <ul className="text-sm text-resume-text-secondary space-y-2">
            {details.map((item, i) => (
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

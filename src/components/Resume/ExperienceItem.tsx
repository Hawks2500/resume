import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@/components/icons'
import { useBreakpoints } from '@/lib/hooks/useBreakpoints'
import { Modal } from '@/components/ui/Modal'
import { assetUrl, cn } from '@/lib/utils'
import { TechBadge } from './TechBadge'
import { ExperienceDetailsContent } from './ExperienceDetails'

interface ExperienceItemProps {
  year: string
  company: string
  logo?: string
  type?: string
  role: string
  description: string
  techs: string[]
  expanded: boolean
  onToggle: () => void
  details?: {
    context: string
    tasks?: string[]
    training?: string[]
    env: string
  }
  subItem?: { title: string; description: string }
  labels: {
    mainTasks: string
    moreTasks: string
    training?: string
    techEnv: string
    technologies: string
  }
  isHighlighted?: boolean
}

export function ExperienceItem({
  year,
  company,
  logo,
  type,
  role,
  description,
  techs,
  expanded,
  onToggle,
  details,
  subItem,
  labels,
  isHighlighted = false,
}: ExperienceItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { isDesktop } = useBreakpoints()
  const handleClick = () => {
    if (!details) return
    if (isDesktop) {
      onToggle()
    } else {
      setIsModalOpen(true)
    }
  }

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={isHighlighted ? { scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
    >
      <button
        onClick={handleClick}
        aria-expanded={details ? expanded : undefined}
        className="w-full text-left group relative z-10 cursor-pointer"
      >
        <div
          className={cn(
            'flex items-start gap-4 py-3 rounded-lg px-3 -mx-3 transition-all duration-300',
            isHighlighted
              ? 'border-2 border-resume-primary/30 bg-resume-primary/5 hover:border-resume-primary/50 hover:shadow-md'
              : 'hover:bg-resume-primary/5'
          )}
        >
          <div className="w-20 flex-shrink-0">
            <span className="text-sm font-bold text-resume-primary">{year}</span>
          </div>

          <div className="flex-1 min-w-0 relative">
            <div className="flex w-full items-start gap-2">
              <div className="flex min-w-0 flex-1 items-center gap-2 flex-wrap md:flex-nowrap">
                {logo && (
                  <div className="h-8 flex items-center flex-shrink-0">
                    <img
                      src={assetUrl(logo)}
                      alt={`${company} logo`}
                      className="h-full w-auto max-w-[4.5rem] object-contain"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex min-w-0 items-center gap-2">
                  <h3 className="min-w-0 whitespace-normal break-words text-sm font-semibold leading-tight text-resume-text">
                    {company}
                  </h3>
                  {type && (
                    <span className="shrink-0 whitespace-nowrap text-xs px-2 py-0.5 bg-resume-primary/10 text-resume-primary rounded">
                      {type}
                    </span>
                  )}
                </div>
              </div>
              {details && (
                <motion.div animate={{ rotate: expanded ? 180 : 0 }} className="shrink-0 pt-0.5">
                  <ChevronDownIcon className="w-4 h-4 text-resume-primary" />
                </motion.div>
              )}
            </div>
            <p className="text-xs text-resume-text-secondary mt-0.5">{role}</p>
            <p className="text-xs text-resume-text-secondary/80 mt-1 line-clamp-2">{description}</p>

            <div className="flex flex-wrap gap-1.5 mt-2">
              {techs.map((tech) => (
                <TechBadge key={tech} tech={tech} />
              ))}
            </div>

            {subItem && (
              <div className="mt-3 pl-3 border-l-2 border-resume-primary/20">
                <p className="text-xs font-medium text-resume-text">{subItem.title}</p>
                <p className="text-xs text-resume-text-secondary">{subItem.description}</p>
              </div>
            )}
          </div>
        </div>
      </button>

      {isDesktop && details && (
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="ml-24 mt-2 mb-4 p-4 bg-resume-bg rounded-lg border border-resume-primary/20">
                <ExperienceDetailsContent
                  context={details.context}
                  tasks={details.tasks}
                  training={details.training}
                  env={details.env}
                  labels={labels}
                  variant="inline"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {details && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          header={
            <div>
              <h2 className="font-semibold text-lg text-resume-text">{company}</h2>
              <p className="text-sm text-resume-primary">{role}</p>
              <p className="text-xs text-resume-text-secondary mt-1">{year}</p>
            </div>
          }
        >
          <ExperienceDetailsContent
            context={details.context}
            tasks={details.tasks}
            training={details.training}
            env={details.env}
            techs={techs}
            description={description}
            labels={labels}
            variant="modal"
          />
          {subItem && (
            <div className="pt-3 mt-3 border-t border-resume-primary/20">
              <p className="text-sm font-medium text-resume-text mb-1">{subItem.title}</p>
              <p className="text-sm text-resume-text-secondary">{subItem.description}</p>
            </div>
          )}
        </Modal>
      )}
    </motion.div>
  )
}

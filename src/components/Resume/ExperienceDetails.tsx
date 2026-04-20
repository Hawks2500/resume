import { useState } from 'react'
import { TechBadge } from './TechBadge'

interface ExperienceDetailsContentProps {
  context: string
  tasks?: string[]
  training?: string[]
  env: string
  techs?: string[]
  description?: string
  labels: {
    mainTasks: string
    moreTasks: string
    showMoreTasks: string
    showLessTasks: string
    training?: string
    techEnv: string
    technologies: string
  }
  variant: 'inline' | 'modal'
}

export function ExperienceDetailsContent({
  context,
  tasks,
  training,
  env,
  techs,
  description,
  labels,
  variant,
}: ExperienceDetailsContentProps) {
  const MAX_INLINE_TASKS = 6
  const [showAllTasks, setShowAllTasks] = useState(false)
  const shouldCollapseTasks = variant === 'inline' && !!tasks && tasks.length > MAX_INLINE_TASKS
  const visibleTasks: string[] =
    variant === 'inline' && !showAllTasks && tasks ? tasks.slice(0, MAX_INLINE_TASKS) : tasks ?? []
  const hiddenTaskCount = shouldCollapseTasks && tasks ? tasks.length - MAX_INLINE_TASKS : 0
  const showMoreTasksLabel = labels.showMoreTasks || labels.moreTasks
  const showLessTasksLabel = labels.showLessTasks || labels.moreTasks

  return (
    <div className="space-y-3">
      {variant === 'modal' && description && (
        <p className="text-sm text-resume-text-secondary leading-relaxed">{description}</p>
      )}

      <p className="text-sm text-resume-text-secondary italic border-l-2 border-resume-primary/30 pl-3">
        {context}
      </p>

      {variant === 'modal' && techs && techs.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-resume-text mb-2">{labels.technologies}</p>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>
      )}

      {tasks && tasks.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-resume-text mb-2">{labels.mainTasks}</p>
          <ul className="text-xs text-resume-text-secondary space-y-1">
            {visibleTasks.map((task, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-resume-primary">&#8226;</span>
                <span>{task}</span>
              </li>
            ))}
            {shouldCollapseTasks && !showAllTasks && (
              <li className="text-resume-primary italic">
                +{hiddenTaskCount} {labels.moreTasks}
              </li>
            )}
          </ul>
          {shouldCollapseTasks && (
            <button
              type="button"
              onClick={() => setShowAllTasks((value) => !value)}
              className="mt-2 inline-flex items-center rounded-full border border-resume-primary/20 bg-resume-primary/5 px-3 py-1 text-[11px] font-medium text-resume-primary transition-colors hover:bg-resume-primary/10"
              aria-expanded={showAllTasks}
            >
              {showAllTasks ? showLessTasksLabel : `${showMoreTasksLabel} (+${hiddenTaskCount})`}
            </button>
          )}
        </div>
      )}

      {training && training.length > 0 && labels.training && (
        <div>
          <p className="text-xs font-semibold text-resume-text mb-2">{labels.training}</p>
          <ul className="text-xs text-resume-text-secondary space-y-1">
            {training.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-resume-primary">&#8226;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className={variant === 'modal' ? 'pt-3 border-t border-resume-primary/20' : ''}>
        <p className="text-xs text-resume-primary">
          <span className="font-semibold">{labels.techEnv}</span> {env}
        </p>
      </div>
    </div>
  )
}

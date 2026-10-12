import { useTranslation } from '@/lib/i18n'
import { resumeConfig } from '@/data/resume-config'
import { cn } from '@/lib/utils'

export function AvailabilityBadge({ className }: { className?: string }) {
  const { resolve } = useTranslation()
  const availability = resumeConfig.availability

  if (!availability?.available) return null

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300',
        className,
      )}
    >
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:hidden" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      <span>{resolve(availability.label)}</span>
      {availability.period && (
        <span className="border-l border-emerald-500/30 pl-2 font-normal opacity-80">
          {resolve(availability.period)}
        </span>
      )}
    </span>
  )
}

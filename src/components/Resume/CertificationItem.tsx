import { assetUrl, cn } from '@/lib/utils'

interface CertificationItemProps {
  name: string
  issuer?: string
  status?: string
  obtained?: boolean
  logo?: string
  url?: string
}

export function CertificationItem({ name, issuer, status, obtained, logo, url }: CertificationItemProps) {
  const content = (
    <div className="flex items-center gap-3 rounded-lg px-3 -mx-3 py-2.5 transition-colors hover:bg-resume-primary/5">
      {logo ? (
        <div className="flex h-9 flex-shrink-0 items-center">
          <img
            src={assetUrl(logo)}
            alt={`${issuer ?? name} logo`}
            className="h-7 w-auto max-w-[5rem] object-contain"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-resume-primary/15 bg-resume-primary/5 text-xs font-bold text-resume-primary">
          {(issuer ?? name).slice(0, 2).toUpperCase()}
        </div>
      )}

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-resume-text">
          {name}
          {issuer && (
            <span className="ml-1.5 text-xs font-normal text-resume-text-secondary">· {issuer}</span>
          )}
        </p>
        {status && (
          <span
            className={cn(
              'mt-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium',
              obtained
                ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                : 'bg-amber-500/10 text-amber-700 dark:text-amber-300',
            )}
          >
            {status}
          </span>
        )}
      </div>
    </div>
  )

  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  )
}

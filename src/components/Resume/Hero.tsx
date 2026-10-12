import { LocationIcon, LinkedInIcon, GitHubIcon, EmailIcon } from '@/components/icons'
import { useTranslation } from '@/lib/i18n'
import { resumeConfig } from '@/data/resume-config'
import { useConfidential, anonymizeName } from '@/lib/confidential'
import type { ContactType } from '@/data/types'
import { AvailabilityBadge } from './AvailabilityBadge'
import { PdfDownload } from './PdfDownload'
import { ShareButton } from './ShareButton'
import { ConfidentialControl } from './ConfidentialControl'

const QUICK_ICONS: Partial<Record<ContactType, React.FC<React.SVGProps<SVGSVGElement>>>> = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  email: EmailIcon,
}

export function Hero() {
  const { resolve } = useTranslation()
  const { isConfidential } = useConfidential()
  const { personal, contact } = resumeConfig

  const name = isConfidential
    ? personal.confidentialName ?? anonymizeName(personal.name)
    : personal.name
  const location = isConfidential
    ? personal.confidentialLocation ?? personal.location
    : personal.location
  const subtitle = personal.subtitle ? resolve(personal.subtitle) : undefined

  const quickLinks = contact.filter(
    (c) => (c.type === 'linkedin' || c.type === 'github' || c.type === 'email') && c.href,
  )

  return (
    <header id="profile" className="mb-8 scroll-mt-20">
      <AvailabilityBadge className="mb-4" />

      <h1 className="text-3xl font-bold tracking-tight text-resume-text md:text-4xl">{name}</h1>

      <p className="mt-2 text-base font-medium text-resume-primary md:text-lg">
        {resolve(personal.title)}
      </p>

      {subtitle && (
        <p className="mt-1.5 text-sm text-resume-text-secondary">
          {subtitle.split('\n').map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </p>
      )}

      {location && (
        <p className="mt-2 flex items-center gap-1.5 text-sm text-resume-text-secondary">
          <LocationIcon className="h-4 w-4 text-resume-primary" />
          {location}
        </p>
      )}

      {!isConfidential && quickLinks.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {quickLinks.map((c) => {
            const Icon = QUICK_ICONS[c.type]
            if (!Icon) return null
            return (
              <a
                key={c.type}
                href={c.type === 'email' ? `mailto:${c.label}` : c.href}
                target={c.type === 'email' ? undefined : '_blank'}
                rel={c.type === 'email' ? undefined : 'noopener noreferrer'}
                aria-label={c.type}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-resume-primary/15 bg-resume-primary/5 text-resume-primary transition-colors hover:bg-resume-primary/15"
              >
                <Icon className="h-4 w-4" />
              </a>
            )
          })}
        </div>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-resume-primary/10 pt-5">
        <PdfDownload />
        <ShareButton />
        <ConfidentialControl />
      </div>
    </header>
  )
}

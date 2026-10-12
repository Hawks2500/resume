import { LinkedInIcon, EmailIcon, GitHubIcon } from '@/components/icons'
import { useTranslation } from '@/lib/i18n'
import { ui } from '@/lib/i18n/ui-strings'
import { resumeConfig } from '@/data/resume-config'
import { useConfidential } from '@/lib/confidential'
import { ShareButton } from './ShareButton'
import { ConfidentialControl } from './ConfidentialControl'

const CTA_ICONS = {
  linkedin: LinkedInIcon,
  email: EmailIcon,
  github: GitHubIcon,
} as const

export function Footer() {
  const { resolve } = useTranslation()
  const { isConfidential } = useConfidential()
  const { contact, meta } = resumeConfig

  const ctaLinks = contact
    .filter((c) => c.type === 'linkedin' || c.type === 'email' || c.type === 'github')
    .map((c) => ({
      type: c.type as keyof typeof CTA_ICONS,
      href: c.type === 'email' ? `mailto:${c.label}` : c.href,
    }))

  return (
    <footer className="mt-8 rounded-lg border border-resume-primary/10 bg-resume-bg-card px-6 py-8 text-center shadow-sm">
      <h2 className="text-xl font-bold text-resume-text">{resolve(ui.ctaHeading)}</h2>
      <p className="mt-1.5 text-sm text-resume-text-secondary">{resolve(ui.ctaSubtext)}</p>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
        {isConfidential ? (
          <ConfidentialControl />
        ) : (
          ctaLinks.map(({ type, href }) => {
            const Icon = CTA_ICONS[type]
            return (
              <a
                key={type}
                href={href}
                target={type === 'email' ? undefined : '_blank'}
                rel={type === 'email' ? undefined : 'noopener noreferrer'}
                className="inline-flex items-center gap-2 rounded-lg border border-resume-primary/15 bg-resume-primary/5 px-4 py-2 text-sm font-medium text-resume-primary transition-colors hover:bg-resume-primary/15"
              >
                <Icon className="w-4 h-4" />
                <span className="capitalize">{type}</span>
              </a>
            )
          })
        )}
        <ShareButton />
      </div>

      {meta?.lastUpdated && (
        <p className="mt-6 text-xs text-resume-text-secondary/70">
          {resolve(ui.lastUpdated)}: {meta.lastUpdated}
        </p>
      )}
    </footer>
  )
}

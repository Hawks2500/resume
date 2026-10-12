import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/lib/i18n'
import { ui } from '@/lib/i18n/ui-strings'
import { resumeConfig } from '@/data/resume-config'
import { useConfidential } from '@/lib/confidential'
import { assetUrl } from '@/lib/utils'
import { detectedAssets } from 'virtual:detected-assets'
import { SidebarSection } from './SidebarSection'
import { ContactItem } from './ContactItem'
import { SkillCategory } from './SkillCategory'
import { TechBadge } from './TechBadge'

const PHOTO_ANIMATION_DURATION = 0.8

function SidebarPhoto({ photo, name, emoji }: { photo?: string; name: string; emoji?: string }) {
  const [isSpinning, setIsSpinning] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleFlip = () => {
    if (isSpinning) return
    setIsSpinning(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleFlip()
    }
  }

  if (!photo || hasError) {
    return (
      <div className="flex justify-center mb-6">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-resume-primary to-resume-primary-light flex items-center justify-center border-4 border-resume-bg/30 shadow-lg">
          <span className="text-4xl">{emoji || '👨‍💻'}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center mb-6" style={{ perspective: '300px' }}>
      <motion.div
        onClick={handleFlip}
        onKeyDown={handleKeyDown}
        onAnimationComplete={() => setIsSpinning(false)}
        animate={{ rotateY: isSpinning ? 360 : 0 }}
        transition={{ duration: PHOTO_ANIMATION_DURATION, ease: 'easeInOut' }}
        className="relative w-32 h-32 cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
        role="button"
        tabIndex={0}
        aria-label={`Photo of ${name} - click to flip`}
      >
        <div
          className="absolute inset-0 rounded-full overflow-hidden border-4 border-resume-bg/30 shadow-lg"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src={photo}
            alt={`Profile photo of ${name}`}
            className="object-cover w-full h-full"
            loading="lazy"
            onError={() => setHasError(true)}
          />
        </div>
        <div
          className="absolute inset-0 rounded-full border-4 border-resume-bg/30 shadow-lg bg-gradient-to-br from-resume-primary to-resume-primary-light flex items-center justify-center"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <span className="text-4xl">{emoji || '👨‍💻'}</span>
        </div>
      </motion.div>
    </div>
  )
}

export function Sidebar() {
  const { resolve } = useTranslation()
  const { isConfidential } = useConfidential()
  const { personal, contact, skills, hobbies, labels } = resumeConfig

  const realPhoto = personal.photo || detectedAssets.photo
  const visibleContacts = contact.filter(
    (c) => !isConfidential || c.showWhenConfidential || c.type === 'location' || !!c.confidentialLabel,
  )
  const hiddenContactCount = contact.length - visibleContacts.length

  return (
    <div className="md:w-[38%] bg-gradient-to-b from-resume-sidebar-from to-resume-sidebar-to p-8">
      {/* Photo / Profile image - hidden in confidential mode (emoji fallback shown) */}
      <SidebarPhoto
        photo={!isConfidential && realPhoto ? assetUrl(realPhoto) : undefined}
        name={isConfidential ? 'Profile' : personal.name}
        emoji={personal.photoBackEmoji}
      />

      {/* Contact */}
      <section id="contact" className="mb-6 scroll-mt-20" aria-label={resolve(labels.sections.contact)}>
        <SidebarSection title={resolve(labels.sections.contact)}>
          <div className="space-y-3">
            {visibleContacts.map((item) => {
              if (isConfidential && item.type !== 'location' && item.confidentialLabel) {
                return (
                  <p key={`${item.type}-${item.label}`} className="text-sm text-resume-text-secondary">
                    {item.confidentialLabel}
                  </p>
                )
              }
              return (
                <ContactItem key={`${item.type}-${item.label}`} type={item.type} label={item.label} href={item.href} />
              )
            })}
            {isConfidential && hiddenContactCount > 0 && (
              <p className="text-xs italic text-resume-text-secondary/70">{resolve(ui.contactHidden)}</p>
            )}
          </div>
        </SidebarSection>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-20" aria-label={resolve(labels.sections.skills)}>
      <SidebarSection title={resolve(labels.sections.skills)}>
        <div className="space-y-5">
          {skills.map((category, i) => (
            <SkillCategory key={`${resolve(category.title)}-${i}`} title={resolve(category.title)}>
              {category.type === 'badges' && (
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((item, idx) => {
                    const techName = typeof item.name === 'string' ? item.name : resolve(item.name)
                    return <TechBadge key={`${techName}-${idx}`} tech={techName} color={item.color} />
                  })}
                </div>
              )}
              {category.type === 'text' && (
                <p className="text-xs text-resume-text-secondary">
                  {category.items
                    .map((item) => (typeof item.name === 'string' ? item.name : resolve(item.name)))
                    .join(', ')}
                </p>
              )}
              {category.type === 'languages' && (
                <div className="flex items-center gap-3 text-sm flex-wrap">
                  {category.items.map((item, j) => {
                    const name = typeof item.name === 'string' ? item.name : resolve(item.name)
                    return (
                      <span key={`${name}-${j}`} className="flex items-center gap-1">
                        <span className="text-resume-text-secondary">
                          {name} {item.level ? resolve(item.level) : ''}
                          {item.details && (
                            <span className="text-xs opacity-70 ml-1">{item.details}</span>
                          )}
                        </span>
                      </span>
                    )
                  })}
                </div>
              )}
            </SkillCategory>
          ))}
        </div>
      </SidebarSection>
      </section>

      {/* Hobbies */}
      {hobbies && hobbies.length > 0 && labels.sections.hobbies && (
        <section id="hobbies" className="scroll-mt-20">
        <SidebarSection title={resolve(labels.sections.hobbies)}>
          <div className="grid grid-cols-2 gap-3">
            {hobbies.map((hobby, i) => (
              <div key={`${resolve(hobby.title)}-${i}`}>
                <p className="font-medium text-sm text-resume-text">{resolve(hobby.title)}</p>
                {hobby.details?.map((detail, j) => (
                  <p key={j} className="text-xs text-resume-text-secondary">
                    {resolve(detail)}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </SidebarSection>
        </section>
      )}
    </div>
  )
}

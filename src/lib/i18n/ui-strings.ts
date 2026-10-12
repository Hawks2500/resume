import type { LocalizedString } from '@/data/types'

/**
 * UI "chrome" strings (navigation, confidential mode, share, footer…).
 *
 * These are presentation strings, not CV content, so they live here instead of
 * bloating `resume-config.ts` / `labels`. Resolve them with the existing
 * `resolve()` from `useTranslation()`:
 *
 *   const { resolve } = useTranslation()
 *   resolve(ui.confidentialMode)
 */
export const ui = {
  // Navigation
  navProfile: { fr: 'Profil', en: 'Profile', de: 'Profil' },
  navSkills: { fr: 'Compétences', en: 'Skills', de: 'Kompetenzen' },
  navExperience: { fr: 'Expériences', en: 'Experience', de: 'Erfahrung' },
  navEducation: { fr: 'Formation', en: 'Education', de: 'Ausbildung' },
  navCertifications: { fr: 'Certifications', en: 'Certifications', de: 'Zertifizierungen' },
  navProjects: { fr: 'Projets', en: 'Projects', de: 'Projekte' },
  navContact: { fr: 'Contact', en: 'Contact', de: 'Kontakt' },
  menu: { fr: 'Menu', en: 'Menu', de: 'Menü' },

  // Confidential mode
  confidentialView: { fr: 'Vue confidentielle', en: 'Confidential view', de: 'Vertrauliche Ansicht' },
  fullProfile: { fr: 'Profil complet', en: 'Full profile', de: 'Vollständiges Profil' },
  enableConfidential: { fr: 'Mode confidentiel', en: 'Confidential mode', de: 'Vertraulicher Modus' },
  showFullProfile: { fr: 'Afficher le profil complet', en: 'Show full profile', de: 'Vollständiges Profil anzeigen' },
  lockProfile: { fr: 'Verrouiller le profil', en: 'Lock profile', de: 'Profil sperren' },
  unlockTitle: { fr: 'Déverrouiller le profil complet', en: 'Unlock full profile', de: 'Vollständiges Profil entsperren' },
  unlockDescription: {
    fr: "Entrez le code pour afficher les informations complètes (nom, contact, employeurs). Le déverrouillage reste actif le temps de la session.",
    en: 'Enter the code to reveal the full information (name, contact, employers). The unlock stays active for this session.',
    de: 'Geben Sie den Code ein, um die vollständigen Informationen (Name, Kontakt, Arbeitgeber) anzuzeigen. Die Entsperrung bleibt für diese Sitzung aktiv.',
  },
  unlockPlaceholder: { fr: 'Code d’accès', en: 'Access code', de: 'Zugangscode' },
  unlock: { fr: 'Déverrouiller', en: 'Unlock', de: 'Entsperren' },
  unlockError: { fr: 'Code incorrect.', en: 'Incorrect code.', de: 'Falscher Code.' },
  contactHidden: { fr: 'Coordonnées masquées', en: 'Contact information hidden', de: 'Kontaktdaten ausgeblendet' },

  // Share
  shareResume: { fr: 'Partager', en: 'Share', de: 'Teilen' },
  shareOnLinkedin: { fr: 'Partager sur LinkedIn', en: 'Share on LinkedIn', de: 'Auf LinkedIn teilen' },
  copyLink: { fr: 'Copier le lien', en: 'Copy link', de: 'Link kopieren' },
  linkCopied: { fr: 'Lien copié !', en: 'Link copied!', de: 'Link kopiert!' },

  // Footer / CTA
  ctaHeading: { fr: 'Mon profil vous intéresse ?', en: 'Interested in my profile?', de: 'Interesse an meinem Profil?' },
  ctaSubtext: {
    fr: 'Discutons de votre prochaine opportunité de stage.',
    en: "Let's talk about your next internship opportunity.",
    de: 'Sprechen wir über Ihre nächste Praktikumsmöglichkeit.',
  },
  lastUpdated: { fr: 'Dernière mise à jour', en: 'Last updated', de: 'Zuletzt aktualisiert' },
} satisfies Record<string, LocalizedString>

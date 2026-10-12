// ===== LOCALIZATION =====

export type LocalizedString = Record<string, string>

export type LocalizedStringArray = Record<string, string[]>

// ===== CONTACT =====

export type ContactType = 'email' | 'phone' | 'location' | 'github' | 'linkedin' | 'website'

export interface ContactItem {
  type: ContactType
  label: string
  href?: string
  /**
   * Label shown instead of `label` when confidential mode is active.
   * If omitted, sensitive items (email, phone, github, linkedin, website) are
   * hidden entirely in confidential mode; `location` stays visible.
   */
  confidentialLabel?: string
  /** Force this item to stay visible in confidential mode (default: location only). */
  showWhenConfidential?: boolean
}

// ===== SKILLS =====

export interface SkillCategory {
  title: LocalizedString
  type: 'badges' | 'text' | 'languages'
  items: SkillItem[]
}

export interface SkillItem {
  name: string | LocalizedString
  color?: string
  level?: LocalizedString
  details?: string
}

// ===== EXPERIENCES =====

import type { TechName } from './tech-registry'

export interface Experience {
  id: string
  company: LocalizedString
  /** Anonymized employer name shown in confidential mode (logo/website are hidden). */
  confidentialCompany?: LocalizedString
  logo?: string
  website?: string
  themeLogos?: {
    light?: string
    dark?: string
  }
  role: LocalizedString
  type?: LocalizedString
  period: LocalizedString
  description: LocalizedString
  techs: (TechName | (string & {}))[]
  isHighlighted?: boolean
  subItem?: {
    title: LocalizedString
    description: LocalizedString
  }
  details?: {
    context: LocalizedString
    tasks?: LocalizedStringArray
    training?: LocalizedStringArray
    env: LocalizedString
  }
}

// ===== PROJECTS =====

export interface Project {
  id: string
  title: LocalizedString
  /** Anonymized project title shown in confidential mode (logo/links are hidden). */
  confidentialTitle?: LocalizedString
  logo?: string
  themeLogos?: {
    light?: string
    dark?: string
  }
  description: LocalizedString
  techs: (TechName | (string & {}))[]
  details?: LocalizedStringArray
  url?: string
  github?: string
}

// ===== CERTIFICATIONS =====

export interface Certification {
  name: LocalizedString | string
  /** Issuing body, e.g. "PECB" or "Cisco". */
  issuer?: string
  /** Status / date line, e.g. "Obtenu 2023" or "En préparation · examen oct. 2026". */
  status?: LocalizedString
  /** True once the certification is actually obtained (drives the status pill color). */
  obtained?: boolean
  /** Optional issuer logo (e.g. "images/pecb.svg"), shown next to the certification. */
  logo?: string
  url?: string
}

// ===== EDUCATION =====

export interface Education {
  school: LocalizedString
  degree: LocalizedString
  specialty?: LocalizedString
  period?: string
  logo?: string
  techs?: (TechName | (string & {}))[]
  details?: LocalizedStringArray
}

// ===== HOBBIES =====

export interface Hobby {
  title: LocalizedString
  details?: LocalizedString[]
}

// ===== THEME =====

export interface ThemeColors {
  bg: string
  bgCard: string
  text: string
  textSecondary: string
  bgDark: string
  bgCardDark: string
  textDark: string
  textSecondaryDark: string
  primary: string
  primaryLight: string
  primaryDark: string
  primaryLightDark: string
  sidebarLight: string
  sidebarLightEnd: string
  sidebarDark: string
  sidebarDarkEnd: string
}

export type PresetName = 'minimal' | 'warm' | 'ocean' | 'forest' | 'slate' | 'lilac'

// ===== LABELS =====

export interface ResumeLabels {
  sections: {
    contact: LocalizedString
    skills: LocalizedString
    experience: LocalizedString
    education: LocalizedString
    certifications?: LocalizedString
    projects?: LocalizedString
    hobbies?: LocalizedString
  }
  experience: {
    mainTasks: LocalizedString
    moreTasks: LocalizedString
    showMoreTasks: LocalizedString
    showLessTasks: LocalizedString
    training?: LocalizedString
    techEnv: LocalizedString
    technologies: LocalizedString
  }
  actions: {
    clickHint: LocalizedString
    switchTheme: LocalizedString
    downloadPdf?: LocalizedString
  }
}

// ===== MAIN CONFIG =====

export interface ResumeConfig {
  personal: {
    name: string
    /** Display name used in confidential mode. If omitted, derived as "First L.". */
    confidentialName?: string
    photo?: string
    photoBackEmoji?: string
    title: LocalizedString
    subtitle?: LocalizedString
    location?: string
    /** Location shown in confidential mode (defaults to `location`, which is already coarse). */
    confidentialLocation?: string
  }
  seo: {
    title: string
    description: string
  }
  /** Availability / open-to-work badge. */
  availability?: {
    available: boolean
    label: LocalizedString
    /** Optional, editable availability window, e.g. "29 juin - 7 sept. 2026". */
    period?: LocalizedString
  }
  /**
   * Confidential mode - UX-only masking of personal/employer data.
   *
   * ⚠️ NOT a security feature. The site is a static client-side bundle: the
   * hidden data AND `unlockCode` both ship in the public JavaScript and can be
   * read by anyone inspecting the bundle. It only controls the default display.
   * Never store real secrets here.
   */
  confidential?: {
    enabled?: boolean
    /** What a fresh visitor sees first. Default: 'confidential'. */
    defaultMode?: 'confidential' | 'full'
    /** Client-side unlock code (see warning above). */
    unlockCode: string
  }
  /** Misc metadata shown in the footer. */
  meta?: {
    /** e.g. "2026" or "2026-10". */
    lastUpdated?: string
    /** Public URL used by the share button (falls back to the current page URL). */
    publicUrl?: string
  }
  languages: {
    default: string
    available: string[]
    labels: Record<string, string>
  }
  contact: ContactItem[]
  skills: SkillCategory[]
  experiences: Experience[]
  education: Education[]
  certifications?: Certification[]
  projects?: Project[]
  hobbies?: Hobby[]
  pdf?: {
    label?: LocalizedString
    /** Single path for all languages, or one path per language (hides button if no PDF for current language) */
    path: string | LocalizedString
    /**
     * Anonymized CV served while confidential mode is active. If omitted, the
     * download button is hidden in confidential mode so the full-identity CV is
     * not linked. Note: like confidential mode itself, this is UX-only — any file
     * placed in `public/` is reachable by its direct URL if someone knows it.
     */
    confidentialPath?: string | LocalizedString
  }
  theme?: {
    preset?: PresetName
    colors?: Partial<ThemeColors>
    defaultMode?: 'light' | 'dark' | 'system'
  }
  labels: ResumeLabels
}

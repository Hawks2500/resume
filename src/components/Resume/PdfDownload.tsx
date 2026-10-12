import { DownloadIcon } from '@/components/icons'
import { useTranslation } from '@/lib/i18n'
import { resumeConfig } from '@/data/resume-config'
import { useConfidential } from '@/lib/confidential'
import { assetUrl } from '@/lib/utils'
import { detectedAssets } from 'virtual:detected-assets'
import type { LocalizedString } from '@/data/types'

const DEFAULT_LABELS: Record<string, string> = {
  fr: 'Télécharger le PDF',
  en: 'Download PDF',
  de: 'PDF herunterladen',
}

function resolvePdfPath(path: string | LocalizedString, language: string): string | null {
  return typeof path === 'string' ? path : path[language] ?? null
}

export function PdfDownload() {
  const { language, resolve } = useTranslation()
  const { isConfidential } = useConfidential()

  // Resolve which PDF to offer.
  // - Confidential view: only the anonymized `confidentialPath` (if provided),
  //   otherwise no link so the full-identity CV is not exposed.
  // - Full view: explicit config path > auto-detected public/cv/<lang>/.
  let resolvedPath: string | null = null

  if (isConfidential) {
    if (resumeConfig.pdf?.confidentialPath) {
      resolvedPath = resolvePdfPath(resumeConfig.pdf.confidentialPath, language)
    }
  } else if (resumeConfig.pdf) {
    resolvedPath = resolvePdfPath(resumeConfig.pdf.path, language)
  } else {
    // Auto-detected PDFs: current language, then English, then the default
    // language — so a language without its own CV (e.g. DE) still offers one.
    const fallback = resumeConfig.languages.default
    resolvedPath =
      detectedAssets.pdf[language] ??
      detectedAssets.pdf.en ??
      detectedAssets.pdf[fallback] ??
      null
  }

  if (!resolvedPath) return null

  // Resolve label: explicit config > labels.actions > auto-detect default > fallback
  let downloadLabel: string

  if (resumeConfig.pdf?.label) {
    downloadLabel = resolve(resumeConfig.pdf.label)
  } else if (resumeConfig.labels.actions.downloadPdf) {
    downloadLabel = resolve(resumeConfig.labels.actions.downloadPdf)
  } else {
    downloadLabel = DEFAULT_LABELS[language] ?? DEFAULT_LABELS.en ?? 'Download PDF'
  }

  return (
    <a
      href={assetUrl(resolvedPath)}
      download={resolvedPath.split('/').pop() ?? 'resume.pdf'}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-resume-primary/10 text-resume-primary hover:bg-resume-primary/20 transition-colors text-sm font-medium"
    >
      <DownloadIcon className="w-4 h-4" />
      {downloadLabel}
    </a>
  )
}

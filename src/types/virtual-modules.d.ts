declare module 'virtual:detected-assets' {
  export const detectedAssets: {
    photo: string | null
    pdf: Record<string, string>
  }
}

interface ImportMetaEnv {
  /**
   * Confidential-mode unlock code, injected at build time (e.g. from a GitHub
   * Actions secret). Overrides `resumeConfig.confidential.unlockCode`.
   * Note: Vite inlines this into the client bundle — it is not secret at runtime.
   */
  readonly VITE_UNLOCK_CODE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

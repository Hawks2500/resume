import { motion } from 'framer-motion'
import { useTranslation } from '@/lib/i18n'
import { resumeConfig } from '@/data/resume-config'
import { Sidebar } from './Sidebar'
import { MainContent } from './MainContent'
import { SectionNav } from './SectionNav'
import { Footer } from './Footer'
import { ConfidentialIndicator } from './ConfidentialControl'

export function Resume() {
  const { resolve } = useTranslation()

  return (
    <div className="min-h-screen">
      <SectionNav />

      <div className="mx-auto w-full max-w-5xl px-4 pb-10 pt-5">
        {/* Confidential state indicator */}
        <div className="mb-3 flex justify-center">
          <ConfidentialIndicator />
        </div>

        {/* Resume card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-xl bg-resume-bg-card shadow-2xl dark:border dark:border-resume-primary/10"
        >
          <div className="flex flex-col-reverse md:flex-row">
            <Sidebar />
            <MainContent />
          </div>
        </motion.div>

        {/* Hint */}
        <p className="mt-5 text-center text-sm text-resume-text-secondary">
          {resolve(resumeConfig.labels.actions.clickHint)}
        </p>

        <Footer />
      </div>
    </div>
  )
}

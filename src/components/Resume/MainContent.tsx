import { useState } from 'react'
import { useTranslation } from '@/lib/i18n'
import { resumeConfig } from '@/data/resume-config'
import { useConfidential } from '@/lib/confidential'
import { Hero } from './Hero'
import { ExperienceItem } from './ExperienceItem'
import { ProjectItem } from './ProjectItem'
import { EducationItem } from './EducationItem'
import { CertificationItem } from './CertificationItem'

export function MainContent() {
  const { resolve, resolveArray } = useTranslation()
  const { isConfidential } = useConfidential()
  const { experiences, projects, education, certifications, labels } = resumeConfig
  const [expandedExp, setExpandedExp] = useState<string | null>(null)
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const [expandedEdu, setExpandedEdu] = useState<number | null>(null)

  const toggleExp = (id: string) => {
    setExpandedExp(expandedExp === id ? null : id)
  }

  const toggleEdu = (index: number) => {
    setExpandedEdu(expandedEdu === index ? null : index)
  }

  const toggleProject = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id)
  }

  const experienceLabels = {
    mainTasks: resolve(labels.experience.mainTasks),
    moreTasks: resolve(labels.experience.moreTasks),
    showMoreTasks: resolve(labels.experience.showMoreTasks),
    showLessTasks: resolve(labels.experience.showLessTasks),
    training: labels.experience.training ? resolve(labels.experience.training) : undefined,
    techEnv: resolve(labels.experience.techEnv),
    technologies: resolve(labels.experience.technologies),
  }

  return (
    <div className="md:w-[62%] p-8">
      <Hero />

      {/* Experiences */}
      <div id="experience" className="relative scroll-mt-20">
        <h2 className="text-sm font-bold tracking-widest text-resume-text mb-6 pb-2 border-b border-resume-primary/20">
          {resolve(labels.sections.experience)}
        </h2>
        <div className="space-y-2">
          {experiences.map((exp) => {
            const company = resolve(
              isConfidential && exp.confidentialCompany ? exp.confidentialCompany : exp.company,
            )
            return (
            <ExperienceItem
              key={exp.id}
              year={resolve(exp.period)}
              company={company}
              logo={isConfidential ? undefined : exp.logo}
              website={isConfidential ? undefined : exp.website}
              themeLogos={isConfidential ? undefined : exp.themeLogos}
              type={exp.type ? resolve(exp.type) : undefined}
              role={resolve(exp.role)}
              description={resolve(exp.description)}
              techs={exp.techs}
              expanded={expandedExp === exp.id}
              onToggle={() => toggleExp(exp.id)}
              details={
                exp.details
                  ? {
                      context: resolve(exp.details.context),
                      tasks: exp.details.tasks ? resolveArray(exp.details.tasks) : undefined,
                      training: exp.details.training ? resolveArray(exp.details.training) : undefined,
                      env: resolve(exp.details.env),
                    }
                  : undefined
              }
              subItem={
                exp.subItem
                  ? {
                      title: resolve(exp.subItem.title),
                      description: resolve(exp.subItem.description),
                    }
                  : undefined
              }
              labels={experienceLabels}
              isHighlighted={exp.isHighlighted}
            />
            )
          })}
        </div>
      </div>

      {/* Projects */}
      {projects && projects.length > 0 && labels.sections.projects && (
        <div id="projects" className="mt-8 scroll-mt-20">
          <h2 className="text-sm font-bold tracking-widest text-resume-text mb-4 pb-2 border-b border-resume-primary/20">
            {resolve(labels.sections.projects)}
          </h2>
          <div className="space-y-1">
            {projects.map((project) => (
              <ProjectItem
                key={project.id}
                title={resolve(
                  isConfidential && project.confidentialTitle
                    ? project.confidentialTitle
                    : project.title,
                )}
                logo={isConfidential ? undefined : project.logo}
                themeLogos={isConfidential ? undefined : project.themeLogos}
                description={resolve(project.description)}
                techs={project.techs}
                projectDetails={project.details ? resolveArray(project.details) : undefined}
                expanded={expandedProject === project.id}
                onToggle={() => toggleProject(project.id)}
                url={isConfidential ? undefined : project.url}
                github={isConfidential ? undefined : project.github}
              />
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      <div id="education" className="mt-8 scroll-mt-20">
        <h2 className="text-sm font-bold tracking-widest text-resume-text mb-4 pb-2 border-b border-resume-primary/20">
          {resolve(labels.sections.education)}
        </h2>
        <div className="space-y-4">
          {education.map((edu, i) => (
            <EducationItem
              key={`${resolve(edu.school)}-${resolve(edu.degree)}-${edu.period ?? i}`}
              school={resolve(edu.school)}
              degree={resolve(edu.degree)}
              specialty={edu.specialty ? resolve(edu.specialty) : undefined}
              period={edu.period}
              logo={edu.logo}
              techs={edu.techs}
              details={edu.details ? resolveArray(edu.details) : undefined}
              expanded={expandedEdu === i}
              onToggle={() => toggleEdu(i)}
            />
          ))}
        </div>
      </div>

      {/* Certifications */}
      {certifications && certifications.length > 0 && labels.sections.certifications && (
        <div id="certifications" className="mt-8 scroll-mt-20">
          <h2 className="text-sm font-bold tracking-widest text-resume-text mb-4 pb-2 border-b border-resume-primary/20">
            {resolve(labels.sections.certifications)}
          </h2>
          <div className="space-y-1">
            {certifications.map((cert, i) => (
              <CertificationItem
                key={`${typeof cert.name === 'string' ? cert.name : resolve(cert.name)}-${i}`}
                name={typeof cert.name === 'string' ? cert.name : resolve(cert.name)}
                issuer={cert.issuer}
                status={cert.status ? resolve(cert.status) : undefined}
                obtained={cert.obtained}
                logo={cert.logo}
                url={cert.url}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

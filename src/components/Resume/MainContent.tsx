import { useState } from 'react'
import { useTranslation } from '@/lib/i18n'
import { resumeConfig } from '@/data/resume-config'
import { ExperienceItem } from './ExperienceItem'
import { ProjectItem } from './ProjectItem'
import { EducationItem } from './EducationItem'

export function MainContent() {
  const { resolve, resolveArray } = useTranslation()
  const { personal, experiences, projects, education, labels } = resumeConfig
  const subtitle = personal.subtitle ? resolve(personal.subtitle) : undefined
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
    training: labels.experience.training ? resolve(labels.experience.training) : undefined,
    techEnv: resolve(labels.experience.techEnv),
    technologies: resolve(labels.experience.technologies),
  }

  return (
    <div className="md:w-[62%] p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-[0.15em] text-resume-text">
          {personal.name.toUpperCase()}
        </h1>
        <p className="text-base text-resume-text-secondary tracking-widest mt-2">
          {resolve(personal.title).toUpperCase()}
        </p>
        {subtitle && (
          <p className="text-sm text-resume-primary mt-1">
            {subtitle.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < subtitle.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
        )}
      </div>

      {/* Experiences */}
      <div className="relative">
        <h2 className="text-sm font-bold tracking-widest text-resume-text mb-6 pb-2 border-b border-resume-primary/20">
          {resolve(labels.sections.experience)}
        </h2>
        <div className="space-y-2">
          {experiences.map((exp) => (
            <ExperienceItem
              key={exp.id}
              year={resolve(exp.period)}
              company={resolve(exp.company)}
              logo={exp.logo}
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
          ))}
        </div>
      </div>

      {/* Projects */}
      {projects && projects.length > 0 && labels.sections.projects && (
        <div className="mt-8">
          <h2 className="text-sm font-bold tracking-widest text-resume-text mb-4 pb-2 border-b border-resume-primary/20">
            {resolve(labels.sections.projects)}
          </h2>
          <div className="space-y-1">
            {projects.map((project) => (
              <ProjectItem
                key={project.id}
                title={resolve(project.title)}
                logo={project.logo}
                themeLogos={project.themeLogos}
                description={resolve(project.description)}
                techs={project.techs}
                projectDetails={project.details ? resolveArray(project.details) : undefined}
                expanded={expandedProject === project.id}
                onToggle={() => toggleProject(project.id)}
                url={project.url}
                github={project.github}
              />
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      <div className="mt-8">
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
    </div>
  )
}

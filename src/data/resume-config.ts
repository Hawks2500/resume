// Copy resume-config.example.ts and customize it with your own information.
// See docs/CUSTOMIZATION.md for a detailed guide.
import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Yanis Zerrar',
    photoBackEmoji: '🛡️',
    title: {
      fr: 'Ingénieur Sécurité (GRC & Technique)',
      en: 'Security Engineer (GRC & Technical)',
    },
    subtitle: {
      fr: 'Profil polyvalent : cybersécurité, développement, data & IA',
      en: 'Versatile profile: cybersecurity, development, data & AI',
    },
    location: 'Strasbourg / Montbéliard, France',
  },
  seo: {
    title: 'Yanis Zerrar — Ingénieur Sécurité',
    description: 'CV interactif de Yanis Zerrar, ingénieur sécurité spécialisé en GRC, cybersécurité et développement sécurisé.',
  },
  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' },
  },
  contact: [
    { type: 'linkedin', label: 'yanis-zerrar', href: 'https://www.linkedin.com/in/yanis-zerrar/' },
    { type: 'github', label: 'Hawks2500', href: 'https://github.com/Hawks2500' },
    { type: 'email', label: 'yanis.zerrar@gmail.com' },
    { type: 'phone', label: '+33 7 66 55 67 05' },
    { type: 'location', label: 'Strasbourg / Montbéliard, France' },
  ],

  skills: [
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        { name: { fr: 'Français', en: 'French' }, level: { fr: 'Natif', en: 'Native' } },
        { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'B2', en: 'B2' } },
        { name: { fr: 'Allemand', en: 'German' }, level: { fr: 'B1', en: 'B1' } },
        { name: { fr: 'Arabe', en: 'Arabic' }, level: { fr: 'B1', en: 'B1' } },
      ],
    },
    {
      title: { fr: 'Cybersécurité', en: 'Cybersecurity' },
      type: 'badges',
      items: [
        { name: 'Active Directory' },
        { name: 'SIEM' },
        { name: 'EDR' },
        { name: 'Firewall' },
        { name: 'GRC' },
      ],
    },
    {
      title: { fr: 'Développement', en: 'Development' },
      type: 'badges',
      items: [
        { name: 'Java' },
        { name: 'Python' },
        { name: 'C++' },
        { name: 'PHP' },
        { name: 'Angular' },
        { name: 'React' },
        { name: 'Node.js' },
      ],
    },
    {
      title: { fr: 'Data & IA', en: 'Data & AI' },
      type: 'badges',
      items: [
        { name: 'Machine Learning' },
        { name: 'Data Analysis' },
        { name: 'Power Platform' },
      ],
    },
    {
      title: { fr: 'Réseaux', en: 'Networking' },
      type: 'badges',
      items: [
        { name: 'RIP' },
        { name: 'OSPF' },
        { name: 'BGP' },
        { name: 'MPLS' },
        { name: 'Cisco' },
      ],
    },
    {
      title: { fr: 'Méthodologies', en: 'Methodologies' },
      type: 'text',
      items: [
        { name: { fr: 'GRC, Gestion des risques, Sécurité applicative', en: 'GRC, Risk management, Application security' } },
      ],
    },
    {
      title: { fr: 'Qualités', en: 'Soft skills' },
      type: 'text',
      items: [
        { name: { fr: 'Leadership, Adaptabilité, Autonomie, Esprit analytique', en: 'Leadership, Adaptability, Autonomy, Analytical mindset' } },
      ],
    },
  ],

  experiences: [
    {
      id: 'eurometropole',
      company: { fr: 'Eurométropole de Strasbourg', en: 'Eurometropolis of Strasbourg' },
      role: { fr: 'Ingénieur Sécurité', en: 'Security Engineer' },
      type: { fr: 'Apprentissage', en: 'Apprenticeship' },
      period: { fr: '2024 - Présent', en: '2024 - Present' },
      description: {
        fr: 'Participation à la gouvernance de la sécurité et mise en œuvre de solutions techniques.',
        en: 'Contribution to security governance and implementation of technical solutions.',
      },
      techs: ['SIEM', 'EDR', 'Active Directory', 'API', 'Firewall'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Environnement institutionnel avec fortes exigences de sécurité.',
          en: 'Institutional environment with strong security requirements.',
        },
        tasks: {
          fr: [
            'Participation à la gouvernance SSI (GRC)',
            'Sécurisation d\'environnements Active Directory',
            'Développement d\'API sécurisées',
            'Déploiement de solutions EDR, SIEM et firewall',
            'Supervision et gestion d\'incidents de sécurité',
            'Sensibilisation des utilisateurs',
          ],
          en: [
            'Participation in security governance (GRC)',
            'Securing Active Directory environments',
            'Development of secure APIs',
            'Deployment of EDR, SIEM and firewall solutions',
            'Security monitoring and incident response',
            'User awareness activities',
          ],
        },
        env: {
          fr: 'SIEM / EDR / Active Directory / API / Firewall',
          en: 'SIEM / EDR / Active Directory / API / Firewall',
        },
      },
    },
    {
      id: 'forvia',
      company: { fr: 'Forvia', en: 'Forvia' },
      role: { fr: 'Stagiaire Data', en: 'Data Intern' },
      type: { fr: 'Stage', en: 'Internship' },
      period: { fr: '2024', en: '2024' },
      description: {
        fr: 'Analyse de données et automatisation via Power Platform.',
        en: 'Data analysis and automation using Power Platform.',
      },
      techs: ['Power Platform'],
    },
    {
      id: 'utbm-projects',
      company: { fr: 'UTBM', en: 'UTBM' },
      role: { fr: 'Projets académiques', en: 'Academic Projects' },
      type: { fr: 'Projet', en: 'Project' },
      period: { fr: '2024 - Présent', en: '2024 - Present' },
      description: {
        fr: 'Projets en data analyse, machine learning et développement.',
        en: 'Projects in data analysis, machine learning and development.',
      },
      techs: ['Angular', 'Node.js', 'Machine Learning'],
    },
    {
      id: 'pointb',
      company: { fr: 'Point B', en: 'Point B' },
      role: { fr: 'Employé polyvalent', en: 'Versatile Employee' },
      type: { fr: 'Job étudiant', en: 'Student job' },
      period: { fr: '2022 - Présent', en: '2022 - Present' },
      description: {
        fr: 'Travail en équipe avec prise de responsabilités et leadership.',
        en: 'Teamwork with leadership responsibilities.',
      },
      techs: ['Teamwork', 'Management', 'Customer Service'],
    },
  ],

  education: [
    {
      school: { fr: 'UTBM', en: 'UTBM' },
      degree: { fr: 'Diplôme d\'ingénieur Informatique', en: 'Engineering Degree in Computer Science' },
      specialty: { fr: 'Cybersécurité, Data & IA', en: 'Cybersecurity, Data & AI' },
      period: '2024 - 2027',
    },
    {
      school: { fr: 'IUT Nord Franche-Comté', en: 'IUT Nord Franche-Comté' },
      degree: { fr: 'BUT Réseaux & Télécommunications', en: 'Bachelor in Networks & Telecommunications' },
      specialty: { fr: 'Cybersécurité', en: 'Cybersecurity' },
      period: '2022 - 2024',
    },
  ],

  projects: [],
  hobbies: [],

  theme: { preset: 'slate' },

  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCES', en: 'EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      projects: { fr: 'PROJETS', en: 'PROJECTS' },
      hobbies: { fr: 'LOISIRS', en: 'HOBBIES' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main tasks:' },
      moreTasks: { fr: 'autres missions...', en: 'more tasks...' },
      training: { fr: 'Formations :', en: 'Training:' },
      techEnv: { fr: 'Env. technique :', en: 'Tech environment:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez pour voir les détails', en: 'Click to see details' },
      switchTheme: { fr: 'Changer le thème', en: 'Switch theme' },
      downloadPdf: { fr: 'Télécharger le CV', en: 'Download CV' },
    },
  },
}

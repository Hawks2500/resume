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
      fr: 'Profil polyvalent : cybersécurité, développement, data & IA — Recherche de stage à l\'étranger (Suisse/Allemagne) du 29 juin 2026 au 7 septembre 2026',
      en: 'Versatile profile: cybersecurity, development, data & AI — Looking for an international internship (Switzerland/Germany) from June 29, 2026 to September 7, 2026',
    },
    location: 'Strasbourg / Montbéliard, France',
  },

  seo: {
    title: 'Yanis Zerrar — Ingénieur Sécurité',
    description: 'CV interactif de Yanis Zerrar, ingénieur sécurité spécialisé en GRC, cybersécurité, réseaux et développement sécurisé.',
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
      title: { fr: 'Cybersécurité & GRC', en: 'Cybersecurity & GRC' },
      type: 'badges',
      items: [
        { name: 'ISO 27001' },
        { name: 'Risk Management' },
        { name: 'IAM' },
        { name: 'Active Directory' },
        { name: 'SIEM' },
        { name: 'EDR' },
        { name: 'Firewall' },
        { name: 'Zero Trust' },
        { name: 'Incident Response' },
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
        { name: 'REST API' },
      ],
    },
    {
      title: { fr: 'Réseaux & Systèmes', en: 'Networking & Systems' },
      type: 'badges',
      items: [
        { name: 'TCP/IP' },
        { name: 'BGP' },
        { name: 'OSPF' },
        { name: 'MPLS' },
        { name: 'LAN/WAN' },
        { name: 'Linux' },
        { name: 'Windows Server' },
        { name: 'Cisco' },
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
      title: { fr: 'Méthodologies', en: 'Methodologies' },
      type: 'text',
      items: [
        { name: { fr: 'GRC, Gestion des risques, Sécurité applicative, ISO 27001', en: 'GRC, Risk management, Application security, ISO 27001' } },
      ],
    },
    {
      title: { fr: 'Qualités', en: 'Soft skills' },
      type: 'text',
      items: [
        { name: { fr: 'Leadership, Adaptabilité, Autonomie, Esprit analytique, Gestion de projet', en: 'Leadership, Adaptability, Autonomy, Analytical mindset, Project management' } },
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
        fr: 'Contribution à la gouvernance SSI et à la sécurisation technique du SI.',
        en: 'Contribution to security governance and technical security.',
      },
      techs: ['ISO 27001', 'SIEM', 'EDR', 'Active Directory', 'API Security'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Environnement institutionnel avec fortes exigences de sécurité.',
          en: 'Institutional environment with strong security requirements.',
        },
        tasks: {
          fr: [
            'Participation à la gouvernance SSI (GRC)',
            'Sécurisation Active Directory',
            'Développement d\'API sécurisées',
            'Déploiement SIEM / EDR / firewall',
            'Gestion d\'incidents',
          ],
          en: [
            'Security governance (GRC)',
            'Active Directory security',
            'Secure API development',
            'SIEM / EDR / firewall deployment',
            'Incident response',
          ],
        },
        env: {
          fr: 'SIEM / EDR / Active Directory / API Security / Firewall',
          en: 'SIEM / EDR / Active Directory / API Security / Firewall',
        },
      },
    },
  ],

  education: [
    {
      school: { fr: 'UTBM', en: 'UTBM' },
      degree: { fr: 'Diplôme d\'ingénieur Informatique', en: 'Engineering Degree' },
      specialty: { fr: 'Cybersécurité, Data & IA', en: 'Cybersecurity, Data & AI' },
      period: '2024 - 2027',
    },
    {
      school: { fr: 'IUT Nord Franche-Comté', en: 'IUT Nord Franche-Comté' },
      degree: { fr: 'BUT Réseaux & Télécommunications', en: 'Bachelor in Networks & Telecommunications' },
      specialty: {
        fr: 'Cybersécurité, Réseaux, Administration Systèmes',
        en: 'Cybersecurity, Networking, Systems Administration',
      },
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

// Copy resume-config.example.ts and customize it with your own information.
// See docs/CUSTOMIZATION.md for a detailed guide.
import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Yanis Zerrar',
    photoBackEmoji: '🛡️',
    title: {
      fr: 'Ingénieur en Cybersécurité | Systèmes Sécurisés & Sécurité Applicative',
      en: 'Cybersecurity Engineer | Secure Systems, Application Security',
    },
    subtitle: {
      fr: 'Cybersécurité & développement sécurisé | APIs, Automatisation & Threat Intelligence \nRecherche de stage à l\'étranger en Suisse ou Allemagne du 29 juin 2026 au 7 septembre 2026',
      en: 'Cybersecurity & Secure Development | APIs, Automation & Threat Intelligence \nLooking for an internship in Switzerland or Germany (June 29 – September 7, 2026)'
    },
    location: 'France',
  },

  seo: {
    title: 'Yanis Zerrar — Ingénieur Sécurité',
    description: 'Interactive resume of Yanis ZERRAR, cybersecurity engineer specialized in GRC, cybersecurity, secure development and automation.',
  },

  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' },
  },

  contact: [
    { type: 'linkedin', label: 'Yanis ZERRAR', href: 'https://www.linkedin.com/in/yanis-zerrar/' },
    { type: 'github', label: 'Hawks2500', href: 'https://github.com/Hawks2500' },
    { type: 'email', label: 'yanis.zerrar@gmail.com', href: 'mailto:yanis.zerrar@gmail.com' },
    { type: 'phone', label: '+33 7 66 55 67 05' },
    { type: 'location', label: 'France' },
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
        { name: 'IAM' },
        { name: 'SIEM' },
        { name: 'MISP' },
        { name: 'API Security' },
        { name: 'Application Security' },
        { name: 'SAST' },
        { name: 'ISO 27001' },
        { name: 'Incident Response' },
      ],
    },
    {
      title: { fr: 'Développement', en: 'Development' },
      type: 'badges',
      items: [
        { name: 'PHP' },
        { name: 'Rust' },
        { name: 'React' },
        { name: 'Node.js' },
        { name: 'REST' },
        { name: 'TypeScript' },
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
        { name: 'Stormshield' },
        { name: 'pfSense' },
      ],
    },
    {
      title: { fr: 'Data & Analytics', en: 'Data & Analytics' },
      type: 'badges',
      items: [
        { name: 'Power BI' },
        { name: 'Power Platform' },
        { name: 'Elasticsearch' },
        { name: 'MySQL' },
        { name: 'PostgreSQL' },
      ],
    },
    {
      title: { fr: 'Méthodologies', en: 'Methodologies' },
      type: 'text',
      items: [
        { name: { fr: 'Sécurité applicative, Agile, SCRUM, ISO 27001', en: 'Application security, Agile, SCRUM, ISO 27001' } },
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
      company: { fr: 'Eurométropole de Strasbourg', en: 'City and Eurometropolis of Strasbourg' },
      logo: 'images/eurometropole.JPG',
      role: { fr: 'Ingénieur Sécurité', en: 'Security Engineer' },
      type: { fr: 'Apprentissage', en: 'Apprenticeship' },
      period: { fr: 'Septembre 2024 - Présent', en: 'September 2024 - Present' },
      description: {
        fr: 'Gouvernance SSI et sécurisation technique du SI dans un environnement institutionnel critique.',
        en: 'Security governance and technical hardening of information systems in a critical institutional environment.',
      },
      techs: ['ISO 27001', 'SIEM', 'Active Directory', 'API Security', 'PowerShell', 'Automation'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Environnement institutionnel avec fortes exigences de sécurité (collectivité de + 500 000 habitants).',
          en: 'Institutional environment with strong security requirements (municipality with over 500,000 inhabitants).',
        },
        tasks: {
          fr: [
            'Participation à la gouvernance SSI (GRC)',
            'Optimisation du traitement des incidents d\'hameçonnage avec une réduction d’environ 25% du temps de traitement',
            'Sécurisation d\'environnements Active Directory',
            'Développement d\'API sécurisées et scripts d’automatisation (PowerShell + API)',
            'Exploitation de solutions SIEM et firewall',
            'Supervision et gestion d\'incidents de sécurité',
            'Intégration et utilisation de MISP pour le partage et l’exploitation de threat intelligence',
            'Développement d’une application desktop MISP (Tauri + React)',
            'Sensibilisation des utilisateurs aux bonnes pratiques de cybersécurité',
          ],
          en: [
            'Participation in security governance (GRC)',
            'Optimization of phishing incident handling with a 25% reduction in processing time',
            'Securing Active Directory environments',
            'Development of secure APIs and automation scripts (PowerShell + API)',
            'Exploitation of SIEM and firewall solutions',
            'Security monitoring and incident response',
            'Integrated and leveraged MISP for threat intelligence sharing and analysis',
            'Development of a MISP desktop application (Tauri + React)',
            'User awareness activities to promote cybersecurity best practices',
          ],
        },
        env: {
          fr: 'SIEM / Active Directory / API / Firewall',
          en: 'SIEM / Active Directory / API / Firewall',
        },
      },
    },
    {
      id: 'cyberv-it',
      company: { fr: 'CyberV', en: 'CyberV' },
      logo: 'images/cyberv.png',
      role: { fr: 'Responsable IT', en: 'Head of IT' },
      type: { fr: 'Association', en: 'Organization' },
      period: { fr: 'Octobre 2024 - Présent', en: 'October 2024 - Present' },
      description: {
        fr: 'Pilotage du pôle IT d’une association en cybersécurité : infrastructure, développement web et outils internes.',
        en: 'Led IT operations of a cybersecurity organization: infrastructure, web development and internal tools.',
      },
      techs: ['Laravel', 'GCP', 'GitHub Actions', 'Discord Bot', 'Web Development', 'Team Management'],
      isHighlighted: false,
      details: {
        context: {
          fr: 'Association en cybersécurité avec gestion de projets techniques et événements.',
          en: 'Cybersecurity association focused on technical projects and events.',
        },
        tasks: {
          fr: [
            'Gestion de l’infrastructure cloud et des accès (Google Cloud)',
            'Développement et maintenance de plateformes web',
            'Création d’outils internes (bot Discord, automatisation)',
            'Analyse SAST pour améliorer la sécurité des applications',
            'Organisation d’événements et ateliers cybersécurité',
            'Coordination des projets techniques de l’association',
          ],
          en: [
            'Managed cloud infrastructure and access control (Google Cloud)',
            'Developed and maintained web platforms',
            'Built internal tools (Discord bot, automation systems)',
            'Performed SAST analysis to improve application security',
            'Organized cybersecurity events and workshops',
            'Coordinated technical projects within the association',
          ],
        },
        env: {
          fr: 'Google Cloud / Laravel / GitHub / Discord API / CI-CD',
          en: 'Google Cloud / Laravel / GitHub / Discord API / CI-CD',
        },
      },
    },
    {
      id: 'forvia',
      company: { fr: 'Forvia', en: 'Forvia' },
      logo: 'images/forvia.svg',
      role: { fr: 'Stagiaire Data', en: 'Data Intern' },
      type: { fr: 'Stage', en: 'Internship' },
      period: { fr: 'Avril 2024 - Juin 2024', en: 'April 2024 - June 2024' },
      description: {
        fr: 'Analyse de données et automatisation via Power Platform.',
        en: 'Data analysis and automation using Power Platform.',
      },
      techs: ['Power Platform', 'SharePoint', 'Excel VBA', 'Data Analysis', 'Automation'],
      details: {
        context: {
          fr: 'Environnement industriel automobile avec besoin d\'optimisation de processus métier.',
          en: 'Automotive industrial environment with need for business process optimization.',
        },
        tasks: {
          fr: [
            'Développement et déploiement d\'une application Power Apps intégrant automatiquement une base de données externe via Power Automate',
            'Automatisation de workflows de rappels par messagerie, supprimant les relances manuelles de l\'équipe',
            'Migration d\'un suivi Excel vers SharePoint avec gestion de tableaux et macros VBA, centralisant la donnée et réduisant les erreurs de saisie',
            'Documentation et formation utilisateurs',
          ],
          en: [
            'Developed and deployed a Power Apps solution integrating an external database automatically via Power Automate',
            'Automated team notification workflows, eliminating manual follow-up tasks',
            'Creation of Power Automate workflows',
            'Migrated Excel-based tracking to SharePoint with VBA-powered table management, centralizing data and reducing manual entry errors',
            'Documentation and user training',
          ],
        },
        env: {
          fr: 'Power Platform / SharePoint / Excel VBA / SQL',
          en: 'Power Platform / SharePoint / Excel VBA / SQL',
        },
      },
    },
  ],

  education: [
    {
      school: { fr: 'UTBM', en: 'UTBM' },
      logo: 'images/utbm.svg',
      degree: { fr: 'Diplôme d\'ingénieur Informatique', en: 'Master\'s-level Engineering Degree in Computer Science' },
      specialty: { fr: 'Cybersécurité, Data & IA', en: 'Cybersecurity, Data & AI' },
      period: '2024 - 2027',
      techs: ['Cybersecurity', 'Data Analysis', 'Machine Learning', 'Project Management'],
      details: {
      fr: [
        'Data analyse et machine learning',
        'Cybersécurité et sécurisation des systèmes d\'information',
        'Développement logiciel et architectures applicatives',
        'Administration systèmes et réseaux',
        'Gestion de projet et méthodes Agile',
        'Bases de données SQL et NoSQL (PostgreSQL, MongoDB, Elasticsearch)',
      ],
      en: [
        'Data analysis and machine learning',
        'Cybersecurity and information systems security',
        'Software development and application architectures',
        'Systems and network administration',
        'Project management and Agile methodologies',
        'SQL and NoSQL databases (PostgreSQL, MongoDB, Elasticsearch)',
      ],
    },
    },
    {
      school: { fr: 'IUT Nord Franche-Comté', en: 'IUT Nord Franche-Comté' },
      logo: 'images/iut-nord-franche-comte.png',
      degree: { fr: 'BUT Réseaux & Télécommunications', en: 'Bachelor in Networks & Telecommunications' },
      specialty: {
        fr: 'Cybersécurité, Réseaux, Administration Systèmes',
        en: 'Cybersecurity, Networking, Systems Administration',
      },
      period: '2022 - 2024',
      techs: ['Network Administration', 'OSPF', 'BGP', 'MPLS', 'Firewall', 'UDP/TCP', 'CCNA'],
      details: {
      fr: [
        'Administration systèmes et réseaux',
        'Protocoles de routage (RIP, OSPF, BGP, MPLS)',
        'Conception et déploiement réseaux LAN/WAN',
        'Configuration de firewalls (Stormshield, pfSense)',
        'Développement d\'applications réseau (UDP Android/Desktop)',
        'Certification Cisco CCNA',
      ],
      en: [
        'Systems and network administration',
        'Routing protocols (RIP, OSPF, BGP, MPLS)',
        'LAN/WAN network design and deployment',
        'Firewall configuration (Stormshield, pfSense)',
        'Network application development (UDP Android/Desktop)',
        'Cisco CCNA certification',
      ],
    },
    },
  ],

  projects: [
    {
      id: 'data-annotation',
      title: { fr: 'Data Annotation — Conduite Autonome', en: 'Data Annotation — Autonomous Driving' },
      description: {
        fr: 'Plateforme web de visualisation et d\'annotation d\'images pour la conduite urbaine autonome.',
        en: 'Web platform for image visualization and annotation in urban autonomous driving contexts.',
      },
      techs: ['Python', 'Web', 'Computer Vision', 'Dataset', 'Segmentation'],
      details: {
        fr: [
          'Visualisation d\'images préchargées depuis un dataset de conduite urbaine',
          'Analyse d\'objets segmentés : piétons, véhicules, infrastructures urbaines',
          'Système de priorisation des objets selon leur criticité (ex : piéton traversant > véhicule garé)',
          'Projet académique réalisé à l\'UTBM',
        ],
        en: [
          'Visualized preloaded images from an urban driving dataset',
          'Analyzed segmented objects: pedestrians, vehicles, urban infrastructure',
          'Implemented an object priority system based on driving criticality (e.g., crossing pedestrian > parked vehicle)',
          'Academic project completed at UTBM',
        ],
      },
      github: 'https://github.com/Hawks2500/Data-Annotation',
    },
    {
      id: 'parkinson',
      title: { fr: 'Recherche Parkinson — VisionMD × CHU de Besançon', en: 'Parkinson Research — VisionMD × CHU Besançon' },
      description: {
        fr: 'Projet de recherche en cours : analyse de données médicales pour la détection de la maladie de Parkinson.',
        en: 'Ongoing research project: medical data analysis for Parkinson\'s disease detection.',
      },
      techs: ['Python', 'Data Analysis', 'Medical Research', 'AI'],
      details: {
        fr: [
          'Collaboration avec l\'équipe de recherche du CHU de Besançon',
          'Analyse de données médicales pour la détection et le suivi de la maladie de Parkinson',
          'Projet de recherche en cours — dépôt GitHub à venir',
        ],
        en: [
          'Collaboration with the research team at Besançon Hospital (CHU)',
          'Worked on sensitive medical data in a research context',
          'Medical data analysis for Parkinson\'s disease detection and monitoring',
          'Ongoing research project — GitHub repository coming soon',
        ],
      },
    },
    {
      id: 'cyberv-platform',
      title: { fr: 'CyberV — Plateforme associative', en: 'CyberV — Association Platform' },
      logo: 'images/cyberv.png',
      themeLogos: {
        light: 'images/CyberV_black.png',
        dark: 'images/cyberv.png',
      },
      description: {
        fr: 'Plateforme web complète pour une association en cybersécurité.',
        en: 'Full-featured web platform for a student cybersecurity association.',
      },
      techs: ['Laravel', 'SSO Google', 'GCP', 'GitHub Actions', 'Blog', 'e-learning'],
      details: {
        fr: [
          'Blog, suivi de bug hunting et gestion des statuts des serveurs en temps réel',
          'Gestion des adhérents Hello Asso et authentification SSO via Google (GCP)',
          'CI/CD avec GitHub Actions au sein de l\'organisation GitHub CyberV',
          'Plateforme e-learning en cours d\'intégration (cybersécurité technique, droit, RGPD, sensibilisation)',
          'Plateforme de CTF pour les événements de l\'association',
        ],
        en: [
          'Blog, bug hunting tracker and real-time server status monitoring',
          'Member management with Google SSO authentication (GCP)',
          'Secure authentication implementation (SSO, access control)',
          'CI/CD pipeline with GitHub Actions within the CyberV GitHub organization',
          'E-learning platform in progress (technical cyber, law, GDPR, awareness)',
          'CTF platform for the association\'s events',
        ],
      },
      url: 'http://cyberv.fr/',
    },
  ],
  hobbies: [
    {
      title: { fr: 'Cybersécurité', en: 'Cybersecurity' },
      details: [
        { fr: 'Speaker et événements en cybersécurité', en: 'Speaker and cybersecurity events' },      ],
    },
    {
      title: { fr: 'Boxe', en: 'Boxing' },
    },
    {
      title: { fr: 'Automobiles & Motos', en: 'Cars & Motorcycles' },
    },
    {
      title: { fr: 'Natation', en: 'Swimming' },
    },
  ],

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

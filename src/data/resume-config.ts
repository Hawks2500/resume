// Copy resume-config.example.ts and customize it with your own information.
// See docs/CUSTOMIZATION.md for a detailed guide.
import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Yanis Zerrar',
    // Shown in confidential mode. Remove this line to auto-derive "Yanis Z.".
    confidentialName: 'Yanis Z.',
    photoBackEmoji: '🛡️',
    title: {
      fr: 'Étudiant Ingénieur Informatique, GRC & Cybersécurité',
      en: 'Computer Engineering Student, Cybersecurity & GRC',
      de: 'Informatik-Ingenieurstudent, Cybersecurity & GRC',
    },
    subtitle: {
      fr: 'Généraliste en informatique (UTBM) et Risk Manager en collectivité : analyses de risques EBIOS RM et gouvernance SSI, avec une base réseaux & systèmes.',
      en: 'Computer engineering generalist (UTBM) and Risk Manager in a public authority: EBIOS RM risk assessments and security governance, with a networks & systems background.',
      de: 'Informatik-Generalist (UTBM) und Risk Manager in einer Gebietskörperschaft: EBIOS-RM-Risikoanalysen und Security-Governance, mit Netzwerk- & Systembasis.',
    },
    location: 'Montbéliard, France',
  },

  seo: {
    title: 'Yanis Zerrar - Cybersecurity & GRC',
    description: 'Interactive resume of Yanis ZERRAR, computer engineering student specialized in cybersecurity and GRC: EBIOS RM risk assessments, ISO 27001/NIS2 governance, security tooling and automation.',
  },

  // Availability badge - edit freely (set available:false to hide the "open" dot).
  availability: {
    available: true,
    label: { fr: 'Disponible pour un stage', en: 'Available for internship', de: 'Verfügbar für ein Praktikum' },
    period: { fr: '3-6 mois à l’étranger · dès janv. 2027', en: '3-6 months abroad · from Jan 2027', de: '3-6 Monate im Ausland · ab Jan. 2027' },
  },

  // Confidential mode - UX-only masking. NOT a security feature (see note below).
  // ⚠️ The site is a static public bundle: the unlock code and the hidden data both
  // ship in the JavaScript and can be read by anyone. Never store a real secret here.
  //
  // The deployed code comes from the GitHub Actions secret UNLOCK_CODE (injected as
  // VITE_UNLOCK_CODE), which overrides the value below. So in production you can keep
  // the code out of this committed file; `unlockCode` here is just a local-dev fallback.
  confidential: {
    enabled: true,
    defaultMode: 'confidential',
    unlockCode: 'CHANGE_ME', // local-dev fallback; production uses the UNLOCK_CODE secret
  },

  meta: {
    lastUpdated: '2026',
    publicUrl: 'https://hawks2500.github.io/resume',
  },

  // CV download.
  // Simplest: just drop your PDF(s) in public/cv/fr/ and public/cv/en/ and they
  // are detected automatically (shown only in full-profile view).
  // To also offer an ANONYMIZED CV while in confidential view, uncomment the
  // block below and point `confidentialPath` to an anonymized PDF. If you leave
  // it out, the download button is simply hidden in confidential view.
  // Reminder: files in public/ are reachable by direct URL — this is UX-only, not security.
  //
  // pdf: {
  //   path: { fr: '/cv/fr/CV-Yanis-Zerrar.pdf', en: '/cv/en/CV-Yanis-Zerrar-EN.pdf' },
  //   confidentialPath: { fr: '/cv/fr/CV-anonyme.pdf', en: '/cv/en/CV-anonymous.pdf' },
  // },

  languages: {
    default: 'fr',
    available: ['fr', 'en', 'de'],
    labels: { fr: 'FR', en: 'EN', de: 'DE' },
  },

  contact: [
    { type: 'linkedin', label: 'Yanis ZERRAR', href: 'https://www.linkedin.com/in/yanis-zerrar/' },
    { type: 'github', label: 'Hawks2500', href: 'https://github.com/Hawks2500' },
    { type: 'email', label: 'yanis.zerrar@gmail.com', href: 'mailto:yanis.zerrar@gmail.com' },
    { type: 'phone', label: '+33 7 66 55 67 05' },
    { type: 'location', label: 'Montbéliard, France' },
  ],

  skills: [
    {
      title: { fr: 'GRC & Gouvernance', en: 'Cyber risk & governance', de: 'Cyber-Risiko & Governance' },
      type: 'badges',
      items: [
        { name: 'EBIOS RM' },
        { name: 'Egerie' },
        { name: 'ISO 27001' },
        { name: 'ISO 27005' },
        { name: 'NIS2' },
        { name: { fr: 'Analyse de risques', en: 'Risk assessment', de: 'Risikoanalyse' } },
        { name: { fr: 'Cartographie des risques', en: 'Risk mapping', de: 'Risiko-Mapping' } },
        { name: { fr: 'Conformité', en: 'Compliance', de: 'Compliance' } },
        { name: { fr: 'Politiques de sécurité', en: 'Security policies', de: 'Sicherheitsrichtlinien' } },
        { name: { fr: 'KPI & tableaux de bord', en: 'KPIs & dashboards', de: 'KPIs & Dashboards' } },
        { name: { fr: 'Sensibilisation (ANSSI)', en: 'Awareness (ANSSI)', de: 'Awareness (ANSSI)' } },
      ],
    },
    {
      title: { fr: 'Sécurité opérationnelle', en: 'Threats & security operations', de: 'Security Operations' },
      type: 'badges',
      items: [
        { name: 'SIEM' },
        { name: 'MISP' },
        { name: 'OSINT' },
        { name: { fr: 'Veille sur les menaces', en: 'Threat intelligence', de: 'Threat Intelligence' } },
        { name: 'IAM' },
        { name: 'Active Directory' },
        { name: { fr: 'Gestion des vulnérabilités', en: 'Vulnerability management', de: 'Schwachstellenmanagement' } },
        { name: { fr: 'Réponse aux incidents', en: 'Incident response', de: 'Incident Response' } },
      ],
    },
    {
      title: { fr: 'Réseaux & Infrastructure', en: 'Systems & networks', de: 'Systeme & Netzwerke' },
      type: 'badges',
      items: [
        { name: 'TCP/IP' },
        { name: 'OSI' },
        { name: 'Cisco' },
        { name: 'CCNA' },
        { name: 'Linux' },
        { name: 'Windows Server' },
        { name: 'GCP' },
      ],
    },
    {
      title: { fr: 'Développement & Automatisation', en: 'Development & automation', de: 'Entwicklung & Automatisierung' },
      type: 'badges',
      items: [
        { name: 'Python' },
        { name: 'PowerShell' },
        { name: 'PHP' },
        { name: 'Laravel' },
        { name: 'PostgreSQL' },
        { name: 'CI/CD' },
        { name: 'VBA' },
        { name: 'Power BI' },
        { name: 'Power Automate' },
        { name: 'ITIL' },
      ],
    },
    {
      title: { fr: 'Langues', en: 'Languages', de: 'Sprachen' },
      type: 'languages',
      items: [
        { name: { fr: 'Français', en: 'French', de: 'Französisch' }, level: { fr: 'Natif', en: 'Native', de: 'Muttersprache' } },
        { name: { fr: 'Anglais', en: 'English', de: 'Englisch' }, level: { fr: 'B2', en: 'B2', de: 'B2' }, details: 'Linguaskill Business' },
        { name: { fr: 'Allemand', en: 'German', de: 'Deutsch' }, level: { fr: 'B1', en: 'B1', de: 'B1' } },
      ],
    },
  ],

  experiences: [
    {
      id: 'eurometropole',
      company: { fr: 'Eurométropole de Strasbourg', en: 'City and Eurometropolis of Strasbourg', de: 'Stadt und Eurometropole Straßburg' },
      confidentialCompany: { fr: 'Grande collectivité publique française', en: 'Large French public-sector organization', de: 'Große französische Organisation des öffentlichen Sektors' },
      logo: 'images/eurometropole.JPG',
      website: 'https://www.strasbourg.eu/',
      role: { fr: 'Ingénieur en Cybersécurité & Risk Manager', en: 'Cybersecurity Engineer & Risk Manager', de: 'Cybersecurity Engineer & Risk Manager' },
      type: { fr: 'Apprentissage', en: 'Apprenticeship', de: 'Duales Studium' },
      period: { fr: 'Septembre 2024 - Présent', en: 'September 2024 - Present', de: 'September 2024 - heute' },
      description: {
        fr: 'Risk Manager et gouvernance SSI : analyses de risques EBIOS RM, cadre GRC (ISO 27001, NIS2) et sécurisation du SI.',
        en: 'Risk Manager and security governance: EBIOS RM risk assessments, GRC framework (ISO 27001, NIS2) and information-system hardening.',
        de: 'Risk Manager und Security-Governance: EBIOS-RM-Risikoanalysen, GRC-Rahmenwerk (ISO 27001, NIS2) und Absicherung der IT.',
      },
      techs: ['EBIOS RM', 'ISO 27001', 'NIS2', 'Active Directory', 'SIEM', 'IAM'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Collectivité de plus de 500 000 habitants, fortes exigences de sécurité (ISO 27001, NIS2).',
          en: 'Public authority of over 500,000 inhabitants with strong security requirements (ISO 27001, NIS2).',
          de: 'Gebietskörperschaft mit über 500.000 Einwohnern und hohen Sicherheitsanforderungen (ISO 27001, NIS2).',
        },
        tasks: {
          fr: [
            'Mené les 5 ateliers EBIOS RM d’une analyse de risques sur l’Active Directory (Egerie Risk Manager), jusqu’aux plans d’actions et KPI remontés à la direction',
            'Contribué au cadre de gouvernance sécurité (GRC) aligné ISO 27001 et NIS2 : politiques de sécurité et plans de remédiation',
            'Réalisé un audit de la sécurité des mots de passe Active Directory (restitution technique, recommandations et supports exécutifs pour le RSSI)',
            'Assuré la gestion des vulnérabilités du SI, du suivi des correctifs à la priorisation des risques',
            'Développé une plateforme interne de triage des alertes de sécurité ; chef de projet dans l’outil ITSM (ITIL v4), du développement à la production',
            'Réduit de 25 % le temps de traitement des incidents de phishing en optimisant la réponse aux incidents',
            'Réécrit la page intranet de sensibilisation aux mots de passe (alignement ANSSI) et créé un module SCORM délivrant un certificat',
          ],
          en: [
            'Carried out the 5 EBIOS RM workshops (Egerie Risk Manager) of an Active Directory risk assessment, from risk sources and attack scenarios through to action plans and KPIs reported to executive management',
            'Contributed to the security governance framework aligned with ISO 27001 and NIS2, drafting security policies and remediation plans',
            'Performed an Active Directory password security audit, delivering technical findings, recommendations and executive material to the CISO',
            'Managed vulnerabilities across the information system, from patch tracking to risk-based prioritisation',
            'Built an internal security alert triage platform integrating several tools; project lead in the ITSM tool (ITIL v4), from development to production',
            'Cut phishing incident handling time by 25% by streamlining the incident response process',
            'Rewrote the intranet password awareness page (ANSSI guidance) and created a SCORM awareness module issuing a completion certificate',
          ],
          de: [
            'Durchführung der 5 EBIOS-RM-Workshops (Egerie Risk Manager) einer Active-Directory-Risikoanalyse, von Risikoquellen und Angriffsszenarien bis zu Maßnahmenplänen und an die Geschäftsleitung berichteten KPIs',
            'Mitarbeit am Security-Governance-Rahmenwerk nach ISO 27001 und NIS2, inkl. Erstellung von Sicherheitsrichtlinien und Remediation-Plänen',
            'Durchführung eines Passwort-Sicherheitsaudits im Active Directory mit technischen Ergebnissen, Empfehlungen und Executive-Unterlagen für den CISO',
            'Schwachstellenmanagement im gesamten Informationssystem, vom Patch-Tracking bis zur risikobasierten Priorisierung',
            'Aufbau einer internen Plattform zum Triage von Sicherheitsalarmen mit mehreren integrierten Tools; Projektleitung im ITSM-Tool (ITIL v4), von der Entwicklung bis zur Produktion',
            'Reduktion der Bearbeitungszeit von Phishing-Vorfällen um 25 % durch Optimierung des Incident-Response-Prozesses',
            'Überarbeitung der Intranet-Seite zur Passwort-Sensibilisierung (ANSSI-konform) und Erstellung eines SCORM-Awareness-Moduls mit Abschlusszertifikat',
          ],
        },
        env: {
          fr: 'EBIOS RM / Egerie / ISO 27001 / NIS2 / Active Directory / ITSM',
          en: 'EBIOS RM / Egerie / ISO 27001 / NIS2 / Active Directory / ITSM',
          de: 'EBIOS RM / Egerie / ISO 27001 / NIS2 / Active Directory / ITSM',
        },
      },
    },
    {
      id: 'cyberv-it',
      company: { fr: 'CyberV', en: 'CyberV', de: 'CyberV' },
      confidentialCompany: { fr: 'Association en cybersécurité', en: 'Cybersecurity association', de: 'Cybersecurity-Verein' },
      logo: 'images/cyberv.png',
      website: 'https://cyberv.fr/',
      themeLogos: {
        light: 'images/CyberV_black.png',
        dark: 'images/cyberv.png',
      },
      role: { fr: 'Responsable IT', en: 'Head of IT', de: 'IT-Leiter' },
      type: { fr: 'Association', en: 'Organization', de: 'Verein' },
      period: { fr: 'Octobre 2024 - Présent', en: 'October 2024 - Present', de: 'Oktober 2024 - heute' },
      description: {
        fr: 'Pilotage du pôle IT : projets techniques, développement web et encadrement d’une équipe de bénévoles.',
        en: 'Leading the IT unit: technical projects, web development and coordinating a team of volunteers.',
        de: 'Leitung des IT-Bereichs: technische Projekte, Webentwicklung und Koordination eines Freiwilligenteams.',
      },
      techs: ['Laravel', 'CI/CD', 'GCP', 'IAM', 'MISP', 'OSINT'],
      isHighlighted: false,
      details: {
        context: {
          fr: 'Association en cybersécurité avec gestion de projets techniques et événements.',
          en: 'Cybersecurity association focused on technical projects and events.',
          de: 'Cybersecurity-Verein mit Fokus auf technische Projekte und Veranstaltungen.',
        },
        tasks: {
          fr: [
            'Piloté les projets techniques du pôle IT et encadré une équipe de bénévoles',
            'Conçu et animé des ateliers publics sur la veille sur les menaces et l’investigation open source (MISP, OSINT)',
            'Assuré le développement complet du site web de l’association (Laravel, CI/CD) et réalisé des analyses SAST pour corriger des vulnérabilités applicatives',
            'Géré les accès et identités (IAM) sur l’infrastructure Google Cloud (GCP)',
          ],
          en: [
            'Led the IT unit’s technical projects and coordinated a team of volunteers',
            'Designed and ran public workshops on threat intelligence and open source investigation (MISP, OSINT)',
            'Delivered the association’s website end to end (Laravel, CI/CD) and ran SAST analyses to fix application vulnerabilities',
            'Managed access and identities (IAM) on Google Cloud (GCP) infrastructure',
          ],
          de: [
            'Leitung der technischen Projekte des IT-Bereichs und Koordination eines Teams von Freiwilligen',
            'Konzeption und Durchführung öffentlicher Workshops zu Threat Intelligence und Open-Source-Investigation (MISP, OSINT)',
            'End-to-End-Entwicklung der Vereinswebsite (Laravel, CI/CD) und SAST-Analysen zur Behebung von Anwendungsschwachstellen',
            'Verwaltung von Zugriffen und Identitäten (IAM) in der Google-Cloud-Infrastruktur (GCP)',
          ],
        },
        env: {
          fr: 'Laravel / Google Cloud / CI-CD / MISP / OSINT',
          en: 'Laravel / Google Cloud / CI-CD / MISP / OSINT',
          de: 'Laravel / Google Cloud / CI-CD / MISP / OSINT',
        },
      },
    },
    {
      id: 'forvia',
      company: { fr: 'Forvia Faurecia', en: 'Forvia Faurecia', de: 'Forvia Faurecia' },
      confidentialCompany: { fr: 'Grand groupe industriel (automobile)', en: 'Automotive industry group', de: 'Großer Industriekonzern (Automobil)' },
      logo: 'images/forvia.svg',
      website: 'https://www.forvia.com/',
      role: { fr: 'Stagiaire Data', en: 'Data Intern', de: 'Praktikant Data' },
      type: { fr: 'Stage', en: 'Internship', de: 'Praktikum' },
      period: { fr: 'Avril 2024 - Juin 2024', en: 'April 2024 - June 2024', de: 'April 2024 - Juni 2024' },
      description: {
        fr: 'Analyse de données et automatisation de processus métier (Power Platform).',
        en: 'Data analysis and business-process automation (Power Platform).',
        de: 'Datenanalyse und Automatisierung von Geschäftsprozessen (Power Platform).',
      },
      techs: ['Power Platform', 'SharePoint', 'Excel VBA', 'Power Automate', 'Data Analysis'],
      details: {
        context: {
          fr: 'Environnement industriel automobile avec besoin d\'optimisation de processus métier.',
          en: 'Automotive industrial environment with need for business process optimization.',
          de: 'Industrielles Automobilumfeld mit Bedarf an der Optimierung von Geschäftsprozessen.',
        },
        tasks: {
          fr: [
            'Migré le suivi Excel vers SharePoint avec gestion de tableaux en VBA, centralisant les données et réduisant les erreurs de saisie',
            'Automatisé les workflows de notification d’équipe via Power Automate, supprimant le suivi manuel',
          ],
          en: [
            'Migrated Excel-based tracking to SharePoint with VBA-driven table management, centralising data and reducing manual entry errors',
            'Automated team notification workflows through Power Automate, removing manual follow-up',
          ],
          de: [
            'Migration eines Excel-Trackings nach SharePoint mit VBA-gestützter Tabellenverwaltung, zentralisierte Daten und weniger Eingabefehler',
            'Automatisierung von Team-Benachrichtigungs-Workflows mit Power Automate, wodurch manuelles Nachfassen entfiel',
          ],
        },
        env: {
          fr: 'Power Platform / SharePoint / Excel VBA / Power Automate',
          en: 'Power Platform / SharePoint / Excel VBA / Power Automate',
          de: 'Power Platform / SharePoint / Excel VBA / Power Automate',
        },
      },
    },
  ],

  education: [
    {
      school: { fr: 'UTBM', en: 'UTBM', de: 'UTBM' },
      logo: 'images/utbm.svg',
      degree: { fr: 'Titre d\'ingénieur diplômé en informatique', en: 'Master\'s-level Engineering Degree in Computer Science', de: 'Ingenieurdiplom (Master-Niveau) in Informatik' },
      specialty: { fr: 'Spécialité Réseaux & Cybersécurité', en: 'Major in Networks & Cybersecurity', de: 'Schwerpunkt Netzwerke & Cybersecurity' },
      period: '2024 - 2027',
      techs: ['Cybersecurity', 'Networking', 'GRC', 'Project Management'],
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
      de: [
        'Datenanalyse und Machine Learning',
        'Cybersicherheit und Absicherung von Informationssystemen',
        'Softwareentwicklung und Anwendungsarchitekturen',
        'System- und Netzwerkadministration',
        'Projektmanagement und agile Methoden',
        'SQL- und NoSQL-Datenbanken (PostgreSQL, MongoDB, Elasticsearch)',
      ],
    },
    },
    {
      school: { fr: 'IUT Nord Franche-Comté', en: 'IUT Nord Franche-Comté', de: 'IUT Nord Franche-Comté' },
      logo: 'images/iut-nord-franche-comte.png',
      degree: { fr: 'DUT Réseaux & Télécommunications', en: 'DUT in Networks & Telecommunications', de: 'DUT Netzwerke & Telekommunikation' },
      specialty: {
        fr: 'Parcours Cybersécurité',
        en: 'Cybersecurity track',
        de: 'Schwerpunkt Cybersecurity',
      },
      period: '2022 - 2024',
      techs: ['Network Administration', 'OSPF', 'BGP', 'MPLS', 'Firewall', 'UDP/TCP', 'CCNA'],
      details: {
      fr: [
        'Administration systèmes et réseaux',
        'Protocoles de routage (RIP, OSPF, BGP, MPLS)',
        'Conception et déploiement réseaux LAN/WAN',
        'Configuration de firewalls (Stormshield, pfSense)',
        'Développement d\'applications réseau (TCP/UDP Android/Desktop)',
        'Certification Cisco CCNA',
      ],
      en: [
        'Systems and network administration',
        'Routing protocols (RIP, OSPF, BGP, MPLS)',
        'LAN/WAN network design and deployment',
        'Firewall configuration (Stormshield, pfSense)',
        'Network application development (TCP/UDP Android/Desktop)',
        'Cisco CCNA certification',
      ],
      de: [
        'System- und Netzwerkadministration',
        'Routing-Protokolle (RIP, OSPF, BGP, MPLS)',
        'Konzeption und Aufbau von LAN/WAN-Netzwerken',
        'Konfiguration von Firewalls (Stormshield, pfSense)',
        'Entwicklung von Netzwerkanwendungen (TCP/UDP Android/Desktop)',
        'Cisco-CCNA-Zertifizierung',
      ],
    },
    },
  ],

  certifications: [
    {
      name: 'Cisco CCNA',
      issuer: 'Cisco',
      obtained: true,
      status: { fr: 'Obtenu en 2023', en: 'Obtained in 2023', de: 'Erworben 2023' },
    },
    {
      name: 'ISO 27001 Lead Implementer',
      issuer: 'PECB',
      logo: 'images/SVG/PECB_Logo_RedWhite.svg',
      status: {
        fr: 'En préparation · examen octobre 2026',
        en: 'In preparation · exam October 2026',
        de: 'In Vorbereitung · Prüfung Oktober 2026',
      },
    },
    {
      name: 'ISO 27005',
      issuer: 'PECB',
      logo: 'images/SVG/PECB_Logo_RedWhite.svg',
      status: {
        fr: 'En préparation · examen nov.-déc. 2026',
        en: 'In preparation · exam Nov-Dec 2026',
        de: 'In Vorbereitung · Prüfung Nov.-Dez. 2026',
      },
    },
    {
      name: 'EBIOS Risk Manager',
      issuer: 'PECB',
      logo: 'images/SVG/PECB_Logo_RedWhite.svg',
      status: {
        fr: 'En préparation · examen nov.-déc. 2026',
        en: 'In preparation · exam Nov-Dec 2026',
        de: 'In Vorbereitung · Prüfung Nov.-Dez. 2026',
      },
    },
  ],

  projects: [
    {
      id: 'data-annotation',
      title: { fr: 'Data Annotation - Conduite Autonome', en: 'Data Annotation - Autonomous Driving', de: 'Data Annotation - Autonomes Fahren' },
      logo: 'images/utbm.svg',
      description: {
        fr: 'Plateforme web de visualisation et d\'annotation d\'images pour la conduite urbaine autonome.',
        en: 'Web platform for image visualization and annotation in urban autonomous driving contexts.',
        de: 'Webplattform zur Visualisierung und Annotation von Bildern für das autonome Fahren im urbanen Umfeld.',
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
        de: [
          'Visualisierung vorab geladener Bilder aus einem urbanen Fahrdatensatz',
          'Analyse segmentierter Objekte: Fußgänger, Fahrzeuge, städtische Infrastruktur',
          'Priorisierungssystem für Objekte nach Kritikalität (z. B. querender Fußgänger > geparktes Fahrzeug)',
          'Akademisches Projekt an der UTBM',
        ],
      },
      github: 'https://github.com/Hawks2500/Data-Annotation',
    },
    {
      id: 'parkinson',
      title: {
        fr: 'Recherche Parkinson - VisionMD × CHU de Besançon',
        en: 'Parkinson Research - VisionMD × CHU Besançon',
        de: 'Parkinson-Forschung - VisionMD × CHU Besançon'
      },
      confidentialTitle: {
        fr: 'Recherche médicale - Analyse de données motrices',
        en: 'Medical research - Motor data analysis',
        de: 'Medizinische Forschung - Analyse von Bewegungsdaten',
      },
      logo: 'images/utbm.svg',
      description: {
        fr: 'Contribution à un projet de recherche médicale : analyse de données motrices pour la détection et le suivi de la maladie de Parkinson.',
        en: 'Contributing to a medical research project: motor data analysis for Parkinson\'s disease detection and monitoring.',
        de: 'Mitarbeit an einem medizinischen Forschungsprojekt: Analyse von Bewegungsdaten zur Erkennung und Verlaufskontrolle der Parkinson-Krankheit.',
      },
      techs: ['Python', 'Data Analysis', 'Signal Processing', 'Computer Vision', 'Electron', 'Medical AI'],
      details: {
        fr: [
          'Collaboration active avec l\'équipe de neurologie du CHU de Besançon',
          'Analyse et traitement de données de mouvement (capteurs, tremblements, gestes) pour la détection de symptômes parkinsoniens',
          'Reprise et extension du logiciel open source VisionMD pour intégrer des fonctionnalités adaptées aux besoins cliniques des neurologues',
          'Développement de visualisations et dashboards pour faciliter l\'interprétation des données motrices par les praticiens',
        ],
        en: [
          'Active collaboration with the neurology research team at Besançon University Hospital (CHU)',
          'Processing and analyzing motion sensor data (tremors, gestures) for Parkinsonian symptom detection',
          'Forked and extended the open-source VisionMD software to add features tailored to neurologists\' clinical workflows',
          'Built data visualizations and dashboards to support medical interpretation of motor patterns',
        ],
        de: [
          'Aktive Zusammenarbeit mit dem Neurologie-Team des Universitätsklinikums (CHU) Besançon',
          'Verarbeitung und Analyse von Bewegungsdaten (Sensoren, Tremor, Gesten) zur Erkennung parkinsontypischer Symptome',
          'Fork und Erweiterung der Open-Source-Software VisionMD um Funktionen für die klinischen Arbeitsabläufe der Neurologen',
          'Entwicklung von Visualisierungen und Dashboards zur Unterstützung der medizinischen Interpretation von Bewegungsmustern',
        ],
      },
      github: 'https://github.com/Hawks2500/VisionMD',
    },
    {
      id: 'cyberv-platform',
      title: { fr: 'CyberV - Plateforme associative', en: 'CyberV - Association Platform', de: 'CyberV - Vereinsplattform' },
      confidentialTitle: { fr: 'Plateforme web associative (cybersécurité)', en: 'Cybersecurity association web platform', de: 'Vereins-Webplattform (Cybersecurity)' },
      logo: 'images/cyberv.png',
      themeLogos: {
        light: 'images/CyberV_black.png',
        dark: 'images/cyberv.png',
      },
      description: {
        fr: 'Plateforme web complète pour une association en cybersécurité.',
        en: 'Full-featured web platform for a student cybersecurity association.',
        de: 'Umfassende Webplattform für einen studentischen Cybersecurity-Verein.',
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
        de: [
          'Blog, Bug-Hunting-Tracking und Echtzeit-Überwachung der Serverstatus',
          'Mitgliederverwaltung über Hello Asso und SSO-Authentifizierung via Google (GCP)',
          'CI/CD mit GitHub Actions innerhalb der GitHub-Organisation CyberV',
          'E-Learning-Plattform in Integration (technische Cybersicherheit, Recht, DSGVO, Sensibilisierung)',
          'CTF-Plattform für die Veranstaltungen des Vereins',
        ],
      },
      url: 'https://cyberv.fr/',
    },
  ],
  hobbies: [
    {
      title: { fr: 'Boxe', en: 'Boxing', de: 'Boxen' },
    },
    {
      title: { fr: 'Automobile & Moto', en: 'Cars & motorbikes', de: 'Autos & Motorräder' },
    },
    {
      title: { fr: 'Jeux vidéo', en: 'Video games', de: 'Videospiele' },
    },
  ],

  theme: { preset: 'slate' },

  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT', de: 'KONTAKT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS', de: 'KOMPETENZEN' },
      experience: { fr: 'EXPÉRIENCES', en: 'EXPERIENCE', de: 'ERFAHRUNG' },
      education: { fr: 'FORMATION', en: 'EDUCATION', de: 'AUSBILDUNG' },
      certifications: { fr: 'CERTIFICATIONS', en: 'CERTIFICATIONS', de: 'ZERTIFIZIERUNGEN' },
      projects: { fr: 'PROJETS', en: 'PROJECTS', de: 'PROJEKTE' },
      hobbies: { fr: 'LOISIRS', en: 'HOBBIES', de: 'HOBBYS' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main tasks:', de: 'Hauptaufgaben:' },
      moreTasks: { fr: 'autres missions...', en: 'more tasks...', de: 'weitere Aufgaben...' },
      showMoreTasks: { fr: 'Afficher les missions restantes', en: 'Show remaining tasks', de: 'Weitere Aufgaben anzeigen' },
      showLessTasks: { fr: 'Réduire la liste', en: 'Show fewer tasks', de: 'Liste reduzieren' },
      training: { fr: 'Formations :', en: 'Training:', de: 'Weiterbildungen:' },
      techEnv: { fr: 'Env. technique :', en: 'Tech environment:', de: 'Techn. Umfeld:' },
      technologies: { fr: 'Technologies', en: 'Technologies', de: 'Technologien' },
    },
    actions: {
      clickHint: { fr: 'Cliquez pour voir les détails', en: 'Click to see details', de: 'Für Details klicken' },
      switchTheme: { fr: 'Changer le thème', en: 'Switch theme', de: 'Thema wechseln' },
      downloadPdf: { fr: 'Télécharger le CV', en: 'Download CV', de: 'Lebenslauf herunterladen' },
    },
  },
}

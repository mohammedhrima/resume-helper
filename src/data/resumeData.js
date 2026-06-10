export const personal = {
  name: "Hrima Mohammed",
  headline: {
    en: "Software Engineer | Former Aerospace Engineer",
    fr: "Ingénieur Logiciel | Ancien Ingénieur Aérospatial",
  },
  location: { en: "Marrakesh-Safi, Morocco", fr: "Marrakech-Safi, Maroc" },
  email: "mohammed.hrima1998@gmail.com",
  phone: "+212 657 80 48 24",
  website: { url: "http://mhrima.me/", text: "mhrima.me" },
  linkedin: {
    url: "https://www.linkedin.com/in/mohammedhrima/",
    text: "mohammed hrima",
  },
  github: { url: "https://github.com/mohammedhrima", text: "mohammedhrima" },
};

export const summary = {
  en: 'I build systems from the ground up, from a custom compiled programming language to a reactive frontend framework. My background in Mechanical and Aerospace Engineering instilled a "zero-error" mindset and a deep commitment to precision, which I now apply to maximizing code quality and architectural performance.',
  fr: "Je conçois des systèmes de bout en bout, d'un langage de programmation compilé sur mesure à un framework frontend réactif. Ma formation en génie mécanique et aérospatial m'a inculqué un état d'esprit « zéro défaut » et un souci constant de la précision, que j'applique aujourd'hui à la qualité du code et à la performance de l'architecture.",
};

export const sectionTitles = {
  summary: { en: "Summary", fr: "Profil" },
  experience: { en: "Experience", fr: "Expérience" },
  projects: { en: "Projects", fr: "Projets" },
  skills: { en: "Skills", fr: "Compétences" },
  education: { en: "Education", fr: "Formation" },
  languages: { en: "Languages", fr: "Langues" },
  certifications: { en: "Certifications", fr: "Certifications" },
  hobbies: { en: "Hobbies \\& Interests", fr: "Loisirs \\& Intérêts" },
};

export const experiences = [
  {
    id: "apcm",
    company: "APCM Pharma",
    defaultSelected: true,
    date: { en: "Jan 2026 -- Present", fr: "Janv. 2026 -- Présent" },
    title: {
      en: "Full-Stack Developer (Freelance) part-time",
      fr: "Développeur Full-Stack (Freelance) à temps partiel",
    },
    highlights: {
      en: [
        "Developed \\textbf{PharmaGest}, a custom ERP-integrated dashboard that solves data filtering limitations in the Sobrus POS system for Moroccan pharmacies.",
        "Engineered a \\textbf{Chrome Extension (MV3)} to intercept same-domain CSV exports, automating data capture and eliminating manual file handling for pharmacy staff.",
        "Built a high-performance \\textbf{FastAPI} backend with \\textbf{PostgreSQL} and \\textbf{SQLAlchemy}, handling complex ETL tasks like chunked data uploads (500-row segments) to prevent system timeouts.",
        "Implemented a robust \\textbf{React 19} and \\textbf{TypeScript} dashboard using Refine and TanStack Table, featuring advanced multi-level filtering (TVA, category, supplier) for procurement and sales data.",
        "Designed a secure JWT-based authentication system with a custom \\textbf{token relay mechanism} via postMessage between the web dashboard and the browser extension.",
      ],
      fr: [
        "Développement de \\textbf{PharmaGest}, un tableau de bord intégré à l'ERP qui résout les limites de filtrage des données du système de caisse Sobrus pour les pharmacies marocaines.",
        "Conception d'une \\textbf{extension Chrome (MV3)} interceptant les exports CSV du même domaine, automatisant la capture des données et supprimant la manipulation manuelle de fichiers.",
        "Création d'un backend \\textbf{FastAPI} performant avec \\textbf{PostgreSQL} et \\textbf{SQLAlchemy}, gérant des tâches ETL complexes comme l'envoi de données par blocs (segments de 500 lignes) pour éviter les délais d'expiration.",
        "Mise en place d'un tableau de bord \\textbf{React 19} et \\textbf{TypeScript} avec Refine et TanStack Table, offrant un filtrage multi-niveaux avancé (TVA, catégorie, fournisseur) pour les données d'achat et de vente.",
        "Conception d'un système d'authentification sécurisé basé sur JWT avec un \\textbf{mécanisme de relais de jeton} via postMessage entre le tableau de bord web et l'extension navigateur.",
      ],
    },
  },
  {
    id: "yakeey",
    company: "Yakeey",
    defaultSelected: true,
    date: { en: "Jun 2025 -- Present", fr: "Juin 2025 -- Présent" },
    title: {
      en: "Full-Stack \\& Mobile Developer",
      fr: "Développeur Full-Stack \\& Mobile",
    },
    highlights: {
      en: [
        "Developed web and mobile solutions using \\textbf{React/Next.js}, \\textbf{Spring Boot}, and \\textbf{Flutter}, with modern interfaces based on \\textbf{Tailwind CSS} and \\textbf{styled-components}.",
        {
          text: "\\textbf{Internal Yakeey Projects:}",
          items: [
            'Built the landing page \\textbf{"Financer mon projet"} on \\textbf{yakeey.com}.',
            "Contributed to \\textbf{Yakeey-UI}, a standardized reusable component library across all Yakeey platforms.",
          ],
        },
        {
          text: "\\textbf{Collaborative Projects with CIH Bank:}",
          items: [
            "\\textbf{CIH Landing Front} : Developed the dashboard enabling CIH agents to view, approve, or cancel real estate credit requests.",
            "\\textbf{CIH Parcours Web} : Maintained and improved the user credit request flow, guiding clients to input their information to obtain tailored credit offers.",
            "\\textbf{Cockpit Front} : Contributed to the platform allowing users to upload credit documents and experts to validate or reject requests based on eligibility.",
            "\\textbf{CIH Mobile App} : Designed and implemented the simulation and credit request module, including document upload and expert tracking.",
          ],
        },
      ],
      fr: [
        "Développement de solutions web et mobiles avec \\textbf{React/Next.js}, \\textbf{Spring Boot} et \\textbf{Flutter}, avec des interfaces modernes basées sur \\textbf{Tailwind CSS} et \\textbf{styled-components}.",
        {
          text: "\\textbf{Projets internes Yakeey :}",
          items: [
            "Réalisation de la landing page \\textbf{« Financer mon projet »} sur \\textbf{yakeey.com}.",
            "Contribution à \\textbf{Yakeey-UI}, une bibliothèque de composants réutilisables standardisée pour toutes les plateformes Yakeey.",
          ],
        },
        {
          text: "\\textbf{Projets collaboratifs avec la Banque CIH :}",
          items: [
            "\\textbf{CIH Landing Front} : Développement du tableau de bord permettant aux agents CIH de consulter, approuver ou annuler les demandes de crédit immobilier.",
            "\\textbf{CIH Parcours Web} : Maintenance et amélioration du parcours de demande de crédit, guidant les clients pour obtenir des offres adaptées.",
            "\\textbf{Cockpit Front} : Contribution à la plateforme permettant le dépôt de documents de crédit et leur validation ou rejet par les experts selon l'éligibilité.",
            "\\textbf{CIH Mobile App} : Conception et implémentation du module de simulation et de demande de crédit, incluant le dépôt de documents et le suivi par les experts.",
          ],
        },
      ],
    },
  },
  {
    id: "forge",
    company: "The Forge (Startgate)",
    defaultSelected: true,
    date: { en: "Apr 2025", fr: "Avr. 2025" },
    title: { en: "Frontend Developer", fr: "Développeur Frontend" },
    highlights: {
      en: [
        "Developed a water purification MVP with real-time feedback and an intuitive user interface using \\textbf{ReactJS}.",
      ],
      fr: [
        "Développement d'un MVP de purification d'eau avec retour en temps réel et une interface intuitive en \\textbf{ReactJS}.",
      ],
    },
  },
  {
    id: "goquant",
    company: "GoQuant",
    defaultSelected: true,
    date: { en: "Feb 2025 -- Mar 2025", fr: "Févr. 2025 -- Mars 2025" },
    title: { en: "Backend Developer", fr: "Développeur Backend" },
    highlights: {
      en: [
        "Designed and implemented multi-threaded trading algorithms in \\textbf{C++}, reducing order execution latency by 30\\% and improving overall system performance.",
        "Optimized the core trading platform code, enhancing stability, scalability, and concurrent process management.",
      ],
      fr: [
        "Conception et implémentation d'algorithmes de trading multi-thread en \\textbf{C++}, réduisant la latence d'exécution des ordres de 30\\% et améliorant les performances globales du système.",
        "Optimisation du code de la plateforme de trading, améliorant la stabilité, la scalabilité et la gestion des processus concurrents.",
      ],
    },
  },
  {
    id: "freelance",
    company: "Freelance",
    defaultSelected: true,
    date: { en: "Jan 2022 -- Mar 2022", fr: "Janv. 2022 -- Mars 2022" },
    title: { en: "Software Developer", fr: "Développeur Logiciel" },
    highlights: {
      en: [
        "Developed a desktop application for rotating team communication using \\textbf{Python} Eel, JavaScript, and HTML/CSS, creating a modern, interactive interface.",
      ],
      fr: [
        "Développement d'une application de bureau pour la communication entre équipes tournantes avec \\textbf{Python} Eel, JavaScript et HTML/CSS, offrant une interface moderne et interactive.",
      ],
    },
  },
  {
    id: "lpf",
    company: "LPF Casablanca (Aerospace Industry)",
    defaultSelected: true,
    date: { en: "Jan 2021 -- Jan 2022", fr: "Janv. 2021 -- Janv. 2022" },
    title: {
      en: "Methods Preparation Technician",
      fr: "Technicien Préparation Méthodes",
    },
    highlights: {
      en: [
        "Planned team tasks using MS Project and performed 2D/3D CAD designs with TopSolid.",
        "Represented the technical team in meetings with clients such as \\textbf{Rolls-Royce} and \\textbf{SAFRAN}.",
      ],
      fr: [
        "Planification des tâches de l'équipe avec MS Project et réalisation de conceptions CAO 2D/3D avec TopSolid.",
        "Représentation de l'équipe technique lors de réunions avec des clients tels que \\textbf{Rolls-Royce} et \\textbf{SAFRAN}.",
      ],
    },
  },
  {
    id: "mds",
    company: "Management Digital School",
    defaultSelected: true,
    date: { en: "Jan 2021 -- Jun 2021", fr: "Janv. 2021 -- Juin 2021" },
    title: {
      en: "CAD Instructor (Part-Time)",
      fr: "Formateur CAO (Temps partiel)",
    },
    highlights: {
      en: [
        "Taught students the fundamentals of mechanical manufacturing and computer-aided design (CAD).",
      ],
      fr: [
        "Enseignement aux étudiants des fondamentaux de la fabrication mécanique et de la conception assistée par ordinateur (CAO).",
      ],
    },
  },
  {
    id: "sermp",
    company: "SERMP",
    defaultSelected: true,
    date: { en: "Nov 2019 -- Apr 2020", fr: "Nov. 2019 -- Avr. 2020" },
    title: { en: "Lathe Operator", fr: "Opérateur sur Tour" },
    highlights: {
      en: [
        "Maintained dimensional accuracy for manufactured components using precision instruments, demonstrating exceptional attention to detail and adherence to strict quality standards.",
      ],
      fr: [
        "Maintien de la précision dimensionnelle des composants fabriqués à l'aide d'instruments de précision, avec une attention exceptionnelle au détail et au respect de normes de qualité strictes.",
      ],
    },
  },
];

export const projects = [
  {
    id: "medisimplegpt",
    url: "https://github.com/mohammedhrima/MediSimpleGPT",
    urlText: "github.com/mohammedhrima/MediSimpleGPT",
    defaultSelected: true,
    title: {
      en: "MediSimpleGPT: Local AI Assistant \\& Web Agent",
      fr: "MediSimpleGPT: Assistant IA Local \\& Agent Web",
    },
    highlights: {
      en: [
        "Built a local-first medical assistant using \\textbf{FastAPI} and \\textbf{React}, leveraging \\textbf{Ollama} for privacy-focused LLM inference.",
        "Implemented a \\textbf{Retrieval-Augmented Generation (RAG)} pipeline using Wikipedia to provide verified medical context and detect terminology typos.",
        "Developed a \\textbf{Playwright-driven browser agent} capable of DOM-driven web automation, including content simplification and automated plan execution.",
        "Engineered a persistent chat system using \\textbf{SQLite} and \\textbf{TanStack Query} to manage multi-turn conversations and session history.",
      ],
      fr: [
        "Création d'un assistant médical local avec \\textbf{FastAPI} et \\textbf{React}, s'appuyant sur \\textbf{Ollama} pour une inférence LLM respectueuse de la vie privée.",
        "Implémentation d'un pipeline \\textbf{RAG (Retrieval-Augmented Generation)} utilisant Wikipédia pour fournir un contexte médical vérifié et détecter les fautes de terminologie.",
        "Développement d'un \\textbf{agent navigateur piloté par Playwright} capable d'automatisation web via le DOM, incluant la simplification de contenu et l'exécution automatique de plans.",
        "Conception d'un système de chat persistant avec \\textbf{SQLite} et \\textbf{TanStack Query} pour gérer les conversations multi-tours et l'historique des sessions.",
      ],
    },
  },
  {
    id: "deepseek",
    url: "https://github.com/mohammedhrima/deep-seek-clone",
    urlText: "github.com/mohammedhrima/deep-seek-clone",
    defaultSelected: true,
    title: {
      en: "DeepSeek AI Clone: Real-time Chat Architecture",
      fr: "Clone DeepSeek AI: Architecture de Chat Temps Réel",
    },
    highlights: {
      en: [
        "Developed a responsive AI chat platform using \\textbf{Next.js} and \\textbf{Tailwind CSS}, focusing on low-latency response streaming.",
        "Integrated \\textbf{OpenRouter API} for LLM orchestration and \\textbf{Clerk} for secure authentication, with history persistence managed via \\textbf{MongoDB}.",
        "Architected full-stack data flow with \\textbf{Next.js} API routes handling real-time \\textbf{SSE streaming}, delivering token-by-token responses for a fluid chat experience.",
        "Implemented secure multi-user data isolation with \\textbf{Clerk} webhooks and \\textbf{TypeScript}-enforced API contracts, ensuring production-grade reliability.",
      ],
      fr: [
        "Développement d'une plateforme de chat IA responsive avec \\textbf{Next.js} et \\textbf{Tailwind CSS}, axée sur un streaming de réponses à faible latence.",
        "Intégration de l'\\textbf{API OpenRouter} pour l'orchestration des LLM et de \\textbf{Clerk} pour l'authentification sécurisée, avec persistance de l'historique via \\textbf{MongoDB}.",
        "Conception d'un flux de données full-stack avec des routes API \\textbf{Next.js} gérant le \\textbf{streaming SSE} en temps réel, livrant des réponses token par token pour une expérience fluide.",
        "Mise en place d'une isolation sécurisée des données multi-utilisateurs avec les webhooks \\textbf{Clerk} et des contrats d'API typés en \\textbf{TypeScript}, garantissant une fiabilité de niveau production.",
      ],
    },
  },
  {
    id: "webserver",
    url: "https://github.com/mohammedhrima/webserver",
    urlText: "github.com/mohammedhrima/webserver",
    defaultSelected: true,
    title: { en: "HTTP Web Server", fr: "Serveur Web HTTP" },
    highlights: {
      en: [
        "Built a high-performance HTTP Web Server in \\textbf{C++}, following RFC standards.",
        "Designed to efficiently serve static content, with an architecture similar to Nginx.",
        "Created a tester to simulate client requests.",
      ],
      fr: [
        "Création d'un serveur web HTTP performant en \\textbf{C++}, respectant les standards RFC.",
        "Conçu pour servir efficacement du contenu statique, avec une architecture proche de Nginx.",
        "Développement d'un testeur pour simuler les requêtes clients.",
      ],
    },
  },
  {
    id: "uralang",
    url: "https://github.com/mohammedhrima/ura-lang/",
    urlText: "github.com/mohammedhrima/ura-lang/",
    defaultSelected: true,
    title: { en: "Compiler (Ura-lang)", fr: "Compilateur (Ura-lang)" },
    highlights: {
      en: [
        "Designed a programming language inspired by \\textbf{Python} with static typing, integrating an intermediate representation for code optimization.",
        "Generated assembly code and automated testing via \\textbf{Bash}, without external dependencies.",
      ],
      fr: [
        "Conception d'un langage de programmation inspiré de \\textbf{Python} avec typage statique, intégrant une représentation intermédiaire pour l'optimisation du code.",
        "Génération de code assembleur et tests automatisés via \\textbf{Bash}, sans dépendances externes.",
      ],
    },
  },
  {
    id: "anvil",
    url: "https://github.com/mohammedhrima/anvil",
    urlText: "github.com/mohammedhrima/anvil",
    defaultSelected: true,
    title: {
      en: "Anvil: Build \\& Release Tool",
      fr: "Anvil: Outil de Build \\& Release",
    },
    highlights: {
      en: [
        "Built a Make-style \\textbf{C++17} developer tool that drives the Ura-lang compiler through one-shot subcommands configured via an \\textbf{anvil.toml} file.",
        "Implemented a parallel test runner with \\textbf{IR-diff} comparison and a full release pipeline automating builds, packaging, and \\textbf{GitHub} repository synchronization.",
        "Added a cross-platform dependency installer (brew/apt/pacman/dnf), a \\textbf{Docker}-based Linux dev environment, and LeakSanitizer integration, with a vendored TOML parser and no external dependencies.",
      ],
      fr: [
        "Création d'un outil de développement \\textbf{C++17} de type Make pilotant le compilateur Ura-lang via des sous-commandes configurées dans un fichier \\textbf{anvil.toml}.",
        "Implémentation d'un lanceur de tests parallèle avec comparaison \\textbf{IR-diff} et d'un pipeline de release automatisant la compilation, l'empaquetage et la synchronisation des dépôts \\textbf{GitHub}.",
        "Ajout d'un installateur de dépendances multi-plateforme (brew/apt/pacman/dnf), d'un environnement de dev Linux sous \\textbf{Docker} et de l'intégration LeakSanitizer, avec un parseur TOML embarqué et sans dépendances externes.",
      ],
    },
  },
  {
    id: "raytracer",
    url: "https://github.com/mohammedhrima/raytracer/",
    urlText: "github.com/mohammedhrima/raytracer/",
    defaultSelected: true,
    title: {
      en: "Ray Tracer (Mini 3D Engine)",
      fr: "Ray Tracer (Mini Moteur 3D)",
    },
    highlights: {
      en: [
        "Built a software-based \\textbf{ray tracing engine} in \\textbf{C++} to render 3D scenes with spheres, planes, and light sources.",
        "Implemented core graphics concepts including \\textbf{ray--object intersections}, shadows, and reflections.",
        "Focused on performance, mathematical correctness, and low-level control without external graphics libraries.",
      ],
      fr: [
        "Création d'un \\textbf{moteur de ray tracing} logiciel en \\textbf{C++} pour rendre des scènes 3D avec sphères, plans et sources de lumière.",
        "Implémentation de concepts graphiques fondamentaux : \\textbf{intersections rayon--objet}, ombres et réflexions.",
        "Accent mis sur la performance, l'exactitude mathématique et le contrôle bas niveau sans bibliothèques graphiques externes.",
      ],
    },
  },
  {
    id: "urajs",
    url: "https://github.com/mohammedhrima/urajs",
    urlText: "github.com/mohammedhrima/urajs",
    defaultSelected: true,
    title: {
      en: "Frontend Framework (UraJS)",
      fr: "Framework Frontend (UraJS)",
    },
    highlights: {
      en: [
        "Developed a \\textbf{JavaScript/TypeScript/JSX} framework inspired by NextJS, integrating a real-time rendering engine for dynamic UI updates.",
        "Automated deployment via generation of \\textbf{Dockerfile} and \\textbf{Nginx} configurations, simplifying project production deployment.",
      ],
      fr: [
        "Développement d'un framework \\textbf{JavaScript/TypeScript/JSX} inspiré de NextJS, intégrant un moteur de rendu temps réel pour des mises à jour d'UI dynamiques.",
        "Automatisation du déploiement via la génération de configurations \\textbf{Dockerfile} et \\textbf{Nginx}, simplifiant la mise en production.",
      ],
    },
  },
  {
    id: "transcendence",
    url: "",
    urlText: "",
    defaultSelected: true,
    title: {
      en: "42 ft\\_transcendence: Multiplayer Game Project",
      fr: "42 ft\\_transcendence: Jeu Multijoueur",
    },
    highlights: {
      en: [
        "Developed a full-stack multiplayer game using \\textbf{Django} for the backend and \\textbf{UraJS} (custom framework) for the frontend.",
        "Implemented real-time game mechanics, an authentication system, and \\textbf{WebSocket}-based communication for smooth player interaction.",
      ],
      fr: [
        "Développement d'un jeu multijoueur full-stack avec \\textbf{Django} pour le backend et \\textbf{UraJS} (framework maison) pour le frontend.",
        "Implémentation de mécaniques de jeu en temps réel, d'un système d'authentification et d'une communication par \\textbf{WebSocket} pour une interaction fluide.",
      ],
    },
  },
  {
    id: "dashboard",
    url: "https://github.com/mohammedhrima/dashboard",
    urlText: "github.com/mohammedhrima/dashboard",
    defaultSelected: true,
    title: { en: "Dashboard", fr: "Tableau de Bord" },
    highlights: {
      en: [
        "Developed a real-time data dashboard using \\textbf{React} and \\textbf{Express.js}.",
        "Used \\textbf{SQLite} with \\textbf{Prisma} for smooth database interactions.",
        "Designed an interactive and responsive interface for clear data visualization.",
      ],
      fr: [
        "Développement d'un tableau de bord de données en temps réel avec \\textbf{React} et \\textbf{Express.js}.",
        "Utilisation de \\textbf{SQLite} avec \\textbf{Prisma} pour des interactions fluides avec la base de données.",
        "Conception d'une interface interactive et responsive pour une visualisation claire des données.",
      ],
    },
  },
];

export const skills = [
  {
    id: "languages",
    defaultSelected: true,
    category: { en: "Programming Languages", fr: "Langages de programmation" },
    items: "C, C++, JavaScript/TypeScript, Python, Bash",
  },
  {
    id: "web",
    defaultSelected: true,
    category: { en: "Web Development", fr: "Développement Web" },
    items:
      "ReactJS, NextJS, ExpressJS, NodeJS, Django, FastAPI, Flask, HTML, CSS, SCSS, Tailwind CSS",
  },
  {
    id: "devops",
    defaultSelected: true,
    category: { en: "DevOps \\& Tools", fr: "DevOps \\& Outils" },
    items: "Docker, Docker Compose, Git, GitHub, Linux",
  },
  {
    id: "databases",
    defaultSelected: true,
    category: { en: "Databases", fr: "Bases de données" },
    items: "PostgreSQL, MySQL, MariaDB, MongoDB (NoSQL)",
  },
  {
    id: "testing",
    defaultSelected: true,
    category: { en: "Testing", fr: "Tests" },
    items: "Cypress, Google Test",
  },
  {
    id: "pm",
    defaultSelected: true,
    category: { en: "Project Management", fr: "Gestion de projet" },
    items: "MS Project, Trello",
  },
];

export const education = [
  {
    id: "um6p",
    defaultSelected: true,
    variant: "twocolentry_",
    date: { en: "Oct 2022 -- Jan 2025", fr: "Oct. 2022 -- Janv. 2025" },
    school: "Mohammed VI Polytechnic University, 1337 (42 Network)",
    degree: { en: "Computer Science", fr: "Informatique" },
  },
  {
    id: "fst",
    defaultSelected: true,
    variant: "twocolentry_",
    date: { en: "Jul 2019", fr: "Juill. 2019" },
    school: "Faculty of Science and Technology",
    degree: {
      en: "Bachelor's in Mechanical Engineering",
      fr: "Licence en Génie Mécanique",
    },
  },
  {
    id: "ima",
    defaultSelected: true,
    variant: "twocolentry",
    date: { en: "Nov 2019", fr: "Nov. 2019" },
    school: "Institute of Aeronautical Trades",
    degree: { en: "CNC Machining", fr: "Usinage CNC" },
  },
  {
    id: "ofppt",
    defaultSelected: true,
    variant: "twocolentry_",
    date: { en: "Jun 2018", fr: "Juin 2018" },
    school: "Office of vocational training and employment promotion",
    degree: { en: "Mechanical Manufacturing", fr: "Fabrication Mécanique" },
  },
  {
    id: "bac",
    defaultSelected: true,
    variant: "twocolentry",
    date: { en: "Jun 2016", fr: "Juin 2016" },
    school: "Cherif Idrissi High School",
    degree: {
      en: "Baccalaureate, Mathematical Science (B)",
      fr: "Baccalauréat, Sciences Mathématiques (B)",
    },
  },
];

export const languages = [
  {
    id: "fr",
    defaultSelected: true,
    name: { en: "French", fr: "Français" },
    level: { en: "Full Professional", fr: "Professionnel complet" },
  },
  {
    id: "en",
    defaultSelected: true,
    name: { en: "English", fr: "Anglais" },
    level: { en: "Full Professional", fr: "Professionnel complet" },
  },
  {
    id: "ar",
    defaultSelected: true,
    name: { en: "Arabic", fr: "Arabe" },
    level: { en: "Native or Bilingual", fr: "Natif ou bilingue" },
  },
];

export const certifications = [
  { id: "apqp", defaultSelected: true, name: { en: "APQP", fr: "APQP" } },
  {
    id: "cad",
    defaultSelected: true,
    name: { en: "CAD Design", fr: "Conception CAO" },
  },
  {
    id: "msproject",
    defaultSelected: true,
    name: { en: "Microsoft Project", fr: "Microsoft Project" },
  },
];

export const hobbies = {
  en: [
    "Understanding the inner workings of technologies",
    "Reading novels",
    "Calisthenics/Fitness",
    "Photography",
  ],
  fr: [
    "Comprendre le fonctionnement interne des technologies",
    "Lecture de romans",
    "Callisthénie/Fitness",
    "Photographie",
  ],
};

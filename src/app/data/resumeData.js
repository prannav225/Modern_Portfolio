export const resumeData = {
  name: "Naga Pranav. M",
  title: "Software Developer",
  location: "Bengaluru, India",
  summary:
    "Frontend Developer with 2+ years of experience building high-performance, real-time web applications and SPA architectures. Specialized in React.js, TypeScript, and modern frontend ecosystems, with strong expertise in cross-browser compatible interfaces, component-driven development, and seamless UI/UX implementation. Experienced with full-stack JavaScript, responsive design, and real-time systems. Strong track record of delivering production-grade solutions in fast-paced startup environments.",
  contact: {
    email: "nagapranav.m@gmail.com",
    mobile: "+91 9945859958",
    github: "github.com/prannav225",
    linkedin: "linkedin.com/in/prannav-m",
    portfolio: "https://pra9v.site",
  },
  skills: {
    "Core Expertise":
      "React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, SPA Architecture, Real-Time Systems",
    Frontend:
      "Next.js, Tailwind CSS, React Router, Framer Motion, Responsive UI",
    "State Management": "Zustand, React Context API, React Hooks, Redux",
    "Backend & Realtime": "Node.js, Express.js, WebRTC, Socket.IO, REST APIs, Supabase",
    "Tools & Deployment": "Vite, Git, Vercel, Netlify, Figma, Docker, jsPDF",
  },
  experience: [
    {
      company: "BeePrecise",
      role: "Software Developer",
      period: "Oct 2023 - Nov 2025",
      location: "Bengaluru, India",
      highlights: [
        "Built real-time IoT monitoring dashboards for beehive systems, visualizing live sensor data.",
        "Optimized frontend performance by implementing API call optimization and caching strategies.",
        "Architected and delivered reusable, modular React components following CDD patterns.",
        "Integrated ML-based prediction models for real-time hive health classification.",
        "Managed complex application state using React Context API and hooks.",
        "Collaborated closely with cross-functional teams to ship full-stack features in a startup environment.",
      ],
    },
    {
      company: "Electronix AI",
      role: "Founding Team",
      period: "Jan 2025 - Nov 2025",
      location: "Bengaluru, India",
      highlights: [
        "Led hiring and recruitment efforts, identifying and onboarding early-stage talent.",
        "Contributed to product direction, workflows, and initial feature requirements.",
        "Participated in establishing product vision and go-to-market strategy for a SaaS platform.",
      ],
    },
    {
      company: "Freelance",
      role: "Web Consultant",
      period: "Dec 2025 - Present",
      location: "Bengaluru, India",
      highlights: [
        "Built responsive, production-grade websites for small businesses with automated CI/CD.",
        "Designing and iterating on client-facing interfaces with focus on accessibility and performance.",
      ],
    },
  ],
  projects: [
    {
      name: "Kodast",
      desc: "Local-First Codebase AI CLI & Code Intelligence Engine",
      link: "https://kodast.vercel.app/",
      tech: "TypeScript, Node.js, SQLite, LanceDB, ts-morph, Google Gemini / Ollama",
      highlights: [
        "Architected a high-performance, local-first code intelligence CLI and polyglot parser supporting 15+ programming languages.",
        "Built a multi-modal hybrid retrieval engine combining AST symbol lookups, SQLite call graph traversal, and LanceDB semantic vector search.",
        "Implemented real-time incremental re-indexing in <30ms using debounced file watchers and local SQLite WAL mode persistence.",
        "Engineered zero-token fast-path conversational memory, model cascade fallback, and OSC-8 terminal hyperlinks for grounded code citations.",
      ],
    },
    {
      name: "Wishcraft",
      desc: "Personalized Website Builder for Special Occasions",
      link: "https://wishcraft-seven.vercel.app/",
      tech: "React 19, TypeScript, Tailwind CSS v4, Framer Motion, Supabase, EmailJS",
      highlights: [
        "Architected a dynamic theming engine re-injecting CSS variables on-the-fly, enabling users to select from multiple visual themes without page reloads.",
        "Built a guided creation wizard with multi-step forms, image compression, HEIC support, and one-tap WhatsApp sharing with unique magic links.",
        "Designed responsive mobile-first UI with Framer Motion animations, React Context state management, and Vercel CI/CD deployment.",
        "Integrated Supabase for data persistence and EmailJS for notification delivery, creating a seamless end-to-end user experience from creation to sharing.",
      ],
    },
    {
      name: "buckflo",
      desc: "Private Personal Finance Tracker PWA & Android App",
      link: "https://buckflo.com",
      tech: "React, PWA, Tailwind CSS, IndexedDB, Offline-First Architecture",
      highlights: [
        "Architected a private, offline-first personal finance tracking PWA & Android application ensuring 100% data privacy with zero cloud tracking.",
        "Implemented local-first data persistence using IndexedDB and Web Storage APIs for instant offline transaction logging and budget visualization.",
        "Built responsive data dashboards with real-time expense category breakdowns, savings goal tracking, and dynamic visual reports.",
      ],
    },
    {
      name: "Getransfr",
      desc: "Peer-to-Peer File Sharing PWA",
      link: "https://getransfr.vercel.app/",
      tech: "React 19, TypeScript, WebRTC, Socket.IO, Node.js, Express.js",
      highlights: [
        "Architected browser-based P2P file-sharing system using WebRTC, Web Workers for 60fps UI performance, and File System Access API for optimized disk writes.",
        "Built scalable Node.js/Express signaling server handling WebRTC offers, ICE candidates, and multi-device discovery with Framer Motion animations.",
        "Implemented real-time progress tracking and Socket.IO integration for seamless peer communication across multiple devices and browsers.",
        "Leveraged modern browser APIs (Wake Lock API, File System Access) to enable uninterrupted background transfers with direct local file system access.",
      ],
    },
    {
      name: "FadeX",
      desc: "Zen-Mode Screenwriting PWA",
      link: "https://fadex-writing.vercel.app/",
      tech: "Next.js 16, TypeScript, Zustand, Tailwind CSS v4, jsPDF",
      highlights: [
        "Built block-based screenwriting editor with context-aware smart typing, Fountain syntax detection, and predictive character/location suggestions.",
        "Implemented modular Zustand state architecture with middleware persistence, 50-level undo/redo system, and memoized rendering for 100+ page documents.",
        "Developed offline-first PWA with scene navigator, drag-and-drop reordering, and high-fidelity PDF/Fountain export using jsPDF and html2canvas.",
        "Built intelligent auto-formatting engine that predicts next block type (e.g., after Character block, auto-creates Dialogue block), reducing friction in the writing process.",
      ],
    },
  ],
  education: {
    degree: "Bachelor of Science (Physics, Mathematics, Computer Science)",
    institution: "Vijaya College, Bengaluru",
    period: "2018 - 2022",
  },
};

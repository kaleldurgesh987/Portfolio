export const personalInfo = {
  name: "Durgesh Kalel",
  heroGreeting: "HI, I'M DURGESH.",
  role: "Creative Developer | Programmer | Tech Enthusiast",
  tagline: "Turning Creative Ideas Into Digital Experiences.",
  location: "Maharashtra, India",
  availability: "Available for Opportunities",
  availabilityStatus: "Open for Full-time Roles, Freelance & Collaborative Projects",
  bio: `I'm Durgesh Kalel, a passionate developer and technology enthusiast from Maharashtra, India. I enjoy transforming creative ideas into functional digital experiences.

My interests include web development, application development, game development, and exploring modern technologies.

I continuously work on improving my programming skills and building projects that solve real-world problems.`,
  socialLinks: {
    github: "https://github.com/durgeshkalel",
    linkedin: "https://linkedin.com/in/durgeshkalel",
    instagram: "https://instagram.com/durgeshkalel",
    email: "durgeshkalel.dev@gmail.com"
  },
  stats: [
    { label: "Core Technologies", value: "10+" },
    { label: "Completed Projects", value: "4+" },
    { label: "Hackathons & Events", value: "Multiple" },
    { label: "Passion & Commitment", value: "100%" }
  ]
};

export const rotatingRoles = [
  "Creative Developer",
  "Programmer",
  "Game Developer",
  "Tech Enthusiast"
];

export const educationData = [
  {
    degree: "Bachelor of Technology / Computer Science",
    institution: "University / Institute in Maharashtra",
    location: "Maharashtra, India",
    duration: "2022 - Present", // Editable
    description: "Specializing in software engineering, algorithms, database management, and modern application development.",
    highlights: ["Data Structures & Algorithms", "Database Management Systems", "Object-Oriented Programming (C#/Python)", "Mobile & Web Architectures"]
  }
];

export const interestsData = [
  {
    title: "Game Development",
    icon: "Gamepad2",
    description: "Designing physics-driven gameplay, gravity manipulation mechanics, and 2D/3D interactive experiences in Unity."
  },
  {
    title: "Modern Web & UI/UX",
    icon: "Layout",
    description: "Crafting reactive, fluid, and futuristic web experiences with React, Tailwind CSS, and interactive 3D elements."
  },
  {
    title: "Mobile App Development",
    icon: "Smartphone",
    description: "Building native and declarative Android applications using Kotlin, Jetpack Compose, and Firebase."
  },
  {
    title: "Data Privacy & Security",
    icon: "ShieldCheck",
    description: "Researching data protection mechanisms, secure file exchanges, and tamper-proof verification flows."
  }
];

export const skillCategories = [
  { id: "all", name: "All Skills" },
  { id: "programming", name: "Programming" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "database", name: "Database" },
  { id: "gamedev", name: "Game Dev" },
  { id: "tools", name: "Tools" }
];

export const skillsData = [
  // Programming
  { name: "Python", category: "programming", level: "Proficient", levelPercent: 88, icon: "Code2", color: "#38BDF8", desc: "Data manipulation, automation scripts, and problem solving." },
  { name: "JavaScript", category: "programming", level: "Advanced", levelPercent: 92, icon: "FileCode", color: "#FACC15", desc: "Modern ES6+, async/await, DOM APIs, and full-stack logic." },
  { name: "C#", category: "programming", level: "Proficient", levelPercent: 85, icon: "Terminal", color: "#A855F7", desc: "Object-oriented programming, game logic, and Unity scripting." },
  
  // Frontend
  { name: "HTML5", category: "frontend", level: "Advanced", levelPercent: 95, icon: "Code", color: "#F97316", desc: "Semantic structure, accessible markup, and SEO standards." },
  { name: "CSS3 / Tailwind", category: "frontend", level: "Advanced", levelPercent: 92, icon: "Palette", color: "#06B6D4", desc: "Responsive layouts, Flexbox/Grid, animations, and glassmorphism." },
  { name: "React.js", category: "frontend", level: "Proficient", levelPercent: 90, icon: "Layers", color: "#00F0FF", desc: "Reusable components, custom hooks, state management & Vite." },
  
  // Backend
  { name: "Node.js", category: "backend", level: "Proficient", levelPercent: 82, icon: "Server", color: "#22C55E", desc: "RESTful APIs, asynchronous event handling, and server logic." },
  { name: "Firebase", category: "backend", level: "Proficient", levelPercent: 88, icon: "Flame", color: "#F59E0B", desc: "Authentication, Cloud Firestore, Realtime Database, and Hosting." },
  
  // Database
  { name: "MySQL", category: "database", level: "Proficient", levelPercent: 84, icon: "Database", color: "#3B82F6", desc: "Relational schema design, complex queries, joins, and indexing." },
  
  // Game Development
  { name: "Unity", category: "gamedev", level: "Proficient", levelPercent: 86, icon: "Gamepad2", color: "#E11D48", desc: "2D/3D physics, particle systems, sprite mechanics, and game loops." },
  
  // Development Tools
  { name: "VS Code", category: "tools", level: "Advanced", levelPercent: 95, icon: "Laptop", color: "#0284C7", desc: "Primary IDE configured with modern extensions and debugging tools." },
  { name: "Android Studio", category: "tools", level: "Proficient", levelPercent: 84, icon: "Smartphone", color: "#10B981", desc: "Native Android development, Jetpack Compose previews, and emulator testing." },
  { name: "Git", category: "tools", level: "Proficient", levelPercent: 88, icon: "GitBranch", color: "#EF4444", desc: "Version control, branching strategies, and repository management." },
  { name: "GitHub", category: "tools", level: "Advanced", levelPercent: 90, icon: "Github", color: "#CBD5E1", desc: "Collaborative workflows, open-source hosting, and CI/CD basics." }
];

export const projectsData = [
  {
    id: "gravity-runner",
    title: "Gravity Runner",
    tagline: "Defy gravity. Master the speed.",
    category: "Game Development",
    shortDescription: "A 2D mobile gravity runner game where players navigate obstacles using gravity-flipping mechanics.",
    fullDescription: "Gravity Runner is an adrenaline-packed 2D mobile platformer where players invert gravitational forces in real-time to avoid spikes, laser gates, and shifting barriers. Built with Unity and C#, the game emphasizes pixel-perfect physics responsiveness, progressive difficulty curves, and high-replayability mechanics.",
    technologies: ["Unity", "C#", "2D Physics Engine", "Mobile Controls"],
    features: [
      "Dynamic Gravity Switching: Flip orientation seamlessly on mobile touch taps.",
      "Obstacle Challenges: Moving hazards, laser beams, and timed traps.",
      "Multiple Levels & Curves: Scaled difficulty testing player reflexes.",
      "Mobile Touch Optimization: Ultra-low latency input system for smooth jumps.",
      "Game Progression System: Score tracking, checkpoint saves, and high-score records."
    ],
    github: "https://github.com/durgeshkalel/gravity-runner",
    demo: "https://durgeshkalel.github.io/gravity-runner-preview",
    status: "Completed",
    highlights: ["Custom 2D gravity physics", "Zero-latency touch handlers", "Adaptive level generator"],
    architecture: "State-machine driven character controller with custom kinematic gravity multiplier and decoupled audio manager."
  },
  {
    id: "home-crew",
    title: "Home Crew",
    tagline: "Your home. Our helping hands.",
    category: "Mobile Application",
    shortDescription: "A platform designed to connect customers with nearby service professionals, helping people find reliable local workers.",
    fullDescription: "Home Crew bridges the gap between household needs and verified local tradespeople. Built using modern Android architecture with Kotlin, Jetpack Compose, and Firebase, it features real-time geolocation discovery, appointment bookings, role-based dashboards, and community review mechanisms.",
    technologies: ["Kotlin", "Jetpack Compose", "Firebase Firestore", "Firebase Auth", "Android Studio"],
    features: [
      "Dual Role Accounts: Dedicated interfaces for customers and service providers.",
      "Service Catalog: Categorized offerings (Electrician, Plumber, Cleaning, Carpentry).",
      "Nearby Provider Discovery: Proximity-based matching for immediate assistance.",
      "Instant Job Requests: Direct inquiries with problem descriptions and schedules.",
      "Booking & Status Tracker: Transparent live pipeline from request to completion.",
      "Worker Reviews & Ratings: Authentic community feedback system."
    ],
    github: "https://github.com/durgeshkalel/home-crew",
    demo: "https://github.com/durgeshkalel/home-crew/releases",
    status: "Active Project",
    highlights: ["100% Kotlin & Jetpack Compose UI", "Real-time Firestore listeners", "Role-based security rules"],
    architecture: "MVVM clean architecture pattern with Coroutines, StateFlow, and Repository layer interfacing with Firestore."
  },
  {
    id: "shadowx-coders",
    title: "ShadowX Coders",
    tagline: "Secure, modern authentication ecosystem.",
    category: "Web Development",
    shortDescription: "A modern authentication and login website with a professional, cyber-styled interface.",
    fullDescription: "ShadowX Coders is a full-featured authentication portal designed for modern developer communities. It provides multi-provider authentication, secure token storage, password reset workflows, and an aesthetic dark cyberpunk UI with responsive fluid glass cards.",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "Firebase Auth", "Responsive Design"],
    features: [
      "Modern Cyberpunk UI: Frosted glass aesthetics, glowing neon accents, and smooth feedback.",
      "Multi-Provider Authentication: Email/password and one-click Google Sign-in.",
      "Form Validation & Error Handling: Real-time inline feedback for input sanitization.",
      "Session Persistence: Secure client session maintenance with token refresh.",
      "Fully Responsive Layout: Seamlessly adapts across mobile, tablet, and ultra-wide screens."
    ],
    github: "https://github.com/durgeshkalel/shadowx-coders",
    demo: "https://shadowx-coders.web.app",
    status: "Completed",
    highlights: ["One-click Google Sign-In", "Real-time regex validation", "Cyber-glass aesthetic"],
    architecture: "Lightweight modular vanilla JavaScript architecture leveraging Firebase v9 modular SDK and CSS variable theming."
  },
  {
    id: "print-shop-data-leak",
    title: "Print Shop Data Leak Prevention",
    tagline: "Protecting sensitive documents at public print counters.",
    category: "Cybersecurity & Concept",
    shortDescription: "A hackathon concept focused on protecting sensitive documents shared with printing shops.",
    fullDescription: "In public print shops, users routinely transfer sensitive credentials, tax forms, IDs, and legal deeds via public USB drives, WhatsApp web, or unencrypted emails—leaving residual copies on shop computers. This hackathon solution introduces a time-limited, auto-purging secure transfer protocol with biometric receipt verification and cryptographic watermarking.",
    technologies: ["Data Privacy", "Secure File Handling", "Cryptography", "Hackathon Prototype"],
    features: [
      "Self-Purging Document Links: Single-print expiration tokens that shred after printing.",
      "Dynamic Watermarking: Embeds temporary shop session metadata into background layers.",
      "Zero-Local Cache Architecture: Direct-to-spool print proxy that avoids persistent desktop storage.",
      "User Verification Protocol: Dual-party PIN authorization before document decrypts."
    ],
    github: "https://github.com/durgeshkalel/print-shop-leak-protection",
    demo: "https://durgeshkalel.github.io/print-shop-defense-concept",
    status: "Hackathon Concept",
    highlights: ["Ephemeral token lifecycle", "Dynamic anti-tamper watermark", "Privacy-first architecture"],
    architecture: "Client-side encrypted payload with transient HMAC tokens, automated memory flush, and post-spool confirmation."
  }
];

export const journeyTimeline = [
  {
    year: "Phase 01",
    title: "Programming Learning Journey",
    subtitle: "The Spark of Curiosity",
    icon: "Terminal",
    date: "Foundational Phase",
    description: "Began mastering logic and algorithm design through Python and C#. Built core problem-solving intuition and developed a fascination with how code shapes digital reality.",
    tags: ["Python", "Logic Building", "Algorithms", "Problem Solving"]
  },
  {
    year: "Phase 02",
    title: "First Website Development",
    subtitle: "Stepping into the Web",
    icon: "Globe",
    date: "Frontend Milestones",
    description: "Dove into web architecture with HTML, CSS, and modern JavaScript. Discovered the thrill of combining visual creativity with interactive client interfaces.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
  },
  {
    year: "Phase 03",
    title: "Game Development with Unity",
    subtitle: "Physics, Worlds & Mechanics",
    icon: "Gamepad2",
    date: "Interactive Realities",
    description: "Began engineering 2D games using Unity and C#. Explored game loops, state machines, sprite manipulation, and created the Gravity Runner mobile title.",
    tags: ["Unity", "C#", "2D Physics", "Game Design"]
  },
  {
    year: "Phase 04",
    title: "Android Application Development",
    subtitle: "Mobile Native Ecosystem",
    icon: "Smartphone",
    date: "Modern Native Apps",
    description: "Expanded horizons into native mobile development using Kotlin and Jetpack Compose. Architected 'Home Crew' to connect citizens with verified local service professionals.",
    tags: ["Kotlin", "Jetpack Compose", "Android Studio", "Firebase"]
  },
  {
    year: "Phase 05",
    title: "Hackathon Projects & Innovation",
    subtitle: "Rapid Prototyping Under Fire",
    icon: "Trophy",
    date: "Collaborative Sprints",
    description: "Tackled urgent real-world problems in intense hackathon environments, designing security-focused solutions like the Print Shop Data Leak Prevention framework.",
    tags: ["Hackathon", "Data Security", "Rapid Prototyping", "Teamwork"]
  },
  {
    year: "Phase 06",
    title: "Future Development Goals",
    subtitle: "Continuous Innovation",
    icon: "Rocket",
    date: "Looking Forward",
    description: "Currently scaling skills into full-stack web architectures, Three.js 3D web graphics, intelligent AI-assisted apps, and contributing to impactful open-source software.",
    tags: ["Three.js", "Full-Stack Scalability", "AI Integration", "Cloud Systems"]
  }
];

export const certificatesData = [
  {
    id: "cert-01",
    title: "Hackathon Participation & Innovation",
    issuer: "Tech Hackathon Community",
    date: "2024",
    category: "Hackathon",
    badge: "Verified Innovator",
    description: "Recognized for creative problem-solving and rapid prototyping of the Print Shop Data Leak Prevention system.",
    skillsCovered: ["Cybersecurity Concepts", "Rapid Prototyping", "Pitch & Architecture"]
  },
  {
    id: "cert-02",
    title: "Full-Stack Web Development Mastery",
    issuer: "Technical Development Track",
    date: "2023 - 2024",
    category: "Web Engineering",
    badge: "Certified",
    description: "Comprehensive training covering semantic HTML, modern responsive CSS, JavaScript (ES6+), React.js, and Firebase integration.",
    skillsCovered: ["React.js", "JavaScript ES6+", "RESTful APIs", "State Management"]
  },
  {
    id: "cert-03",
    title: "Unity 2D/3D Game Programming",
    issuer: "Game Development Institute",
    date: "2023",
    category: "Game Dev",
    badge: "Certified",
    description: "Demonstrated proficiency in C# scripting, physics simulation, mobile input handlers, and audio integration in Unity.",
    skillsCovered: ["Unity Engine", "C# Scripting", "Physics 2D", "Mobile Optimization"]
  },
  {
    id: "cert-04",
    title: "Android App Development with Jetpack Compose",
    issuer: "Mobile Developer Program",
    date: "2024",
    category: "Mobile",
    badge: "Certified",
    description: "Architected reactive, component-based user interfaces in Kotlin with Jetpack Compose, ViewModel state management, and Firebase data bindings.",
    skillsCovered: ["Kotlin", "Jetpack Compose", "MVVM Pattern", "Cloud Firestore"]
  }
];

/**
 * AAVISHKAR Centralized Data Repository
 *
 * REPLACEMENT GUIDE:
 * ─────────────────────────────────────
 * All editable website content lives here.
 *
 * Items marked "[REPLACE]" contain placeholder data that must be
 * updated with real AAVISHKAR information before launch.
 *
 * Items marked "[EDITABLE]" contain content you can customise.
 *
 * Do NOT invent real people, achievements, partnerships,
 * statistics, awards, or claims that are not supplied by AAVISHKAR.
 */

import { siteImages } from "./siteImages";

// ── Navigation ───────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Innovations", href: "#innovations" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Team", href: "#team" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

// ── Hero ─────────────────────────────────────────────────────

export const heroData = {
  label: "STUDENT INNOVATION • AI • TECHNOLOGY • RESEARCH", // [EDITABLE]
  headlinePrefix: "Where Student Ideas Become", // [EDITABLE]
  headlineHighlight: "Real Innovation.", // [EDITABLE]
  description:
    "A student-driven innovation initiative empowering students to explore technology, build meaningful projects, conduct research, collaborate with innovators, and create solutions for the real world.", // [EDITABLE]
  ctaPrimary: "Explore Innovations", // [EDITABLE]
  ctaSecondary: "Join Our Community", // [EDITABLE]
  /**
   * [REPLACE] Compact metrics. Leave `value` as "" until a real
   * statistic is supplied — the hero renders "—" when empty, so no
   * fabricated numbers appear while staying fully editable.
   */
  stats: [
    { value: "", label: "Student Innovators", target: 0 },
    { value: "", label: "Projects in Motion", target: 0 },
    { value: "", label: "Innovation Areas", target: 0 },
    { value: "", label: "Events & Workshops", target: 0 },
  ],
};

// ── About ────────────────────────────────────────────────────

export const aboutData = {
  label: "ABOUT AAVISHKAR", // [EDITABLE]
  heading: "Building a Culture of Innovation", // [EDITABLE]
  description:
    "AAVISHKAR is a student-driven platform where curiosity meets technology. We bring together students, creators, researchers, and aspiring entrepreneurs to explore ideas, develop projects, and learn by building.", // [EDITABLE]
  values: [
    {
      num: "01",
      title: "VISION",
      text: "Create a generation of students who confidently build solutions for tomorrow.",
    },
    {
      num: "02",
      title: "MISSION",
      text: "Provide students with the environment, knowledge, and community needed to transform ideas into meaningful projects.",
    },
    {
      num: "03",
      title: "COMMUNITY",
      text: "Connect students from different backgrounds and disciplines to learn and build together.",
    },
    {
      num: "04",
      title: "IMPACT",
      text: "Encourage technology-driven solutions to real-world challenges.",
    },
  ], // [EDITABLE] Update these core values with real AAVISHKAR values
};

// ── AI Mission ───────────────────────────────────────────────

export const aiMissionData = {
  label: "OUR AI MISSION", // [EDITABLE]
  heading: "Building Intelligence for a Better Future", // [EDITABLE]
  description:
    "At AAVISHKAR, we believe artificial intelligence should be explored not only as a technology, but as a tool for solving meaningful problems. Our student innovators experiment with AI, machine learning, computer vision, automation and intelligent systems.", // [EDITABLE]
  cards: [
    {
      num: "01",
      title: "LEARN",
      text: "Understand emerging AI technologies through hands-on experimentation and rigorous practical exploration.",
    },
    {
      num: "02",
      title: "BUILD",
      text: "Turn ideas into practical AI-powered projects with real architectural depth and clean engineering.",
    },
    {
      num: "03",
      title: "IMPACT",
      text: "Use technology to address meaningful real-world challenges across education, sustainability, and efficiency.",
    },
  ], // [EDITABLE]
};

// ── Innovation Areas ─────────────────────────────────────────

export const innovationAreas = [
  {
    id: "ai",
    number: "01",
    title: "Artificial Intelligence",
    description: "Intelligent systems, AI agents and machine learning.",
    image: siteImages.innovations.ai,
  },
  {
    id: "software",
    number: "02",
    title: "Software Development",
    description: "Modern web, mobile and cloud applications.",
    image: siteImages.innovations.software,
  },
  {
    id: "robotics",
    number: "03",
    title: "Robotics & IoT",
    description: "Connected devices, automation and intelligent systems.",
    image: siteImages.innovations.robotics,
  },
  {
    id: "research",
    number: "04",
    title: "Research & Development",
    description: "Exploring new ideas and emerging technologies.",
    image: siteImages.innovations.research,
  },
  {
    id: "entrepreneurship",
    number: "05",
    title: "Entrepreneurship",
    description: "Turning promising ideas into products and ventures.",
    image: siteImages.innovations.entrepreneurship,
  },
  {
    id: "emerging",
    number: "06",
    title: "Emerging Technologies",
    description: "Exploring technologies shaping the future.",
    image: siteImages.innovations.emergingTech,
  },
]; // [EDITABLE] These are AAVISHKAR's focus areas. Update descriptions as needed.

// ── Projects ─────────────────────────────────────────────────

export interface ProjectItem {
  id: string;
  name: string;
  /** Short one-liner for the card */
  description: string;
  /** Full description for the modal */
  longDescription: string;
  /** e.g. "AI", "IoT", "Web" */
  category: string;
  tags: string[];
  /** "In Development" | "Prototype" | "Research" | "Completed" */
  status: string;
  team: string;
  image: string;
  highlights: string[];
  /** Set to "" when no link is available */
  repoUrl?: string;
  demoUrl?: string;
}

/**
 * [REPLACE] These are EXAMPLE PROJECTS for layout demonstration.
 * Replace with real AAVISHKAR projects when available.
 * Remove all entries and add real ones, or mark each as "[EXAMPLE]".
 */
export const projectsData: ProjectItem[] = [
  {
    id: "example-ai-assistant",
    name: "[Example] AI Study Assistant",
    description:
      "An intelligent learning assistant designed to help students understand complex topics.",
    longDescription:
      "A student-built intelligent learning companion that transforms dense textbooks and lecture notes into interactive concept graphs, diagnostic self-quizzes, and voice-guided explanations using localized LLMs and Retrieval-Augmented Generation.",
    category: "AI & Education",
    tags: ["AI", "Education", "Machine Learning"],
    status: "Example",
    team: "Student AI Cohort",
    image: siteImages.projects.studyAssistant,
    highlights: [
      "Contextual concept graphs",
      "Adaptive flashcards & quizzes",
      "Offline-capable lightweight model",
    ],
    demoUrl: "",
    repoUrl: "",
  },
  {
    id: "example-smart-campus",
    name: "[Example] Smart Campus",
    description: "A technology platform designed to improve campus experiences.",
    longDescription:
      "A distributed IoT sensing mesh deployed across study halls, labs, and cafeteria commons. Monitors real-time ambient noise, seat availability, environmental air quality, and power optimization through privacy-first telemetry.",
    category: "IoT & Web",
    tags: ["IoT", "Web", "Automation"],
    status: "Example",
    team: "Embedded Systems Group",
    image: siteImages.projects.smartCampus,
    highlights: [
      "Low-power LoRa mesh nodes",
      "Sub-second room occupancy updates",
      "Energy optimization dashboard",
    ],
    demoUrl: "",
    repoUrl: "",
  },
  {
    id: "example-vision-guard",
    name: "[Example] VisionGuard",
    description: "Computer vision technology for intelligent monitoring.",
    longDescription:
      "An edge-computing computer vision platform built for safety and accessibility audits. Operates completely on local embedded hardware without sending sensitive video feeds to external clouds, prioritizing privacy and security.",
    category: "Computer Vision",
    tags: ["Computer Vision", "AI", "Edge Computing"],
    status: "Example",
    team: "Vision & Robotics Circle",
    image: siteImages.projects.visionGuard,
    highlights: [
      "Zero-cloud edge processing",
      "Real-time hazard detection",
      "Privacy-preserving anonymization",
    ],
    demoUrl: "",
    repoUrl: "",
  },
  {
    id: "example-eco-track",
    name: "[Example] EcoTrack",
    description: "A platform for monitoring environmental impact.",
    longDescription:
      "An automated sustainability telemetry platform that aggregates energy consumption, water usage, and waste metrics across campus laboratories, inspiring student-led conservation through friendly departmental leaderboards.",
    category: "Sustainability & Data",
    tags: ["Sustainability", "Data", "Web"],
    status: "Example",
    team: "GreenTech Initiative",
    image: siteImages.projects.ecoTrack,
    highlights: [
      "Departmental carbon tracking",
      "Predictive consumption models",
      "Actionable waste mitigation alerts",
    ],
    demoUrl: "",
    repoUrl: "",
  },
];

// ── Research ─────────────────────────────────────────────────

export const researchPillars = [
  {
    title: "AI & Machine Learning",
    description: "Exploring intelligent systems, machine learning models and AI applications.",
    details:
      "Investigating transformer model efficiency, small language model deployment on student hardware, and synthetic benchmark evaluation.",
    image: siteImages.research.ml,
    tags: ["Deep Learning", "Transformers", "Model Compression"],
  },
  {
    title: "Computer Vision",
    description: "Experimenting with systems that understand and interpret visual information.",
    details:
      "Designing lightweight convolutional architectures for real-time spatial mapping, gesture interfaces, and robotic perception.",
    image: siteImages.research.vision,
    tags: ["Edge Vision", "Spatial AI", "Object Tracking"],
  },
  {
    title: "Automation & Robotics",
    description: "Building connected systems that sense, decide, and act autonomously.",
    details:
      "Prototyping sensor-driven control loops, embedded intelligence, and coordinated multi-agent automation with low-cost student hardware.",
    image: siteImages.research.automation,
    tags: ["IoT", "Control Systems", "Embedded AI"],
  },
  {
    title: "Sustainable Technology",
    description: "Applying technology to environmental and energy challenges.",
    details:
      "Exploring energy-efficient computing, campus sustainability telemetry, and green engineering practices across student-built systems.",
    image: siteImages.research.sustainable,
    tags: ["Green IT", "Energy", "Conservation"],
  },
]; // [EDITABLE] Update with real AAVISHKAR research focus areas

// ── Leadership Team ──────────────────────────────────────────

export interface TeamMember {
  /** [REPLACE] Real person's name */
  name: string;
  /** Role title */
  role: string;
  /** One-line area of responsibility */
  area: string;
  /** Short bio — 1-2 sentences */
  description: string;
  /** Portrait image path */
  image: string;
  /** LinkedIn profile URL or "#" */
  linkedin: string;
  /** GitHub profile URL or "#" (optional) */
  github?: string;
  /** Other social links (optional) */
  website?: string;
}

/**
 * [REPLACE] All team member data below is PLACEHOLDER.
 * Roles are correct, but names, descriptions, and social URLs
 * must be replaced with real AAVISHKAR team information.
 */
export const leadershipTeam: TeamMember[] = [
  {
    name: "[Founder Name]",
    role: "Founder",
    area: "Strategy & Vision",
    description:
      "Guiding the ecosystem where student curiosity transforms into real-world technology.",
    image: siteImages.team.founder,
    linkedin: "#",
    github: "#",
  },
  {
    name: "[Team Lead Name]",
    role: "Team Lead",
    area: "Project Coordination & Delivery",
    description:
      "Overseeing team workflows, sprint cycles, and cross-functional delivery across all projects.",
    image: siteImages.team.innovationLead,
    linkedin: "#",
    github: "#",
  },
  {
    name: "[Technical Lead Name]",
    role: "Technical Lead",
    area: "Software Architecture & Infrastructure",
    description:
      "Driving technical standards, infrastructure decisions, and codebase quality across the organisation.",
    image: siteImages.team.techLead,
    linkedin: "#",
    github: "#",
  },
  {
    name: "[Research Lead Name]",
    role: "Research Lead",
    area: "AI & Applied Systems",
    description: "Leading study groups, research publications, and machine learning experiments.",
    image: siteImages.team.researchLead,
    linkedin: "#",
    github: "#",
  },
  {
    name: "[Design Lead Name]",
    role: "Design Lead",
    area: "UI/UX & Design Systems",
    description:
      "Crafting human-centric interfaces, design libraries, and interactive visual storytelling.",
    image: siteImages.team.designLead,
    linkedin: "#",
    github: "#",
  },
  {
    name: "[Community Lead Name]",
    role: "Community Lead",
    area: "Ecosystem & Mentorship",
    description:
      "Driving workshops, hackathon partnerships, and peer onboarding across the community.",
    image: siteImages.team.communityLead,
    linkedin: "#",
  },
];

// ── Impact Facts (Philosophy Section) ────────────────────────

/**
 * [REPLACE] Impact categories shown in the dark Philosophy section.
 * When a real number is available set `target` (renders an animated
 * counter). While `target` is 0 the number is hidden and only the
 * category label + description are shown — no fabricated stats.
 */
export const impactFacts = [
  {
    label: "Projects Built",
    description: "Student-led prototypes and applications",
    target: 0,
    icon: "code",
  },
  {
    label: "Active Members",
    description: "Developers, researchers and designers",
    target: 0,
    icon: "users",
  },
  {
    label: "Innovation Initiatives",
    description: "Specialized technology focus areas",
    target: 0,
    icon: "compass",
  },
  {
    label: "Events & Workshops",
    description: "Hands-on learning sessions organized",
    target: 0,
    icon: "calendar",
  },
  {
    label: "Research Initiatives",
    description: "Applied technology investigations",
    target: 0,
    icon: "research",
  },
  {
    label: "Communities Reached",
    description: "Student partner networks connected",
    target: 0,
    icon: "community",
  },
];

// ── Achievements ─────────────────────────────────────────────

/**
 * [REPLACE] Achievement categories shown as compact cards.
 * No statistics are fabricated — display real results under each
 * category only when AAVISHKAR provides them.
 */
export const achievementsData = [
  {
    title: "Awards",
    description: "Recognition for outstanding student-built projects and research.",
  },
  {
    title: "Hackathons",
    description: "Competitive build sprints where student teams solve real problems.",
  },
  {
    title: "Research",
    description: "Student-led experiments, preprints, and publications.",
  },
  {
    title: "Projects",
    description: "Working software, hardware, and research prototypes.",
  },
  {
    title: "Workshops",
    description: "Hands-on learning sessions across technology domains.",
  },
  {
    title: "Community",
    description: "A growing network of innovators, mentors, and partners.",
  },
];

// ── Philosophy ───────────────────────────────────────────────

export const philosophyData = {
  label: "AAVISHKAR PHILOSOPHY", // [EDITABLE]
  headingPrefix: "Built by Students.", // [EDITABLE]
  headingHighlight: "Driven by Curiosity.", // [EDITABLE]
  statement:
    "We believe the best way to learn is to build. AAVISHKAR turns student curiosity into hands-on engineering, applied research, and projects that matter.", // [EDITABLE]
  tagline: "Experiment. Learn. Ship.", // [EDITABLE]
  orgName: "AAVISHKAR",
  subtitle: "Student Innovation & Technology Initiative",
};

// ── Events ───────────────────────────────────────────────────

export interface EventItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  /** e.g. "OCT 24" */
  date: string;
  /** e.g. "2026" */
  year: string;
  description: string;
  image: string;
  /**
   * [REPLACE] Add real event location.
   * Use "TBA" when location is not yet confirmed.
   */
  location: string;
  /**
   * [REPLACE] Registration link URL.
   * Use "#" when no registration link is available.
   */
  registrationUrl: string;
  /**
   * Event status: "upcoming" | "registration-open" | "completed"
   */
  status: "upcoming" | "registration-open" | "completed";
}

/**
 * [REPLACE] All events below are EXAMPLE events for layout demonstration.
 * Replace with real AAVISHKAR events when available.
 */
export const eventsData: EventItem[] = [
  {
    id: "example-workshop",
    title: "[Example] AI Workshop",
    subtitle: "Hands-on Neural Architecture Deep-Dive",
    category: "Workshop",
    date: "TBA",
    year: "2026",
    description:
      "A practical deep-dive workshop exploring transformer models, local LLM deployment, and responsible AI.",
    image: siteImages.events.workshop,
    location: "TBA",
    registrationUrl: "#",
    status: "upcoming",
  },
  {
    id: "example-hackathon",
    title: "[Example] Innovation Hackathon",
    subtitle: "36-Hour Prototype Sprint",
    category: "Hackathon",
    date: "TBA",
    year: "2026",
    description:
      "Multidisciplinary student teams collaborate under mentorship to solve pressing collegiate and community problems.",
    image: siteImages.events.hackathon,
    location: "TBA",
    registrationUrl: "#",
    status: "upcoming",
  },
  {
    id: "example-tech-talk",
    title: "[Example] Tech Talk",
    subtitle: "Frontiers of Embodied Intelligence",
    category: "Tech Talk",
    date: "TBA",
    year: "2026",
    description:
      "Student researchers and alumni discuss modern robotics, ROS2 stacks, and spatial computing.",
    image: siteImages.events.techTalk,
    location: "TBA",
    registrationUrl: "#",
    status: "upcoming",
  },
  {
    id: "example-expo",
    title: "[Example] Project Expo",
    subtitle: "Semester Demo Showcase",
    category: "Exhibition",
    date: "TBA",
    year: "2026",
    description:
      "A public exhibition celebrating working software, IoT hardware, and research posters created this term.",
    image: siteImages.events.expo,
    location: "TBA",
    registrationUrl: "#",
    status: "upcoming",
  },
  {
    id: "example-meetup",
    title: "[Example] Research Meetup",
    subtitle: "Open Science & Preprint Reading Circle",
    category: "Research",
    date: "TBA",
    year: "2026",
    description:
      "Paper review session dissecting recent breakthroughs in computer vision and generative modeling.",
    image: siteImages.events.meetup,
    location: "TBA",
    registrationUrl: "#",
    status: "upcoming",
  },
  {
    id: "example-design-sprint",
    title: "[Example] Design Sprint",
    subtitle: "Human-Centered Product Prototyping",
    category: "Workshop",
    date: "TBA",
    year: "2026",
    description:
      "Intensive design thinking workshop where student teams rapidly prototype, test, and iterate on user-centered digital products.",
    image: siteImages.events.designSprint,
    location: "TBA",
    registrationUrl: "#",
    status: "upcoming",
  },
];

// ── Community CTA ────────────────────────────────────────────

export const communityData = {
  headline: "Built By Students. Driven By Curiosity.", // [EDITABLE]
  description: "Join a community of learners, builders and innovators shaping the future together.", // [EDITABLE]
  buttonText: "Join AAVISHKAR", // [EDITABLE]
};

// ── Contact ──────────────────────────────────────────────────

export const contactData = {
  label: "GET IN TOUCH", // [EDITABLE]
  heading: "Let's Build Something Meaningful.", // [EDITABLE]
  description:
    "Have an idea, project, collaboration opportunity, or technology challenge? We'd love to hear from you.", // [EDITABLE]
  /**
   * [REPLACE] Insert real AAVISHKAR contact email.
   */
  email: "[contact@aavishkar-placeholder.com]",
  /**
   * [REPLACE] Insert real location.
   */
  location: "[Your Campus / Lab Location Here]",
  /**
   * [REPLACE] Insert real social media profile URLs.
   * Use "#" as placeholder until real URLs are available.
   */
  socials: {
    linkedin: "#",
    github: "#",
    instagram: "#",
    youtube: "#",
  },
};

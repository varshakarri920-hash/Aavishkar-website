/**
 * AAVISHKAR Centralized Image Repository
 *
 * REPLACEMENT GUIDE:
 * ─────────────────────────────────────
 * To replace any image:
 * 1. Drop the file into public/images/<category>/
 * 2. Update the path below to "/images/<category>/your-file.jpg"
 *
 * Images marked "[DECORATIVE STOCK]" are Unsplash placeholders.
 * Replace them with real AAVISHKAR photographs when available.
 *
 * Images marked "[LOCAL ASSET]" are bundled from src/assets/.
 * Replace the source file in src/assets/ to update.
 */

import heroLocal from "@/assets/aavishkar-hero.jpg";
import projectsLocal from "@/assets/aavishkar-projects.jpg";
import workshopLocal from "@/assets/aavishkar-workshop.jpg";

export const siteImages = {
  // ── Hero Section ──────────────────────────────────────────
  hero: {
    /**
     * Replace: Drop real AAVISHKAR lab/team photo into public/images/hero/main.jpg
     * Then update to: "/images/hero/main.jpg"
     */
    main: heroLocal, // [LOCAL ASSET] Replace with real AAVISHKAR hero image
  },

  // ── AI Mission Section ────────────────────────────────────
  aiMission: {
    /**
     * Replace: Drop a strong AI/technology visual into public/images/ai/neural-network.jpg
     * Then update to: "/images/ai/neural-network.jpg"
     */
    neuralNetwork:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80", // [DECORATIVE STOCK] Replace with real AAVISHKAR AI research photo
  },

  // ── Innovation Areas ──────────────────────────────────────
  // Each card needs one visual. Replace with real AAVISHKAR workspace/project photos.
  innovations: {
    ai: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/innovations/ai.jpg
    software:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/innovations/software.jpg
    robotics:
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/innovations/robotics.jpg
    research:
      "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/innovations/research.jpg
    entrepreneurship:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/innovations/entrepreneurship.jpg
    emergingTech:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/innovations/emerging-tech.jpg
  },

  // ── Projects ──────────────────────────────────────────────
  // Each project card needs one visual. Replace with real project screenshots/photos.
  projects: {
    studyAssistant:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/projects/study-assistant.jpg
    smartCampus:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/projects/smart-campus.jpg
    visionGuard:
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/projects/vision-guard.jpg
    ecoTrack:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/projects/eco-track.jpg
  },

  // ── Research ──────────────────────────────────────────────
  // Each research pillar needs one visual. Replace with real lab/experiment photos.
  research: {
    ml: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/research/ml.jpg
    vision:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/research/vision.jpg
    automation:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/research/automation.jpg
    sustainable:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/research/sustainable.jpg
  },

  // ── Founder & Leadership Portraits ────────────────────────
  // Replace with real professional headshot portraits.
  team: {
    founder:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/founder/portrait.jpg
    techLead:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/leadership/tech-lead.jpg
    innovationLead:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/leadership/innovation-lead.jpg
    researchLead:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/leadership/research-lead.jpg
    communityLead:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/leadership/community-lead.jpg
    designLead:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/leadership/design-lead.jpg
  },

  // ── Events ────────────────────────────────────────────────
  // Replace with real event photographs.
  events: {
    workshop: workshopLocal, // [LOCAL ASSET] → /images/events/workshop.jpg
    hackathon:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/events/hackathon.jpg
    techTalk:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/events/tech-talk.jpg
    expo: projectsLocal, // [LOCAL ASSET] → /images/events/expo.jpg
    meetup:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/events/meetup.jpg
    designSprint:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/events/design-sprint.jpg
  },

  // ── Gallery ───────────────────────────────────────────────
  // Replace with real AAVISHKAR event/project/workshop photos.
  gallery: [
    {
      id: "gal-1",
      title: "Workshop Session",
      category: "Workshops",
      url: workshopLocal, // [LOCAL ASSET] → /images/gallery/gal-1.jpg
      caption: "Students working on a hands-on technology workshop.",
      alt: "Students in a workshop session working on technology projects",
      date: "",
      aspect: "tall",
    },
    {
      id: "gal-2",
      title: "Collaborative Sprint",
      category: "Hackathons",
      url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/gallery/gal-2.jpg
      caption: "Team collaboration during a prototyping sprint.",
      alt: "Students collaborating around laptops during a hackathon",
      date: "",
      aspect: "wide",
    },
    {
      id: "gal-3",
      title: "Hardware Testing",
      category: "Demonstrations",
      url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/gallery/gal-3.jpg
      caption: "Testing embedded hardware prototypes.",
      alt: "Electronic circuit board and embedded hardware components being tested",
      date: "",
      aspect: "square",
    },
    {
      id: "gal-4",
      title: "Project Demo",
      category: "Exhibitions",
      url: projectsLocal, // [LOCAL ASSET] → /images/gallery/gal-4.jpg
      caption: "Presenting a working project to peers and mentors.",
      alt: "Student presenting a technology project at an exhibition",
      date: "",
      aspect: "wide",
    },
    {
      id: "gal-5",
      title: "Code Review Session",
      category: "Team Meetings",
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/gallery/gal-5.jpg
      caption: "Peer code review and architecture discussion.",
      alt: "Students reviewing code together on a laptop screen",
      date: "",
      aspect: "tall",
    },
    {
      id: "gal-6",
      title: "Showcase Event",
      category: "Exhibitions",
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/gallery/gal-6.jpg
      caption: "Semester showcase event with student projects.",
      alt: "Exhibition hall with students presenting technology projects",
      date: "",
      aspect: "square",
    },
    {
      id: "gal-7",
      title: "Lab Session",
      category: "Workshops",
      url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/gallery/gal-7.jpg
      caption: "Working on machine learning experiments in the lab.",
      alt: "Computer screen showing code and machine learning model training",
      date: "",
      aspect: "wide",
    },
    {
      id: "gal-8",
      title: "Prototyping",
      category: "Demonstrations",
      url: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/gallery/gal-8.jpg
      caption: "Building and testing microcontroller prototypes.",
      alt: "Hands assembling an electronics prototyping board with wires and sensors",
      date: "",
      aspect: "tall",
    },
    {
      id: "gal-9",
      title: "Team Hack Session",
      category: "Hackathons",
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80", // [DECORATIVE STOCK] → /images/gallery/gal-9.jpg
      caption: "Late-night collaborative coding during a hackathon.",
      alt: "Students coding together in a dimly lit room during a hackathon",
      date: "",
      aspect: "square",
    },
  ],

  // ── Community Banner ──────────────────────────────────────
  community: {
    background:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80", // [DECORATIVE STOCK] → /images/community/background.jpg
  },
};

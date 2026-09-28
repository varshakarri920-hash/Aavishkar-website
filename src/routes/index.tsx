import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { AiMission } from "@/components/AiMission";
import { Innovations } from "@/components/Innovations";
import { Projects } from "@/components/Projects";
import { Research } from "@/components/Research";
import { Philosophy } from "@/components/Philosophy";
import { Leadership } from "@/components/Leadership";
import { Achievements } from "@/components/Achievements";
import { Events } from "@/components/Events";
import { Gallery } from "@/components/Gallery";
import { CommunityBanner } from "@/components/CommunityBanner";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AAVISHKAR | Student Innovation & Technology Initiative" },
      {
        name: "description",
        content:
          "AAVISHKAR brings student innovators together to explore technology, build real-world projects, research intelligent systems, and lead through innovation.",
      },
      { property: "og:title", content: "AAVISHKAR | Student Innovation & Technology Initiative" },
      {
        property: "og:description",
        content:
          "A student-driven platform for technology, research, entrepreneurship, and meaningful innovation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8FBFF] text-[#102A43]">
      {/* 1. Sticky Responsive Navbar */}
      <Navbar />

      {/* 2. Hero Section: Left Copy/Stats + Right High-Tech AI Visual */}
      <Hero />

      {/* 3. About Section: 4 Core Value Cards */}
      <About />

      {/* 4. AI Mission Section: Large Split AI Visual + 3 Mission Cards */}
      <AiMission />

      {/* 5. Innovation Areas: 6 Visual Cards with Photography */}
      <Innovations />

      {/* 6. Projects Section: 4 Product Cards + Interactive Preview Modal */}
      <Projects />

      {/* 7. Research & Exploration: 4 Visual Research Cards */}
      <Research />

      {/* 8. Philosophy / Impact: Dark Navy Statement + Impact Facts */}
      <Philosophy />

      {/* 9. Leadership Team (incl. Founder as first team card): 6 Portrait Cards */}
      <Leadership />

      {/* 10. Achievements: Achievement Category Cards */}
      <Achievements />

      {/* 11. Events: Experiences & Workshops with Detail Dialog */}
      <Events />

      {/* 12. Gallery: Masonry Layout with Fullscreen Interactive Lightbox */}
      <Gallery />

      {/* 13. Community Banner: Built By Students Dark CTA */}
      <CommunityBanner />

      {/* 14. Contact Section: Accessible Form with Real Toast Feedback */}
      <Contact />

      {/* 15. Footer: 4-Column Dark Navy Branding & Links */}
      <Footer />
    </main>
  );
}

import { ArrowUp, Linkedin, Github, Instagram, Youtube } from "lucide-react";
import { contactData } from "@/data/siteData";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#062A52] text-white pt-16 pb-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Main 4-Column Footer Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5 pb-14 border-b border-white/10">
          {/* Brand Column (2 cols on lg) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-[#1268D5] text-white shadow-md">
                <svg
                  viewBox="0 0 24 24"
                  className="size-5 fill-none stroke-current stroke-2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                  <line x1="12" y1="22" x2="12" y2="15.5" />
                  <polyline points="22 8.5 12 15.5 2 8.5" />
                </svg>
              </div>
              <div>
                <span className="block text-xl font-extrabold tracking-tight text-white">
                  AAVISHKAR
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#BEE3F8]">
                  Student Innovation Initiative
                </span>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-xs leading-relaxed text-[#BEE3F8]/80">
              A student-driven initiative empowering young minds to explore technology, build
              meaningful projects, collaborate with innovators, and create solutions for the real
              world.
            </p>

            <div className="mt-4 inline-block rounded-md border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold italic text-[#BEE3F8]">
              "Imagine. Build. Inspire."
            </div>

            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: Linkedin, href: contactData.socials.linkedin, label: "LinkedIn" },
                { icon: Github, href: contactData.socials.github, label: "GitHub" },
                { icon: Instagram, href: contactData.socials.instagram, label: "Instagram" },
                { icon: Youtube, href: contactData.socials.youtube, label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`AAVISHKAR on ${label}`}
                  className="grid size-8 place-items-center rounded-lg bg-white/10 text-[#BEE3F8] transition-colors hover:bg-[#1268D5] hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 1: Organization */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">
              Organization
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-[#BEE3F8]/80">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-white transition-colors">
                  Achievements
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Innovation */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">
              Innovation
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-[#BEE3F8]/80">
              <li>
                <a href="#ai-mission" className="hover:text-white transition-colors">
                  AI Mission
                </a>
              </li>
              <li>
                <a href="#innovations" className="hover:text-white transition-colors">
                  Innovations
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-white transition-colors">
                  Research
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition-colors">
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Community */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">
              Community
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-[#BEE3F8]/80">
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Join Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition-colors">
                  Workshops
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition-colors">
                  Hackathons
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-[#BEE3F8]/70 sm:flex-row">
          <span>© 2026 AAVISHKAR. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#home" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#BEE3F8] hover:text-white transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="size-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/siteData";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#1268D5]/15 bg-white/95 shadow-[0_4px_16px_-6px_rgba(6,42,82,0.10)] backdrop-blur-md"
          : "border-b border-[#1268D5]/10 bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 transition-transform hover:scale-[1.01]"
          aria-label="AAVISHKAR Home"
        >
          <div className="relative flex size-9 items-center justify-center rounded-lg bg-[#062A52] text-white shadow-[0_4px_14px_rgba(6,42,82,0.3)] transition-all group-hover:bg-[#1268D5]">
            {/* Sleek Delta / Wings Innovation Mark */}
            <svg
              viewBox="0 0 24 24"
              className="size-4 fill-none stroke-current stroke-2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
              <line x1="12" y1="22" x2="12" y2="15.5" />
              <polyline points="22 8.5 12 15.5 2 8.5" />
            </svg>
          </div>
          <div>
            <span className="block text-lg font-extrabold tracking-tight leading-none text-[#062A52] transition-colors group-hover:text-[#1268D5]">
              AAVISHKAR
            </span>
            <span className="mt-0.5 block text-[8px] font-bold uppercase tracking-[0.18em] text-[#52677A]">
              Student Innovation & Tech
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 xl:gap-5 lg:flex" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-xs font-semibold text-[#52677A] transition-colors duration-200 hover:text-[#1268D5]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            asChild
            size="sm"
            className="rounded-full bg-[#1268D5] px-4 text-xs font-bold text-white shadow-[0_4px_14px_rgba(18,104,213,0.35)] transition-all hover:bg-[#062A52] hover:shadow-none"
          >
            <a href="#contact" className="flex items-center gap-1.5">
              Join AAVISHKAR
              <ArrowRight className="size-3.5" />
            </a>
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-[#1268D5]/20 bg-[#EAF4FF] text-[#062A52] transition-colors hover:bg-[#1268D5] hover:text-white"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-[#1268D5]/15 bg-white/98 px-6 py-6 shadow-xl backdrop-blur-xl lg:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="grid grid-cols-2 gap-3" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="rounded-md border border-[#1268D5]/10 bg-[#F8FBFF] px-3.5 py-2.5 text-xs font-bold text-[#102A43] transition-colors hover:border-[#1268D5] hover:bg-[#EAF4FF] hover:text-[#1268D5]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 border-t border-slate-100 pt-4">
            <Button
              asChild
              className="w-full justify-center rounded-lg bg-[#1268D5] py-2.5 text-xs font-bold text-white hover:bg-[#062A52]"
              onClick={closeMenu}
            >
              <a href="#contact" className="flex items-center justify-center gap-2">
                Join AAVISHKAR
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

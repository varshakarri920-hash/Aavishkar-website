import { ArrowRight, Sparkles, Cpu, Layers, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroData } from "@/data/siteData";
import { siteImages } from "@/data/siteImages";

export function Hero() {
  return (
    <section
      id="home"
      className="hero-grid relative overflow-hidden pt-28 pb-14 lg:pt-36 lg:pb-20 border-b border-[#1268D5]/10"
    >
      {/* Ambient background glow and technical decorative lines */}
      <div className="pointer-events-none absolute -top-24 right-0 size-[520px] rounded-full bg-gradient-to-br from-[#1268D5]/15 via-[#EAF4FF]/40 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-0 size-[380px] -translate-y-1/2 rounded-full bg-[#1268D5]/5 blur-2xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        {/* Left Column: Copy, CTAs, Compact metrics */}
        <div className="relative z-10 flex flex-col justify-center">
          {/* Eyebrow badge */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#1268D5]/25 bg-[#EAF4FF]/80 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1268D5] backdrop-blur-md shadow-sm">
            <span className="flex size-1.5 rounded-full bg-[#1268D5] animate-pulse" />
            <Sparkles className="size-3.5 text-[#1268D5]" />
            {heroData.label}
          </div>

          {/* Main Headline */}
          <h1 className="mt-5 text-[2.6rem] font-extrabold tracking-tight text-[#062A52] sm:text-5xl xl:text-[3.4rem] leading-[1.08]">
            {heroData.headlinePrefix}{" "}
            <span className="relative text-[#1268D5]">
              {heroData.headlineHighlight}
              <svg
                className="absolute -bottom-2 left-0 w-full text-[#1268D5]/30"
                height="8"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 7 C 30 1, 70 1, 100 7"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
              </svg>
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#52677A] sm:text-base">
            {heroData.description}
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="h-11 rounded-lg bg-[#1268D5] px-6 text-sm font-bold text-white shadow-[0_8px_24px_-6px_rgba(18,104,213,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#062A52] hover:shadow-[0_12px_28px_-6px_rgba(6,42,82,0.35)]"
            >
              <a href="#innovations" className="flex items-center gap-2">
                {heroData.ctaPrimary}
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 rounded-lg border-2 border-[#1268D5]/25 bg-white/80 px-6 text-sm font-bold text-[#062A52] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1268D5] hover:bg-[#EAF4FF]"
            >
              <a href="#contact">{heroData.ctaSecondary}</a>
            </Button>
          </div>

          {/* Compact Metrics Row */}
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[#1268D5]/15 bg-[#1268D5]/10 shadow-sm sm:grid-cols-4">
            {heroData.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/95 px-4 py-3.5 transition-colors hover:bg-[#F8FBFF]"
              >
                <strong className="block text-2xl font-extrabold tracking-tight text-[#062A52]">
                  {stat.value || "—"}
                </strong>
                <span className="mt-0.5 block text-[11px] font-semibold text-[#52677A]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Professional AI & Student Innovation Visual */}
        <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
          {/* Main Visual Container with Glass Shell & Tech Glow */}
          <div className="relative rounded-2xl border border-[#1268D5]/30 bg-white/60 p-2.5 shadow-[0_20px_50px_-15px_rgba(6,42,82,0.2)] backdrop-blur-xl">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#062A52]">
              <img
                src={siteImages.hero.main}
                alt="AAVISHKAR student engineers and innovators collaborating in technology lab"
                className="size-full object-cover object-center transition-transform duration-700 hover:scale-105"
                width={1408}
                height={1104}
              />

              {/* Gradient lighting overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#062A52]/90 via-[#062A52]/25 to-transparent" />

              {/* In-image Live Status Badge */}
              <div className="absolute top-3.5 left-3.5 flex items-center gap-2 rounded-lg border border-white/20 bg-[#062A52]/80 px-3 py-1.5 backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[11px] font-bold text-white tracking-wide">
                  STUDENT INNOVATION LAB
                </span>
              </div>

              {/* Floating Bottom Card: AI / Systems Metrics */}
              <div className="absolute inset-x-3.5 bottom-3.5 rounded-xl border border-white/15 bg-[#062A52]/90 p-3.5 backdrop-blur-md">
                <div className="flex items-center justify-between text-xs text-[#BEE3F8]">
                  <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-white">
                    <BrainCircuit className="size-3.5 text-[#1268D5]" />
                    AI · Robotics · Systems
                  </span>
                  <span className="rounded bg-[#1268D5]/40 px-2 py-0.5 text-[10px] font-semibold text-white">
                    Build & Research
                  </span>
                </div>
                <div className="mt-2.5 grid grid-cols-3 gap-2 border-t border-white/10 pt-2 text-center">
                  <div>
                    <span className="block text-[10px] font-semibold uppercase text-slate-400">
                      Learn
                    </span>
                    <strong className="text-xs font-bold text-white">By Doing</strong>
                  </div>
                  <div>
                    <span className="block text-[10px] font-semibold uppercase text-slate-400">
                      Build
                    </span>
                    <strong className="text-xs font-bold text-white">Real Projects</strong>
                  </div>
                  <div>
                    <span className="block text-[10px] font-semibold uppercase text-slate-400">
                      Inspire
                    </span>
                    <strong className="text-xs font-bold text-white">Future Makers</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Decorative Floating Badge */}
            <div className="absolute -bottom-5 -left-4 hidden rounded-xl border border-[#1268D5]/30 bg-[#062A52] px-4 py-2.5 text-white shadow-xl sm:flex sm:items-center sm:gap-2.5">
              <div className="grid size-8 place-items-center rounded-lg bg-[#1268D5] text-white">
                <Layers className="size-3.5" />
              </div>
              <div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-[#BEE3F8]">
                  TAGLINE
                </div>
                <div className="text-[11px] font-extrabold text-white">
                  "Imagine. Build. Inspire."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

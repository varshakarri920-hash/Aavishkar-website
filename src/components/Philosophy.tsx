import { Code2, Users, Compass, Calendar, FlaskConical, Globe, Sparkles } from "lucide-react";
import { philosophyData, impactFacts } from "@/data/siteData";

const iconMap: Record<string, typeof Code2> = {
  code: Code2,
  users: Users,
  compass: Compass,
  calendar: Calendar,
  research: FlaskConical,
  community: Globe,
};

export function Philosophy() {
  return (
    <section className="navy-grid relative overflow-hidden py-16 text-white md:py-20">
      {/* Ambient Radial Blue Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(18,104,213,0.22)_0%,transparent_70%)]" />

      {/* Decorative Technical Lines */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1268D5]/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#1268D5]/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading Block */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-[#BEE3F8] backdrop-blur-md">
            <Sparkles className="size-3.5 text-[#1268D5]" />
            {philosophyData.label}
          </div>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.15]">
            {philosophyData.headingPrefix}{" "}
            <span className="text-[#1268D5]">{philosophyData.headingHighlight}</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#BEE3F8] sm:text-base">
            {philosophyData.statement}
          </p>
        </div>

        {/* Compact Impact Facts */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3">
          {impactFacts.map((fact) => {
            const Icon = iconMap[fact.icon] ?? Code2;
            return (
              <div
                key={fact.label}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:border-[#1268D5]/50 hover:bg-white/10"
              >
                <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-[#1268D5]/20 text-[#BEE3F8]">
                  <Icon className="size-4" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-white">{fact.label}</div>
                  <div className="mt-0.5 text-[11px] leading-snug text-[#BEE3F8]/80">
                    {fact.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tagline */}
        <div className="mt-10 flex flex-col items-center justify-center">
          <div className="h-6 w-px bg-[#1268D5]/60 mb-3" />
          <span className="text-sm font-extrabold uppercase tracking-[0.24em] text-white">
            {philosophyData.orgName}
          </span>
          <span className="mt-1 text-xs font-semibold tracking-wider text-[#BEE3F8]">
            {philosophyData.subtitle}
          </span>
          <span className="mt-1.5 text-xs font-bold italic tracking-wide text-[#1268D5]">
            {philosophyData.tagline}
          </span>
        </div>
      </div>
    </section>
  );
}

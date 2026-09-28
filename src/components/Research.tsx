import { Microscope, ArrowRight, Brain, Eye, Cpu, Leaf } from "lucide-react";
import { researchPillars } from "@/data/siteData";

const iconMap = [Brain, Eye, Cpu, Leaf];

export function Research() {
  return (
    <section id="research" className="section bg-[#EAF4FF]/40 border-b border-[#1268D5]/10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="section-label">
            <Microscope className="size-4 text-[#1268D5]" />
            RESEARCH & EXPLORATION
          </div>
          <h2 className="section-title">Curiosity Drives Discovery.</h2>
          <p className="section-copy mt-4 text-base">
            Bridging theoretical principles with student-led prototypes, preprints, and open source
            experiments.
          </p>
        </div>

        {/* 4 Compact Research Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {researchPillars.map((pillar, i) => {
            const Icon = iconMap[i] || Brain;
            return (
              <article
                key={pillar.title}
                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[#1268D5]/15 bg-white shadow-[0_8px_25px_-8px_rgba(6,42,82,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1268D5]/40 hover:shadow-[0_16px_36px_-10px_rgba(18,104,213,0.18)]"
              >
                {/* Visual */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#062A52]">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062A52]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-[#1268D5] text-white shadow-md">
                      <Icon className="size-4" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-base font-extrabold tracking-tight text-[#062A52] group-hover:text-[#1268D5] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#52677A]">{pillar.details}</p>

                  {/* Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[#1268D5]/15 bg-[#F8FBFF] px-2 py-0.5 text-[10px] font-bold text-[#062A52]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 border-t border-slate-100 pt-3">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1268D5] hover:underline"
                    >
                      <span>View Research</span>
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

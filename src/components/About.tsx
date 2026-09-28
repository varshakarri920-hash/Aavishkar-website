import { Compass, Target, Users2, Sparkles } from "lucide-react";
import { aboutData } from "@/data/siteData";

const iconMap = {
  "01": Compass,
  "02": Target,
  "03": Users2,
  "04": Sparkles,
};

export function About() {
  return (
    <section id="about" className="section bg-[#EAF4FF]/40 border-b border-[#1268D5]/10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Compact Split Layout: Intro Left, Values Right */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* Left: Label, Heading, Description */}
          <div className="lg:max-w-md">
            <div className="section-label">
              <span className="size-1.5 rounded-full bg-[#1268D5]" />
              {aboutData.label}
            </div>
            <h2 className="section-title">{aboutData.heading}</h2>
            <p className="section-copy mt-4 text-base">{aboutData.description}</p>
          </div>

          {/* Right: 4 Compact Value Cards */}
          <div className="grid content-start gap-4 sm:grid-cols-2">
            {aboutData.values.map((val) => {
              const Icon = iconMap[val.num as keyof typeof iconMap] || Compass;
              return (
                <article
                  key={val.num}
                  className="group rounded-xl border border-[#1268D5]/15 bg-white p-5 shadow-[0_8px_24px_-8px_rgba(6,42,82,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1268D5]/40 hover:shadow-[0_16px_36px_-10px_rgba(18,104,213,0.18)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold tracking-wider text-[#1268D5]">
                      {val.num}
                    </span>
                    <div className="grid size-9 place-items-center rounded-lg bg-[#EAF4FF] text-[#1268D5] transition-colors group-hover:bg-[#1268D5] group-hover:text-white">
                      <Icon className="size-4" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-sm font-extrabold tracking-tight text-[#062A52] group-hover:text-[#1268D5] transition-colors">
                    {val.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#52677A]">{val.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Brain, Code2, Bot, FlaskConical, Rocket, Network } from "lucide-react";
import { innovationAreas } from "@/data/siteData";

const iconMap = {
  ai: Brain,
  software: Code2,
  robotics: Bot,
  research: FlaskConical,
  entrepreneurship: Rocket,
  emerging: Network,
};

export function Innovations() {
  return (
    <section id="innovations" className="section bg-[#EAF4FF]/30 border-b border-[#1268D5]/10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="section-label">
              <span className="size-1.5 rounded-full bg-[#1268D5]" />
              OUR INNOVATIONS
            </div>
            <h2 className="section-title">Explore. Experiment. Build.</h2>
          </div>
          <p className="section-copy text-base">
            Structured focus areas providing students with the toolkits, hardware, and peer
            collaboration to turn ideas into functional innovations.
          </p>
        </div>

        {/* 6 Compact Visual Innovation Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {innovationAreas.map((area) => {
            const Icon = iconMap[area.id as keyof typeof iconMap] || Brain;
            return (
              <article
                key={area.id}
                className="group relative h-[280px] overflow-hidden rounded-xl border border-[#1268D5]/20 bg-[#062A52] shadow-[0_8px_25px_-8px_rgba(6,42,82,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1268D5]/60 hover:shadow-[0_20px_40px_-10px_rgba(18,104,213,0.3)]"
              >
                {/* Background Image with Zoom */}
                <img
                  src={area.image}
                  alt={area.title}
                  className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  width={800}
                  height={600}
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#062A52] via-[#062A52]/70 to-[#062A52]/25 transition-opacity duration-300 group-hover:opacity-90" />

                {/* Card Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="rounded-md border border-white/20 bg-white/10 px-2 py-0.5 text-[11px] font-bold tracking-widest text-[#BEE3F8] backdrop-blur-md">
                      {area.number}
                    </span>
                    <div className="grid size-10 place-items-center rounded-xl border border-white/15 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-[#1268D5] group-hover:bg-[#1268D5]">
                      <Icon className="size-4.5" />
                    </div>
                  </div>

                  {/* Bottom Content: Title, Description, Arrow */}
                  <div className="transition-transform duration-300 group-hover:-translate-y-1">
                    <h3 className="text-lg font-extrabold tracking-tight text-white transition-colors group-hover:text-[#BEE3F8]">
                      {area.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#BEE3F8]/90">
                      {area.description}
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-xs font-bold text-white transition-all group-hover:text-[#1268D5]">
                      <span>Explore domain</span>
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5 text-[#1268D5]" />
                    </div>
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

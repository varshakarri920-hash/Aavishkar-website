import { Brain, Cpu, Sparkles, Binary, ArrowRight, Layers } from "lucide-react";
import { aiMissionData } from "@/data/siteData";
import { siteImages } from "@/data/siteImages";

export function AiMission() {
  return (
    <section
      id="ai-mission"
      className="section bg-white border-b border-[#1268D5]/10 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="section-label">
            <Brain className="size-4 text-[#1268D5]" />
            {aiMissionData.label}
          </div>
          <h2 className="section-title">{aiMissionData.heading}</h2>
          <p className="section-copy mt-4 text-base">{aiMissionData.description}</p>
        </div>

        {/* Large Split Layout */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left Column: Large Professional AI Visual */}
          <div className="relative">
            {/* Background glowing aura */}
            <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#1268D5]/10 via-[#062A52]/5 to-[#EAF4FF] blur-xl" />

            <div className="relative overflow-hidden rounded-2xl border border-[#1268D5]/25 bg-[#062A52] shadow-[0_20px_50px_-15px_rgba(6,42,82,0.25)]">
              <img
                src={siteImages.aiMission.neuralNetwork}
                alt="Neural network, digital intelligence and artificial intelligence research at AAVISHKAR"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                width={1200}
                height={900}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062A52] via-[#062A52]/35 to-transparent" />

              {/* In-Image AI Schematic Overlay */}
              <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/15 bg-[#062A52]/90 p-4 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Binary className="size-4 text-[#1268D5]" />
                    <span>AI · ML · Vision · Automation</span>
                  </div>
                  <span className="rounded-full bg-[#1268D5]/30 px-2.5 py-0.5 text-[10px] font-bold text-[#BEE3F8]">
                    Experiments
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-[#BEE3F8] leading-relaxed">
                  Student researchers train small language models, test spatial computer vision, and
                  deploy edge intelligence with responsible AI guardrails.
                </p>
              </div>
            </div>

            {/* Corner floating badge */}
            <div className="absolute -top-3.5 -right-3.5 hidden sm:flex items-center gap-2 rounded-xl border border-[#1268D5]/30 bg-white px-3.5 py-2 shadow-lg">
              <Sparkles className="size-3.5 text-[#1268D5]" />
              <span className="text-xs font-extrabold text-[#062A52]">Applied AI Lab</span>
            </div>
          </div>

          {/* Right Column: Three Compact Mission Steps */}
          <div className="flex flex-col gap-4">
            {aiMissionData.cards.map((card) => (
              <div
                key={card.num}
                className="group flex items-start gap-4 rounded-xl border border-[#1268D5]/15 bg-[#F8FBFF] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1268D5]/40 hover:bg-white hover:shadow-[0_12px_30px_-10px_rgba(18,104,213,0.15)]"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#1268D5] text-white font-extrabold text-xs transition-colors group-hover:bg-[#062A52]">
                  {card.num}
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-base font-extrabold tracking-tight text-[#062A52] group-hover:text-[#1268D5] transition-colors">
                    <Layers className="size-4 text-[#1268D5]" />
                    {card.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#52677A]">{card.text}</p>
                </div>
              </div>
            ))}

            {/* Bottom Callout */}
            <div className="flex items-center justify-between rounded-xl border border-[#1268D5]/20 bg-[#EAF4FF]/60 px-5 py-3.5 text-xs font-semibold text-[#062A52]">
              <span>Interested in joining our student AI research cohort?</span>
              <a
                href="#contact"
                className="inline-flex shrink-0 items-center gap-1 font-bold text-[#1268D5] hover:underline"
              >
                Apply now <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

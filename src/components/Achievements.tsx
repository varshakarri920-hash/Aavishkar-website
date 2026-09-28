import { Trophy, Code, FlaskConical, Compass, Calendar, HeartHandshake } from "lucide-react";
import { achievementsData } from "@/data/siteData";

const iconMap = [Trophy, Code, FlaskConical, Compass, Calendar, HeartHandshake];

export function Achievements() {
  return (
    <section id="achievements" className="section bg-white border-b border-[#1268D5]/10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="section-label">
            <Trophy className="size-4 text-[#1268D5]" />
            ACHIEVEMENTS & MILESTONES
          </div>
          <h2 className="section-title">Milestones That Inspire</h2>
          <p className="section-copy mt-2 text-sm sm:text-base">
            The categories our community grows within — results are recorded under each as they are
            earned.
          </p>
        </div>

        {/* 6 Compact Achievement Category Cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievementsData.map((achievement, i) => {
            const Icon = iconMap[i % iconMap.length] ?? Trophy;
            return (
              <div
                key={achievement.title}
                className="group flex items-start gap-4 rounded-xl border border-[#1268D5]/15 bg-[#F8FBFF] p-5 shadow-[0_6px_20px_-6px_rgba(6,42,82,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1268D5]/40 hover:bg-white hover:shadow-[0_14px_30px_-8px_rgba(18,104,213,0.16)]"
              >
                <div className="grid size-11 shrink-0 place-items-center rounded-lg bg-[#EAF4FF] text-[#1268D5] transition-colors group-hover:bg-[#1268D5] group-hover:text-white">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold tracking-tight text-[#062A52] group-hover:text-[#1268D5] transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#52677A]">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

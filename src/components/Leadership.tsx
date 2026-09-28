import { Linkedin, Github, Users } from "lucide-react";
import { leadershipTeam } from "@/data/siteData";

export function Leadership() {
  return (
    <section id="team" className="section bg-[#EAF4FF]/30 border-b border-[#1268D5]/10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="section-label justify-center">
            <Users className="size-4 text-[#1268D5]" />
            OUR PEOPLE
          </div>
          <h2 className="section-title">Meet the Team</h2>
          <p className="section-copy mx-auto mt-2 text-sm sm:text-base">
            Students and innovators building the future together.
          </p>
        </div>

        {/* Team Grid: professional, compact portrait cards */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leadershipTeam.map((member) => (
            <article
              key={member.role}
              className="group flex flex-col overflow-hidden rounded-xl border border-[#1268D5]/15 bg-white shadow-[0_8px_24px_-8px_rgba(6,42,82,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1268D5]/40 hover:shadow-[0_16px_36px_-10px_rgba(18,104,213,0.18)]"
            >
              {/* Portable Portrait (same size for every member incl. Founder) */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#062A52]">
                <img
                  src={member.image}
                  alt={`${member.role} portrait`}
                  className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062A52]/85 via-[#062A52]/15 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-[#1268D5] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-sm">
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-base font-extrabold tracking-tight text-[#062A52] group-hover:text-[#1268D5] transition-colors">
                  {member.name}
                </h3>
                <span className="mt-0.5 text-[11px] font-bold text-[#1268D5]">{member.area}</span>
                <p className="mt-2 text-xs leading-relaxed text-[#52677A]">{member.description}</p>

                {/* Social Connect */}
                <div className="mt-4 flex items-center justify-end gap-2 border-t border-slate-100 pt-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="grid size-8 place-items-center rounded-lg border border-[#1268D5]/15 text-[#52677A] transition-colors hover:border-[#1268D5] hover:bg-[#1268D5] hover:text-white"
                    aria-label={`${member.role} LinkedIn`}
                  >
                    <Linkedin className="size-3.5" />
                  </a>
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noreferrer"
                      className="grid size-8 place-items-center rounded-lg border border-[#1268D5]/15 text-[#52677A] transition-colors hover:border-[#1268D5] hover:bg-[#1268D5] hover:text-white"
                      aria-label={`${member.role} GitHub`}
                    >
                      <Github className="size-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

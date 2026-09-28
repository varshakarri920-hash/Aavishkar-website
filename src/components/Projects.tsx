import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projectsData, ProjectItem } from "@/data/siteData";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenProject = (project: ProjectItem) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="section bg-white border-b border-[#1268D5]/10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="section-label">
              <span className="size-1.5 rounded-full bg-[#1268D5]" />
              OUR PROJECTS
            </div>
            <h2 className="section-title">Student Ideas in Action</h2>
          </div>
          <p className="section-copy text-base">
            Tangible engineering solutions, applied research, and digital products conceived,
            architected, and built by student teams.
          </p>
        </div>

        {/* 4 Projects Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[#1268D5]/15 bg-white shadow-[0_6px_20px_-6px_rgba(6,42,82,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1268D5]/40 hover:shadow-[0_16px_36px_-10px_rgba(18,104,213,0.18)]"
            >
              <div>
                {/* Large Project Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#062A52]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062A52]/70 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="rounded-full bg-[#062A52]/85 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#BEE3F8] backdrop-blur-md border border-white/10">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#1268D5]">
                    {project.team}
                  </div>
                  <h3 className="mt-1 text-base font-extrabold tracking-tight text-[#062A52] group-hover:text-[#1268D5] transition-colors">
                    {project.name}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#52677A] line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-[#EAF4FF] px-2 py-0.5 text-[10px] font-semibold text-[#062A52]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Project Action */}
              <div className="border-t border-slate-100 p-3.5">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleOpenProject(project)}
                  className="w-full justify-between text-xs font-bold text-[#1268D5] hover:bg-[#EAF4FF] hover:text-[#062A52]"
                >
                  <span>View Project</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Interactive Modal */}
      <ProjectModal project={selectedProject} open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
}

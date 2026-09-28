import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Users, CheckCircle2, X } from "lucide-react";
import { ProjectItem } from "@/data/siteData";

interface ProjectModalProps {
  project: ProjectItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [open, onOpenChange]);

  if (!open || !project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#062A52]/85 p-4 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={() => onOpenChange(false)}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-[#1268D5]/25 bg-white shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 z-20 grid size-9 place-items-center rounded-full bg-[#062A52]/80 text-white transition-all hover:bg-white hover:text-[#062A52]"
          aria-label="Close project modal"
        >
          <X className="size-5" />
        </button>

        {/* Project Header Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#062A52]">
          <img src={project.image} alt={project.name} className="size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#062A52] via-[#062A52]/40 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="rounded-full bg-[#1268D5] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
              {project.status}
            </span>
          </div>
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#BEE3F8]">
              <Users className="size-4 text-[#1268D5]" />
              <span>{project.team}</span>
            </div>
            <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-white">
              {project.name}
            </h3>
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6 space-y-5 max-h-[55vh] overflow-y-auto">
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#1268D5]">
              Overview & Architecture
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-[#52677A]">{project.longDescription}</p>
          </div>

          {/* Key Engineering Highlights */}
          {project.highlights && (
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#062A52]">
                Key Engineering Highlights
              </h4>
              <ul className="mt-2.5 grid gap-2 sm:grid-cols-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs font-medium text-[#102A43]">
                    <CheckCircle2 className="size-4 shrink-0 text-[#1268D5]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Tags */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#062A52]">
              Tech Stack & Domains
            </h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="rounded-md border border-[#1268D5]/20 bg-[#EAF4FF] px-2.5 py-1 text-xs font-bold text-[#1268D5]"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between gap-3 border-t border-slate-100 bg-slate-50/60 px-6 py-4">
          {!project.repoUrl && !project.demoUrl ? (
            <span className="text-xs font-semibold text-[#52677A]">
              Links not yet available — check back soon.
            </span>
          ) : (
            <span />
          )}
          <div className="flex items-center gap-3">
            {project.repoUrl && (
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-[#1268D5]/30 text-[#062A52] hover:bg-[#EAF4FF]"
                onClick={() => window.open(project.repoUrl, "_blank", "noreferrer")}
              >
                <Github className="size-4" />
                Source Code
              </Button>
            )}
            {project.demoUrl && (
              <Button
                size="sm"
                className="gap-2 bg-[#1268D5] text-white hover:bg-[#062A52]"
                onClick={() => window.open(project.demoUrl, "_blank", "noreferrer")}
              >
                <ExternalLink className="size-4" />
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

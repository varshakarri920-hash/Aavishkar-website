import { useState, useEffect } from "react";
import { Calendar, MapPin, ArrowRight, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { eventsData } from "@/data/siteData";

export function Events() {
  const [selectedEvent, setSelectedEvent] = useState<(typeof eventsData)[0] | null>(null);

  useEffect(() => {
    if (!selectedEvent) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedEvent(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedEvent]);

  return (
    <section id="events" className="section bg-white border-b border-[#1268D5]/10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="section-label">
              <Calendar className="size-4 text-[#1268D5]" />
              EXPERIENCES & WORKSHOPS
            </div>
            <h2 className="section-title">Learn. Connect. Innovate.</h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-[#1268D5]/30 text-[#062A52] hover:bg-[#EAF4FF]"
          >
            <a href="#contact" className="flex items-center gap-2">
              Propose an Event <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>

        {/* Visual Event Cards Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {eventsData.map((evt) => (
            <article
              key={evt.id}
              className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[#1268D5]/15 bg-white shadow-[0_8px_24px_-8px_rgba(6,42,82,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1268D5]/40 hover:shadow-[0_16px_36px_-10px_rgba(18,104,213,0.18)]"
            >
              <div>
                {/* Event Visual */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#062A52]">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062A52]/80 via-transparent to-transparent" />

                  {/* Date Badge */}
                  <div className="absolute top-3 left-3 rounded-lg border border-white/20 bg-[#062A52]/90 px-3 py-1.5 text-center text-white backdrop-blur-md">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#BEE3F8]">
                      {evt.date}
                    </span>
                    <span className="block text-xs font-extrabold text-white">{evt.year}</span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 right-3">
                    <span className="rounded-full bg-[#1268D5] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                      {evt.category}
                    </span>
                  </div>
                </div>

                {/* Event Information */}
                <div className="p-4">
                  <span className="text-[11px] font-bold text-[#1268D5]">{evt.subtitle}</span>
                  <h3 className="mt-1 text-base font-extrabold tracking-tight text-[#062A52] group-hover:text-[#1268D5] transition-colors">
                    {evt.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#52677A]">{evt.description}</p>
                  {evt.location !== "TBA" && (
                    <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-semibold text-[#52677A]">
                      <MapPin className="size-3.5 text-[#1268D5]" />
                      <span>{evt.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* View Event Button */}
              <div className="border-t border-slate-100 p-3.5">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedEvent(evt)}
                  className="w-full justify-between text-xs font-bold text-[#1268D5] hover:bg-[#EAF4FF] hover:text-[#062A52]"
                >
                  <span>View Event Details</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Event Details Accessible Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#062A52]/85 p-4 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[#1268D5]/25 bg-white p-6 shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 z-20 grid size-8 place-items-center rounded-full bg-slate-100 text-[#062A52] transition-all hover:bg-[#1268D5] hover:text-white"
              aria-label="Close event modal"
            >
              <X className="size-4" />
            </button>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-[#062A52] mb-4">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="size-full object-cover"
              />
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-[#1268D5]">
              <Calendar className="size-4" />
              <span>
                {selectedEvent.date}, {selectedEvent.year}
              </span>
              <span className="ml-auto rounded bg-[#EAF4FF] px-2 py-0.5 text-[#062A52]">
                {selectedEvent.category}
              </span>
            </div>

            <h3 className="mt-2 text-xl font-extrabold text-[#062A52]">{selectedEvent.title}</h3>

            {selectedEvent.location !== "TBA" && (
              <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-[#52677A]">
                <MapPin className="size-3.5 text-[#1268D5]" />
                <span>{selectedEvent.location}</span>
              </div>
            )}

            <p className="mt-2 text-xs leading-relaxed text-[#52677A]">
              {selectedEvent.description}
            </p>

            <div className="mt-5 flex items-center justify-end gap-2 border-t border-slate-100 pt-4">
              {selectedEvent.registrationUrl && selectedEvent.registrationUrl !== "#" ? (
                <Button asChild size="sm" className="bg-[#1268D5] text-white hover:bg-[#062A52]">
                  <a
                    href={selectedEvent.registrationUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setSelectedEvent(null)}
                    className="flex items-center gap-2"
                  >
                    Register
                    <ExternalLink className="size-3.5" />
                  </a>
                </Button>
              ) : (
                <Button asChild size="sm" className="bg-[#1268D5] text-white hover:bg-[#062A52]">
                  <a href="#contact" onClick={() => setSelectedEvent(null)}>
                    Register / Inquire
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

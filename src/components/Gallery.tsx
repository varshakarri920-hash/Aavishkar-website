import { useState } from "react";
import { Camera, ZoomIn } from "lucide-react";
import { siteImages } from "@/data/siteImages";
import { GalleryLightbox } from "./GalleryLightbox";

const categories = [
  "All",
  "Workshops",
  "Hackathons",
  "Demonstrations",
  "Exhibitions",
  "Team Meetings",
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? siteImages.gallery
      : siteImages.gallery.filter((img) => img.category === activeCategory);

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % siteImages.gallery.length);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + siteImages.gallery.length) % siteImages.gallery.length);
  };

  return (
    <section id="gallery" className="section bg-[#EAF4FF]/30 border-b border-[#1268D5]/10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="section-label">
              <Camera className="size-4 text-[#1268D5]" />
              GALLERY
            </div>
            <h2 className="section-title">Moments of Innovation</h2>
          </div>
          <p className="section-copy text-base">
            Snapshots of hands-on student engineering, hackathon sprints, peer code reviews, and
            prototype demos.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#1268D5] text-white shadow-sm"
                  : "bg-white text-[#52677A] border border-[#1268D5]/15 hover:border-[#1268D5] hover:text-[#1268D5]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-Style Responsive Grid */}
        <div className="mt-7 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {filteredImages.map((img, i) => {
            const originalIndex = siteImages.gallery.findIndex((item) => item.id === img.id);
            return (
              <div
                key={img.id}
                onClick={() => setLightboxIndex(originalIndex)}
                className="group relative mb-5 cursor-pointer overflow-hidden rounded-2xl border border-[#1268D5]/15 bg-[#062A52] shadow-sm break-inside-avoid transition-all duration-300 hover:-translate-y-1 hover:border-[#1268D5]/50 hover:shadow-xl"
              >
                <div className="relative w-full overflow-hidden">
                  <img
                    src={img.url}
                    alt={img.alt ?? img.title}
                    className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 ${
                      img.aspect === "tall"
                        ? "aspect-[3/4]"
                        : img.aspect === "wide"
                          ? "aspect-[16/10]"
                          : "aspect-square"
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062A52]/90 via-[#062A52]/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-[#062A52]/80 px-2.5 py-0.5 text-[10px] font-bold text-[#BEE3F8] backdrop-blur-md border border-white/15">
                      {img.category}
                    </span>
                  </div>

                  {/* Zoom Indicator */}
                  <div className="absolute top-3 right-3 grid size-8 place-items-center rounded-full bg-white/20 text-white backdrop-blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ZoomIn className="size-4" />
                  </div>

                  {/* Caption & Title */}
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white transition-transform duration-300 group-hover:-translate-y-0.5">
                    <h3 className="text-base font-extrabold text-white">{img.title}</h3>
                    <p className="mt-1 text-xs text-[#BEE3F8]/90 line-clamp-2">{img.caption}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      <GalleryLightbox
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}

import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { siteImages } from "@/data/siteImages";

interface GalleryLightboxProps {
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function GalleryLightbox({ currentIndex, onClose, onNext, onPrev }: GalleryLightboxProps) {
  const items = siteImages.gallery;

  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, onClose, onNext, onPrev]);

  if (currentIndex === null || !items[currentIndex]) return null;
  const current = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#062A52]/95 p-4 backdrop-blur-xl animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Top Controls */}
      <div className="absolute top-5 right-5 flex items-center gap-3">
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
          {currentIndex + 1} / {items.length}
        </span>
        <button
          onClick={onClose}
          className="flex size-10 items-center justify-center rounded-full bg-white/15 text-white transition-all hover:bg-white hover:text-[#062A52]"
          aria-label="Close lightbox"
        >
          <X className="size-5" />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 flex size-12 items-center justify-center rounded-full bg-white/15 text-white transition-all hover:bg-white hover:text-[#062A52] sm:left-8"
        aria-label="Previous image"
      >
        <ChevronLeft className="size-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 flex size-12 items-center justify-center rounded-full bg-white/15 text-white transition-all hover:bg-white hover:text-[#062A52] sm:right-8"
        aria-label="Next image"
      >
        <ChevronRight className="size-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-2xl border border-white/20 bg-[#062A52] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.url}
          alt={current.alt ?? current.title}
          className="max-h-[75vh] w-auto object-contain mx-auto"
        />
        {/* Caption Overlay */}
        <div className="bg-[#062A52] p-4 text-white border-t border-white/10">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-white">{current.title}</h4>
            <span className="rounded bg-[#1268D5]/30 px-2 py-0.5 text-[10px] font-bold text-[#BEE3F8]">
              {current.category}
            </span>
          </div>
          <p className="mt-1 text-xs text-[#BEE3F8]">{current.caption}</p>
        </div>
      </div>
    </div>
  );
}

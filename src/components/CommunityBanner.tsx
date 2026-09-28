import { ArrowRight, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { communityData } from "@/data/siteData";
import { siteImages } from "@/data/siteImages";

export function CommunityBanner() {
  return (
    <section className="relative overflow-hidden bg-[#062A52] py-16 md:py-20 text-white">
      {/* Background Image with Dark Blue Overlay */}
      <img
        src={siteImages.community.background}
        alt="Students collaborating and building technology together"
        className="absolute inset-0 size-full object-cover object-center opacity-25 filter grayscale"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#062A52] via-[#062A52]/95 to-[#062A52]/85" />

      {/* Decorative Blueprint Lines */}
      <div className="cta-grid absolute inset-0 pointer-events-none" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-5 md:flex-row md:items-center lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#BEE3F8] backdrop-blur-md">
            <HeartHandshake className="size-3.5 text-[#1268D5]" />
            STUDENT COMMUNITY & INCUBATION
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
            {communityData.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#BEE3F8]/90 sm:text-lg">
            {communityData.description}
          </p>
        </div>

        <div>
          <Button
            asChild
            size="lg"
            className="h-13 rounded-xl bg-[#1268D5] px-8 text-base font-extrabold text-white shadow-[0_10px_30px_-5px_rgba(18,104,213,0.5)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#062A52] hover:shadow-2xl"
          >
            <a href="#contact" className="flex items-center gap-2.5">
              {communityData.buttonText}
              <ArrowRight className="size-4 text-current" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

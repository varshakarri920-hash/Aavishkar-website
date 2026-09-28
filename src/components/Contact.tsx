import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  Linkedin,
  Github,
  Instagram,
  Youtube,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactData } from "@/data/siteData";
import { toast } from "sonner";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Message sent successfully!", {
        description:
          "Thank you for reaching out to AAVISHKAR. Our student team will get in touch soon.",
      });
    }, 600);
  };

  return (
    <section id="contact" className="section bg-[#F8FBFF] border-b border-[#1268D5]/10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact Details Column */}
          <div>
            <div className="section-label">
              <span className="size-1.5 rounded-full bg-[#1268D5]" />
              {contactData.label}
            </div>
            <h2 className="section-title">{contactData.heading}</h2>
            <p className="section-copy mt-4 text-base">{contactData.description}</p>

            <div className="mt-10 space-y-5 text-sm">
              <div className="flex items-center gap-4 rounded-xl border border-[#1268D5]/15 bg-white p-4 shadow-sm">
                <div className="grid size-10 place-items-center rounded-lg bg-[#EAF4FF] text-[#1268D5]">
                  <Mail className="size-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#52677A]">
                    Email Placeholder
                  </span>
                  <strong className="text-sm font-bold text-[#062A52]">{contactData.email}</strong>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-[#1268D5]/15 bg-white p-4 shadow-sm">
                <div className="grid size-10 place-items-center rounded-lg bg-[#EAF4FF] text-[#1268D5]">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#52677A]">
                    Lab Location
                  </span>
                  <strong className="text-sm font-bold text-[#062A52]">
                    {contactData.location}
                  </strong>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <span className="block text-xs font-bold uppercase tracking-widest text-[#52677A] mb-3">
                Follow Innovation Sprints:
              </span>
              <div className="flex items-center gap-3">
                {[
                  { icon: Linkedin, href: contactData.socials.linkedin, label: "LinkedIn" },
                  { icon: Github, href: contactData.socials.github, label: "GitHub" },
                  { icon: Instagram, href: contactData.socials.instagram, label: "Instagram" },
                  { icon: Youtube, href: contactData.socials.youtube, label: "YouTube" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`AAVISHKAR on ${label}`}
                    className="grid size-10 place-items-center rounded-lg border border-[#1268D5]/20 bg-white text-[#062A52] transition-colors hover:border-[#1268D5] hover:bg-[#1268D5] hover:text-white shadow-sm"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-[#1268D5]/20 bg-white p-7 sm:p-9 shadow-[0_12px_36px_-10px_rgba(6,42,82,0.08)]">
            {submitted ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                <div className="grid size-16 place-items-center rounded-full bg-[#EAF4FF] text-[#1268D5]">
                  <CheckCircle2 className="size-8" />
                </div>
                <h3 className="mt-4 text-2xl font-extrabold text-[#062A52]">Message Received</h3>
                <p className="mt-2 max-w-sm text-sm text-[#52677A]">
                  Thank you for connecting with AAVISHKAR. We will review your message and reach
                  back out shortly.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  size="sm"
                  className="mt-6 border-[#1268D5]/30 text-[#062A52]"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form className="grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#062A52]">
                    Name <span className="text-[#1268D5]">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="rounded-lg border border-[#1268D5]/20 bg-[#F8FBFF] px-4 py-2.5 text-sm text-[#102A43] outline-none transition-colors focus:border-[#1268D5] focus:ring-2 focus:ring-[#1268D5]/20"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#062A52]">
                    Email <span className="text-[#1268D5]">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="rounded-lg border border-[#1268D5]/20 bg-[#F8FBFF] px-4 py-2.5 text-sm text-[#102A43] outline-none transition-colors focus:border-[#1268D5] focus:ring-2 focus:ring-[#1268D5]/20"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#062A52]">College / Organization</label>
                  <input
                    type="text"
                    placeholder="Your institution or campus"
                    className="rounded-lg border border-[#1268D5]/20 bg-[#F8FBFF] px-4 py-2.5 text-sm text-[#102A43] outline-none transition-colors focus:border-[#1268D5] focus:ring-2 focus:ring-[#1268D5]/20"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#062A52]">
                    Area of Interest <span className="text-[#1268D5]">*</span>
                  </label>
                  <select
                    required
                    defaultValue=""
                    className="rounded-lg border border-[#1268D5]/20 bg-[#F8FBFF] px-4 py-2.5 text-sm text-[#102A43] outline-none transition-colors focus:border-[#1268D5] focus:ring-2 focus:ring-[#1268D5]/20"
                  >
                    <option value="" disabled>
                      Select an area
                    </option>
                    <option>Artificial Intelligence & ML</option>
                    <option>Software & Cloud Engineering</option>
                    <option>Robotics & IoT</option>
                    <option>Applied Research</option>
                    <option>Entrepreneurship & Incubation</option>
                    <option>Design & Creative Tech</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="text-xs font-bold text-[#062A52]">
                    Message <span className="text-[#1268D5]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what you want to build, research, or collaborate on..."
                    className="rounded-lg border border-[#1268D5]/20 bg-[#F8FBFF] px-4 py-2.5 text-sm text-[#102A43] outline-none transition-colors focus:border-[#1268D5] focus:ring-2 focus:ring-[#1268D5]/20 resize-y"
                  />
                </div>

                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto rounded-lg bg-[#1268D5] px-8 py-2.5 text-sm font-bold text-white shadow-md hover:bg-[#062A52]"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <Send className="size-4 ml-2" />
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

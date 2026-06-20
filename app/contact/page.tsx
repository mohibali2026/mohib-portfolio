import { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import { Globe, Mail, Phone, MapPin } from "lucide-react";
import { LinkedInIcon, InstagramIcon, BehanceIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Contact — Mohib Ali Altaf",
  description: "Get in touch with Mohib for product design, creative direction, and photography projects.",
};

export default function ContactPage() {
  return (
    <div style={{ padding: "120px 80px 80px 80px" }}>
      <div style={{ maxWidth: "1058px", margin: "0 auto" }}>
        <ScrollReveal>
          <div className="border-b border-[#222] pb-12 mb-16">
            <h1
              className="font-bold leading-none tracking-tighter text-[#f5f0e8]"
              style={{ fontSize: "clamp(56px, 10vw, 120px)" }}
            >
              Let's talk.
            </h1>
            <p className="text-[#888] text-base mt-4 max-w-lg">
              Whether you have a project, a question, or just want to connect — I'd love to hear from you.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Contact details */}
          <ScrollReveal>
            <div>
              <p className="text-[#888] text-xs tracking-widest uppercase mb-8">Contact Info</p>
              <div className="space-y-6">
                <a
                  href="mailto:mohibali2017@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 border border-[#222] rounded-full flex items-center justify-center group-hover:border-[#555] transition-colors">
                    <Mail size={14} className="text-[#888]" />
                  </div>
                  <span className="text-[#f5f0e8]/80 text-sm group-hover:text-[#f5f0e8] transition-colors">
                    mohibali2017@gmail.com
                  </span>
                </a>
                <a
                  href="tel:+905524817671"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 border border-[#222] rounded-full flex items-center justify-center group-hover:border-[#555] transition-colors">
                    <Phone size={14} className="text-[#888]" />
                  </div>
                  <span className="text-[#f5f0e8]/80 text-sm group-hover:text-[#f5f0e8] transition-colors">
                    +90 552 481 7671
                  </span>
                </a>
                <a
                  href="https://www.mohibali.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 border border-[#222] rounded-full flex items-center justify-center group-hover:border-[#555] transition-colors">
                    <Globe size={14} className="text-[#888]" />
                  </div>
                  <span className="text-[#f5f0e8]/80 text-sm group-hover:text-[#f5f0e8] transition-colors">
                    www.mohibali.com
                  </span>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[#222] rounded-full flex items-center justify-center">
                    <MapPin size={14} className="text-[#888]" />
                  </div>
                  <span className="text-[#f5f0e8]/80 text-sm">Istanbul, Türkiye</span>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-[#888] text-xs tracking-widest uppercase mb-6">Social</p>
                <div className="flex gap-4">
                  {[
                    { icon: LinkedInIcon, href: "https://linkedin.com/in/mohibalialtaf", label: "LinkedIn" },
                    { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
                    { icon: BehanceIcon, href: "https://behance.net", label: "Behance" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-[#333] rounded-full flex items-center justify-center text-[#888] hover:text-[#f5f0e8] hover:border-[#f5f0e8] transition-all"
                      aria-label={label}
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal delay={0.1}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

import { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { LinkedInIcon, InstagramIcon, FacebookIcon, XIcon } from "@/components/SocialIcons";
import CopyButton from "@/components/CopyButton";

export const metadata: Metadata = {
  title: "Contact , Mohib Ali Altaf",
  description: "Get in touch with Mohib for product design, creative direction, and photography projects.",
};

const socials = [
  { icon: InstagramIcon, href: "https://instagram.com/mohibaliphotography", label: "Instagram" },
  { icon: FacebookIcon, href: "https://facebook.com/mohibaliphotography", label: "Facebook" },
  { icon: XIcon, href: "https://x.com/mohibaliphotos", label: "X" },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/mohibalialtaf/", label: "LinkedIn" },
];

export default function ContactPage() {
  return (
    <div className="page-padding">
      <div style={{ maxWidth: "1058px", margin: "0 auto" }}>

        {/* Header */}
        <ScrollReveal>
          <div className="border-b border-[#222]" style={{ paddingBottom: "40px", marginBottom: "40px" }}>
            <p className="text-[#888] text-xs tracking-widest uppercase" style={{ marginBottom: "16px" }}>Contact</p>
            <h1
              className="font-bold leading-none tracking-tighter text-[#f5f0e8]"
              style={{ fontSize: "clamp(32px, 4vw, 56px)", marginBottom: "40px" }}
            >
              Let's talk.
            </h1>
            <p className="text-[#888] text-base max-w-xl leading-relaxed">
              Whether you have a project, a question, or just want to connect , I'd love to hear from you.
            </p>
          </div>
        </ScrollReveal>

        {/* Email */}
        <ScrollReveal>
          <div className="border-b border-[#222] flex items-center justify-between" style={{ padding: "24px 0" }}>
            <a href="mailto:mohibali2017@gmail.com" className="text-[#f5f0e8] text-sm hover:text-[#888] transition-colors">
              mohibali2017@gmail.com
            </a>
            <CopyButton value="mohibali2017@gmail.com" />
          </div>
        </ScrollReveal>

        {/* Phone */}
        <ScrollReveal>
          <div className="border-b border-[#222] flex items-center justify-between" style={{ padding: "24px 0" }}>
            <a href="tel:+905524817671" className="text-[#f5f0e8] text-sm hover:text-[#888] transition-colors">
              +90 552 481 7671
            </a>
            <CopyButton value="+90 552 481 7671" />
          </div>
        </ScrollReveal>

        {/* Socials */}
        <ScrollReveal>
          <div className="border-b border-[#222] flex items-center gap-5" style={{ padding: "24px 0" }}>
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f5f0e8] hover:text-[#888] transition-colors"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}

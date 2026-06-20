import Link from "next/link";
import { ArrowDown, ArrowRight, Globe } from "lucide-react";
import { LinkedInIcon, InstagramIcon } from "@/components/SocialIcons";
import MarqueeTicker from "@/components/MarqueeTicker";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import ContactForm from "@/components/ContactForm";
import { projects } from "@/data/projects";
import { posts } from "@/data/posts";

const services = [
  { title: "Product Design", tags: ["UX Research", "Wireframing", "Prototyping"] },
  { title: "Creative Direction", tags: ["Visual Systems", "Brand", "Art Direction"] },
  { title: "Product Management", tags: ["Roadmapping", "Agile", "Stakeholder Mgmt"] },
  { title: "Photography", tags: ["Commercial", "Editorial", "Concept"] },
];

const testimonials = [
  {
    quote: "Mohib brings a rare combination of design thinking and product clarity. His work on Aseel's platform elevated the entire user experience.",
    name: "Amir B.",
    role: "Business Analyst at Aseel",
  },
  {
    quote: "Working with Mohib meant every design decision had a reason. He's thorough, creative, and incredibly focused on what users actually need.",
    name: "Zainab E.",
    role: "Product Designer",
  },
  {
    quote: "Bibin Magazine was Mohib's vision from start to finish — and it shows. The visual direction is stunning and consistent.",
    name: "Freshta T.",
    role: "Video Editor",
  },
];

export default function Home() {
  const featuredProjects = projects.slice(0, 4);
  const recentPosts = posts.slice(0, 2);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 pt-32 pb-12 border-b border-[#222]">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-[#888] text-xs tracking-widest uppercase mb-6">©2026</p>
            <h1
              className="font-['Space_Grotesk'] font-bold uppercase leading-none tracking-tighter text-[#f5f0e8]"
              style={{ fontSize: "clamp(52px, 12vw, 140px)" }}
            >
              PRODUCT
              <br />
              DESIGNER
            </h1>
            <p className="text-[#888] text-sm tracking-widest mt-6 font-mono">
              == /DESIGNING SINCE 2017 ==
            </p>
          </div>
        </div>

        {/* Two portrait placeholders */}
        <div className="absolute top-28 right-6 md:right-12 flex gap-3">
          <div className="w-24 md:w-36 h-32 md:h-48 bg-[#111] border border-[#222] rounded-sm flex items-center justify-center">
            {/* Replace with your back-view portrait */}
            <span className="text-[#333] text-[9px] tracking-wider text-center px-2">BACK VIEW<br/>PORTRAIT</span>
          </div>
          <div className="w-24 md:w-36 h-32 md:h-48 bg-[#111] border border-[#222] rounded-sm flex items-center justify-center">
            {/* Replace with your front-view portrait */}
            <span className="text-[#333] text-[9px] tracking-wider text-center px-2">FRONT VIEW<br/>PORTRAIT</span>
          </div>
        </div>

        {/* Rotating badge */}
        <div className="absolute bottom-24 right-6 md:right-16 w-24 h-24 md:w-32 md:h-32">
          <svg viewBox="0 0 120 120" className="w-full h-full animate-spin" style={{ animationDuration: "12s" }}>
            <defs>
              <path id="circle" d="M 60,60 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
            </defs>
            <text className="text-[8px] fill-[#f5f0e8] font-['Space_Grotesk'] tracking-widest">
              <textPath href="#circle" startOffset="0%">AVAILABLE FOR WORK · ISTANBUL · 2026 · </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[#f5f0e8] text-lg">✦</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex items-center gap-2 text-[#888] text-xs tracking-widest uppercase">
          <ArrowDown size={14} className="animate-bounce" />
          <span>Scroll</span>
        </div>
      </section>

      {/* BIO */}
      <ScrollReveal>
        <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#222]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <h2
                className="font-['Space_Grotesk'] font-bold leading-none tracking-tighter text-[#f5f0e8]"
                style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
              >
                Hey!
              </h2>
            </div>
            <div>
              <p className="text-[#f5f0e8]/80 text-base md:text-lg leading-relaxed mb-6">
                I'm Mohib, a product designer and creative lead based in Istanbul, Türkiye. I'm
                currently working as Product Manager at Aseel and Founder of Bibin Photography
                Magazine.
              </p>
              <p className="text-[#888] text-sm leading-relaxed mb-6">
                I'm a product designer, creative lead, and photographer with 7+ years of experience
                in visual design, UX/UI, and product thinking — helping teams build products that
                are clear, functional, and beautiful.
              </p>
              <p className="text-[#888] text-sm leading-relaxed mb-10">
                Over the years I've led design across e-commerce, humanitarian aid platforms, SaaS
                products, and editorial media, working with global teams to ship work that matters.
              </p>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-[#f5f0e8] text-sm font-semibold tracking-wider uppercase border-b border-[#f5f0e8]/40 pb-1 hover:border-[#f5f0e8] transition-colors"
              >
                See My Work <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* MARQUEE */}
      <MarqueeTicker />

      {/* SERVICES */}
      <ScrollReveal>
        <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#222]">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#888] text-xs tracking-widest uppercase mb-12">What I Do</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className={`py-8 px-6 border-t border-[#222] ${i < 3 ? "lg:border-r" : ""}`}
                >
                  <h3 className="font-['Space_Grotesk'] font-semibold text-[#f5f0e8] text-lg mb-4">
                    {s.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[#888] text-xs border border-[#333] px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FEATURED PROJECTS */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#222]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12">
              <h2 className="font-['Space_Grotesk'] font-bold text-[clamp(28px,4vw,48px)] tracking-tight text-[#f5f0e8]">
                Featured Projects
              </h2>
              <Link
                href="/work"
                className="text-[#888] text-sm hover:text-[#f5f0e8] transition-colors flex items-center gap-1"
              >
                View All <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProjects.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 0.08}>
                <ProjectCard {...p} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <ScrollReveal>
        <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#222]">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#888] text-xs tracking-widest uppercase mb-12">What People Say</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <div key={t.name} className="border border-[#222] p-8 rounded-sm">
                  <p className="text-[#f5f0e8]/80 text-sm leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </p>
                  <div>
                    <p className="text-[#f5f0e8] text-sm font-semibold">— {t.name}</p>
                    <p className="text-[#888] text-xs mt-0.5">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* BLOG PREVIEW */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#222]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-4">
              <h2 className="font-['Space_Grotesk'] font-bold text-[clamp(28px,4vw,48px)] tracking-tight text-[#f5f0e8]">
                Thoughts
              </h2>
              <Link
                href="/blog"
                className="text-[#888] text-sm hover:text-[#f5f0e8] transition-colors flex items-center gap-1"
              >
                View All <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
          <div>
            {recentPosts.map((p) => (
              <ScrollReveal key={p.slug}>
                <BlogCard {...p} large />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2
              className="font-['Space_Grotesk'] font-bold leading-none tracking-tighter text-[#f5f0e8] mb-4"
              style={{ fontSize: "clamp(48px, 10vw, 120px)" }}
            >
              Let's talk.
            </h2>
            <p className="text-[#888] text-base mb-12 max-w-lg">
              Have a project or need help? Fill out the form, and I'll get back to you soon.
            </p>
          </ScrollReveal>

          <div className="flex gap-4 mb-16">
            {[
              { icon: LinkedInIcon, href: "https://linkedin.com/in/mohibalialtaf", label: "LinkedIn" },
              { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
              { icon: Globe, href: "https://www.mohibali.com", label: "Website" },
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

          <ScrollReveal>
            <div className="max-w-xl">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

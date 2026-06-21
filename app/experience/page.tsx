import { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import Image from "next/image";
import LanguageCard from "@/components/LanguageCard";

export const metadata: Metadata = {
  title: "Work Experience , Mohib Ali Altaf",
  description: "9+ years of experience in product design, creative direction, and product management.",
};

const experience = [
  {
    company: "Aseel Technology Corporation",
    url: "https://aseelapp.com",
    logo: "/images/logo-aseel.jpg",
    role: "Product Manager",
    period: "Aug 2025 , Present",
    location: "Türkiye · Hybrid",
    description: "Leading end-to-end product management at Aseel, owning the full product lifecycle from UX research and experience design through cross-functional delivery, aligning engineering, design, and business stakeholders to ship high-quality product outcomes in a hybrid environment.",
  },
  {
    company: "Bibin Photography Magazine",
    url: "https://bibinmagazine.com",
    logo: "/images/logo-bibin.jpg",
    role: "Founder",
    period: "Jan 2025 , Present",
    location: "Türkiye",
    description: "Founded and lead Bibin, a triannual photography magazine bridging contemporary and fine art photography with interdisciplinary perspectives spanning philosophy, psychology, and literature , overseeing editorial vision, content strategy, digital production, and a distributed team of contributors across multiple countries.",
  },
  {
    company: "blissio.ai",
    url: "https://blissio.ai",
    logo: "/images/logo-blissio-v2.jpg",
    role: "Product Lead",
    period: "Jul 2024 , Sep 2024 · 3 mos",
    location: "Istanbul, Türkiye · Remote",
    description: "Drove product strategy and design direction for blissio.ai, shaping the product vision and leading execution across a remote-first team to deliver a focused, user-centered experience.",
  },
  {
    company: "Aseel Technology Corporation",
    url: "https://aseelapp.com",
    logo: "/images/logo-aseel.jpg",
    role: "Product Lead",
    period: "Jan 2023 , Jul 2024 · 1 yr 7 mos",
    location: "Istanbul, Türkiye · On-site",
    description: "Led product strategy and execution across Aseel's platform suite, directing cross-functional teams to define requirements, manage the product roadmap, and ship key initiatives including DirectAid , a humanitarian e-commerce product enabling emergency aid package purchases and peer-to-peer fundraising for beneficiaries.",
  },
  {
    company: "Aseel Technology Corporation",
    url: "https://aseelapp.com",
    logo: "/images/logo-aseel.jpg",
    role: "Creative Lead",
    period: "Jun 2022 , Dec 2022 · 7 mos",
    location: "Istanbul, Türkiye · Remote",
    description: "Directed creative strategy and execution across product design, branding, and marketing for Aseel, leading a multidisciplinary team of designers and content creators to build a cohesive visual identity and drive measurable growth in brand recognition and audience engagement.",
  },
  {
    company: "Aseel Technology Corporation",
    url: "https://aseelapp.com",
    logo: "/images/logo-aseel.jpg",
    role: "Creative Lead",
    period: "Jan 2022 , Jun 2022 · 6 mos",
    location: "Kabul Province, Afghanistan · Remote",
    description: "Directed creative output and brand consistency across Aseel's digital touchpoints, leading design initiatives remotely and ensuring a unified visual language across all product and marketing surfaces.",
  },
  {
    company: "Awal Development",
    url: "https://awal.xyz",
    logo: "/images/logo-awal.jpg",
    role: "Marketing Manager",
    period: "Jun 2020 , Dec 2021 · 1 yr 7 mos",
    location: "Kabul, Afghanistan · On-site",
    description: "Led marketing strategy and operations at Awal, overseeing social media campaigns, budget management, and cross-functional coordination while launching flagship campaigns that boosted sales by up to 15% and earned coverage across more than 20 national and international media outlets.",
  },
  {
    company: "The Khaama Press News Agency",
    url: "https://khaama.com",
    logo: "/images/logo-khaama.jpg",
    role: "Journalist / Writer",
    period: "Nov 2019 , Jun 2020 · 8 mos",
    location: "Kabul, Afghanistan · On-site",
    description: "Reported, wrote, and published daily news stories across a range of topics, combining on-the-ground reporting, source interviews, and in-depth fact-checking to deliver accurate and balanced coverage , while also contributing original photography and translating content between Farsi and English to extend the platform's reach to broader audiences.",
  },
  {
    company: "Awal Development",
    url: "https://awal.xyz",
    logo: "/images/logo-awal.jpg",
    role: "Content Creator",
    period: "Aug 2019 , Nov 2019 · 4 mos",
    location: "Kabul, Afghanistan · On-site",
    description: "Produced end-to-end video and written content for Awal, handling everything from story development and scriptwriting to on-location photography, videography, interviews, and post-production editing.",
  },
];


export default function ExperiencePage() {
  return (
    <div className="page-padding">
      <div style={{ maxWidth: "1058px", margin: "0 auto" }}>

        {/* Header */}
        <ScrollReveal>
          <div className="border-b border-[#222]" style={{ paddingBottom: "40px", marginBottom: "40px" }}>
            <p className="text-[#888] text-xs tracking-widest uppercase" style={{ marginBottom: "16px" }}>Background</p>
            <h1
              className="font-bold leading-none tracking-tighter text-[#f5f0e8]"
              style={{ fontSize: "clamp(32px, 4vw, 56px)", marginBottom: "40px" }}
            >
              Work Experience
            </h1>
          </div>
        </ScrollReveal>

        {/* Experience list */}
        <div className="mb-24">
          {experience.map((job, i) => (
            <ScrollReveal key={`${job.company}-${i}`} delay={i * 0.05}>
              <div className="border-b border-[#222] grid md:grid-cols-2" style={{ padding: "40px 0", gap: "24px" }}>
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <div style={{ width: "48px", height: "48px", flexShrink: 0, overflow: "hidden" }}>
                    {job.logo ? (
                      <Image
                        src={job.logo}
                        alt={job.company}
                        width={48}
                        height={48}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    ) : (
                      <div style={{ width: "48px", height: "48px", backgroundColor: "#3B6BF0" }} />
                    )}
                  </div>
                  <div>
                    <p className="text-[#888] text-xs tracking-widest uppercase" style={{ marginBottom: "4px" }}>{job.period}</p>
                    <a href={job.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#f5f0e8] text-xl transition-all duration-200 block hover:opacity-60 hover:tracking-wide" style={{ marginBottom: "4px", textDecoration: "none" }}>{job.company}</a>
                    <p className="text-[#f5f0e8]/70 text-sm" style={{ marginBottom: "4px" }}>{job.role}</p>
                    <p className="text-[#555] text-xs tracking-wide">{job.location}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-[#888] text-sm leading-relaxed">{job.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Recommendations link */}
        <div style={{ marginTop: "40px", marginBottom: "80px" }}>
          <Link
            href="/recommendations"
            className="inline-flex items-center gap-2 text-[#f5f0e8] text-sm tracking-wider uppercase border border-[#333] hover:border-[#f5f0e8] transition-all duration-200"
            style={{ padding: "12px 24px", textDecoration: "none" }}
          >
            Recommendations
          </Link>
        </div>

        {/* Skills */}
        <style>{`
          .skill-card {
            position: relative;
            overflow: hidden;
            border: 1px solid #222;
            padding: 32px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            border-radius: 0;
          }
          .skill-glow {
            position: absolute;
            bottom: -80px;
            left: 50%;
            transform: translateX(-50%) rotate(0deg);
            width: 120%;
            height: 200px;
            border-radius: 40%;
            filter: blur(52px);
            opacity: 0.25;
            transition: opacity 0.5s ease;
            pointer-events: none;
          }
          .skill-card:hover .skill-glow {
            opacity: 0.75;
            animation: drift-glow 3s ease-in-out infinite;
          }
          .skill-card:not(:hover) .skill-glow {
            animation: none;
            opacity: 0.25;
          }
          @keyframes drift-glow {
            0%   { transform: translateX(-60%) translateY(0px) rotate(0deg) scale(1); opacity: 0.65; }
            25%  { transform: translateX(-50%) translateY(-20px) rotate(6deg) scale(1.08); opacity: 0.85; }
            50%  { transform: translateX(-40%) translateY(-10px) rotate(-4deg) scale(1.12); opacity: 0.75; }
            75%  { transform: translateX(-50%) translateY(-24px) rotate(8deg) scale(1.05); opacity: 0.9; }
            100% { transform: translateX(-60%) translateY(0px) rotate(0deg) scale(1); opacity: 0.65; }
          }
          .skills-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
            align-items: stretch;
          }
          .skills-grid > * { height: 100%; }
          .skill-card { height: 100%; }
          @media (min-width: 1024px) {
            .skills-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }
          @media (min-width: 640px) and (max-width: 1023px) {
            .skills-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          .lang-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
            align-items: stretch;
          }
          .lang-grid > * { height: 100%; }
          @media (min-width: 1024px) {
            .lang-grid { grid-template-columns: repeat(5, 1fr); }
          }
          @media (min-width: 640px) and (max-width: 1023px) {
            .lang-grid { grid-template-columns: repeat(2, 1fr); }
          }
          [data-theme="light"] .skill-card { border-color: #d0cbc2; }
          [data-theme="light"] .skill-card .skill-glow { opacity: 0.15; }
          [data-theme="light"] .skill-card:hover .skill-glow { opacity: 0.4; }
        `}</style>

        <div style={{ marginTop: "80px", marginBottom: "60px" }}>
          <ScrollReveal>
            <p className="text-[#888] text-xs tracking-widest uppercase" style={{ marginBottom: "16px" }}>Strengths</p>
            <h2
              className="font-bold leading-none tracking-tighter text-[#f5f0e8]"
              style={{ fontSize: "clamp(32px, 4vw, 56px)", marginBottom: "40px" }}
            >
              Expertise
            </h2>
          </ScrollReveal>

          <div className="skills-grid">

            {/* Product Strategy */}
            <ScrollReveal delay={0}>
              <div className="skill-card">
                <div className="skill-glow" style={{ background: "radial-gradient(ellipse, #6366f1 0%, #8b5cf6 50%, transparent 100%)" }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <p className="font-semibold text-[#f5f0e8]" style={{ marginBottom: "8px", fontSize: "16px" }}>Product Strategy</p>
                  <p className="text-[#888] text-sm leading-relaxed">Figuring out what to build, what to ignore, and why it matters.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* UX Research */}
            <ScrollReveal delay={0.05}>
              <div className="skill-card">
                <div className="skill-glow" style={{ background: "radial-gradient(ellipse, #06b6d4 0%, #3b82f6 50%, transparent 100%)" }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <p className="font-semibold text-[#f5f0e8]" style={{ marginBottom: "8px", fontSize: "16px" }}>UX Research</p>
                  <p className="text-[#888] text-sm leading-relaxed">Talking to people until the real problem shows up.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Visual Design */}
            <ScrollReveal delay={0.1}>
              <div className="skill-card">
                <div className="skill-glow" style={{ background: "radial-gradient(ellipse, #f43f5e 0%, #ec4899 50%, transparent 100%)" }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <p className="font-semibold text-[#f5f0e8]" style={{ marginBottom: "8px", fontSize: "16px" }}>Visual Design</p>
                  <p className="text-[#888] text-sm leading-relaxed">Getting the details right until nothing feels out of place.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Product-Market Fit */}
            <ScrollReveal delay={0.15}>
              <div className="skill-card">
                <div className="skill-glow" style={{ background: "radial-gradient(ellipse, #f59e0b 0%, #f97316 50%, transparent 100%)" }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <p className="font-semibold text-[#f5f0e8]" style={{ marginBottom: "8px", fontSize: "16px" }}>Product-Market Fit</p>
                  <p className="text-[#888] text-sm leading-relaxed">Finding where a product clicks with the people it's made for.</p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>

        {/* Languages */}
        <div style={{ marginTop: "80px", marginBottom: "60px" }}>
          <ScrollReveal>
            <p className="text-[#888] text-xs tracking-widest uppercase" style={{ marginBottom: "16px" }}>Communication</p>
            <h2
              className="font-bold leading-none tracking-tighter text-[#f5f0e8]"
              style={{ fontSize: "clamp(32px, 4vw, 56px)", marginBottom: "40px" }}
            >
              Languages
            </h2>
          </ScrollReveal>

          <div className="lang-grid">
            {[
              { name: "Persian", nativeName: "فارسی", desc: "My first language. Where I think when it matters.", nativeDesc: "شکر شکن شود همه طوطیان هند", glow: "radial-gradient(ellipse, #06b6d4 0%, #3b82f6 50%, transparent 100%)", rating: 5 },
              { name: "English", desc: "Fluent in writing, speaking, and thinking in it.", glow: "radial-gradient(ellipse, #6366f1 0%, #8b5cf6 50%, transparent 100%)", rating: 4.5 },
              { name: "Urdu", nativeName: "اوردو", desc: "Grown up with it. Feels like home.", nativeDesc: "ابھی کچھ لوگ باقی ہیں جو اردو بول سکتے ہیں", glow: "radial-gradient(ellipse, #f43f5e 0%, #ec4899 50%, transparent 100%)", rating: 3.5 },
              { name: "Pashto", nativeName: "پښتو", desc: "Understand it, speak it when needed.", nativeDesc: "چې سړی هر څومره پښتون شي - زړه چې مئين شي پښتو ټوله ترېنه ځينه", glow: "radial-gradient(ellipse, #10b981 0%, #059669 50%, transparent 100%)", rating: 3 },
              { name: "Turkish", nativeName: "Türkçe", desc: "Living in Istanbul made it necessary. Still learning.", nativeDesc: "Türkçemi mükemmelleştirmeye hala çalışıyorum.", glow: "radial-gradient(ellipse, #f59e0b 0%, #f97316 50%, transparent 100%)", rating: 2 },
            ].map((lang, i) => (
              <ScrollReveal key={lang.name} delay={i * 0.05} className="h-full">
                <LanguageCard {...lang} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

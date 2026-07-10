import Link from "next/link";
import { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { poems } from "./poems";

export const metadata: Metadata = {
  title: "غزل‌ها , Mohib Ali Altaf",
  description: "Selected Persian ghazals (غزل‌ها) by Mohib Ali Altaf.",
};

const faDigits = (n: number) => String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);

export default function PoetryPage() {
  return (
    <div className="page-padding">
      <style>{`
        .poem-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        @media (min-width: 640px) { .poem-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .poem-grid { grid-template-columns: repeat(4, 1fr); } }
        .poem-card {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          min-height: 340px;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: var(--surface);
          padding: 20px;
          overflow: hidden;
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        /* Hover glow: multi-color + drifting, confined to the bottom (fades out under the 2nd line) */
        .poem-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(130deg,
            rgba(255,200,140,0.5) 0%,
            rgba(238,128,42,0.72) 100%);
          background-size: 240% 240%;
          -webkit-mask-image: linear-gradient(to top, #000 30%, transparent 52%);
          mask-image: linear-gradient(to top, #000 30%, transparent 52%);
          opacity: 0;
          transition: opacity 0.45s ease;
          pointer-events: none;
        }
        .poem-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-lg); }
        .poem-card:hover::before { opacity: 1; animation: poem-glow 5s ease-in-out infinite; }
        @keyframes poem-glow {
          0%   { background-position: 0% 0%; }
          50%  { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
        .poem-card > * { position: relative; z-index: 1; }
        .poem-line-1 { font-size: 18px; font-weight: 500; line-height: 1.75; }
        .poem-line-2 { font-size: 15px; font-weight: 400; line-height: 1.95; margin-top: 6px; }
        .poem-num { font-size: 13px; letter-spacing: 0.05em; margin-top: 44px; }
      `}</style>

      <div style={{ maxWidth: "1058px", margin: "0 auto" }} dir="rtl">

        {/* Header */}
        <ScrollReveal>
          <div className="border-b border-[#222]" style={{ paddingBottom: "40px", marginBottom: "48px" }}>
            <h1
              className="font-vazir text-[#f5f0e8]"
              style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, lineHeight: 1.3, textAlign: "right" }}
            >
              غزل‌ها
            </h1>
          </div>
        </ScrollReveal>

        {/* Poems grid */}
        <ScrollReveal>
          <div className="poem-grid">
            {poems.map((poem) => (
              <Link key={poem.id} href={`/poetry/${poem.id}`} className="poem-card font-vazir">
                <div>
                  <p className="poem-line-1 text-[#f5f0e8]">{poem.stanzas[0][0]}</p>
                  <p className="poem-line-2 text-[#888]">{poem.stanzas[0][1]}</p>
                </div>
                <span className="poem-num text-[#555]">{faDigits(poem.id)}</span>
              </Link>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}

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
          background: var(--bg);
          padding: 20px;
          overflow: hidden;
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .poem-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-lg); }
        .poem-card > * { position: relative; z-index: 1; }
        .poem-line-1 { font-size: 18px; font-weight: 500; line-height: 1.75; }
        .poem-line-2 { font-size: 15px; font-weight: 400; line-height: 1.95; margin-top: 6px; }
        .poem-num { font-size: 13px; letter-spacing: 0.05em; }
        .poem-foot { display: flex; align-items: center; justify-content: space-between; margin-top: 44px; }
        .poem-arrow { transition: transform 0.25s ease; }
        .poem-card:hover .poem-arrow { transform: translateX(3px); }
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
                <div className="poem-foot" dir="ltr">
                  <span className="poem-num text-[#555]">{faDigits(poem.id)}</span>
                  <svg className="poem-arrow text-[#555]" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}

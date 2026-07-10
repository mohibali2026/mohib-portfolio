import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { poems } from "../poems";

export function generateStaticParams() {
  return poems.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const poem = poems.find((p) => String(p.id) === id);
  const firstLine = poem?.stanzas[0]?.[0] ?? "شعر";
  return {
    title: `${firstLine} , Mohib Ali Altaf`,
    description: firstLine,
  };
}

export default async function PoemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const idx = poems.findIndex((p) => String(p.id) === id);
  if (idx === -1) notFound();
  const poem = poems[idx];
  const prevPoem = poems[(idx - 1 + poems.length) % poems.length];
  const nextPoem = poems[(idx + 1) % poems.length];

  return (
    <div className="page-padding">
      <style>{`
        .poem-verse { font-size: 18px; line-height: 2.15; }
        .poem-stanza { margin-bottom: 36px; }
        .poem-stanza:last-child { margin-bottom: 0; }
        .poem-divider { text-align: center; font-size: 15px; margin: 8px 0 44px; letter-spacing: 0.4em; opacity: 0.6; }
        .poem-nav-arrow {
          position: fixed; top: 50%; transform: translateY(-50%);
          display: inline-flex; align-items: center; justify-content: center;
          width: 46px; height: 46px; border-radius: 50%;
          border: 1px solid var(--border); color: var(--text-primary);
          background: var(--bg);
          transition: background 0.2s ease, border-color 0.2s ease;
          z-index: 20;
        }
        .poem-nav-arrow:hover { background: var(--surface); border-color: var(--text-secondary); }
        .poem-nav-arrow.left { left: 32px; }
        .poem-nav-arrow.right { right: 32px; }
        @media (max-width: 768px) {
          .poem-nav-arrow { width: 38px; height: 38px; }
          .poem-nav-arrow.left { left: 10px; }
          .poem-nav-arrow.right { right: 10px; }
        }
      `}</style>

      {/* Prev / Next poem navigation */}
      <Link href={`/poetry/${prevPoem.id}`} aria-label="Previous poem" className="poem-nav-arrow left">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </Link>
      <Link href={`/poetry/${nextPoem.id}`} aria-label="Next poem" className="poem-nav-arrow right">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </Link>

      <div style={{ maxWidth: "720px", margin: "0 auto", paddingTop: "24px" }} dir="rtl">

        {/* Poem body */}
        <div className="font-vazir text-[#f5f0e8]" style={{ textAlign: "center" }}>
          {poem.stanzas.map((stanza, si) => {
            if (stanza.length === 1 && stanza[0] === "***") {
              return <div key={si} className="poem-divider text-[#555]" aria-hidden="true">✦</div>;
            }
            return (
              <div key={si} className="poem-stanza">
                {stanza.map((line, li) => (
                  <p key={li} className="poem-verse">{line}</p>
                ))}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

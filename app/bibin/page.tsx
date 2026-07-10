import { Metadata } from "next";
import BibinDescription from "@/components/BibinDescription";

export const metadata: Metadata = {
  title: "Bibin Photography Magazine , Mohib Ali Altaf",
  description: "Bibin is a triannual photography magazine bridging contemporary and fine art photography.",
};

const issues = [
  { number: 5, date: "Summer 2026", cover: "Yaotong Jiang",      href: "https://www.bibinmagazine.com/magazine/issue-5", img: "/images/bibin/issue-5.jpg" },
  { number: 4, date: "Dec 2025",    cover: "Matthieu Panicucci", href: "https://www.bibinmagazine.com/magazine/issue-4", img: "/images/bibin/issue-4.jpg" },
  { number: 3, date: "Jul 2025",    cover: "Shamshad Noori",     href: "https://www.bibinmagazine.com/magazine/issue-3", img: "/images/bibin/issue-3.jpg" },
  { number: 2, date: "Apr 2025",    cover: "Francesco Fantini",  href: "https://www.bibinmagazine.com/magazine/issue-2", img: "/images/bibin/issue-2.jpg" },
  { number: 1, date: "Jan 2025",    cover: "Kumi Oguro",         href: "https://www.bibinmagazine.com/magazine/issue-1", img: "/images/bibin/issue-1.jpg" },
];

export default function BibinPage() {
  return (
    <div className="page-padding">
      <style>{`
        .bibin-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        /* Magazine mockup */
        .mag-scene {
          perspective: 1200px;
          display: block;
          margin-bottom: 20px;
        }
        .mag-book {
          position: relative;
          transform: rotateY(-18deg);
          transform-style: preserve-3d;
          transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
          display: inline-block;
          width: 100%;
        }
        .mag-scene:hover .mag-book {
          transform: rotateY(-6deg);
        }

        /* Spine */
        .mag-spine {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 18px;
          background: linear-gradient(to right, #111 0%, #2a2a2a 60%, #1a1a1a 100%);
          transform-origin: left center;
          transform: rotateY(90deg) translateZ(-9px) translateX(-9px);
          backface-visibility: hidden;
        }

        /* Cover face */
        .mag-cover {
          position: relative;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          box-shadow:
            6px 6px 20px rgba(0,0,0,0.35),
            12px 12px 40px rgba(0,0,0,0.2),
            -2px 0 8px rgba(0,0,0,0.3);
        }
        .mag-cover img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .mag-scene:hover .mag-cover img {
          transform: scale(1.03);
        }

        /* Gloss sheen */
        .mag-gloss {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            115deg,
            rgba(255,255,255,0.12) 0%,
            rgba(255,255,255,0.04) 30%,
            transparent 60%
          );
          pointer-events: none;
          transition: opacity 0.4s ease;
        }
        .mag-scene:hover .mag-gloss {
          opacity: 0.6;
        }

        /* Page edges — right side */
        .mag-pages {
          position: absolute;
          right: -5px;
          top: 2px;
          bottom: 2px;
          width: 5px;
          background: repeating-linear-gradient(
            to bottom,
            #c8c0b4 0px,
            #c8c0b4 1px,
            #ede8e0 1px,
            #ede8e0 2px
          );
          box-shadow: 2px 0 4px rgba(0,0,0,0.15);
        }

        @media (max-width: 768px) {
          .bibin-layout {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .bibin-layout > div:first-child {
            position: static !important;
          }
          .mag-book {
            transform: rotateY(-10deg);
          }
        }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="bibin-layout">

          {/* Left — sticky text */}
          <div style={{ position: "sticky", top: "120px" }}>
<h1
              className="font-bold leading-none tracking-tighter"
              style={{ fontSize: "clamp(28px, 3vw, 48px)", marginBottom: "40px", color: "var(--text-primary)" }}
            >
              Bibin Photography Magazine
            </h1>
            <BibinDescription />
          </div>

          {/* Right — issues */}
          <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
            {issues.map((issue) => (
              <a
                key={issue.number}
                href={issue.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", textDecoration: "none" }}
              >
                {/* Magazine mockup */}
                <div className="mag-scene">
                  <div className="mag-book">
                    <div className="mag-spine" />
                    <div className="mag-cover">
                      <img src={issue.img} alt={`Bibin Issue ${issue.number}`} />
                      <div className="mag-gloss" />
                    </div>
                    <div className="mag-pages" />
                  </div>
                </div>

                <p style={{ color: "var(--text-primary)", fontSize: "14px", marginBottom: "4px" }}>
                  Issue {issue.number} · {issue.date}
                </p>
                <p style={{ color: "var(--text-secondary)", fontSize: "12px", marginBottom: "2px" }}>
                  Cover: {issue.cover}
                </p>
                <p style={{ color: "var(--text-secondary)", fontSize: "12px", opacity: 0.5 }}>
                  bibinmagazine.com →
                </p>
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

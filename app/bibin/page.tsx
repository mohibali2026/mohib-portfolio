import { Metadata } from "next";

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
            <div style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.9", display: "flex", flexDirection: "column", gap: "18px" }}>
              <p>In Persian, <em>Bibin</em> is an imperative verb meaning "see," "watch," or "look." It is used to ask or invite someone to look at something, emphasizing the significance of the act of seeing.</p>
              <p>If we accept that seeing always precedes thinking and creating, then photography, as an art form, embodies this idea and its possibilities. It is a space for seeing, imagining, thinking, and creating; an opportunity for observation, discovery, and the expression of new ideas, experiences, performances, and perceptions.</p>
              <p>Bibin Photography Magazine is dedicated to the selection, reading, and publication of contemporary and fine-art photography. By discovering and introducing photographers, collecting their works, and engaging with photographs through analytical and interpretive readings, Bibin seeks to create renewed connections between photography and disciplinary and interdisciplinary fields within the humanities, social sciences, and the arts.</p>
              <p>The openness of meaning in contemporary and fine-art photography allows art to engage with the human lifeworld and remain receptive to what is new: new worlds, new encounters, and new forms of experience. Guided by this idea, Bibin approaches photographs as spaces for close observation and sustained reading, exploring the ways in which images can enter into dialogue with different fields of knowledge and artistic thought.</p>
              <p>Each issue brings together photography and a distinct field of inquiry. A guest writer from the humanities, social sciences, or the arts is invited to read and interpret the selected photographs through the particular analytical approach of that issue. Through these encounters, Bibin seeks to create a space in which photography can be viewed, questioned, and understood from multiple perspectives.</p>
              <p>Bibin Photography Magazine is published quarterly in Persian and English. Each issue features 20 photographs by photographers from Afghanistan and around the world, selected through an international open call and presented alongside analytical readings and interpretations.</p>
              <p>Photographs are collected through open calls published on the Bibin Photography Magazine website, and photographers from around the world are invited to submit their work. In the first stage of the selection process, the editor-in-chief and editorial board select 40 to 50 photographs in relation to the theme and analytical approach of the issue. This selection is then shared with the guest writer, who participates in selecting the final 20 photographs for publication.</p>
            </div>
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

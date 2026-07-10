"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { DM_Serif_Display } from "next/font/google";

const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

const paragraphs = [
  <>In Persian, <em>Bibin</em> is an imperative verb meaning "see," "watch," or "look." It is used to ask or invite someone to look at something, emphasizing the significance of the act of seeing.</>,
  <>Bibin Photography Magazine focuses on the selection and critical reading of contemporary and fine-art photography by discovering and introducing photographers, collecting their works, interpreting them, and publishing them in both print and online formats.</>,
  <>If we accept that seeing always precedes thinking and creating, then photography, as an art form, embodies both this idea and its possibilities. It is a space for seeing, imagining, thinking, and creating; an opportunity to observe, discover, and express new ideas, experiences, performances, and perceptions.</>,
  <>In each issue of the quarterly magazine, a guest writer from the arts or humanities engages with the selected photographs through critical reading and interpretation. Through this approach, Bibin seeks to create connections between photography and other fields of art and knowledge.</>,
  <>The openness of meaning in contemporary and fine-art photography reflects the ways in which art engages with the human lifeworld, cultivating and welcoming what is new: new possibilities, new worlds, and new ways of being human. Guided by this idea, Bibin seeks to look deeply at photographs and read them closely, establishing renewed connections between photography and disciplinary and interdisciplinary fields within the humanities and social sciences.</>,
  <>Bibin Photography Magazine is published quarterly in Persian and English. Each issue features 20 selected photographs by photographers from Afghanistan and around the world. The works are selected through an open call and presented in the magazine alongside analytical readings and interpretations.</>,
  <>Photographs are collected through open calls published on the Bibin Photography Magazine website, and photographers from around the world are welcome to submit their work. In the first stage of the selection process, the editor-in-chief and editorial board select 40 to 50 photographs that correspond to the analytical approach of the issue. This selection is then shared with the guest writer, who participates in selecting the final 20 photographs for publication in the magazine.</>,
];

// Fan order: oldest left → newest right, issue 3 (mid) in center
const fanIssues = [
  { number: 1, href: "https://www.bibinmagazine.com/magazine/issue-1", img: "/images/bibin/issue-1.jpg" },
  { number: 2, href: "https://www.bibinmagazine.com/magazine/issue-2", img: "/images/bibin/issue-2.jpg" },
  { number: 3, href: "https://www.bibinmagazine.com/magazine/issue-3", img: "/images/bibin/issue-3.jpg" },
  { number: 4, href: "https://www.bibinmagazine.com/magazine/issue-4", img: "/images/bibin/issue-4.jpg" },
  { number: 5, href: "https://www.bibinmagazine.com/magazine/issue-5", img: "/images/bibin/issue-5.jpg" },
];

// Layered diagonal cascade — LOW→MID→HIGH→MID→LOW arch, each card on top of previous
// Card size: 220px square. Step = 210px (~5% overlap) for visible spacing between cards.
// Total composition width: 4×210 + 220 = 1060px → center offset = 530px
const CARD_SIZE = 220;
const CARDS = [
  { rotate: -15, top: 100, left: -530, z: 1 },
  { rotate:  -7, top:  45, left: -320, z: 2 },
  { rotate:   0, top:   0, left: -110, z: 3 },
  { rotate:   7, top:  45, left:  100, z: 4 },
  { rotate:  15, top: 100, left:  310, z: 5 },
];

export default function BibinHero() {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const handleAbout = () => {
    if (window.innerWidth < 768) {
      router.push("/bibin/about");
    } else {
      setModalOpen(true);
    }
  };

  const closeModal = useCallback(() => setModalOpen(false), []);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [modalOpen, closeModal]);

  return (
    <>
      <style>{`
        .bibin-hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 24px 0;
          gap: 0;
        }
        /* fan-scaler controls flow height; fan-container holds absolute cards */
        .fan-scaler {
          width: 100%;
          height: 380px;
          margin-bottom: 80px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          overflow: visible;
          flex-shrink: 0;
        }
        .fan-container {
          position: relative;
          width: 1060px;
          height: 380px;
          flex-shrink: 0;
          overflow: visible;
        }
        /* outer wrapper: holds transform + drop-shadow (not clipped) */
        .fan-card-wrap {
          position: absolute;
          width: 220px;
          height: 220px;
          filter: drop-shadow(0 8px 28px rgba(0,0,0,0.32)) drop-shadow(0 2px 6px rgba(0,0,0,0.18));
        }
        /* inner link: clips content to rounded shape */
        .fan-card {
          display: block;
          width: 100%;
          height: 100%;
          text-decoration: none;
          clip-path: inset(0 round 32px);
        }
        .fan-card-img {
          width: 100%;
          height: 100%;
          position: relative;
        }
        .fan-card-img img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
        }
        .fan-gloss {
          position: absolute; inset: 0;
          background: linear-gradient(130deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 35%, transparent 65%);
          pointer-events: none;
        }
        .bibin-title {
          font-size: clamp(28px, 4vw, 56px);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1;
          text-align: center;
          color: var(--text-primary);
          margin-bottom: 40px;
        }
        .bibin-btns {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .btn-outline {
          padding: 12px 28px;
          border: 1px solid var(--border);
          background: none;
          color: var(--text-primary);
          font-size: 13px;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease;
          text-decoration: none;
          display: inline-block;
        }
        .btn-outline:hover {
          background: var(--surface);
          border-color: var(--text-secondary);
        }
        .btn-fill {
          padding: 12px 28px;
          background: var(--text-primary);
          color: var(--bg);
          font-size: 13px;
          letter-spacing: 0.04em;
          cursor: pointer;
          border: 1px solid transparent;
          transition: opacity 0.2s ease;
          text-decoration: none;
          display: inline-block;
        }
        .btn-fill:hover { opacity: 0.8; }
        [data-theme="light"] .btn-fill {
          background-color: #0a0a0a !important;
          color: #ffffff !important;
        }

        /* Modal */
        .modal-overlay {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(0,0,0,0.65);
          display: flex; align-items: center; justify-content: center;
          padding: 40px;
          backdrop-filter: blur(6px);
          animation: bFadeIn 0.2s ease;
        }
        .modal-box {
          background: var(--bg);
          max-width: 620px; width: 100%;
          max-height: 80vh; overflow-y: auto;
          padding: 52px;
          position: relative;
          animation: bSlideUp 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        .modal-close {
          position: absolute; top: 20px; right: 24px;
          background: none; border: none; cursor: pointer;
          color: var(--text-secondary); font-size: 22px; line-height: 1; padding: 4px;
          transition: color 0.2s;
        }
        .modal-close:hover { color: var(--text-primary); }
        @keyframes bFadeIn  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes bSlideUp { from { opacity: 0; transform: translateY(20px) } to { opacity: 1; transform: translateY(0) } }

        @media (max-width: 1024px) {
          .fan-scaler { height: 247px; margin-bottom: 52px; }
          .fan-container { transform: scale(0.65); transform-origin: center top; }
        }
        @media (max-width: 600px) {
          .fan-scaler { height: 152px; margin-bottom: 32px; }
          .fan-container { transform: scale(0.4); transform-origin: center top; }
        }
      `}</style>

      <div className="bibin-hero">
        {/* Layered diagonal cascade */}
        <div className="fan-scaler">
          <div className="fan-container">
            {fanIssues.map((issue, i) => {
              const card = CARDS[i];
              return (
                <div
                  key={issue.number}
                  className="fan-card-wrap"
                  style={{
                    top: `${card.top}px`,
                    left: `calc(50% + ${card.left}px)`,
                    transform: `rotate(${card.rotate}deg)`,
                    zIndex: card.z,
                  }}
                >
                  <a
                    href={issue.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fan-card"
                  >
                    <div className="fan-card-img">
                      <img src={issue.img} alt={`Bibin Issue ${issue.number}`} />
                      <div className="fan-gloss" />
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Title */}
        <h1 className={`bibin-title ${dmSerif.className}`}>Bibin Photography Magazine</h1>

        {/* Buttons */}
        <div className="bibin-btns">
          <button className="btn-outline" onClick={handleAbout}>About Bibin</button>
          <a
            className="btn-fill"
            href="https://www.bibinmagazine.com/magazine"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Now
          </a>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close">×</button>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {paragraphs.map((p, i) => (
                <p key={i} style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.9" }}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import { DM_Serif_Display } from "next/font/google";

const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

// Fan order: oldest left → newest right, issue 3 (mid) in center
const fanIssues = [
  { number: 1, href: "https://www.bibinmagazine.com/magazine/issue-1", img: "/images/bibin/issue-1.jpg" },
  { number: 2, href: "https://www.bibinmagazine.com/magazine/issue-2", img: "/images/bibin/issue-2.jpg" },
  { number: 3, href: "https://www.bibinmagazine.com/magazine/issue-3", img: "/images/bibin/issue-3.jpg" },
  { number: 4, href: "https://www.bibinmagazine.com/magazine/issue-4", img: "/images/bibin/issue-4.jpg" },
  { number: 5, href: "https://www.bibinmagazine.com/magazine/issue-5", img: "/images/bibin/issue-5.jpg" },
];

// Layered diagonal cascade — LOW→MID→HIGH→MID→LOW arch, each card on top of previous
// Card size: 220px square. Step = 190px (~14% overlap) — cards sit closer together.
// Total composition width: 4×190 + 220 = 980px, centered in the 1060px container.
const CARD_SIZE = 220;
const CARDS = [
  { rotate: -15, top:  80, left: -490, z: 1 },
  { rotate:  -7, top:  45, left: -300, z: 2 },
  { rotate:   0, top:  30, left: -110, z: 3 },
  { rotate:   7, top:  45, left:   80, z: 4 },
  { rotate:  15, top:  80, left:  270, z: 5 },
];

export default function BibinHero() {
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
          height: 301px;
          margin-bottom: 16px;
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
          /* Web view: shrink the whole fan so each 220px card renders at ~204px (16px smaller). */
          transform: scale(0.9273);
          transform-origin: center top;
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
          font-weight: 400;
          font-synthesis: none;
          letter-spacing: 0.01em;
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

        @media (max-width: 1024px) {
          .fan-scaler { height: 247px; margin-bottom: 32px; }
          .fan-container { transform: scale(0.65); transform-origin: center top; }
        }
        @media (max-width: 600px) {
          .fan-scaler { height: 152px; margin-bottom: 20px; }
          .fan-container { transform: scale(0.4); transform-origin: center top; }
          /* Mobile only: pull the fan tighter (step 190px -> 150px). Overrides the JS inline left. */
          .fan-card-wrap:nth-child(1) { left: calc(50% - 410px) !important; }
          .fan-card-wrap:nth-child(2) { left: calc(50% - 260px) !important; }
          .fan-card-wrap:nth-child(3) { left: calc(50% - 110px) !important; }
          .fan-card-wrap:nth-child(4) { left: calc(50% + 40px) !important; }
          .fan-card-wrap:nth-child(5) { left: calc(50% + 190px) !important; }
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
        <h1 className={`bibin-title ${dmSerif.className}`}>Bibin<br />Photography<br />Magazine</h1>

        {/* Buttons */}
        <div className="bibin-btns">
          <a
            className="btn-outline"
            href="https://www.bibinmagazine.com/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Bibin
          </a>
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
    </>
  );
}

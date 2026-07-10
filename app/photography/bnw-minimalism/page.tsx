"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const photos = [
  "/images/minimalism/1.jpg",
  "/images/minimalism/3.jpg",
  "/images/minimalism/4.jpg",
  "/images/minimalism/5.JPG",
  "/images/minimalism/6.jpg",
  "/images/minimalism/7.jpg",
  "/images/minimalism/8.jpg",
  "/images/minimalism/9.jpg",
  "/images/minimalism/10.jpg",
  "/images/minimalism/11.jpg",
  "/images/minimalism/12.jpg",
  "/images/minimalism/13.jpg",
  "/images/minimalism/14.jpg",
  "/images/minimalism/15.jpg",
  "/images/minimalism/16.jpg",
  "/images/minimalism/17.jpg",
  "/images/minimalism/18.jpg",
  "/images/minimalism/19.jpg",
  "/images/minimalism/20.jpg",
  "/images/minimalism/21.jpg",
  "/images/minimalism/22.jpg",
  "/images/minimalism/23.jpg",
  "/images/minimalism/24.jpg",
  "/images/minimalism/25.jpg",
  "/images/minimalism/26.jpg",
  "/images/minimalism/27.jpg",
  "/images/minimalism/28.jpg",
  "/images/minimalism/29.jpg",
  "/images/minimalism/30.jpg",
  "/images/minimalism/31.JPG",
  "/images/minimalism/32.jpg",
  "/images/minimalism/33.jpg",
  "/images/minimalism/34.jpg",
  "/images/minimalism/35.jpg",
  "/images/minimalism/36.jpg",
  "/images/minimalism/37.jpg",
  "/images/minimalism/38.jpg",
  "/images/minimalism/39.jpg",
  "/images/minimalism/40.jpg",
];

export default function BnwMinimalismPage() {
  const [current, setCurrent] = useState(0);
  const direction = useRef(0);

  useEffect(() => {
    const preload = (src: string) => { const img = new window.Image(); img.src = src; };
    preload(photos[(current + 1) % photos.length]);
    preload(photos[(current - 1 + photos.length) % photos.length]);
  }, [current]);

  const prev = useCallback(() => {
    direction.current = -1;
    setCurrent((i) => (i - 1 + photos.length) % photos.length);
  }, []);

  const next = useCallback(() => {
    direction.current = 1;
    setCurrent((i) => (i + 1) % photos.length);
  }, []);

  const touchStartX = useRef<number | null>(null);
  const onTouchStart = useCallback((e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; }, []);
  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  }, [next, prev]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <div
      onContextMenu={e => e.preventDefault()}
      style={{ position: "fixed", inset: 0, display: "flex", userSelect: "none" }}
    >
      <style>{`
        img.gallery-img { pointer-events: none; -webkit-user-drag: none; -webkit-touch-callout: none; display: block; max-height: 520px; max-width: 620px; width: auto; height: auto; }
        .nav-arrow { position: absolute; top: 50%; transform: translateY(-50%); width: 44px; height: 44px; border-radius: 50%; background: white; border: 1px solid #D0D0D0; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: var(--shadow-xs); transition: box-shadow 0.2s ease; z-index: 10; color: #1A1A1A; }
        .nav-arrow:hover { box-shadow: var(--shadow-sm); }
        .nav-arrow.left { left: 24px; }
        .nav-arrow.right { right: 24px; }
        .gallery-frame { background: var(--gallery-frame); padding: 14px; display: inline-flex; box-shadow: var(--shadow-lg); }
        .gallery-mat { background: #FAF9F7; padding: 32px; }
        @media (max-width: 768px) {
          img.gallery-img { max-height: 220px; max-width: 260px; }
          .gallery-frame { padding: 10px; }
          .gallery-mat { padding: 18px; }
          .nav-arrow { width: 36px; height: 36px; }
          .nav-arrow.left { left: 8px; }
          .nav-arrow.right { right: 8px; }
        }
      `}</style>

      {/* Gallery wall — framed image centered with equal top/bottom padding */}
      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{ flex: 1, backgroundColor: "var(--gallery-wall)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", padding: "64px 80px" }}
      >
        <AnimatePresence initial={false} custom={direction.current} mode="popLayout">
          <motion.div
            key={current}
            custom={direction.current}
            initial={{ x: direction.current * 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction.current * -60, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ display: "inline-flex" }}
          >
            <div className="gallery-frame">
              <div className="gallery-mat">
                <img
                  src={photos[current]}
                  alt={`bnw minimalism ${current + 1}`}
                  className="gallery-img"
                  draggable={false}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button className="nav-arrow left" onClick={prev} aria-label="Previous">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="nav-arrow right" onClick={next} aria-label="Next">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

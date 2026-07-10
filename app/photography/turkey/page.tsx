"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const photos = [
  "/images/turkey/1.jpg",
  "/images/turkey/2.jpg",
  "/images/turkey/3.jpg",
  "/images/turkey/4.jpg",
  "/images/turkey/5.jpg",
  "/images/turkey/6.jpg",
];

const STRIP_COUNT = Math.min(10, photos.length);
const HALF = Math.floor(STRIP_COUNT / 2);

export default function TurkeyPage() {
  const [current, setCurrent] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const direction = useRef(0);

  // Reset loaded state and preload adjacent images whenever current changes
  useEffect(() => {
    setImageLoaded(false);
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

  const goTo = useCallback((i: number) => {
    direction.current = i > current ? 1 : -1;
    setCurrent(i);
  }, [current]);

  const touchStartX = useRef<number | null>(null);
  const onTouchStart = useCallback((e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; }, []);
  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  }, [next, prev]);

  const stripTouchStartX = useRef<number | null>(null);
  const onStripTouchStart = useCallback((e: React.TouchEvent) => { stripTouchStartX.current = e.touches[0].clientX; }, []);
  const onStripTouchEnd = useCallback((e: React.TouchEvent) => {
    if (stripTouchStartX.current === null) return;
    const diff = stripTouchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 30) diff > 0 ? next() : prev();
    stripTouchStartX.current = null;
  }, [next, prev]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const stripIndices = Array.from({ length: STRIP_COUNT }, (_, k) =>
    ((current - HALF + k) % photos.length + photos.length) % photos.length
  );

  return (
    <div
      onContextMenu={e => e.preventDefault()}
      style={{ position: "fixed", inset: 0, display: "flex", flexDirection: "column", userSelect: "none" }}
    >
      <style>{`
        img.gallery-img { pointer-events: none; -webkit-user-drag: none; -webkit-touch-callout: none; display: block; max-height: 520px; max-width: 620px; width: auto; height: auto; }
        .nav-arrow { position: absolute; top: 50%; transform: translateY(-50%); width: 44px; height: 44px; border-radius: 50%; background: white; border: 1px solid #D0D0D0; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.12); transition: box-shadow 0.2s ease; z-index: 10; color: #1A1A1A; }
        .nav-arrow:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.22); }
        .nav-arrow.left { left: 24px; }
        .nav-arrow.right { right: 24px; }
        .gallery-frame { background: #1A1A1A; padding: 14px; display: inline-flex; box-shadow: 0 8px 40px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.12); }
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

      {/* Gallery wall */}
      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{ flex: 1, backgroundColor: "#F5F5F5", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", padding: "64px 80px" }}
      >
        <AnimatePresence initial={false} custom={direction.current} mode="popLayout">
          <motion.div
            key={current}
            custom={direction.current}
            initial={{ x: direction.current * 60, opacity: 0 }}
            animate={{ x: 0, opacity: imageLoaded ? 1 : 0 }}
            exit={{ x: direction.current * -60, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ display: "inline-flex" }}
          >
            <div className="gallery-frame">
              <div className="gallery-mat">
                <img
                  src={photos[current]}
                  alt={`Turkey ${current + 1}`}
                  className="gallery-img"
                  draggable={false}
                  onLoad={() => setImageLoaded(true)}
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

      {/* Thumbnail strip */}
      <div
        onTouchStart={onStripTouchStart}
        onTouchEnd={onStripTouchEnd}
        style={{ position: "relative", width: "100%", backgroundColor: "var(--bg)", maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)" }}
      >
        <div style={{ display: "flex", gap: "8px", padding: "16px 24px", alignItems: "center", justifyContent: "center" }}>
          {stripIndices.map((photoIdx, slot) => {
            const isActive = photoIdx === current;
            return (
              <motion.button
                key={`${slot}-${photoIdx}`}
                layout
                onClick={() => goTo(photoIdx)}
                aria-label={`Go to photo ${photoIdx + 1}`}
                style={{ width: isActive ? "48px" : "40px", height: isActive ? "48px" : "40px", padding: 0, border: isActive ? "1.5px solid #f5f0e8" : "1.5px solid transparent", cursor: "pointer", overflow: "hidden", flexShrink: 0, opacity: isActive ? 1 : 0.5, transition: "all 0.2s ease", position: "relative", backgroundColor: "transparent" }}
              >
                <img src={photos[photoIdx]} alt="" draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" }} />
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

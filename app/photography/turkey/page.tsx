"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
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
  const direction = useRef(0);

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

  // Main image swipe
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);
  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  }, [next, prev]);

  // Strip swipe
  const stripTouchStartX = useRef<number | null>(null);
  const onStripTouchStart = useCallback((e: React.TouchEvent) => {
    stripTouchStartX.current = e.touches[0].clientX;
  }, []);
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

  // Compute window of STRIP_COUNT indices centered on current, wrapping
  const stripIndices = Array.from({ length: STRIP_COUNT }, (_, k) =>
    ((current - HALF + k) % photos.length + photos.length) % photos.length
  );

  return (
    <div
      onContextMenu={e => e.preventDefault()}
      style={{ position: "fixed", inset: 0, backgroundColor: "var(--bg)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", userSelect: "none" }}
    >
      <style>{`
        .photo-frame img { pointer-events: none; -webkit-user-drag: none; -webkit-touch-callout: none; }
      `}</style>

      {/* Main image */}
      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{ position: "relative", flex: 1, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}
      >
        <AnimatePresence initial={false} custom={direction.current} mode="popLayout">
          <motion.div
            key={current}
            custom={direction.current}
            initial={{ x: direction.current * 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction.current * -80, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="photo-frame"
            style={{ position: "absolute", inset: 0 }}
          >
            <Image
              src={photos[current]}
              alt={`Turkey ${current + 1}`}
              fill
              draggable={false}
              style={{ objectFit: "contain", pointerEvents: "none" }}
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Left arrow */}
        <button
          onClick={prev}
          aria-label="Previous"
          style={{ position: "absolute", left: "24px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#f5f0e8", opacity: 0.6, padding: "12px", zIndex: 10 }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "0.6")}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Right arrow */}
        <button
          onClick={next}
          aria-label="Next"
          style={{ position: "absolute", right: "24px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#f5f0e8", opacity: 0.6, padding: "12px", zIndex: 10 }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "0.6")}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Thumbnail strip — windowed, infinite, centered */}
      <div
        onTouchStart={onStripTouchStart}
        onTouchEnd={onStripTouchEnd}
        style={{
          position: "relative",
          width: "100%",
          maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
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
                style={{
                  width: isActive ? "48px" : "40px",
                  height: isActive ? "48px" : "40px",
                  padding: 0,
                  border: isActive ? "1.5px solid #f5f0e8" : "1.5px solid transparent",
                  cursor: "pointer",
                  overflow: "hidden",
                  flexShrink: 0,
                  opacity: isActive ? 1 : 0.5,
                  transition: "all 0.2s ease",
                  position: "relative",
                }}
              >
                <Image src={photos[photoIdx]} alt={`Thumbnail ${photoIdx + 1}`} fill style={{ objectFit: "cover" }} />
              </motion.button>
            );
          })}
        </div>
      </div>

    </div>
  );
}

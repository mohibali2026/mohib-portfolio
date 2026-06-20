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
      style={{ position: "fixed", inset: 0, backgroundColor: "#0a0a0a", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", userSelect: "none" }}
    >
      <style>{`
        .photo-frame img { pointer-events: none; -webkit-user-drag: none; -webkit-touch-callout: none; }
      `}</style>

      {/* Main image */}
      <div style={{ position: "relative", flex: 1, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
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
          style={{
            position: "absolute",
            left: "24px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#f5f0e8",
            opacity: 0.6,
            padding: "12px",
            zIndex: 10,
          }}
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
          style={{
            position: "absolute",
            right: "24px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#f5f0e8",
            opacity: 0.6,
            padding: "12px",
            zIndex: 10,
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "0.6")}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Thumbnail strip */}
      <div style={{ display: "flex", gap: "8px", padding: "16px 24px", alignItems: "center" }}>
        {photos.map((src, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to photo ${i + 1}`}
            style={{
              width: i === current ? "48px" : "40px",
              height: i === current ? "48px" : "40px",
              padding: 0,
              border: i === current ? "1.5px solid #f5f0e8" : "1.5px solid transparent",
              cursor: "pointer",
              overflow: "hidden",
              flexShrink: 0,
              opacity: i === current ? 1 : 0.5,
              transition: "all 0.2s ease",
              position: "relative",
            }}
          >
            <Image src={src} alt={`Thumbnail ${i + 1}`} fill style={{ objectFit: "cover" }} />
          </button>
        ))}
      </div>

    </div>
  );
}

"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved !== "light";
    setDark(isDark);
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <>
      <style>{`
        .theme-btn {
          position: fixed;
          top: 28px;
          right: 32px;
          z-index: 9999;
        }
        @media (max-width: 767px) {
          .theme-btn {
            display: none;
          }
        }
      `}</style>

      <button
        onClick={toggle}
        className="theme-btn"
        aria-label="Toggle theme"
        style={{
          width: "44px",
          height: "24px",
          borderRadius: "999px",
          border: "1px solid var(--border)",
          backgroundColor: "var(--surface)",
          display: "flex",
          alignItems: "center",
          padding: "0 3px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
      >
        <span
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            backgroundColor: "var(--text-primary)",
            transition: "transform 0.3s ease",
            transform: dark ? "translateX(0px)" : "translateX(20px)",
            display: "block",
          }}
        />
      </button>
    </>
  );
}

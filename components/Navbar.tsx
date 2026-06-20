"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "About" },
  { href: "https://bibinmagazine.com", label: "Bibin", external: true },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="w-5 h-4 flex flex-col justify-between relative">
      <motion.span
        className="block h-[1.5px] bg-current origin-center"
        animate={open ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      />
      <motion.span
        className="block h-[1.5px] bg-current"
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="block h-[1.5px] bg-current origin-center"
        animate={open ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved !== "light";
    setDark(isDark);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
  };

  return (
    <>
      <style>{`
        .nav-mobile-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 40px;
        }
        @media (min-width: 768px) {
          .nav-mobile-header {
            display: none;
          }
        }
        .nav-desktop {
          display: none;
        }
        @media (min-width: 768px) {
          .nav-desktop {
            display: flex;
            align-items: center;
            gap: 40px;
          }
        }
      `}</style>

      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: "var(--bg)", backdropFilter: "blur(8px)" }}>

        {/* Mobile header row */}
        <div className="nav-mobile-header">
          <button
            className="text-[#f5f0e8] p-1"
            style={{ zIndex: 80 }}
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            <HamburgerIcon open={false} />
          </button>

          {mounted && (
            <button
              onClick={toggleTheme}
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
          )}
        </div>

        {/* Desktop nav */}
        <div className="nav-desktop" style={{ paddingTop: "40px", paddingBottom: "20px", justifyContent: "center" }}>
          {links.map((l) => l.external ? (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-wider uppercase transition-all duration-200 text-[#888] hover:text-[#f5f0e8] hover:tracking-widest"
            >
              {l.label}
            </a>
          ) : (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm tracking-wider uppercase transition-all duration-200 ${
                pathname === l.href
                  ? "text-[#f5f0e8] border-b border-[#f5f0e8] pb-0.5"
                  : "text-[#888] hover:text-[#f5f0e8] hover:tracking-widest"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

      </nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-[60] bg-[#0a0a0a] flex flex-col"
            style={{ padding: "0" }}
          >
            {/* Header row inside overlay */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "40px" }}>
              <button
                className="text-[#f5f0e8] p-1"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                style={{ lineHeight: 1, fontSize: "20px", fontWeight: 300 }}
              >
                ✕
              </button>
              {mounted && (
                <button
                  onClick={toggleTheme}
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
              )}
            </div>
            <div className="flex flex-col gap-6" style={{ padding: "40px" }}>
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                >
                  {l.external ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl font-semibold tracking-tight transition-colors block text-[#444] hover:text-[#f5f0e8]"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      href={l.href}
                      className={`text-2xl font-semibold tracking-tight transition-colors block ${
                        pathname === l.href
                          ? "text-[#f5f0e8] border-b border-[#f5f0e8] pb-0.5 w-fit"
                          : "text-[#444] hover:text-[#f5f0e8]"
                      }`}
                    >
                      {l.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

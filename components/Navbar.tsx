"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "About" },
  { href: "https://bibinmagazine.com", label: "Bibin", external: true },
  { href: "/experience", label: "Resume" },
  {
    href: "/photography",
    label: "Photography",
    children: [
      { href: "/photography/turkey", label: "Turkey" },
      { href: "/photography/minimalism", label: "Minimalism" },
    ],
  },
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
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
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
                width: "64px",
                height: "34px",
                borderRadius: "999px",
                border: "1px solid var(--border)",
                backgroundColor: dark ? "#1a1a1a" : "#f0f0f0",
                display: "flex",
                alignItems: "center",
                padding: "0 4px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            >
              <span
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  backgroundColor: dark ? "#ffffff" : "#111111",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.3s ease, background-color 0.3s ease",
                  transform: dark ? "translateX(0px)" : "translateX(30px)",
                  flexShrink: 0,
                }}
              >
                {dark ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/>
                    <line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                ) : (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#f5f0e8" stroke="none">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                )}
              </span>
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
          ) : l.children ? (
            <div key={l.href} className="relative group">
              <span
                className={`text-sm tracking-wider uppercase transition-all duration-200 cursor-default inline-flex items-center gap-1 ${
                  pathname.startsWith(l.href)
                    ? "text-[#f5f0e8] border-b border-[#f5f0e8] pb-0.5"
                    : "text-[#888] hover:text-[#f5f0e8]"
                }`}
              >
                {l.label}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: "transform 0.2s ease" }} className="group-hover:rotate-180">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div
                className="absolute top-full left-0 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
                style={{ paddingTop: "12px", transition: "opacity 0.2s ease" }}
              >
                <div className="flex flex-col gap-3 border border-[#222]" style={{ backgroundColor: "var(--bg)", minWidth: "160px", padding: "12px" }}>
                  {l.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`text-xs tracking-wider uppercase transition-all duration-200 ${
                        pathname === child.href
                          ? "text-[#f5f0e8]"
                          : "text-[#888] hover:text-[#f5f0e8]"
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
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
                    width: "64px",
                    height: "34px",
                    borderRadius: "999px",
                    border: "1px solid var(--border)",
                    backgroundColor: dark ? "#1a1a1a" : "#f0f0f0",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 4px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  <span
                    style={{
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      backgroundColor: dark ? "#ffffff" : "#111111",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "transform 0.3s ease, background-color 0.3s ease",
                      transform: dark ? "translateX(0px)" : "translateX(30px)",
                      flexShrink: 0,
                    }}
                  >
                    {dark ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5"/>
                        <line x1="12" y1="1" x2="12" y2="3"/>
                        <line x1="12" y1="21" x2="12" y2="23"/>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                        <line x1="1" y1="12" x2="3" y2="12"/>
                        <line x1="21" y1="12" x2="23" y2="12"/>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                      </svg>
                    ) : (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="#f5f0e8" stroke="none">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                      </svg>
                    )}
                  </span>
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
                  ) : l.children ? (
                    <div>
                      <button
                        onClick={() => setExpandedMobile(expandedMobile === l.href ? null : l.href)}
                        className="text-2xl font-semibold tracking-tight transition-colors flex items-center gap-2 text-[#444] hover:text-[#f5f0e8]"
                        style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                      >
                        {l.label}
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: "transform 0.2s ease", transform: expandedMobile === l.href ? "rotate(180deg)" : "rotate(0deg)" }}>
                          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <AnimatePresence>
                        {expandedMobile === l.href && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            style={{ overflow: "hidden" }}
                          >
                            <div className="flex flex-col gap-3 pl-4" style={{ marginTop: "12px" }}>
                              {l.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={`text-lg tracking-tight transition-colors block ${
                                    pathname === child.href
                                      ? "text-[#f5f0e8]"
                                      : "text-[#444] hover:text-[#f5f0e8]"
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
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

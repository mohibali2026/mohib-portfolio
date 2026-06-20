"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="w-5 h-4 flex flex-col justify-between relative">
      {/* Top line */}
      <motion.span
        className="block h-[1.5px] bg-current origin-center"
        animate={open ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      />
      {/* Middle line */}
      <motion.span
        className="block h-[1.5px] bg-current"
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
      {/* Bottom line */}
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
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, paddingTop: "40px", paddingBottom: "20px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--bg)", backdropFilter: "blur(8px)" }}>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm tracking-wider uppercase transition-colors duration-200 ${
                pathname === l.href
                  ? "text-[#f5f0e8] border-b border-[#f5f0e8] pb-0.5"
                  : "text-[#888] hover:text-[#f5f0e8]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

      </nav>

      {/* Mobile hamburger / X — fixed above overlay */}
      <button
        className="md:hidden text-[#f5f0e8] p-1 fixed right-6"
        style={{ top: "28px", zIndex: 80 }}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <HamburgerIcon open={open} />
      </button>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-[60] bg-[#0a0a0a] flex flex-col"
            style={{ padding: "120px 40px 40px 40px" }}
          >
            <div className="flex flex-col gap-6">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                >
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

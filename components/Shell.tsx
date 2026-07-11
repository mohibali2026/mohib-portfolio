"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import ThemeToggle from "@/components/ThemeToggle";

// The /add-frame tool renders full-screen in its own iframe and must not be
// wrapped in the site chrome or PageTransition (framer-motion's transform would
// trap the fixed-position iframe and let the navbar show through).
export default function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/add-frame") {
    return <>{children}</>;
  }

  return (
    <>
      <CustomCursor />
      <div className="hidden md:block">
        <ThemeToggle />
      </div>
      <Navbar />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
    </>
  );
}

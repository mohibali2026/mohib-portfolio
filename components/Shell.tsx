"use client";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import ThemeToggle from "@/components/ThemeToggle";

export default function Shell({ children }: { children: React.ReactNode }) {
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

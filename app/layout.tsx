import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Mohib Ali Altaf — Product Designer & Creative Lead",
  description:
    "Product designer and creative lead with 7+ years of experience in UX/UI, creative direction, and product management. Based in Istanbul, Türkiye.",
  icons: {
    icon: "/images/mohib-portrait.png",
    apple: "/images/mohib-portrait.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head />
      <body className="min-h-full flex flex-col" style={{ backgroundColor: "var(--bg)", color: "var(--text-primary)" }}>
        <CustomCursor />
        <div className="hidden md:block"><ThemeToggle /></div>
        <Navbar />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  );
}

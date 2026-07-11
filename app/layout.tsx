import type { Metadata } from "next";
import "./globals.css";
import Shell from "@/components/Shell";
import { Vazirmatn, Inter } from "next/font/google";

const vazirmatn = Vazirmatn({ subsets: ["arabic"], variable: "--font-vazir", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Mohib Ali Altaf , Product Designer & Creative Lead",
  description:
    "Product designer and creative lead with 7+ years of experience in UX/UI, creative direction, and product management. Based in Istanbul, Türkiye.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full ${vazirmatn.variable} ${inter.variable}`}>
      <head />
      <body className="min-h-full flex flex-col" style={{ backgroundColor: "var(--bg)", color: "var(--text-primary)" }}>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}

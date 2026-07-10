import { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Bibin Photography Magazine , Mohib Ali Altaf",
  description: "Bibin is a triannual photography magazine bridging contemporary and fine art photography.",
};

const issues = [
  { number: 5, date: "Summer 2026", cover: "Yaotong Jiang",   href: "https://www.bibinmagazine.com/magazine/issue-5", img: "/images/bibin/issue-5.jpg" },
  { number: 4, date: "Dec 2025",    cover: "Matthieu Panicucci", href: "https://www.bibinmagazine.com/magazine/issue-4", img: "/images/bibin/issue-4.jpg" },
  { number: 3, date: "Jul 2025",    cover: "Shamshad Noori",  href: "https://www.bibinmagazine.com/magazine/issue-3", img: "/images/bibin/issue-3.jpg" },
  { number: 2, date: "Apr 2025",    cover: "Francesco Fantini", href: "https://www.bibinmagazine.com/magazine/issue-2", img: "/images/bibin/issue-2.jpg" },
  { number: 1, date: "Jan 2025",    cover: "Kumi Oguro",      href: "https://www.bibinmagazine.com/magazine/issue-1", img: "/images/bibin/issue-1.jpg" },
];

export default function BibinPage() {
  return (
    <div className="page-padding">
      <div style={{ maxWidth: "1058px", margin: "0 auto" }}>

        {/* Header */}
        <ScrollReveal>
          <div className="border-b border-[var(--border)]" style={{ paddingBottom: "40px", marginBottom: "80px" }}>
            <p style={{ color: "var(--text-secondary)", fontSize: "12px", letterSpacing: "0.05em", marginBottom: "16px" }}>Magazine</p>
            <h1
              className="font-bold leading-none tracking-tighter"
              style={{ fontSize: "clamp(32px, 4vw, 56px)", marginBottom: "40px", color: "var(--text-primary)" }}
            >
              Bibin Photography Magazine
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: "1.7", maxWidth: "600px" }}>
              Placeholder — a description of Bibin and its vision will go here.
            </p>
          </div>
        </ScrollReveal>

        {/* Issues grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "40px 32px" }}>
          {issues.map((issue, i) => (
            <ScrollReveal key={issue.number} delay={i * 0.07}>
              <a
                href={issue.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                style={{ display: "block", textDecoration: "none" }}
              >
                {/* Cover */}
                <div style={{ aspectRatio: "1/1", backgroundColor: "var(--surface)", overflow: "hidden", marginBottom: "16px", position: "relative" }}>
                  <img
                    src={issue.img}
                    alt={`Bibin Issue ${issue.number}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s ease" }}
                    className="group-hover:scale-105"
                  />
                </div>

                {/* Label */}
                <p style={{ color: "var(--text-primary)", fontSize: "14px", marginBottom: "4px" }}>
                  Issue {issue.number} · {issue.date}
                </p>
                <p style={{ color: "var(--text-secondary)", fontSize: "12px", marginBottom: "2px" }}>
                  Cover: {issue.cover}
                </p>
                <p style={{ color: "var(--text-secondary)", fontSize: "12px", opacity: 0.5 }}>
                  bibinmagazine.com →
                </p>
              </a>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </div>
  );
}

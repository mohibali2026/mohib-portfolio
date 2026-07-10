import { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Bibin Photography Magazine , Mohib Ali Altaf",
  description: "Bibin is a triannual photography magazine bridging contemporary and fine art photography.",
};

const issues = [
  { number: 5, href: "https://www.bibinmagazine.com/magazine/issue-5", cover: "/images/bibin/issue-5.jpg" },
  { number: 4, href: "https://www.bibinmagazine.com/magazine/issue-4", cover: "/images/bibin/issue-4.jpg" },
  { number: 3, href: "https://www.bibinmagazine.com/magazine/issue-3", cover: "/images/bibin/issue-3.jpg" },
  { number: 2, href: "https://www.bibinmagazine.com/magazine/issue-2", cover: "/images/bibin/issue-2.jpg" },
  { number: 1, href: "https://www.bibinmagazine.com/magazine/issue-1", cover: "/images/bibin/issue-1.jpg" },
];

export default function BibinPage() {
  return (
    <div className="page-padding">
      <div style={{ maxWidth: "1058px", margin: "0 auto" }}>

        {/* Header */}
        <ScrollReveal>
          <div className="border-b border-[var(--border)]" style={{ paddingBottom: "40px", marginBottom: "80px" }}>
            <p className="text-[#888] text-xs tracking-widest" style={{ marginBottom: "16px" }}>Magazine</p>
            <h1
              className="font-bold leading-none tracking-tighter"
              style={{ fontSize: "clamp(32px, 4vw, 56px)", marginBottom: "40px", color: "var(--text-primary)" }}
            >
              Bibin Photography Magazine
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: "1.7", maxWidth: "600px" }}>
              {/* Description coming soon */}
              Placeholder — a description of Bibin and its vision will go here.
            </p>
          </div>
        </ScrollReveal>

        {/* Issues grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "32px" }}>
          {issues.map((issue, i) => (
            <ScrollReveal key={issue.number} delay={i * 0.07}>
              <a
                href={issue.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", textDecoration: "none", group: "true" }}
                className="group"
              >
                {/* Cover */}
                <div
                  style={{
                    aspectRatio: "2/3",
                    backgroundColor: "var(--surface)",
                    overflow: "hidden",
                    marginBottom: "16px",
                    position: "relative",
                  }}
                >
                  <img
                    src={issue.cover}
                    alt={`Bibin Issue ${issue.number}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.4s ease",
                    }}
                    className="group-hover:scale-105"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  {/* Placeholder shown when image missing */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-secondary)",
                      fontSize: "13px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Issue {issue.number}
                  </div>
                </div>

                {/* Label */}
                <p
                  style={{ color: "var(--text-primary)", fontSize: "14px", marginBottom: "4px", transition: "opacity 0.2s ease" }}
                  className="group-hover:opacity-60"
                >
                  Issue {issue.number}
                </p>
                <p style={{ color: "var(--text-secondary)", fontSize: "12px" }}>
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

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
            <div style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.8", maxWidth: "680px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <p>In Persian, <em>Bibin</em> is an imperative verb meaning "see," "watch," or "look." It is used to ask or invite someone to look at something, emphasizing the significance of the act of seeing.</p>
              <p>If we accept that seeing always precedes thinking and creating, then photography, as an art form, embodies this idea and its possibilities. It is a space for seeing, imagining, thinking, and creating; an opportunity for observation, discovery, and the expression of new ideas, experiences, performances, and perceptions.</p>
              <p>Bibin Photography Magazine is dedicated to the selection, reading, and publication of contemporary and fine-art photography. By discovering and introducing photographers, collecting their works, and engaging with photographs through analytical and interpretive readings, Bibin seeks to create renewed connections between photography and disciplinary and interdisciplinary fields within the humanities, social sciences, and the arts.</p>
              <p>The openness of meaning in contemporary and fine-art photography allows art to engage with the human lifeworld and to remain receptive to what is new: new worlds, new encounters, and new forms of experience. Guided by this idea, Bibin approaches photographs as spaces for close observation and sustained reading, exploring the ways in which images can enter into dialogue with different fields of knowledge and artistic thought.</p>
              <p>Each issue brings together photography and a distinct field of inquiry. A guest writer from the fields of knowledge or the arts is invited to read and interpret the selected photographs through the particular analytical approach of that issue. Through these encounters, Bibin seeks to create a space in which photography can be viewed, questioned, and understood from multiple perspectives.</p>
              <p>Bibin Photography Magazine is published quarterly in Persian and English. Each issue features 20 photographs by photographers from Afghanistan and around the world, selected through an international open call and presented alongside analytical readings and interpretations.</p>
              <p>Photographs are collected through open calls published on the Bibin Photography Magazine website, and photographers from around the world are invited to submit their work. In the first stage of the selection process, the editor-in-chief and editorial board select 40 to 50 photographs in relation to the theme and analytical approach of the issue. This selection is then shared with the guest writer, who participates in determining the final 20 photographs for publication.</p>
            </div>
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

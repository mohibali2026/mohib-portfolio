"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const paragraphs = [
  <>In Persian, <em>Bibin</em> is an imperative verb meaning "see," "watch," or "look." It is used to ask or invite someone to look at something, emphasizing the significance of the act of seeing.</>,
  <>If we accept that seeing always precedes thinking and creating, then photography, as an art form, embodies this idea and its possibilities. It is a space for seeing, imagining, thinking, and creating; an opportunity for observation, discovery, and the expression of new ideas, experiences, performances, and perceptions.</>,
  <>Bibin Photography Magazine is dedicated to the selection, reading, and publication of contemporary and fine-art photography. By discovering and introducing photographers, collecting their works, and engaging with photographs through analytical and interpretive readings, Bibin seeks to create renewed connections between photography and disciplinary and interdisciplinary fields within the humanities, social sciences, and the arts.</>,
  <>The openness of meaning in contemporary and fine-art photography allows art to engage with the human lifeworld and remain receptive to what is new: new worlds, new encounters, and new forms of experience. Guided by this idea, Bibin approaches photographs as spaces for close observation and sustained reading, exploring the ways in which images can enter into dialogue with different fields of knowledge and artistic thought.</>,
  <>Each issue brings together photography and a distinct field of inquiry. A guest writer from the humanities, social sciences, or the arts is invited to read and interpret the selected photographs through the particular analytical approach of that issue. Through these encounters, Bibin seeks to create a space in which photography can be viewed, questioned, and understood from multiple perspectives.</>,
  <>Bibin Photography Magazine is published quarterly in Persian and English. Each issue features 20 photographs by photographers from Afghanistan and around the world, selected through an international open call and presented alongside analytical readings and interpretations.</>,
  <>Photographs are collected through open calls published on the Bibin Photography Magazine website, and photographers from around the world are invited to submit their work. In the first stage of the selection process, the editor-in-chief and editorial board select 40 to 50 photographs in relation to the theme and analytical approach of the issue. This selection is then shared with the guest writer, who participates in selecting the final 20 photographs for publication.</>,
];

export default function BibinAboutPage() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ minHeight: "100vh", backgroundColor: "var(--bg)", padding: "40px 24px 80px" }}
    >
      {/* Back button */}
      <button
        onClick={() => router.back()}
        style={{
          display: "flex", alignItems: "center", gap: "8px",
          background: "none", border: "none", cursor: "pointer",
          color: "var(--text-secondary)", fontSize: "13px",
          padding: 0, marginBottom: "40px",
          transition: "color 0.2s ease",
        }}
        onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
        onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Back
      </button>

      <h1
        className="font-bold leading-none tracking-tighter"
        style={{ fontSize: "clamp(24px, 6vw, 40px)", marginBottom: "40px", color: "var(--text-primary)" }}
      >
        Bibin Photography Magazine
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "600px" }}>
        {paragraphs.map((p, i) => (
          <p key={i} style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.9" }}>{p}</p>
        ))}
      </div>
    </motion.div>
  );
}

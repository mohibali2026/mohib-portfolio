"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const paragraphs = [
  <>In Persian, <em>Bibin</em> is an imperative verb meaning "see," "watch," or "look." It is used to ask or invite someone to look at something, emphasizing the significance of the act of seeing.</>,
  <>Bibin Photography Magazine focuses on the selection and critical reading of contemporary and fine-art photography by discovering and introducing photographers, collecting their works, interpreting them, and publishing them in both print and online formats.</>,
  <>If we accept that seeing always precedes thinking and creating, then photography, as an art form, embodies both this idea and its possibilities. It is a space for seeing, imagining, thinking, and creating; an opportunity to observe, discover, and express new ideas, experiences, performances, and perceptions.</>,
  <>In each issue of the quarterly magazine, a guest writer from the arts or humanities engages with the selected photographs through critical reading and interpretation. Through this approach, Bibin seeks to create connections between photography and other fields of art and knowledge.</>,
  <>The openness of meaning in contemporary and fine-art photography reflects the ways in which art engages with the human lifeworld, cultivating and welcoming what is new: new possibilities, new worlds, and new ways of being human. Guided by this idea, Bibin seeks to look deeply at photographs and read them closely, establishing renewed connections between photography and disciplinary and interdisciplinary fields within the humanities and social sciences.</>,
  <>Bibin Photography Magazine is published quarterly in Persian and English. Each issue features 20 selected photographs by photographers from Afghanistan and around the world. The works are selected through an open call and presented in the magazine alongside analytical readings and interpretations.</>,
  <>Photographs are collected through open calls published on the Bibin Photography Magazine website, and photographers from around the world are welcome to submit their work. In the first stage of the selection process, the editor-in-chief and editorial board select 40 to 50 photographs that correspond to the analytical approach of the issue. This selection is then shared with the guest writer, who participates in selecting the final 20 photographs for publication in the magazine.</>,
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

"use client";
import { useState, useEffect, useCallback } from "react";
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

const textStyle = { color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.9" };

export default function BibinDescription() {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const handleReadMore = () => {
    if (window.innerWidth < 768) {
      router.push("/bibin/about");
    } else {
      setModalOpen(true);
    }
  };

  const close = useCallback(() => setModalOpen(false), []);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [modalOpen, close]);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        {paragraphs.slice(0, 2).map((p, i) => (
          <p key={i} style={textStyle}>{p}</p>
        ))}
        <button
          onClick={handleReadMore}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            color: "var(--text-primary)",
            fontSize: "13px",
            letterSpacing: "0.04em",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
            textAlign: "left",
            width: "fit-content",
            opacity: 0.7,
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}
        >
          Read more
        </button>
      </div>

      {/* Desktop modal */}
      {modalOpen && (
        <div
          onClick={close}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "40px",
            backdropFilter: "blur(4px)",
            animation: "fadeIn 0.2s ease",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              backgroundColor: "var(--bg)",
              maxWidth: "640px",
              width: "100%",
              maxHeight: "80vh",
              overflowY: "auto",
              padding: "48px",
              position: "relative",
              animation: "slideUp 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
            }}
          >
            <button
              onClick={close}
              style={{
                position: "absolute", top: "24px", right: "24px",
                background: "none", border: "none", cursor: "pointer",
                color: "var(--text-secondary)", fontSize: "20px", lineHeight: 1,
                padding: "4px",
              }}
              aria-label="Close"
            >
              ×
            </button>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {paragraphs.map((p, i) => (
                <p key={i} style={textStyle}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </>
  );
}

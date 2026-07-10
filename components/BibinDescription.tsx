"use client";
import { useState, useEffect, useCallback } from "react";
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

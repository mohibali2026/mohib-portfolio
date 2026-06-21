"use client";
import { useState } from "react";

interface Props {
  name: string;
  nativeName?: string;
  desc: string;
  nativeDesc?: string;
  glow: string;
  rating: number;
  index: number;
}

export default function LanguageCard({ name, nativeName, desc, nativeDesc, glow, rating, index }: Props) {
  const [hovered, setHovered] = useState(false);

  const isRTL = nativeName === "فارسی" || nativeName === "اوردو" || nativeName === "پښتو";

  return (
    <div
      className="skill-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="skill-glow" style={{ background: glow }} />
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>

        {/* Title — grid overlap so height = max of both */}
        <div style={{ display: "grid", marginBottom: "8px" }}>
          <p
            className="font-semibold text-[#f5f0e8]"
            style={{ gridArea: "1/1", fontSize: "16px", opacity: hovered && nativeName ? 0 : 1, transition: "opacity 0.2s ease" }}
          >
            {name}
          </p>
          {nativeName && (
            <p
              className="font-semibold text-[#f5f0e8]"
              style={{ gridArea: "1/1", fontSize: "16px", opacity: hovered ? 1 : 0, transition: "opacity 0.2s ease", direction: isRTL ? "rtl" : "ltr", textAlign: isRTL ? "right" : "left" }}
            >
              {nativeName}
            </p>
          )}
        </div>

        {/* Description — grid overlap so height = max of both */}
        <div style={{ display: "grid", flex: 1, marginBottom: "16px" }}>
          <p
            className="text-[#888] text-sm leading-relaxed"
            style={{ gridArea: "1/1", opacity: hovered && nativeDesc ? 0 : 1, transition: "opacity 0.2s ease" }}
          >
            {desc}
          </p>
          {nativeDesc && (
            <p
              className="text-[#888] text-sm leading-relaxed"
              style={{ gridArea: "1/1", opacity: hovered ? 1 : 0, transition: "opacity 0.2s ease", direction: isRTL ? "rtl" : "ltr", textAlign: isRTL ? "right" : "left" }}
            >
              {nativeDesc}
            </p>
          )}
        </div>

        {/* Stars */}
        <div style={{ display: "flex", gap: "4px" }}>
          {[1,2,3,4,5].map((s) => (
            <svg key={s} width="16" height="16" viewBox="0 0 12 12" fill="none">
              {rating >= s ? (
                <polygon points="6,1 7.5,4.5 11,4.8 8.5,7 9.3,10.5 6,8.5 2.7,10.5 3.5,7 1,4.8 4.5,4.5" fill="var(--text-primary)"/>
              ) : rating === s - 0.5 ? (
                <>
                  <defs>
                    <linearGradient id={`half-${index}-${s}`} x1="0" x2="1" y1="0" y2="0">
                      <stop offset="50%" stopColor="var(--text-primary)"/>
                      <stop offset="50%" stopColor="transparent"/>
                    </linearGradient>
                  </defs>
                  <polygon points="6,1 7.5,4.5 11,4.8 8.5,7 9.3,10.5 6,8.5 2.7,10.5 3.5,7 1,4.8 4.5,4.5" fill={`url(#half-${index}-${s})`} stroke="var(--text-primary)" strokeWidth="0.8"/>
                </>
              ) : (
                <polygon points="6,1 7.5,4.5 11,4.8 8.5,7 9.3,10.5 6,8.5 2.7,10.5 3.5,7 1,4.8 4.5,4.5" fill="none" stroke="var(--text-secondary)" strokeWidth="0.8"/>
              )}
            </svg>
          ))}
        </div>

      </div>
    </div>
  );
}

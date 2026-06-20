import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 80px 80px 80px",
        boxSizing: "border-box",
        overflow: "hidden",
        gap: "240px",
      }}
    >
      {/* LEFT — name + location + bio */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <p style={{ color: "#888", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", margin: 0, marginBottom: "8px" }}>
          Product Designer
        </p>

        <h1
          style={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontWeight: 700,
            fontSize: "clamp(48px, 7vw, 110px)",
            lineHeight: 0.9,
            letterSpacing: "-0.03em",
            color: "#f5f0e8",
            margin: 0,
            marginBottom: "10px",
          }}
        >
          Mohib<br />Ali Altaf
        </h1>

        <p style={{ color: "#888", fontSize: "13px", letterSpacing: "0.1em", margin: 0, marginBottom: "48px" }}>
          Istanbul, Turkey
        </p>

        <p
          style={{
            color: "rgba(245,240,232,0.6)",
            fontSize: "14px",
            lineHeight: 1.75,
            maxWidth: "400px",
            margin: 0,
          }}
        >
          Highly creative and user-focused professional with 7+ years of experience in
          UI/UX Design, Product Design, and Product Management. Proven ability to lead
          product development lifecycles, create user-centered designs, and drive business growth.
        </p>

        {/* Nav links below bio */}
        <div style={{ display: "flex", gap: "32px", marginTop: "40px" }}>
          <Link href="/" className="text-[#888] hover:text-[#f5f0e8] transition-colors text-xs tracking-[0.2em] uppercase no-underline">About</Link>
          <Link href="/experience" className="text-[#888] hover:text-[#f5f0e8] transition-colors text-xs tracking-[0.2em] uppercase no-underline">Experience</Link>
          <Link href="/contact" className="text-[#888] hover:text-[#f5f0e8] transition-colors text-xs tracking-[0.2em] uppercase no-underline">Contact</Link>
        </div>
      </div>

      {/* RIGHT — single grayscale portrait aligned with name */}
      <div
        style={{
          width: "320px",
          height: "400px",
          overflow: "hidden",
          flexShrink: 0,
          filter: "grayscale(100%)",
        }}
      >
        <Image
          src="/images/mohib-portrait.png"
          alt="Mohib Ali Altaf"
          width={320}
          height={400}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
          priority
        />
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <style>{`
        .home-gap-sm { margin-bottom: 24px; }
        .home-gap-md { margin-bottom: 8px; }
        @media (min-width: 1024px) {
          .home-gap-sm { margin-bottom: 48px; }
          .home-gap-md { margin-bottom: 10px; }
        }
        .home-img { width: 230px; height: 320px; margin-bottom: 8px; }
        @media (min-width: 768px) { .home-img { width: 300px; height: 380px; } }
        @media (min-width: 1024px) { .home-img { width: 320px; height: 400px; margin-bottom: 0; } }
        .home-wrap { padding: 120px 80px 80px 80px; }
        @media (min-width: 1024px) { .home-wrap { padding: 0 80px; min-height: 100vh; display: flex; align-items: center; justify-content: center; } }
      `}</style>

      <div className="home-wrap min-h-screen flex flex-col items-center lg:flex-row lg:items-center lg:justify-center lg:gap-[200px]">

        {/* IMAGE — top on mobile, right on desktop */}
        <div className="home-img order-1 lg:order-2 overflow-hidden flex-shrink-0">
          <Image
            src="/images/mohib-portrait.png"
            alt="Mohib Ali Altaf"
            width={320}
            height={400}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
            priority
          />
        </div>

        {/* TEXT — below image on mobile, left on desktop */}
        <div className="order-2 lg:order-1 flex flex-col">
          <p className="hidden lg:block text-[#888] text-xs tracking-[0.2em] uppercase home-gap-md">
            Product Designer
          </p>

          <h1
            className="font-bold leading-none tracking-tighter text-[#f5f0e8] home-gap-md"
            style={{ fontSize: "clamp(48px, 8vw, 100px)", fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            Mohib<br />Ali Altaf
          </h1>

          <p className="text-[#888] text-sm tracking-wide home-gap-sm">
            Istanbul, Turkey
          </p>

          <p className="text-[#f5f0e8]/60 text-sm leading-relaxed max-w-sm home-gap-sm">
            Highly creative and user-focused professional with 7+ years of experience in
            UI/UX Design, Product Design, and Product Management. Proven ability to lead
            product development lifecycles, create user-centered designs, and drive business growth.
          </p>

        </div>

      </div>
    </>
  );
}

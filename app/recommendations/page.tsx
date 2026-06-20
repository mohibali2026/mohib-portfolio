import { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recommendations — Mohib Ali Altaf",
  description: "Recommendations from colleagues and collaborators.",
};

export default function RecommendationsPage() {
  return (
    <div className="page-padding">
      <div style={{ maxWidth: "1058px", margin: "0 auto" }}>

        <ScrollReveal>
          <div style={{ paddingBottom: "40px", marginBottom: "40px" }}>
            <Link href="/experience" className="text-[#888] text-xs tracking-widest uppercase hover:text-[#f5f0e8] transition-colors" style={{ textDecoration: "none", display: "inline-block", marginBottom: "16px" }}>Back</Link>
            <h1
              className="font-bold leading-none tracking-tighter text-[#f5f0e8]"
              style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
            >
              Recommendations
            </h1>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Recommendation 1 */}
          <ScrollReveal delay={0}>
            <div className="border border-[#222]" style={{ padding: "32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <div style={{ width: "80px", height: "80px", overflow: "hidden", flexShrink: 0 }}>
                  <Image src="/images/rec-khushnood.jpeg" alt="Khushnood Nabizada" width={80} height={80} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/khushnood-nabizada/?skipRedirect=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#f5f0e8] text-sm hover:opacity-60 transition-all duration-200 block"
                    style={{ textDecoration: "none" }}
                  >
                    Khushnood Nabizada
                  </a>
                  <p className="text-[#888] text-xs">Founder of Khaama Press</p>
                </div>
              </div>
              <p className="text-[#888] text-sm leading-relaxed">
                I had the privilege of working with Mohib Ali Altaf during his time at Khaama Press, where he stood out as one of our top journalists. His ability to uncover impactful stories, craft well-written articles, and deliver accurate, unbiased reporting significantly enhanced the quality and credibility of our platform. Mohib also excelled as an editor, ensuring our content met the highest standards, and his exceptional photography brought stories to life with compelling visuals.
                <br /><br />
                Beyond his professional skills, Mohib was a dedicated team player with a strong work ethic and a genuine passion for journalism. His contributions left a lasting impact on Khaama Press, and I have no doubt he will continue to achieve excellence in his future endeavors. I highly recommend him to any organization looking for a talented and versatile media professional.
              </p>
            </div>
          </ScrollReveal>

          {/* Recommendation 2 */}
          <ScrollReveal delay={0.08}>
            <div className="border border-[#222]" style={{ padding: "32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <div style={{ width: "80px", height: "80px", overflow: "hidden", flexShrink: 0 }}>
                  <Image src="/images/rec-saboor.jpeg" alt="Abdul Saboor Hakimi" width={80} height={80} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/saboor-hakimi/?skipRedirect=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#f5f0e8] text-sm hover:opacity-60 transition-all duration-200 block"
                    style={{ textDecoration: "none" }}
                  >
                    Abdul Saboor Hakimi
                  </a>
                  <p className="text-[#888] text-xs">System Engineer</p>
                </div>
              </div>
              <p className="text-[#888] text-sm leading-relaxed">
                I had the pleasure of working with Mohib Ali Altaf at Aseel, where his talent in UI/UX design truly stood out. His passion for clean and minimalist designs was apparent in every project, creating intuitive and visually stunning user experiences that left a lasting impact. Beyond his design expertise, What truly sets Mohib apart is that he is a photographer and poet, which adds further dimension to his creativity, adding depth to his artistic perspective.
                <br /><br />
                What impressed me a lot was his ease on working with our team, with the user experience always on top of his mind. He is not just a creative person but also a good team player who always delivers. If you're looking for someone who's skilled, passionate, and a joy to work with, there's no one I would recommend more than Mohib.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
}

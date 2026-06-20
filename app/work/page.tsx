import { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work — Mohib Ali Altaf",
  description: "A showcase of product design, creative direction, and photography across platforms and industries.",
};

export default function WorkPage() {
  return (
    <div className="px-6 md:px-12 pt-32 pb-24">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="border-b border-[#222] pb-12 mb-16">
            <p className="text-[#888] text-xs tracking-widest uppercase mb-4">Portfolio</p>
            <h1
              className="font-['Space_Grotesk'] font-bold leading-none tracking-tighter text-[#f5f0e8]"
              style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
            >
              My Work
            </h1>
            <p className="text-[#888] text-base mt-4 max-w-xl">
              A showcase of product design, creative direction, and photography across platforms and industries.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 0.06}>
              <ProjectCard {...p} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

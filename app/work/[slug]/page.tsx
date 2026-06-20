import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import ScrollReveal from "@/components/ScrollReveal";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Mohib Ali Altaf`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="pt-28">
      {/* Hero */}
      <div className="px-6 md:px-12 pb-12 border-b border-[#222]">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[#888] text-xs tracking-widest uppercase mb-10 hover:text-[#f5f0e8] transition-colors"
          >
            <ArrowLeft size={12} /> Back to Work
          </Link>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="text-[#888] text-xs border border-[#333] px-3 py-1 rounded-full">
              {project.category}
            </span>
            <span className="text-[#888] text-xs border border-[#333] px-3 py-1 rounded-full">
              {project.year}
            </span>
          </div>
          <h1
            className="font-['Space_Grotesk'] font-bold leading-none tracking-tighter text-[#f5f0e8] mb-6"
            style={{ fontSize: "clamp(36px, 6vw, 80px)" }}
          >
            {project.title}
          </h1>
          <p className="text-[#888] text-base max-w-xl">{project.summary}</p>
        </div>
      </div>

      {/* Hero image placeholder */}
      <div className="w-full aspect-[16/7] bg-[#111] flex items-center justify-center border-b border-[#222]">
        {/* Replace with actual project hero image */}
        <span className="text-[#333] text-sm tracking-widest uppercase">Project Hero Image</span>
      </div>

      {/* Body */}
      <ScrollReveal>
        <div className="px-6 md:px-12 py-16 border-b border-[#222]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 md:gap-16">
            <div className="md:col-span-2">
              <h2 className="font-['Space_Grotesk'] font-semibold text-xl text-[#f5f0e8] mb-6">Overview</h2>
              <p className="text-[#888] text-base leading-relaxed">{project.overview}</p>
            </div>
            <div>
              <h2 className="font-['Space_Grotesk'] font-semibold text-xl text-[#f5f0e8] mb-6">Details</h2>
              <dl className="space-y-4">
                {[
                  { label: "Role", value: project.role },
                  { label: "Year", value: project.year },
                  { label: "Tools", value: project.tools },
                  { label: "Client", value: project.client },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <dt className="text-[#888] text-xs tracking-widest uppercase mb-1">{label}</dt>
                    <dd className="text-[#f5f0e8] text-sm">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Image gallery */}
      <ScrollReveal>
        <div className="px-6 md:px-12 py-16 border-b border-[#222]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] bg-[#111] border border-[#222] flex items-center justify-center rounded-sm"
              >
                {/* Replace with actual project images */}
                <span className="text-[#333] text-xs tracking-widest">Image {i}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Next project */}
      <div className="px-6 md:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex items-center justify-between border-t border-[#222] pt-8 hover:border-[#555] transition-colors"
          >
            <div>
              <p className="text-[#888] text-xs tracking-widest uppercase mb-2">Next Project</p>
              <h3 className="font-['Space_Grotesk'] font-semibold text-xl text-[#f5f0e8]">
                {nextProject.title}
              </h3>
            </div>
            <div className="w-10 h-10 border border-[#333] rounded-full flex items-center justify-center group-hover:bg-[#f5f0e8] group-hover:border-[#f5f0e8] transition-all">
              <ArrowRight size={16} className="text-[#888] group-hover:text-[#0a0a0a] transition-colors" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

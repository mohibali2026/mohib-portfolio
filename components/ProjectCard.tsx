import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Props {
  slug: string;
  title: string;
  category: string;
  year: string;
  index?: number;
}

export default function ProjectCard({ slug, title, category, year }: Props) {
  return (
    <Link href={`/work/${slug}`} className="group block">
      <div className="relative overflow-hidden bg-[#111] border border-[#222] rounded-sm aspect-[4/3] mb-4 transition-transform duration-300 group-hover:-translate-y-1">
        {/* Placeholder image */}
        <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] flex items-center justify-center">
          <span className="text-[#333] text-xs tracking-widest uppercase">Project Image</span>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#f5f0e8]/0 group-hover:bg-[#f5f0e8]/5 transition-colors duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
          <div className="w-8 h-8 bg-[#f5f0e8] rounded-full flex items-center justify-center ml-auto">
            <ArrowUpRight size={16} className="text-[#0a0a0a]" />
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-['Space_Grotesk'] font-semibold text-[#f5f0e8] text-base mb-1 group-hover:text-[#f5f0e8]/80 transition-colors">
            {title}
          </h3>
          <p className="text-[#888] text-xs tracking-wider">{category}</p>
        </div>
        <span className="text-[#555] text-xs mt-1">{year}</span>
      </div>
    </Link>
  );
}

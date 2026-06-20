import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  large?: boolean;
}

export default function BlogCard({ slug, date, title, excerpt, large }: Props) {
  return (
    <Link href={`/blog/${slug}`} className="group block border-t border-[#222] py-8 hover:border-[#444] transition-colors">
      <div className="flex items-start justify-between gap-8">
        <div className="flex-1">
          <p className="text-[#888] text-xs tracking-widest uppercase mb-3">{date}</p>
          <h3 className={`font-['Space_Grotesk'] font-semibold text-[#f5f0e8] mb-3 group-hover:text-[#f5f0e8]/80 transition-colors leading-tight ${large ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}`}>
            {title}
          </h3>
          <p className="text-[#888] text-sm leading-relaxed line-clamp-2">{excerpt}</p>
        </div>
        <div className="w-8 h-8 border border-[#333] rounded-full flex items-center justify-center flex-shrink-0 group-hover:border-[#f5f0e8] group-hover:bg-[#f5f0e8] transition-all duration-200 mt-1">
          <ArrowRight size={14} className="text-[#888] group-hover:text-[#0a0a0a] transition-colors" />
        </div>
      </div>
    </Link>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { posts } from "@/data/posts";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Mohib Ali Altaf`,
    description: post.excerpt,
  };
}

function estimateReadTime(text: string) {
  const words = text.split(/\s+/).length;
  return `${Math.ceil(words / 200)} min read`;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="pt-28 pb-24 px-6 md:px-12">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[#888] text-xs tracking-widest uppercase mb-12 hover:text-[#f5f0e8] transition-colors"
        >
          <ArrowLeft size={12} /> Back to Blog
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <span className="text-[#888] text-xs tracking-widest uppercase">{post.date}</span>
          <span className="text-[#333]">·</span>
          <span className="text-[#888] text-xs">{estimateReadTime(post.content)}</span>
        </div>

        <h1 className="font-['Space_Grotesk'] font-bold text-[clamp(28px,5vw,52px)] leading-tight tracking-tighter text-[#f5f0e8] mb-8">
          {post.title}
        </h1>

        {/* Hero image placeholder */}
        <div className="w-full aspect-[16/7] bg-[#111] border border-[#222] rounded-sm flex items-center justify-center mb-12">
          {/* Replace with actual article image */}
          <span className="text-[#333] text-xs tracking-widest uppercase">Article Image</span>
        </div>

        {/* Article body */}
        <div className="prose-custom space-y-6">
          {post.content.split("\n\n").map((para, i) => (
            <p key={i} className="text-[#f5f0e8]/75 text-base leading-[1.8]">
              {para}
            </p>
          ))}
        </div>

        {/* Author byline */}
        <div className="mt-16 pt-8 border-t border-[#222] flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#111] border border-[#222] flex items-center justify-center flex-shrink-0">
            {/* Replace with your photo */}
            <span className="text-[#333] text-[9px]">MA</span>
          </div>
          <div>
            <p className="text-[#f5f0e8] text-sm font-semibold">Mohib Ali Altaf</p>
            <p className="text-[#888] text-xs">Product Designer & Creative Lead, Istanbul</p>
          </div>
        </div>
      </div>
    </div>
  );
}

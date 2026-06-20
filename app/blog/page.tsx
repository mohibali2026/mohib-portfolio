import { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import BlogCard from "@/components/BlogCard";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog — Mohib Ali Altaf",
  description: "Ideas on design, product thinking, photography, and building with intention.",
};

export default function BlogPage() {
  return (
    <div className="px-6 md:px-12 pt-32 pb-24">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="border-b border-[#222] pb-12 mb-4">
            <p className="text-[#888] text-xs tracking-widest uppercase mb-4">Writing</p>
            <h1
              className="font-['Space_Grotesk'] font-bold leading-none tracking-tighter text-[#f5f0e8]"
              style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
            >
              Thoughts
            </h1>
            <p className="text-[#888] text-base mt-4 max-w-xl">
              Ideas on design, product thinking, photography, and building with intention.
            </p>
          </div>
        </ScrollReveal>

        <div>
          {posts.map((p) => (
            <ScrollReveal key={p.slug}>
              <BlogCard {...p} large />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

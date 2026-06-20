import Link from "next/link";
import { Globe } from "lucide-react";
import { LinkedInIcon, InstagramIcon } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-[#222] pt-16 pb-8 px-6 md:px-16 lg:px-[160px]">
      <div className="max-w-7xl mx-auto">
        <div className="text-[clamp(40px,8vw,100px)] font-bold tracking-tighter leading-none text-[#f5f0e8] mb-2">
          MOHIB ALI ALTAF
        </div>
        <p className="text-[#888] text-sm tracking-widest uppercase mb-12">
          Designing Products That Matter.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <p className="text-xs tracking-widest uppercase text-[#888] mb-4">/Quick Links</p>
            <div className="flex flex-col gap-2">
              {[["Home", "/"], ["Experience", "/experience"], ["Contact", "/contact"]].map(([label, href]) => (
                <Link key={href} href={href} className="text-sm text-[#f5f0e8]/70 hover:text-[#f5f0e8] transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-[#888] mb-4">/Contact</p>
            <div className="flex flex-col gap-2 text-sm text-[#f5f0e8]/70">
              <a href="mailto:mohibali2017@gmail.com" className="hover:text-[#f5f0e8] transition-colors">
                mohibali2017@gmail.com
              </a>
              <a href="https://www.mohibali.com" className="hover:text-[#f5f0e8] transition-colors">
                www.mohibali.com
              </a>
              <span>Istanbul, Türkiye</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[#222] pt-8">
          <p className="text-xs text-[#888]">© 2026 Mohib Ali Altaf. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/in/mohibalialtaf" target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-[#f5f0e8] transition-colors">
              <LinkedInIcon size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-[#f5f0e8] transition-colors">
              <InstagramIcon size={18} />
            </a>
            <a href="https://www.mohibali.com" target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-[#f5f0e8] transition-colors">
              <Globe size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

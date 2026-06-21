import Image from "next/image";
import Link from "next/link";
import { LinkedInIcon, InstagramIcon, FacebookIcon, XIcon } from "@/components/SocialIcons";

const socials = [
  { icon: InstagramIcon, href: "https://instagram.com/mohibaliphotography", label: "Instagram" },
  { icon: FacebookIcon, href: "https://facebook.com/mohibaliphotography", label: "Facebook" },
  { icon: XIcon, href: "https://x.com/mohibaliphotos", label: "X" },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/mohibalialtaf/", label: "LinkedIn" },
];

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
        @media (min-width: 1024px) { .home-img { width: 320px; height: 400px; margin-bottom: 0; align-self: center; } }
        .home-wrap { padding: 120px 40px 80px 40px; }
        @media (min-width: 1024px) { .home-wrap { padding: 0 80px; min-height: 100vh; display: flex; flex-direction: row; align-items: center; justify-content: center; gap: 120px; } }
        .home-text { display: flex; flex-direction: column; }
        @media (min-width: 1024px) { .home-text { align-self: center; } }
        .home-name { font-size: 32px; white-space: nowrap; }
        @media (min-width: 1024px) { .home-name { font-size: clamp(40px, 5vw, 72px); } }
      `}</style>

      <div className="home-wrap min-h-screen flex flex-col items-start gap-0 lg:flex-row lg:items-center lg:justify-center lg:gap-[120px]">

        {/* IMAGE , top on mobile, right on desktop */}
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

        {/* TEXT , below image on mobile, left on desktop */}
        <div className="home-text order-2 lg:order-1">
          <p className="hidden lg:block text-[#888] text-xs tracking-[0.2em] uppercase home-gap-md">
            Designer, Photographer & Poet
          </p>

          <h1
            className="font-bold leading-none tracking-tighter text-[#f5f0e8] home-gap-md home-name"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            Mohib Ali Altaf
          </h1>

          <p className="text-[#888] text-sm tracking-wide home-gap-sm">
            Istanbul, Turkey
          </p>

          <p className="text-[#f5f0e8]/60 text-sm leading-relaxed max-w-sm lg:max-w-xl home-gap-sm">
            Mohib, a designer, art photographer & poet from Afghanistan, currently based in Istanbul, Türkiye. Over the past 9+ years, he has led product and creative work across e-commerce, humanitarian technology, and editorial media, most notably at Aseel, where he shaped platforms spanning an online handmade marketplace, humanitarian aid distribution and fundraising. He is the founder of Bibin Photography Magazine, a triannual publication celebrating and interpreting contemporary and fine art photography. His photographic work has been exhibited in Austria, Malaysia, the USA, and Afghanistan, and featured in international publications. Earlier in his career he worked as a journalist and photojournalist at Khaama Press News Agency, one of Afghanistan's leading English-language outlets.
          </p>

          <div className="flex items-center gap-5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f5f0e8] hover:text-[#888] transition-colors"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

        </div>

      </div>
    </>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative w-full bg-[#F6F2EF] pb-32 pt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative w-full h-[480px] rounded-[40px] bg-[#FF6A00] overflow-hidden flex flex-col items-center justify-center text-center px-6 shadow-2xl shadow-orange-500/10">
          
          {/* 3D Wireframe Grid Background Effect */}
          <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
            {/* Vertical Lines with Perspective */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                backgroundSize: '40px 100%',
                perspective: '1000px',
                transform: 'rotateX(45deg) scale(1.5)',
                transformOrigin: 'top'
              }}
            />
            {/* Horizontal Lines with Perspective */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                backgroundSize: '100% 40px',
                perspective: '1000px',
                transform: 'rotateX(45deg) scale(1.5)',
                transformOrigin: 'top'
              }}
            />
            {/* Vignette to focus center */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00] via-transparent to-[#FF6A00] z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#FF6A00] via-transparent to-[#FF6A00] z-10"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 
              className="text-white text-[44px] md:text-[64px] font-bold leading-[1.05] tracking-tight mb-12"
              style={{ fontFamily: "'Cal Sans', sans-serif" }}
            >
              Let&apos;s Create Something <br />
              Meaningful
            </h2>

            <Link 
              href="/contact"
              className="inline-flex items-center gap-4 bg-white hover:bg-white/90 transition-all duration-300 py-4 pl-8 pr-4 rounded-full group"
            >
              <span 
                className="text-[#111111] font-bold text-lg"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                Book a call
              </span>
              <div className="bg-[#FF6A00] text-white w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={24} strokeWidth={2.5} />
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

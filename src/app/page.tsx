import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[95vh] flex flex-col items-center justify-center px-4 overflow-hidden pt-24"
        style={{
          background: "radial-gradient(140% 120% at 50% -10%, #FF5A00 0%, #FF7A00 30%, #FFB055 60%, rgba(250,247,242,1) 90%, #faf7f2 100%)",
          backgroundColor: "#faf7f2",
        }}
      >
        <div className="absolute inset-0 bg-white/5 mix-blend-overlay"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-[1000px] mx-auto mt-6">
          <h1 
            className="text-6xl md:text-7xl lg:text-[88px] text-white leading-[1.02] tracking-tight mb-6 drop-shadow-sm transition-all"
            style={{ fontFamily: "'Cal Sans', sans-serif" }}
          >
            Elite Software Execution <br />
            <span 
              style={{
                WebkitTextStroke: "2px white",
                color: "transparent",
              }}
            >
              for Ambitious Founders
            </span>
          </h1>
          
          <p className="text-lg md:text-[21px] text-white/95 max-w-[700px] mx-auto leading-relaxed mb-10 font-[500] drop-shadow-sm" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
            We design, build, and launch revenue-ready digital products in 90 
            days — so you move faster than your competition.
          </p>
          
          <Link
            href="/contact"
            className="group flex items-center gap-3 bg-[#FF6A00] hover:bg-[#E65C00] text-white pl-8 pr-2 py-2 rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-md border border-white/10"
          >
            <span className="text-[17px] font-semibold" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>Book a call</span>
            <div className="bg-white text-[#FF6A00] rounded-full p-2 transition-transform duration-300 group-hover:rotate-45 ml-1">
              <ArrowUpRight strokeWidth={2.5} size={20} />
            </div>
          </Link>
        </div>
      </section>

      {/* Crafts Section */}
      <section className="relative w-full bg-[#faf7f2] pt-12 pb-32">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          
          {/* Product Image (contains the title as well) */}
          <div className="w-full relative flex justify-center">
            <Image
              src="/DEmo Section.png"
              alt="Crafts Demo Dashboard"
              width={1600}
              height={1000}
              className="w-full max-w-[1400px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
              priority
            />
          </div>
          
        </div>
      </section>
    </main>
  );
}

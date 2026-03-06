import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function KBCProject() {
  return (
    <main className="min-h-screen bg-[#F6F2EF]">
      {/* Hero Section */}
      <section 
        className="relative pt-48 pb-32 px-6 overflow-hidden"
        style={{
          background: "radial-gradient(130% 120% at 50% -10%, #FF2D00 0%, #FF5A00 30%, #FF8A00 60%, rgba(246,242,239,1) 95%, #F6F2EF 100%)",
        }}
      >
        <div className="absolute inset-0 bg-white/5 mix-blend-overlay pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:items-end mb-24">
            {/* Title */}
            <div className="flex-1">
              <h1 
                className="text-[56px] md:text-[80px] lg:text-[96px] font-bold text-white leading-[1.05] tracking-tight"
                style={{ fontFamily: "'Cal Sans', sans-serif" }}
              >
                Kigali Broadcast Cooperation <br />
                <span className="opacity-90">[KBC]</span>
              </h1>
            </div>

            {/* Info Grid */}
            <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-white/20">
              {/* Type */}
              <div className="p-8 border-r border-white/20">
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>Type</p>
                <p className="text-white text-lg font-medium" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>Mobile Development</p>
              </div>
              
              {/* Goal */}
              <div className="p-8 border-r border-white/20">
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>Goal</p>
                <p className="text-white text-[15px] leading-relaxed font-medium" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
                  To provide users with instant access to radio news, podcasts, and live updates in a user-friendly mobile app.
                </p>
              </div>

              {/* Technologies */}
              <div className="p-8">
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {["React Native", "Figma", "Firebase", "Push Notifications", "Audio Streaming APIs"].map((tech) => (
                    <span key={tech} className="text-white/90 text-[14px] font-medium underline underline-offset-4 decoration-white/20">
                      {tech}
                    </span>
                  ))}
                  {/* Note: I used <a> inside the mapping but since it's just text I'll use span but styled as asked in image */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="relative -mt-24 px-6 z-20 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full aspect-[16/11] rounded-[40px] overflow-hidden bg-black shadow-2xl">
            <Image 
              src="/iPhone.png"
              alt="KBC Mobile App Showcase"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}

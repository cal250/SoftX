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
                className="text-[40px] sm:text-[80px] lg:text-[96px] font-bold text-white leading-[1.1] md:leading-[1.05] tracking-tight"
                style={{ fontFamily: "'Cal Sans', sans-serif" }}
              >
                Kigali Broadcast Cooperation <br className="hidden sm:block" />
                <span className="opacity-90">[KBC]</span>
              </h1>
            </div>

            {/* Info Grid */}
            <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-white/20 md:border-l">
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
      <section className="relative -mt-24 px-6 z-20 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full aspect-[16/11] rounded-[40px] overflow-hidden bg-black shadow-2xl">
            <Image 
              src="/iPhone15.svg"
              alt="KBC Mobile App Showcase"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* The Opportunity Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-32">
          {/* Left: Heading */}
          <div>
            <h2 
              className="text-[40px] md:text-[56px] font-bold text-[#FF6A00] leading-none sticky top-32"
              style={{ fontFamily: "'Cal Sans', sans-serif" }}
            >
              The Opportunity
            </h2>
          </div>

          {/* Right: Content */}
          <div className="space-y-12">
            <p 
              className="text-[#111111]/80 text-xl leading-relaxed max-w-3xl"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Radio stations often rely on traditional channels like FM broadcasts and websites, 
              which limits user engagement. The challenge was to create a modern mobile experience 
              that keeps listeners informed and engaged on the go.
            </p>

            <div className="space-y-8">
              <h3 className="text-[#111111] text-2xl font-bold" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
                Key user problems:
              </h3>
              
              <div className="space-y-6">
                {[
                  "Difficulty accessing live news on mobile.",
                  "Fragmented content: podcasts, articles, and live shows scattered across platforms.",
                  "Lack of personalization for favorite shows or topics."
                ].map((problem) => (
                  <div key={problem} className="flex items-start gap-5">
                    <div className="mt-1 flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#111111]/40">
                        <path d="M14.0625 15.9375V20.625L4.6875 30H0V25.3125L9.375 15.9375H14.0625ZM30 25.3125V30H25.3125L15.9375 20.625V15.9375H20.625L30 25.3125ZM14.0625 9.375V14.0625H9.375L0 4.6875V0H4.6875L14.0625 9.375ZM30 4.6875L20.625 14.0625H15.9375V9.375L25.3125 0H30V4.6875Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="text-[#111111]/80 text-lg leading-relaxed font-medium" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
                      {problem}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy & Approach Section */}
      <section className="py-24 px-6 bg-[#F0EBE6]/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-32">
          {/* Left: Heading */}
          <div>
            <h2 
              className="text-[40px] md:text-[56px] font-bold text-[#FF6A00] leading-none sticky top-32"
              style={{ fontFamily: "'Cal Sans', sans-serif" }}
            >
              Strategy & Approach
            </h2>
          </div>

          {/* Right: Content */}
          <div className="space-y-12">
            <p 
              className="text-[#111111]/80 text-xl leading-relaxed max-w-3xl"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Our approach was to design a seamless, interactive mobile app that centralizes news, 
              live radio, and podcasts.
            </p>

            <div className="space-y-10">
              <h3 className="text-[#111111] text-2xl font-bold" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
                Steps Taken:
              </h3>
              
              <div className="space-y-12">
                {[
                  {
                    title: "User Research (Conceptual):",
                    desc: "Studied common radio listener habits and news consumption trends."
                  },
                  {
                    title: "Wireframing:",
                    desc: "Mapped user flows for live streaming, article reading, and podcast navigation."
                  },
                  {
                    title: "UI Design:",
                    desc: "Focused on clear hierarchy, easy access to live news, and personalized recommendations."
                  },
                  {
                    title: "Prototype:",
                    desc: "Built a clickable Figma prototype with interactive screens to simulate live streaming, notifications, and playlist features."
                  }
                ].map((step) => (
                  <div key={step.title} className="flex items-start gap-5">
                    <div className="mt-1 flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#111111]/40">
                        <path d="M14.0625 15.9375V20.625L4.6875 30H0V25.3125L9.375 15.9375H14.0625ZM30 25.3125V30H25.3125L15.9375 20.625V15.9375H20.625L30 25.3125ZM14.0625 9.375V14.0625H9.375L0 4.6875V0H4.6875L14.0625 9.375ZM30 4.6875L20.625 14.0625H15.9375V9.375L25.3125 0H30V4.6875Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[#111111] text-lg font-bold" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
                        {step.title}
                      </h4>
                      <p className="text-[#111111]/70 text-lg leading-relaxed" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Results Section */}
      <section className="py-24 px-6 bg-[#F6F2EF]">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-32 items-start">
            <div>
              <h2 
                className="text-[40px] md:text-[56px] font-bold text-[#FF6A00] leading-none"
                style={{ fontFamily: "'Cal Sans', sans-serif" }}
              >
                Our Results
              </h2>
            </div>
            <div>
              <p 
                className="text-[#111111]/80 text-xl leading-relaxed max-w-3xl"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                Even as a concept project, <span className="font-bold text-[#111111]">KBC</span> demonstrates 
                how a modern, user-centered mobile news app can transform listener engagement and 
                information access.
              </p>
            </div>
          </div>

          {/* Triplet Image Showcase */}
          <div className="relative w-full aspect-[16/8] md:aspect-[21/9]">
            <Image
              src="/hand_and_phone.svg"
              alt="Our Results Showcase"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Projected Impact Section */}
      <section className="py-32 px-6 bg-[#F6F2EF]">
        <div className="max-w-7xl mx-auto">
          {/* Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-32 items-start mb-24">
            <div>
              <h2 
                className="text-[36px] sm:text-[44px] md:text-[64px] font-bold text-[#FF6A00] leading-tight md:leading-none"
                style={{ fontFamily: "'Cal Sans', sans-serif" }}
              >
                Projected Impact
              </h2>
            </div>
            <div>
              <p 
                className="text-[#111111] text-lg md:text-xl leading-relaxed max-w-md ml-auto"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                Even as a demo, <span className="font-bold">RadioWave</span> shows how high-quality 
                design and intuitive interactions can transform user engagement and retention.
              </p>
            </div>
          </div>

          {/* Metrics Centered List */}
          <div className="max-w-4xl mx-auto space-y-0 text-center">
            {[
              {
                percentage: "50%",
                title: "Faster Access to Breaking News",
                desc: "Users can reach live news and updates quicker due to streamlined navigation, smart card layouts, and quick-access home screens."
              },
              {
                percentage: "35%",
                title: "Engagement for Podcasts",
                desc: "Personalized recommendations and intuitive swipeable playlists encourage users to listen longer and explore more content."
              },
              {
                percentage: "20%",
                title: "Friction for Discovering Favorite Shows",
                desc: "Clear hierarchy, smart search, and interactive features reduce effort and confusion when users try to find specific shows or articles."
              }
            ].map((metric) => (
              <div key={metric.title} className="group">
                <div className="w-full h-px bg-[#111111]/10" />
                <div className="py-20 space-y-8">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                    <span 
                      className="text-[60px] md:text-[80px] lg:text-[100px] font-bold text-[#111111] leading-none"
                      style={{ fontFamily: "var(--font-roboto), sans-serif" }}
                    >
                      {metric.percentage}
                    </span>
                    <h4 
                      className="text-2xl md:text-3xl font-bold text-[#111111] text-center md:text-left whitespace-nowrap" 
                      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                    >
                      {metric.title}
                    </h4>
                  </div>
                  <p 
                    className="text-[#111111]/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto" 
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  >
                    {metric.desc}
                  </p>
                </div>
              </div>
            ))}
            <div className="w-full h-px bg-[#111111]/10" />
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}

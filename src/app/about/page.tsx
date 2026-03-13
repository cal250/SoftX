import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Twitter, Facebook, Instagram, Github } from "lucide-react";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main className="min-h-screen bg-[#F6F2EF]">
      {/* Hero Section */}
      <section 
        className="relative pt-48 pb-44 flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{
          background: "radial-gradient(130% 120% at 50% -10%, #FF5A00 0%, #FF7A00 30%, #FFB055 60%, rgba(246,242,239,1) 90%, #F6F2EF 100%)",
        }}
      >
        {/* Soft Grain/Overlay */}
        <div className="absolute inset-0 bg-white/5 mix-blend-overlay pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 
            className="text-[44px] sm:text-[80px] lg:text-[100px] font-bold leading-[1.1] md:leading-[1.05] tracking-tight text-white mb-6"
            style={{ fontFamily: "'Cal Sans', sans-serif" }}
          >
            Your Vision
            <br className="hidden sm:block" />
            <span 
              className="block mt-2"
              style={{
                WebkitTextStroke: "1px white",
                color: "transparent",
              }}
            >
              Our Expertise
            </span>
          </h1>

          <p 
            className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Empowering innovators with thoughtful design, seamless <br className="hidden md:block" />
            development, and growth-focused digital solutions.
          </p>

          <Link 
            href="/contact"
            className="inline-flex items-center gap-4 bg-white hover:bg-white/90 transition-all duration-300 py-4 pl-8 pr-4 rounded-full group shadow-xl shadow-orange-500/10"
          >
            <span 
              className="text-[#FF6A00] font-bold text-lg"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Book a call
            </span>
            <div className="bg-[#FF6A00] text-white w-10 h-10 rounded-full flex items-center justify-center">
              <ArrowUpRight size={24} strokeWidth={2.5} />
            </div>
          </Link>
        </div>
      </section>

      {/* Artwork Section */}
      <section className="relative -mt-20 mb-12 px-6 z-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full aspect-[16/7] md:aspect-[21/9] rounded-[32px] overflow-hidden shadow-2xl">
            <Image
              src="/aboutus.svg"
              alt="SoftX Team Artwork"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Our Identity Section */}
      <section className="py-24 px-6 bg-[#F6F2EF]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-20">
            <h2 
              className="text-[40px] md:text-[64px] font-bold text-[#FF6A00] leading-none"
              style={{ fontFamily: "'Cal Sans', sans-serif" }}
            >
              Our <br className="hidden lg:block" /> Identity
            </h2>
            <p 
              className="max-w-md text-[#555555] text-lg leading-relaxed mt-4"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              A creative and agile startup, we turn bold ideas into digital products that engage users, demonstrate expertise, and drive meaningful growth
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 01 - About Us */}
            <div className="group relative bg-[#FFDED0]/30 border-2 border-[#FFC7B0] rounded-[32px] p-10 flex flex-col justify-between min-h-[440px] hover:bg-[#FF6A00] hover:border-[#FF6A00] transition-all duration-500">
              <div>
                <span className="text-3xl font-bold text-[#111111] group-hover:text-white block mb-8 transition-colors duration-500" style={{ fontFamily: "var(--font-roboto-mono), monospace" }}>01</span>
                <h3 className="text-3xl font-bold text-[#111111] group-hover:text-white mb-6 transition-colors duration-500" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>About Us</h3>
                <p className="text-[#555555] text-lg leading-relaxed group-hover:text-white transition-colors duration-500" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
                  A passionate startup agency dedicated to turning bold ideas into digital experiences that empower users and drive growth
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#FF6A00] group-hover:bg-white flex items-center justify-center text-white group-hover:text-[#FF6A00] rotate-45 group-hover:rotate-0 transition-all duration-500 self-start">
                <ArrowUpRight size={24} />
              </div>
            </div>

            {/* Card 02 - Our Mission */}
            <div className="group relative bg-[#FFDED0]/30 border-2 border-[#FFC7B0] rounded-[32px] p-10 flex flex-col justify-between min-h-[440px] hover:bg-[#FF6A00] hover:border-[#FF6A00] transition-all duration-500">
              <div>
                <span className="text-3xl font-bold text-[#111111] group-hover:text-white block mb-8 transition-colors duration-500" style={{ fontFamily: "var(--font-roboto-mono), monospace" }}>02</span>
                <h3 className="text-3xl font-bold text-[#111111] group-hover:text-white mb-6 transition-colors duration-500" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>Our Mission</h3>
                <p className="text-[#555555] text-lg leading-relaxed group-hover:text-white transition-colors duration-500" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
                  To craft high-quality, impactful products even as concept projects that demonstrate what&apos;s possible when creativity meets technology
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#FF6A00] group-hover:bg-white flex items-center justify-center text-white group-hover:text-[#FF6A00] rotate-45 group-hover:rotate-0 transition-all duration-500 self-start">
                <ArrowUpRight size={24} />
              </div>
            </div>

            {/* Card 03 - Our Vision */}
            <div className="group relative bg-[#FFDED0]/30 border-2 border-[#FFC7B0] rounded-[32px] p-10 flex flex-col justify-between min-h-[440px] hover:bg-[#FF6A00] hover:border-[#FF6A00] transition-all duration-500">
              <div>
                <span className="text-3xl font-bold text-[#111111] group-hover:text-white block mb-8 transition-colors duration-500" style={{ fontFamily: "var(--font-roboto-mono), monospace" }}>03</span>
                <h3 className="text-3xl font-bold text-[#111111] group-hover:text-white mb-6 transition-colors duration-500" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>Our Vision</h3>
                <p className="text-[#555555] text-lg leading-relaxed group-hover:text-white transition-colors duration-500" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
                  To enable innovators and founders to bring their ideas to life through thoughtful design, seamless development, and strategic digital solutions.
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#FF6A00] group-hover:bg-white flex items-center justify-center text-white group-hover:text-[#FF6A00] rotate-45 group-hover:rotate-0 transition-all duration-500 self-start">
                <ArrowUpRight size={24} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-[#F6F2EF]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-20">
            <h2 
              className="text-[40px] md:text-[64px] font-bold text-[#FF6A00] leading-[1.1]"
              style={{ fontFamily: "'Cal Sans', sans-serif" }}
            >
              The Minds Behind <br className="hidden lg:block" /> SoftX&rdquo;
            </h2>
            <p 
              className="max-width-md lg:max-w-xs text-[#555555] text-lg leading-relaxed mt-4"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              A small, passionate team of designers and developers committed to turning concepts into polished digital experiences.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
               {
                name: "SUGIRA BUJURI",
                role: "FOUNDER & CEO",
                image: "/robot.png"
              },
              {
                name: "RWABURINDI JEAN CALVIN",
                role: "CO-FOUNDER",
                image: "/robot.png",
                highlight: true
              },
              {
                name: "KIRENGA KENNY",
                role: "DESIGNER",
                image: "/robot.png"
              },
             {
                name: "SOFTX TEAM",
                role: "JOIN OUR JOURNEY",
                image: "/robot.png",
                isPlaceholder: true
              }
            ].map((member, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center group"
              >
                {/* Member Image Container */}
                <div className="relative mb-8 pt-4">
                  {/* Glowing Ring Effect for first member */}
                  {member.highlight && (
                    <div className="absolute inset-0 -m-2 rounded-full bg-gradient-to-b from-[#FF6A00]/40 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                  )}
                  
                  <div className={`
                    w-48 h-48 rounded-full overflow-hidden relative
                    ${member.highlight ? 'ring-2 ring-orange-500/50 ring-offset-4 ring-offset-[#F6F2EF]' : 'border border-[#111111]/5'}
                    transition-all duration-500 group-hover:scale-105
                  `}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className={`
                        object-cover transition-all duration-700
                        ${member.isPlaceholder ? 'opacity-20 grayscale' : 'grayscale group-hover:grayscale-0 group-hover:scale-110'}
                      `}
                    />
                  </div>
                </div>

                {/* Member Details */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#111111] leading-tight" style={{ fontFamily: "'Cal Sans', sans-serif" }}>
                    {member.name}
                  </h3>
                  <p className="text-[#555555] text-sm font-bold tracking-widest uppercase mb-6" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
                    {member.role}
                  </p>
                  
                  {/* Social Icons */}
                  <div className="flex items-center justify-center gap-3 pt-2">
                    <button className="w-9 h-9 rounded-full bg-[#111111]/5 flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-300">
                      <Twitter size={16} />
                    </button>
                    <button className="w-9 h-9 rounded-full bg-[#111111]/5 flex items-center justify-center text-[#111111] hover:bg-[#FF6A00] hover:text-white transition-all duration-300">
                      <Instagram size={16} />
                    </button>
                    <button className="w-9 h-9 rounded-full bg-[#111111]/5 flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-300">
                      <Github size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}

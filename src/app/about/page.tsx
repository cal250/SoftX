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
            className="text-[54px] md:text-[80px] lg:text-[100px] font-bold leading-[1.05] tracking-tight text-white mb-6"
            style={{ fontFamily: "'Cal Sans', sans-serif" }}
          >
            Your Vision
            <br />
            <span 
              className="block mt-2"
              style={{
                WebkitTextStroke: "2px white",
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
            href="#"
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
              className="text-[48px] md:text-[64px] font-bold text-[#FF6A00] leading-none"
              style={{ fontFamily: "'Cal Sans', sans-serif" }}
            >
              Our <br /> Identity
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

            {/* Card 02 - Our Mission (Highlighted) */}
            <div className="relative bg-[#FF6A00] rounded-[32px] p-10 flex flex-col justify-between min-h-[440px] shadow-xl shadow-orange-500/20">
              <div>
                <span className="text-3xl font-bold text-white block mb-8" style={{ fontFamily: "var(--font-roboto-mono), monospace" }}>02</span>
                <h3 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>Our Mission</h3>
                <p className="text-white/90 text-lg leading-relaxed" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
                  To craft high-quality, impactful products even as concept projects that demonstrate what&apos;s possible when creativity meets technology
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#FF6A00] transition-transform duration-500 self-start">
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
              className="text-[48px] md:text-[64px] font-bold text-[#FF6A00] leading-[1.1]"
              style={{ fontFamily: "'Cal Sans', sans-serif" }}
            >
              The Minds Behind <br /> Soft Labs&rdquo;
            </h2>
            <p 
              className="max-width-md lg:max-w-xs text-[#555555] text-lg leading-relaxed mt-4"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              A small, passionate team of designers and developers committed to turning concepts into polished digital experiences.
            </p>
          </div>

          {/* Team List */}
          <div className="flex flex-col border-t border-[#111111]/10">
            {[
              {
                name: "RWABURINDI JEAN CALVIN",
                role: "CEO & CO-FOUNDER",
                image: "/person_1.png"
              },
              {
                name: "KIRENGA KENNY",
                role: "CO-FOUNDER",
                image: "/person_1.png" // Using same image as per design ref
              },
              {
                name: "SUGIRA BUJURI",
                role: "CO-FOUNDER",
                image: "/person_1.png" // Using same image as per design ref
              }
            ].map((member, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row items-center gap-8 py-12 border-b border-[#111111]/10 group"
              >
                {/* Member Image */}
                <div className="w-full md:w-[220px] aspect-square relative rounded-[32px] overflow-hidden bg-[#FFDED0]">
                  <Image
                    src="/robot.png"
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Member Info */}
                <div className="flex-1 flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-8">
                  <div>
                    <p className="text-[#555555] font-bold text-sm tracking-widest mb-2" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
                      {member.role}
                    </p>
                    <h3 className="text-3xl md:text-5xl font-bold text-[#111111] leading-tight" style={{ fontFamily: "'Cal Sans', sans-serif" }}>
                      {member.name.split(' ').map((part, i) => (
                        <span key={i} className="block">{part}</span>
                      ))}
                    </h3>
                  </div>

                  {/* Social Icons */}
                  <div className="flex items-center gap-4">
                    <button className="w-10 h-10 rounded-full border border-[#111111]/10 flex items-center justify-center hover:bg-[#111111] hover:text-white transition-all">
                      <Twitter size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-[#FF6A00] flex items-center justify-center text-white hover:scale-110 transition-all">
                      <Facebook size={18} fill="currentColor" />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-[#111111]/10 flex items-center justify-center hover:bg-[#111111] hover:text-white transition-all">
                      <Instagram size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-[#111111]/10 flex items-center justify-center hover:bg-[#111111] hover:text-white transition-all">
                      <Github size={18} />
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

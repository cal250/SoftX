import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Sparkle = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mx-4 md:mx-6 w-8 h-8 md:w-12 md:h-12">
    <path d="M24 0C24 13.2548 13.2548 24 0 24C13.2548 24 24 34.7452 24 48C24 34.7452 34.7452 24 48 24C34.7452 24 24 13.2548 24 0Z" fill="white" fillOpacity="0.8"/>
  </svg>
);
const projects = [
  {
    id: "01",
    title: "Kigali BroadCast Cooperation [KKC]",
    description: "What started with urgency slowly turns into stalled timelines and lost competitive edge.",
    category: "Mobile Development",
    image: "/iPhone.png" 
  },
  {
    id: "02",
    title: "Clarity UI",
    description: "What started with urgency slowly turns into stalled timelines and lost competitive edge.",
    category: "Web Development",
    image: "/MacBook_13.png"
  },
  {
    id: "03",
    title: "Kennix",
    description: "What started with urgency slowly turns into stalled timelines and lost competitive edge.",
    category: "Graphic Design",
    image: "/Letter_Poster.png"
  },
  {
    id: "04",
    title: "Wonderland",
    description: "What started with urgency slowly turns into stalled timelines and lost competitive edge.",
    category: "3d Modelling",
    image: "/Web3.png" 
  }
];

export default function CaseStudies() {
  return (
    <main className="min-h-screen bg-[#F6F2EF]">
      {/* Hero Section */}
      <section 
        className="relative pt-48 pb-32 flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{
          background: "radial-gradient(130% 120% at 50% -10%, #FF5A00 0%, #FF7A00 30%, #FFB055 60%, rgba(246,242,239,1) 90%, #F6F2EF 100%)",
        }}
      >
        {/* Soft Grain/Overlay */}
        <div className="absolute inset-0 bg-white/5 mix-blend-overlay pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 
            className="text-[48px] md:text-[80px] lg:text-[100px] font-bold leading-[1.05] tracking-tight text-white mb-4"
            style={{ fontFamily: "'Cal Sans', sans-serif" }}
          >
            See How We Build
            <br />
            <div className="flex items-center justify-center">
              <Sparkle />
              <span>Impactful</span>
              <Sparkle />
            </div>
            <span 
              className="block mt-2"
              style={{
                WebkitTextStroke: "2px white",
                color: "transparent",
              }}
            >
              Digital Products
            </span>
          </h1>

          <p 
            className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Explore our concept projects and prototypes that demonstrate <br className="hidden md:block" />
            strategy, design, and growth-driven solutions.
          </p>

          <Link 
            href="#"
            className="inline-flex items-center gap-4 bg-[#FF6A00] hover:scale-105 transition-all duration-300 py-4 pl-8 pr-4 rounded-full group shadow-xl shadow-orange-500/20"
          >
            <span 
              className="text-white font-bold text-lg"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Book a call
            </span>
            <div className="bg-white text-[#FF6A00] w-10 h-10 rounded-full flex items-center justify-center">
              <ArrowUpRight size={24} strokeWidth={2.5} />
            </div>
          </Link>
        </div>
      </section>

      {/* Triplet Image Section */}
      <section className="relative -mt-24 mb-12 px-6 z-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full aspect-[16/7] md:aspect-[21/9]">
            <Image
              src="/triplet_img.svg"
              alt="Case Studies Showcase"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="py-24 px-6 bg-[#F6F2EF]">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-[40px] md:text-[56px] font-bold text-[#FF6A00] mb-16"
            style={{ fontFamily: "'Cal Sans', sans-serif" }}
          >
            Selected Work
          </h2>

          <div className="flex flex-col gap-12">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="flex flex-col lg:flex-row w-full min-h-[500px] rounded-[32px] overflow-hidden shadow-sm"
              >
                {/* Left Side: Content */}
                <div className="w-full lg:w-1/2 bg-[#FFDED0] p-10 md:p-14 flex flex-col justify-between">
                  <div>
                    <span 
                      className="text-2xl font-bold text-[#111111]/40 block mb-6"
                      style={{ fontFamily: "var(--font-roboto-mono), monospace" }}
                    >
                      {project.id}
                    </span>
                    <h3 
                      className="text-3xl md:text-4xl font-bold text-[#111111] mb-4"
                      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                    >
                      {project.title}
                    </h3>
                    <p 
                      className="text-[#555555] text-lg mb-8 max-w-md leading-relaxed"
                      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                    >
                      {project.description}
                    </p>
                    <div className="inline-block bg-[#FF6A00] text-white text-sm font-bold px-4 py-2 rounded-lg">
                      {project.category}
                    </div>
                  </div>

                  <Link 
                    href="#" 
                    className="inline-flex items-center gap-2 text-[#111111] font-bold text-lg hover:gap-4 transition-all duration-300 border-b-2 border-transparent hover:border-[#FF6A00] w-fit pt-8"
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  >
                    View Project <ArrowUpRight size={20} />
                  </Link>
                </div>

                {/* Right Side: Image */}
                <div className="w-full lg:w-1/2 relative min-h-[350px] lg:min-h-full bg-zinc-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
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

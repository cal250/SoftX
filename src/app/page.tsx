import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Telescope, Map, LayoutGrid, Rocket, Zap, BarChart2, Lightbulb } from "lucide-react";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center px-4 overflow-hidden pt-40 pb-20"
        style={{
          background: "radial-gradient(140% 120% at 50% -10%, #FF5A00 0%, #FF7A00 30%, #FFB055 60%, rgba(250,247,242,1) 90%, #faf7f2 100%)",
          backgroundColor: "#faf7f2",
        }}
      >
        <div className="absolute inset-0 bg-white/5 mix-blend-overlay"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-[1000px] mx-auto mt-6">
          <h1 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[88px] text-white leading-[1.1] md:leading-[1.02] tracking-tight mb-6 drop-shadow-sm transition-all"
            style={{ fontFamily: "'Cal Sans', sans-serif" }}
          >
            Elite Software Execution <br className="hidden sm:block" />
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
      <section className="relative w-full bg-[#faf7f2] pt-8 pb-32">
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

      {/* Problem Section */}
      <section className="relative w-full bg-[#faf7f2] py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
          
          {/* Left Column */}
          <div className="flex flex-col">
            <span 
              className="text-[#666666] font-medium tracking-wider text-sm mb-6 uppercase"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              &#123; Problem &#125;
            </span>
            <h2 
              className="text-[36px] md:text-[56px] leading-[1.1] md:leading-[1.05] tracking-tight text-[#FF6A00] mb-12 md:mb-20"
              style={{ fontFamily: "'Cal Sans', sans-serif" }}
            >
              Building Software Shouldn&apos;t <br className="hidden sm:block" />
              Feel Like A Gamble
            </h2>

            <p 
              className="text-2xl md:text-[34px] leading-snug tracking-tight font-bold text-[#111111]"
              style={{ fontFamily: "'Cal Sans', sans-serif" }}
            >
              Speed without <span className="text-[#888888]">structure</span> is chaos. <br className="hidden sm:block" />
              Structure without <span className="text-[#888888]">speed</span> is death.
            </p>
          </div>

          {/* Right Column (Timeline List) */}
          <div className="flex flex-col pt-8 lg:pt-0 lg:pl-16">
            
            {/* Item 1 */}
            <div className="relative pb-16 pl-6 md:pl-12">
              {/* Vertical line with a gap at the bottom - Hidden on mobile */}
              <div className="absolute left-0 top-12 bottom-6 w-[1px] bg-[#d1cec7] hidden md:block"></div>
              
              <span 
                className="inline-block md:absolute top-0 md:-left-[18px] font-bold text-[24px] md:text-[28px] text-[#111111] leading-none mb-4 md:mb-0"
                style={{ fontFamily: "var(--font-roboto-mono), monospace" }}
              >
                01
              </span>
              <h3 
                className="text-2xl font-bold text-[#111111] mb-4 -mt-1 leading-tight tracking-tight max-w-[400px]"
                style={{ fontFamily: "'Cal Sans', sans-serif" }}
              >
                Delays that kills Momentum
              </h3>
              <p 
                className="text-[#555555] text-[17px] font-medium leading-relaxed max-w-[400px]"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                What started with urgency slowly turns into stalled timelines and lost competitive edge.
              </p>
            </div>

            {/* Item 2 */}
            <div className="relative pb-16 pl-6 md:pl-12">
              <div className="absolute left-0 top-12 bottom-6 w-[1px] bg-[#d1cec7] hidden md:block"></div>
              
              <span 
                className="inline-block md:absolute top-0 md:-left-[20px] font-bold text-[24px] md:text-[28px] text-[#111111] leading-none mb-4 md:mb-0"
                style={{ fontFamily: "var(--font-roboto-mono), monospace" }}
              >
                02
              </span>
              <h3 
                className="text-2xl font-bold text-[#111111] mb-4 -mt-1 leading-tight tracking-tight max-w-[400px]"
                style={{ fontFamily: "'Cal Sans', sans-serif" }}
              >
                Developers who ship features but not strategy
              </h3>
              <p 
                className="text-[#555555] text-[17px] font-medium leading-relaxed max-w-[400px]"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                You receive code, but no clear direction for growth or market impact.
              </p>
            </div>

            {/* Item 3 */}
            <div className="relative pb-16 pl-6 md:pl-12">
              <div className="absolute left-0 top-12 bottom-6 w-[1px] bg-[#d1cec7] hidden md:block"></div>
              
              <span 
                className="inline-block md:absolute top-0 md:-left-[21px] font-bold text-[24px] md:text-[28px] text-[#111111] leading-none mb-4 md:mb-0"
                style={{ fontFamily: "var(--font-roboto-mono), monospace" }}
              >
                03
              </span>
              <h3 
                className="text-2xl font-bold text-[#111111] mb-4 -mt-1 leading-tight tracking-tight max-w-[400px]"
                style={{ fontFamily: "'Cal Sans', sans-serif" }}
              >
                Burned runway with no traction
              </h3>
              <p 
                className="text-[#555555] text-[17px] font-medium leading-relaxed max-w-[400px]"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                What started with urgency slowly turns into stalled timelines and lost competitive edge.
              </p>
            </div>

            {/* Item 4 */}
            <div className="relative pl-6 md:pl-12">
              <span 
                className="inline-block md:absolute top-0 md:-left-[23px] font-bold text-[24px] md:text-[28px] text-[#111111] leading-none mb-4 md:mb-0"
                style={{ fontFamily: "var(--font-roboto-mono), monospace" }}
              >
                04
              </span>
              <h3 
                className="text-2xl font-bold text-[#111111] mb-4 -mt-1 leading-tight tracking-tight max-w-[400px]"
                style={{ fontFamily: "'Cal Sans', sans-serif" }}
              >
                Overcomplicated tech stacks
              </h3>
              <p 
                className="text-[#555555] text-[17px] font-medium leading-relaxed max-w-[400px]"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                What started with urgency slowly turns into stalled timelines and lost competitive edge.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative w-full bg-[#faf7f2] py-24">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header Split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 mb-20 items-end">
            <div>
              <span 
                className="text-[#111] font-bold tracking-wider text-[15px] mb-4 block"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                &#123; Solution &#125;
              </span>
              <h2 
                className="text-[36px] md:text-[56px] leading-[1.1] md:leading-[1.05] tracking-tight text-[#FF6A00]"
                style={{ fontFamily: "'Cal Sans', sans-serif" }}
              >
                From Idea to Impact <br className="hidden sm:block" />
                Step by Step
              </h2>
            </div>
            <div className="lg:pb-4">
              <p 
                className="text-[#444444] text-lg font-medium leading-relaxed max-w-[450px]"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                We uncover your users&apos; real problems and deliver products with speed, strategy, and efficiency to maximize impact.&quot;
              </p>
            </div>
          </div>

          {/* 2x2 Grid Container */}
          <div className="rounded-2xl overflow-hidden bg-[#FFC59E] p-[1px] drop-shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px]">
              
              {/* Card 1 */}
              <div className="bg-[#FFE2CC] p-12 lg:p-16">
                <div className="w-14 h-14 bg-[#FF6A00] rounded-xl flex items-center justify-center text-white mb-8 shadow-sm">
                  {/* Needs importing Telescope from lucide-react */}
                  <Telescope strokeWidth={2} size={28} />
                </div>
                <h3 
                  className="text-[28px] font-bold text-[#111111] mb-4 tracking-tight"
                  style={{ fontFamily: "'Cal Sans', sans-serif" }}
                >
                  Discovery & Insight
                </h3>
                <p 
                  className="text-[#444444] text-[17px] font-medium leading-relaxed"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  We dive deep into your market, users, and goals to define what really matters.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#FFE2CC] p-12 lg:p-16">
                <div className="w-14 h-14 bg-[#FF6A00] rounded-xl flex items-center justify-center text-white mb-8 shadow-sm">
                  <Map strokeWidth={2} size={28} />
                </div>
                <h3 
                  className="text-[28px] font-bold text-[#111111] mb-4 tracking-tight"
                  style={{ fontFamily: "'Cal Sans', sans-serif" }}
                >
                  Strategic Architecture
                </h3>
                <p 
                  className="text-[#444444] text-[17px] font-medium leading-relaxed"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  We map product scope, monetization, and technical roadmap for a clear, actionable plan.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#FFE2CC] p-12 lg:p-16">
                <div className="w-14 h-14 bg-[#FF6A00] rounded-xl flex items-center justify-center text-white mb-8 shadow-sm">
                  <LayoutGrid strokeWidth={2} size={28} />
                </div>
                <h3 
                  className="text-[28px] font-bold text-[#111111] mb-4 tracking-tight"
                  style={{ fontFamily: "'Cal Sans', sans-serif" }}
                >
                  Precision Build
                </h3>
                <p 
                  className="text-[#444444] text-[17px] font-medium leading-relaxed"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  Agile sprints with performance-first engineering ensure fast, reliable delivery.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-[#FFE2CC] p-12 lg:p-16">
                <div className="w-14 h-14 bg-[#FF6A00] rounded-xl flex items-center justify-center text-white mb-8 shadow-sm">
                  <Rocket strokeWidth={2} size={28} />
                </div>
                <h3 
                  className="text-[28px] font-bold text-[#111111] mb-4 tracking-tight"
                  style={{ fontFamily: "'Cal Sans', sans-serif" }}
                >
                  Launch & Scale
                </h3>
                <p 
                  className="text-[#444444] text-[17px] font-medium leading-relaxed"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  We deploy, optimize, and grow your product to achieve measurable traction.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="relative w-full bg-[#faf7f2] py-24">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="mb-20">
            <span 
              className="text-[#111] font-bold tracking-wider text-[15px] mb-4 block"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              &#123; Services &#125;
            </span>
            <h2 
              className="text-[36px] md:text-[56px] leading-[1.1] md:leading-[1.05] tracking-tight text-[#FF6A00]"
              style={{ fontFamily: "'Cal Sans', sans-serif" }}
            >
              The Work <br className="hidden sm:block" />
              We Deliver
            </h2>
          </div>

          {/* Mobile Development Showcase */}
          <div className="mb-32">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
              <h3 
                className="text-3xl font-bold text-[#444444] tracking-tight"
                style={{ fontFamily: "'Cal Sans', sans-serif" }}
              >
                [Mobile Development]
              </h3>
              <p 
                className="text-[#555555] text-[17px] font-medium leading-relaxed max-w-[380px] md:text-right"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                We build fast, reliable, and user-friendly mobile apps that engage and retain users.
              </p>
            </div>
            
            <div className="w-full relative rounded-2xl overflow-hidden drop-shadow-xl">
              <Image
                src="/image_3.svg"
                alt="Mobile Development Showcase - FastFood App"
                width={1400}
                height={600}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Web Development Showcase */}
          <div className="mb-32">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
              <h3 
                className="text-3xl font-bold text-[#444444] tracking-tight"
                style={{ fontFamily: "'Cal Sans', sans-serif" }}
              >
                [Web Development]
              </h3>
              <p 
                className="text-[#555555] text-[17px] font-medium leading-relaxed max-w-[380px] md:text-right"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                We create responsive, high-performance websites tailored to your business goals.
              </p>
            </div>
            
            <div className="w-full relative rounded-2xl overflow-hidden drop-shadow-xl bg-black">
              <Image
                src="/MacBook_13.png"
                alt="Web Development Showcase"
                width={1400}
                height={800}
                className="w-full h-auto object-contain rounded-2xl relative z-10"
              />
            </div>
          </div>

          {/* 3D Model Showcase */}
          <div className="mb-32">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
              <h3 
                className="text-3xl font-bold text-[#444444] tracking-tight"
                style={{ fontFamily: "'Cal Sans', sans-serif" }}
              >
                [3d Model]
              </h3>
              <p 
                className="text-[#555555] text-[17px] font-medium leading-relaxed max-w-[380px] md:text-right"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                We craft realistic 3D models that bring ideas, products, and concepts to life.
              </p>
            </div>
            
            <div className="w-full relative rounded-2xl overflow-hidden drop-shadow-xl">
              <Image
                src="/Web3.png"
                alt="3D Model Showcase"
                width={1400}
                height={600}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Graphic Design Showcase */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
              <h3 
                className="text-3xl font-bold text-[#444444] tracking-tight"
                style={{ fontFamily: "'Cal Sans', sans-serif" }}
              >
                [Graphic Design]
              </h3>
              <p 
                className="text-[#555555] text-[17px] font-medium leading-relaxed max-w-[380px] md:text-right"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                We design visually striking graphics that communicate your brand clearly and memorably.
              </p>
            </div>
            
            <div className="w-full relative rounded-2xl overflow-hidden drop-shadow-xl">
              <Image
                src="/GraphicDesign.png"
                alt="Graphic Design Showcase"
                width={1400}
                height={600}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Case Studies Section */}
      <section className="relative w-full bg-[#faf7f2] py-32 ">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header Split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 mb-20 items-end">
            <div>
              <span 
                className="text-[#111] font-bold tracking-wider text-[15px] mb-4 block"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                &#123; Case Studies &#125;
              </span>
              <h2 
                className="text-[36px] md:text-[56px] leading-[1.1] md:leading-[1.05] tracking-tight text-[#FF6A00]"
                style={{ fontFamily: "'Cal Sans', sans-serif" }}
              >
                Results that <br className="hidden sm:block" />
                Compound
              </h2>
            </div>
            <div className="lg:pb-4">
              <p 
                className="text-[#444444] text-lg font-medium leading-relaxed max-w-[450px]"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                We uncover your users&apos; real problems and deliver products with speed, strategy, and efficiency to maximize impact.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            
            {/* Project 1: Clarity UI */}
            <div className="group flex flex-col relative cursor-pointer pt-4 pb-12">
              <div className="w-full relative h-[360px] rounded-[32px] overflow-hidden drop-shadow-sm bg-black z-10">
                <Image
                  src="/MacBook.png"
                  alt="Clarity UI Project Preview"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-4 left-0 right-0 z-20 bg-[#FFD1AF] p-8 rounded-[32px] flex justify-between items-center drop-shadow-sm transition-transform duration-300 group-hover:-translate-y-2 group-hover:bg-[#FFC096]">
                <h3 
                  className="text-2xl font-bold text-[#111111] tracking-tight"
                  style={{ fontFamily: "'Cal Sans', sans-serif" }}
                >
                  Clarity UI
                </h3>
                <ArrowUpRight strokeWidth={2} size={26} className="text-[#111111]" />
              </div>
            </div>

            {/* Project 2: KBC */}
            <div className="group flex flex-col relative cursor-pointer pt-4 pb-12">
              <div className="w-full relative h-[360px] rounded-[32px] overflow-hidden drop-shadow-sm bg-black z-10">
                <Image
                  src="/iPhone.png"
                  alt="KBC Project Preview"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-4 left-0 right-0 z-20 bg-[#FFD1AF] p-8 rounded-[32px] flex justify-between items-center drop-shadow-sm transition-transform duration-300 group-hover:-translate-y-2 group-hover:bg-[#FFC096]">
                <h3 
                  className="text-2xl font-bold text-[#111111] tracking-tight"
                  style={{ fontFamily: "'Cal Sans', sans-serif" }}
                >
                  KBC
                </h3>
                <ArrowUpRight strokeWidth={2} size={26} className="text-[#111111]" />
              </div>
            </div>

            {/* Project 3: Kennix */}
            <div className="group flex flex-col relative cursor-pointer pt-4 pb-12">
              <div className="w-full relative h-[360px] rounded-[32px] overflow-hidden drop-shadow-sm bg-[#e8eaed] z-10"> {/* Subtle background for poster */}
                <Image
                  src="/Letter_Poster.png"
                  alt="Kennix Project Preview"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-4 left-0 right-0 z-20 bg-[#FFD1AF] p-8 rounded-[32px] flex justify-between items-center drop-shadow-sm transition-transform duration-300 group-hover:-translate-y-2 group-hover:bg-[#FFC096]">
                <h3 
                  className="text-2xl font-bold text-[#111111] tracking-tight"
                  style={{ fontFamily: "'Cal Sans', sans-serif" }}
                >
                  Kennix
                </h3>
                <ArrowUpRight strokeWidth={2} size={26} className="text-[#111111]" />
              </div>
            </div>

          </div>

          {/* All Works Link */}
          <div className="flex justify-center w-full">
            <Link 
              href="#" 
              className="group inline-flex items-center gap-2 text-[26px] font-bold text-[#111111] tracking-tight border-b-2 border-transparent hover:border-[#111111] transition-all duration-300"
              style={{ fontFamily: "'Cal Sans', sans-serif" }}
            >
              All Works
              <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                &rarr;
              </span>
            </Link>
          </div>

        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="relative w-full h-[800px] overflow-hidden flex items-center justify-center bg-[#F6F2EF]">
        
        {/* Wide Elliptical Radial Gradient Glow - Much wider to cover sides */}
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, #FF0000 0%, #FFA200 55%, transparent 85%)`,
            maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
            transform: 'scaleX(1.1)' // Slightly wider spread
          }}
        />

        {/* Central Text Content */}
        <div className="relative z-10 max-w-[950px] mx-auto px-6 text-center">
          <h2 
            className="text-[38px] md:text-[56px] leading-[1.15] tracking-tight text-white font-bold"
            style={{ fontFamily: "'Cal Sans', sans-serif" }}
          >
            We strive to turn ideas into <br />
            impactful digital experiences <br />
            that <span className="text-white/80">empower users and drive <br /> meaningful growth</span>
          </h2>
        </div>

        {/* Floating Elements - Adjusted to match reference proportions */}
        
        {/* Top Center: MacBook */}
        <div className="absolute top-[12%] left-[50%] -translate-x-1/2 md:translate-x-[50px] lg:translate-x-[100px] z-20 w-24 md:w-32 h-24 md:h-32 rounded-[24px] overflow-hidden shadow-2xl bg-black">
          <Image
            src="/flip_pc.png"
            alt="Laptop"
            fill
            className="object-cover"
          />
        </div>

        {/* Top Left: Lightning Icon */}
        <div className="absolute top-[30%] left-[12%] md:left-[20%] z-20 w-14 h-14 rounded-2xl bg-[#FF6A00] flex items-center justify-center text-white shadow-xl border border-white/20">
          <Zap fill="white" size={24} />
        </div>

        {/* Middle Right: Chart Icon */}
        <div className="absolute top-[40%] right-[10%] md:right-[18%] z-20 w-14 h-14 rounded-2xl bg-[#FF6A00] flex items-center justify-center text-white shadow-xl border border-white/20">
          <BarChart2 size={24} strokeWidth={2.5} />
        </div>

        {/* Bottom Center: Lightbulb Icon */}
        <div className="absolute bottom-[18%] left-[45%] md:left-[48%] z-20 w-14 h-14 rounded-2xl bg-[#FF6A00] flex items-center justify-center text-white shadow-xl border border-white/20">
          <Lightbulb fill="white" size={24} />
        </div>

        {/* Bottom Right: Robot Image */}
        <div className="absolute bottom-[15%] right-[15%] md:right-[22%] z-20 w-24 md:w-32 h-24 md:h-32 rounded-[24px] overflow-hidden shadow-2xl bg-black">
          <Image
            src="/robot.png"
            alt="Robot"
            fill
            className="object-cover"
          />
        </div>

      </section>

      <CTA />

      <FAQ />

      <Footer />

    </main>
  );
}

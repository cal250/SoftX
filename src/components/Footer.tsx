import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F6F2EF] pt-20 pb-12 ">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between mb-24 gap-16 lg:gap-0">
          
          {/* Brand & Description */}
          <div className="max-w-[320px]">
            <div className="flex items-center gap-3 mb-8">
              <Image 
                src="/Logo_scroll.svg" 
                alt="SoftX Logo" 
                width={140} 
                height={46} 
                className="h-10 w-auto"
              />
            </div>
            <p 
              className="text-[#555555] text-[17px] leading-relaxed mb-10 font-medium"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              We provide the strategy and systems needed to build impactful digital products.
            </p>
            
            {/* Small Footer Image */}
            <div className="w-[140px] h-[140px] relative rounded-2xl overflow-hidden shadow-sm">
              <Image 
                src="/Footer_img.svg" 
                alt="Workspace" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-24 lg:gap-32">
            
            {/* Company */}
            <div className="flex flex-col gap-6">
              <h4 
                className="text-[#FF6A00] font-bold text-lg"
                style={{ fontFamily: "'Cal Sans', sans-serif" }}
              >
                Company
              </h4>
              <nav className="flex flex-col gap-4">
                {["About us", "Our work", "Services", "Contact"].map((link) => (
                  <Link 
                    key={link}
                    href="#"
                    className="text-[#555555] hover:text-[#FF6A00] transition-colors duration-300 font-medium whitespace-nowrap"
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  >
                    {link}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-6">
              <h4 
                className="text-[#FF6A00] font-bold text-lg"
                style={{ fontFamily: "'Cal Sans', sans-serif" }}
              >
                Social
              </h4>
              <nav className="flex flex-col gap-4">
                {["Instagram", "LinkedIn", "X", "Email"].map((link) => (
                  <Link 
                    key={link}
                    href="#"
                    className="text-[#555555] hover:text-[#FF6A00] transition-colors duration-300 font-medium whitespace-nowrap"
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  >
                    {link}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-6">
              <h4 
                className="text-[#FF6A00] font-bold text-lg"
                style={{ fontFamily: "'Cal Sans', sans-serif" }}
              >
                Services
              </h4>
              <nav className="flex flex-col gap-4">
                {["Web development", "Mobile development", "3d Modeling", "Graphic Design"].map((link) => (
                  <Link 
                    key={link}
                    href="#"
                    className="text-[#555555] hover:text-[#FF6A00] transition-colors duration-300 font-medium whitespace-nowrap"
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  >
                    {link}
                  </Link>
                ))}
              </nav>
            </div>

          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-[#ebe1d5]/30 text-center">
          <p 
            className="text-[#888888] text-[15px] font-medium"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            &copy; Copyright 2026, All Rights Reserved by SoftX
          </p>
        </div>

      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const SoftXMark = () => (
  <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#111111]/80">
    <path d="M14.0625 15.9375V20.625L4.6875 30H0V25.3125L9.375 15.9375H14.0625ZM30 25.3125V30H25.3125L15.9375 20.625V15.9375H20.625L30 25.3125ZM14.0625 9.375V14.0625H9.375L0 4.6875V0H4.6875L14.0625 9.375ZM30 4.6875L20.625 14.0625H15.9375V9.375L25.3125 0H30V4.6875Z" fill="currentColor"/>
  </svg>
);

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#F6F2EF] flex flex-col">
      <section className="pt-32 lg:pt-56 pb-16 px-6 flex-grow flex items-start">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12 lg:gap-32 items-start">
          
          {/* Left Side: Contact Info */}
          <div className="w-full lg:w-2/5">
            <h1 
              className="text-[64px] md:text-[80px] font-bold text-[#FF6A00] leading-none mb-8"
              style={{ fontFamily: "'Cal Sans', sans-serif" }}
            >
              Contact Us
            </h1>
            <p 
              className="text-[#111111] text-xl font-medium leading-relaxed max-w-sm mb-16"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Let&apos;s discuss your goals and build something meaningful together.
            </p>

            <div className="space-y-10">
              {/* Contact Item */}
              <div className="flex items-center gap-6">
                <SoftXMark />
                <span className="text-[#111111] text-lg font-medium" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
                  softlabs300@gmail.com
                </span>
              </div>
              
              <div className="flex items-center gap-6">
                <SoftXMark />
                <span className="text-[#111111] text-lg font-medium" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
                  +250 788888888
                </span>
              </div>

              <div className="flex items-center gap-6">
                <SoftXMark />
                <span className="text-[#111111] text-lg font-medium" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
                  Based in Kigali, Rwanda
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-3/5">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-[#111111]/60 uppercase tracking-widest" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>First Name</label>
                  <input 
                    type="text" 
                    placeholder="First name"
                    className="w-full bg-white border border-[#EBE1D5] rounded-xl px-6 py-4 outline-none focus:border-[#FF6A00] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-[#111111]/60 uppercase tracking-widest" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Last name"
                    className="w-full bg-white border border-[#EBE1D5] rounded-xl px-6 py-4 outline-none focus:border-[#FF6A00] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-bold text-[#111111]/60 uppercase tracking-widest" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>Email</label>
                <input 
                  type="email" 
                  placeholder="you@company.com"
                  className="w-full bg-white border border-[#EBE1D5] rounded-xl px-6 py-4 outline-none focus:border-[#FF6A00] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-bold text-[#111111]/60 uppercase tracking-widest" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>Website (Optional)</label>
                <input 
                  type="text" 
                  placeholder="you@company.com"
                  className="w-full bg-white border border-[#EBE1D5] rounded-xl px-6 py-4 outline-none focus:border-[#FF6A00] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-bold text-[#111111]/60 uppercase tracking-widest" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>Message</label>
                <textarea 
                  rows={6}
                  placeholder="Your message..."
                  className="w-full bg-white border border-[#EBE1D5] rounded-xl px-6 py-4 outline-none focus:border-[#FF6A00] transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-[#FF6A00] text-white font-bold py-5 rounded-full hover:scale-[1.02] active:scale-95 transition-all text-lg shadow-xl shadow-orange-500/10"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                Send message
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

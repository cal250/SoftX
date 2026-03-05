"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    number: "1.",
    question: "How long does a typical project take?",
    answer: "What started with urgency slowly turns into stalled timelines and lost competitive edge."
  },
  {
    number: "2.",
    question: "How much does a project cost?",
    answer: "Project costs vary based on scope, technical complexity, and timeline. We provide transparent, value-based pricing tailored to your specific goals."
  },
  {
    number: "3.",
    question: "Do you work with startups or only established companies?",
    answer: "We partner with both ambitious startups looking for rapid growth and established enterprises seeking to modernize their digital infrastructure."
  },
  {
    number: "4.",
    question: "Will I be involved in the design and development process?",
    answer: "Absolute transparency is our core value. You'll be part of the entire lifecycle, from daily check-ins to strategic milestone reviews."
  },
  {
    number: "5.",
    question: "Do you provide support after launch?",
    answer: "Our relationship doesn't end at deployment. We provide dedicated post-launch support, performance monitoring, and strategic scaling advice."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full bg-[#F6F2EF] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left: Header */}
          <div>
            <span 
              className="text-[#111111] font-bold tracking-wider text-[15px] mb-4 block"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              &#123; Clarify &#125;
            </span>
            <h2 
              className="text-[40px] md:text-[56px] leading-[1.05] tracking-tight text-[#FF6A00]"
              style={{ fontFamily: "'Cal Sans', sans-serif" }}
            >
              Frequently Asked <br />
              Questions
            </h2>
          </div>

          {/* Right: Accordion */}
          <div className="flex flex-col">
            {faqData.map((item, index) => (
              <div 
                key={index}
                className="border-b border-[#ebe1d5] last:border-b-0"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-8 flex items-start justify-between text-left group transition-all"
                >
                  <div className="flex items-start gap-4 pr-8">
                    <span 
                      className="text-xl md:text-2xl font-bold text-[#111111] mt-1"
                      style={{ fontFamily: "'Cal Sans', sans-serif" }}
                    >
                      {item.number}
                    </span>
                    <h3 
                      className="text-xl md:text-2xl font-bold text-[#111111] leading-tight"
                      style={{ fontFamily: "'Cal Sans', sans-serif" }}
                    >
                      {item.question}
                    </h3>
                  </div>
                  
                  {/* Toggle Button */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-[#FF6A00] text-white' : 'bg-[#FF6A00] text-white'}`}>
                    {openIndex === index ? (
                      <Minus size={20} strokeWidth={3} />
                    ) : (
                      <Plus size={20} strokeWidth={3} />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-10 md:pl-12 max-w-[600px]">
                        <p 
                          className="text-[#444444] text-lg font-medium leading-relaxed"
                          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                        >
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

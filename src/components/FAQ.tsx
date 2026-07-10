import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, ChevronUp, Shield, Clock, MapPin, Sparkles } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon: React.ReactNode;
}

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "Are your chemical pest treatments safe for kids, elders, and pets?",
      answer: "Absolutely. At Star Pest Control, we use central-insecticide-board (CIB) approved, odourless, and low-toxicity gel baits and targeted spray technologies. For residential apartments, we apply spot treatments that pose zero threat to kids, elders, or domestic pets. No need to vacate the house for general treatments!",
      icon: <Shield className="text-emerald-500 shrink-0" size={18} />
    },
    {
      id: 2,
      question: "What is the duration of an average pest service, and when will I see results?",
      answer: "Most general cockroach, ant, or spider sprays take 45 to 90 minutes depending on the carpet area. Gel and bait results are visible within 2-3 days, as pests consume the bait and carry it to their nest, completely wiping out the colony. For termites, our drill-and-inject barrier treatments can take 3 to 6 hours for maximum defense.",
      icon: <Clock className="text-amber-500 shrink-0" size={18} />
    },
    {
      id: 3,
      question: "Do you service areas outside of Madanapalle? What are your active service areas?",
      answer: "Yes! While our primary branch office is in Madanapalle (Prasanth Nagar), we actively service surrounding districts, towns, and neighbouring states. Our technicians are fully equipped to travel across Andhra Pradesh, Telangana, Karnataka, and Tamil Nadu for large-scale commercial, agricultural, and pre-construction termite treatments.",
      icon: <MapPin className="text-brand-purple shrink-0" size={18} />
    },
    {
      id: 4,
      question: "Is there a service warranty if pests reappear after the spraying?",
      answer: "Yes, we stand behind our workmanship. Star Pest Control provides a comprehensive service warranty (ranging from 3 months up to 5 years depending on the selected package). If pests recur within your warranty period, our technicians will visit and re-treat your space completely free of charge.",
      icon: <Sparkles className="text-brand-orange shrink-0" size={18} />
    },
    {
      id: 5,
      question: "Do you charge anything for the initial visit and inspection?",
      answer: "Not at all. We offer a 100% Free Initial Physical Site Inspection in Madanapalle and neighbouring areas. Our expert inspector will assess your property, analyze severity levels, and provide a transparent, competitive treatment estimate with no obligation.",
      icon: <HelpCircle className="text-blue-500 shrink-0" size={18} />
    }
  ];

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/5 px-3.5 py-1.5 rounded-full">
            Help & Support
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 tracking-tight text-slate-900 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-600 font-sans leading-relaxed">
            Have queries about our odorless treatments, service terms, or safety standards? Find answers from our local specialists below.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-brand-purple/20 bg-brand-purple/[0.01] shadow-md shadow-brand-purple/[0.02]"
                    : "border-slate-200/80 hover:border-slate-300 bg-white"
                }`}
              >
                {/* Header / Trigger */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-display font-bold text-slate-900 text-sm sm:text-base gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2 bg-slate-50 rounded-xl shrink-0">
                      {item.icon}
                    </div>
                    <span>{item.question}</span>
                  </div>
                  <div className={`p-1.5 rounded-full border transition-all duration-300 shrink-0 ${
                    isOpen ? "bg-brand-purple/5 border-brand-purple/20 text-brand-purple rotate-180" : "bg-slate-50 border-slate-200 text-slate-400"
                  }`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                {/* Animated Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans pl-[54px] border-t border-slate-100/50">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Call CTA Prompt inside FAQ */}
        <div className="mt-12 bg-slate-50 border border-slate-200/60 rounded-3xl p-6 text-center">
          <p className="text-slate-700 font-medium font-sans">
            Have another custom question or emergency pest swarm?
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+918790851377"
              className="px-6 py-3 bg-brand-purple hover:bg-brand-purple-light text-white text-xs font-bold rounded-xl shadow-md transition-colors inline-flex items-center gap-2"
            >
              <span>Call +91 8790851377</span>
            </a>
            <a
              href="https://wa.me/918790851377?text=Hi%20Star%20Pest%20Control,%20I%20have%20a%20question%20regarding%20pest%20control%20treatments."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-bold rounded-xl transition-colors inline-flex items-center gap-2"
            >
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

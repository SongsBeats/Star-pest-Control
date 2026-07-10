import React from "react";
import { motion } from "motion/react";
import { Shield, Sparkles, CheckCircle2, PhoneCall } from "lucide-react";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const stats = [
    { value: "750+", label: "Projects Completed" },
    { value: "1500+", label: "Happy Clients" },
    { value: "10+", label: "Years of Experience" },
    { value: "50+", label: "Expert Employees" },
  ];

  return (
    <section id="hero" className="relative overflow-hidden bg-radial from-slate-50 to-slate-100/40 py-16 lg:py-24 border-b border-gray-100">
      {/* Visual background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Headline & Main Marketing */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tagline / Welcome Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-purple/5 text-brand-purple rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-brand-purple/10"
            >
              <Shield size={12} className="text-brand-orange" />
              <span>Certified Pest Control Specialists across Andhra Pradesh & Telangana</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]"
            >
              Safeguard Your Space From{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-purple-light">
                Destructive Pests
              </span>
            </motion.h1>

            {/* Subtitle / Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-sans"
            >
              Rely on <strong className="text-brand-purple font-semibold">Star Pest Control</strong> across Andhra Pradesh and Telangana for ultimate peace of mind. We ensure a healthy, pest-free home by eliminating rats, termites, cockroaches, mosquitoes, and spiders under professional expertise.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 grid sm:grid-cols-2 gap-3 w-full max-w-lg"
            >
              {[
                "Complimentary Initial Inspection",
                "Advanced Eco-Friendly Treatments",
                "Certified, Eco-Responsible Technicians",
                "Service Warranty with No Recurrence Cost"
              ].map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm font-medium text-slate-700">
                  <CheckCircle2 size={16} className="text-brand-orange mt-0.5 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button
                onClick={() => onNavigate("booking")}
                className="px-8 py-4 bg-brand-orange hover:bg-brand-orange-light text-white font-bold rounded-2xl shadow-lg shadow-brand-orange/25 hover:shadow-xl hover:shadow-brand-orange/35 transform hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Book Free Inspection</span>
                <Sparkles size={18} className="animate-spin-slow" />
              </button>
              <button
                onClick={() => onNavigate("tracking")}
                className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 hover:border-slate-300 font-bold rounded-2xl shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Track My Booking</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column - Premium Feature Presentation & Highlight Card */}
          <div className="lg:col-span-5 relative mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 overflow-hidden"
            >
              {/* Highlight badge inside card */}
              <div className="absolute top-0 right-0 bg-brand-orange text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-xl">
                Immediate Response
              </div>

              <h3 className="font-display text-xl font-bold text-slate-900 pr-12">
                Need Urgent Assistance?
              </h3>
              <p className="mt-2 text-sm text-slate-600 font-sans">
                Speak directly with our local expert team in Madanapalle. We provide responsive customer support to address any emergency.
              </p>

              {/* Support Call Box */}
              <div className="mt-6 bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-purple/10 text-brand-purple rounded-xl flex items-center justify-center shrink-0">
                  <PhoneCall size={22} className="text-brand-purple animate-bounce" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Emergency Hotline
                  </div>
                  <a
                    href="tel:+918790851377"
                    className="text-lg sm:text-xl font-bold text-brand-purple hover:text-brand-orange transition-colors"
                  >
                    +91 8790851377
                  </a>
                </div>
              </div>

              {/* Map Address Box */}
              <div className="mt-4 text-xs text-slate-500 flex flex-col gap-1.5 bg-slate-50/50 rounded-2xl p-4 border border-slate-100">
                <span className="font-bold text-slate-700 uppercase tracking-widest">
                  📍 Madanapalle Branch Office:
                </span>
                <span className="leading-relaxed">
                  Prasanth Nagar, Near LIC Office, Madanapalle, Andhra Pradesh, Pincode - 517325
                </span>
              </div>

              {/* Service Areas */}
              <div className="mt-5 pt-5 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">
                  Operating in Areas:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["Andhra Pradesh", "Telangana", "Tamil Nadu", "Karnataka"].map((area, index) => (
                    <span
                      key={index}
                      className="text-[11px] font-semibold text-brand-purple bg-brand-purple/5 px-2.5 py-1 rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dynamic Interactive Stats Counter */}
        <div className="mt-16 sm:mt-20 border-t border-gray-200/60 pt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-purple">
                  {stat.value}
                </span>
                <span className="mt-2 text-xs sm:text-sm font-semibold tracking-wide text-slate-500 uppercase">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

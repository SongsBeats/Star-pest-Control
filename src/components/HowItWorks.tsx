import React from "react";
import { motion } from "motion/react";
import { Eye, SearchCode, ShieldCheck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "INSPECT",
      desc: "Our certified technicians conduct a comprehensive, meticulous inspection of your property to pinpoint hidden nests, entry points, and pest pathways.",
      icon: Eye,
      color: "from-purple-500 to-indigo-600",
      badgeColor: "bg-purple-100 text-purple-700 border-purple-200"
    },
    {
      num: "02",
      title: "IDENTIFY",
      desc: "We analyze our findings to identify the exact pest species and, more importantly, discover the true root cause (moisture, waste, cracks) of the problem.",
      icon: SearchCode,
      color: "from-amber-500 to-orange-600",
      badgeColor: "bg-amber-100 text-amber-700 border-amber-200"
    },
    {
      num: "03",
      title: "TREAT",
      desc: "We apply the most advanced, odourless, and environmentally responsible chemical and physical treatments to alleviate issues and prevent any future recurrence.",
      icon: ShieldCheck,
      color: "from-emerald-500 to-teal-600",
      badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/2 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-purple uppercase tracking-widest bg-brand-purple/5 px-3.5 py-1.5 rounded-full">
            Our Strategy
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 tracking-tight text-slate-900 leading-tight">
            Three Step Pest Control Process
          </h2>
          <p className="mt-4 text-slate-600 font-sans leading-relaxed">
            We follow a scientific, safety-first methodology to ensure we don't just temporarily mask symptoms, but eradicate the pest problem entirely.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line behind steps (on desktop) */}
          <div className="hidden md:block absolute top-[28%] left-[15%] right-[15%] h-[2px] bg-slate-200/60 -z-10"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative bg-white border border-slate-200 rounded-3xl p-6 md:p-8 hover:shadow-xl hover:border-brand-purple/15 transition-all duration-300"
              >
                {/* Number Overlay */}
                <div className="absolute top-4 right-6 text-5xl md:text-6xl font-display font-black text-slate-100 select-none group-hover:text-brand-orange/10 transition-colors">
                  {step.num}
                </div>

                {/* Icon Circle */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-lg shadow-brand-purple/5`}>
                  <Icon size={26} />
                </div>

                {/* Badge Indicator */}
                <div className={`mt-6 inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border ${step.badgeColor}`}>
                  Step {step.num}
                </div>

                {/* Step Title */}
                <h3 className="font-display text-xl font-bold mt-4 text-slate-900 tracking-tight group-hover:text-brand-purple transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="mt-3.5 text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                  {step.desc}
                </p>

                {/* Footer highlights */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    {step.title === "INSPECT" ? "Pinpoint Issues" : step.title === "IDENTIFY" ? "True Cause Analysis" : "Prevent Recurrence"}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

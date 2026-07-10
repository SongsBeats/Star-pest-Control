import React, { useState } from "react";
import { Info, Check, Sparkles } from "lucide-react";
import { TECHNIQUES_DATA } from "../data";
import LucideIcon from "./LucideIcon";

export default function Solutions() {
  const [activeCategory, setActiveCategory] = useState<"All" | "Pre-Construction" | "Post-Construction" | "General">("All");

  const filteredTechniques = TECHNIQUES_DATA.filter(
    (tech) => activeCategory === "All" || tech.category === activeCategory || (tech.category === "General" && activeCategory === "General")
  );

  return (
    <section id="techniques" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/5 px-3.5 py-1.5 rounded-full">
              Anti-Termite Solutions
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 tracking-tight text-slate-900 leading-tight">
              Pre & Post Construction Anti-Termite Pest Treatments
            </h2>
            <p className="mt-4 text-slate-600 font-sans leading-relaxed">
              Safeguarding your property investment starts with establishing a robust barrier against termites. <strong>Star Pest Control</strong> provides specialized Anti-Termite Services designed to deliver long-lasting resistance. From chemical soil treating during excavation to post-construction sub-slab barrier injection, we have you fully protected.
            </p>
          </div>
          
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-purple to-brand-purple-light text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
            <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
              <Sparkles size={20} className="text-brand-orange-light" />
              Why Termite Treatment?
            </h3>
            <ul className="space-y-3.5">
              {[
                "Protects expensive structural wooden fittings & plywood",
                "Subterranean termites can destroy a foundation silently",
                "Pre-construction treatment builds a lifelong barrier",
                "Post-construction baiting systems eliminate whole colonies"
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium">
                  <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-brand-orange-light" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-100 pb-5">
          {(["All", "Pre-Construction", "Post-Construction", "General"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-brand-purple text-white shadow-md shadow-brand-purple/10"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Techniques Grid - Reverted to icons & fully mobile responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredTechniques.map((tech, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 hover:border-brand-purple/30 p-5 sm:p-6 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon & Category Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-brand-purple/10 to-brand-orange/10 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                    <LucideIcon name={tech.iconName} className="text-brand-purple" size={24} />
                  </div>
                  <span
                    className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                      tech.category === "Pre-Construction"
                        ? "bg-blue-50 text-blue-600 border-blue-200/60"
                        : tech.category === "Post-Construction"
                        ? "bg-amber-50 text-amber-600 border-amber-200/60"
                        : "bg-purple-50 text-purple-600 border-purple-200/60"
                    }`}
                  >
                    {tech.category}
                  </span>
                </div>

                <h4 className="font-display font-bold text-lg sm:text-xl text-slate-900 group-hover:text-brand-purple transition-colors">
                  {tech.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {tech.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <div className="flex items-center gap-1.5">
                  <Info size={13} className="text-brand-orange" />
                  <span>BIS Approved Method</span>
                </div>
                <span className="text-brand-purple group-hover:translate-x-1 transition-transform">
                  Certified →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Notice banner */}
        <div className="mt-12 bg-amber-50/50 border border-amber-100 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 justify-between">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-100 text-amber-700 rounded-2xl shrink-0">
              <Info size={24} />
            </div>
            <div>
              <h4 className="font-display font-bold text-slate-900 text-base md:text-lg">
                Pre and Post Construction Dual-Action Protection
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Our technicians are fully certified and follow the Bureau of Indian Standards (BIS) specifications for chemical pesticide barriers. All insecticides used are approved by the Central Insecticides Board (CIB) to ensure human, pet, and environmental safety.
              </p>
            </div>
          </div>
          <a
            href="tel:+918790851377"
            className="flex items-center gap-2 px-6 py-3 bg-brand-purple hover:bg-brand-purple-light text-white text-xs font-bold rounded-xl whitespace-nowrap shadow-md shadow-brand-purple/10 hover:shadow-lg transition-all"
          >
            <Phone size={15} />
            <span>Call Specialist: +91 8790851377</span>
          </a>
        </div>
      </div>
    </section>
  );
}

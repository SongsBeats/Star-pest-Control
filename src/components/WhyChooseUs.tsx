import React from "react";
import { Check } from "lucide-react";
import { WHY_US_DATA } from "../data";
import LucideIcon from "./LucideIcon";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/5 px-3.5 py-1.5 rounded-full">
            Our Edge
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 tracking-tight text-slate-900 leading-tight">
            Why Choose Star Pest Control
          </h2>
          <p className="mt-4 text-slate-600 font-sans leading-relaxed">
            We operate with transparency, expertise, and absolute dedication to your safety and convenience. Here are the core values we bring to every job.
          </p>
        </div>

        {/* Why Choose Us Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_US_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 hover:shadow-xl hover:border-brand-purple/15 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Highlight Background Hover Accent */}
              <div className="absolute top-0 left-0 h-1.5 w-0 bg-brand-orange group-hover:w-full transition-all duration-300"></div>

              {/* Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-brand-purple/5 text-brand-purple flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <LucideIcon name={item.iconName} className="text-brand-purple" size={24} />
              </div>

              {/* Title & Description */}
              <h3 className="font-display font-bold text-lg text-slate-900 tracking-tight group-hover:text-brand-purple transition-colors">
                {item.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                {item.description}
              </p>

              {/* Small check list */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-brand-orange/15 text-brand-orange flex items-center justify-center shrink-0">
                  <Check size={10} className="stroke-[3]" />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Verified Promise
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

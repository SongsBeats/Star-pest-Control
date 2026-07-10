import React, { useState } from "react";
import { Search, Info, ArrowRight, X, CheckCircle2, Eye, ShieldAlert } from "lucide-react";
import { SERVICES_DATA } from "../data";
import { PestService } from "../types";
import LucideIcon from "./LucideIcon";

interface ServicesHubProps {
  onSelectService: (pestId: string) => void;
}

export default function ServicesHub({ onSelectService }: ServicesHubProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDanger, setSelectedDanger] = useState<string>("All");
  const [selectedModalService, setSelectedModalService] = useState<PestService | null>(null);

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.teluguName.includes(searchTerm) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDanger = selectedDanger === "All" || service.dangerLevel === selectedDanger;

    return matchesSearch && matchesDanger;
  });

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/5 px-3.5 py-1.5 rounded-full">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 tracking-tight text-slate-900 leading-tight">
            Say Goodbye To Pests In Your House!
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed font-sans">
            We offer expert, affordable pest management services covering residential, commercial, and construction sites. Select a pest category below to explore real treatment photography and techniques.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search pests (e.g., Termite, బొద్దింక)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all"
            />
          </div>

          <div className="flex items-center gap-2.5 w-full md:w-auto overflow-x-auto self-start md:self-auto py-1">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0">
              Severity Level:
            </span>
            {["All", "High", "Medium", "Low"].map((level) => (
              <button
                key={level}
                onClick={() => setSelectedDanger(level)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedDanger === level
                    ? "bg-brand-purple text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid - Reverted to clean icons & fully mobile responsive */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 hover:border-brand-purple/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Card Header with Icon & Threat Badge */}
                  <div className="p-5 sm:p-6 pb-0 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      <div
                        onClick={() => setSelectedModalService(service)}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-brand-purple/10 to-brand-orange/10 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0 cursor-pointer"
                      >
                        <LucideIcon name={service.iconName} className="text-brand-purple" size={26} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-brand-orange block">
                          {service.teluguName}
                        </span>
                        <h3
                          onClick={() => setSelectedModalService(service)}
                          className="font-display font-bold text-lg sm:text-xl text-slate-900 leading-snug group-hover:text-brand-purple transition-colors cursor-pointer mt-0.5"
                        >
                          {service.name}
                        </h3>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shrink-0 ${
                        service.dangerLevel === "High"
                          ? "bg-red-50 text-red-600 border border-red-200/60"
                          : service.dangerLevel === "Medium"
                          ? "bg-amber-50 text-amber-600 border border-amber-200/60"
                          : "bg-emerald-50 text-emerald-600 border border-emerald-200/60"
                      }`}
                    >
                      {service.dangerLevel}
                    </span>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 sm:p-6 pt-4">
                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans line-clamp-2">
                      {service.description}
                    </p>

                    {/* Signs/Symptoms Alert */}
                    <div className="mt-3.5 bg-slate-50 rounded-xl p-3 border border-slate-100 flex gap-2">
                      <Info size={14} className="text-brand-orange shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-600 leading-normal font-sans line-clamp-2">
                        <strong className="font-bold text-slate-800">Signs: </strong>
                        {service.symptom}
                      </p>
                    </div>

                    {/* Tech List */}
                    <div className="mt-4 pt-3.5 border-t border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Key Techniques:
                      </span>
                      <ul className="mt-2 space-y-1.5">
                        {service.techniques.slice(0, 2).map((tech, idx) => (
                          <li key={idx} className="text-xs text-slate-600 flex items-center gap-2 font-sans">
                            <span className="w-1.5 h-1.5 bg-brand-orange rounded-full shrink-0"></span>
                            <span className="truncate">{tech}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="text-left group/quote cursor-pointer"
                  >
                    <span className="text-[10px] text-brand-orange font-bold uppercase tracking-wider block">Custom Quotation</span>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-800 group-hover/quote:text-brand-purple transition-colors flex items-center gap-1">
                      Get Free Quote
                      <ArrowRight size={13} className="text-brand-orange" />
                    </span>
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedModalService(service)}
                      className="px-3 py-2 text-xs font-bold text-slate-600 hover:text-brand-purple bg-slate-100 hover:bg-brand-purple/5 rounded-xl transition-colors cursor-pointer"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => onSelectService(service.id)}
                      className="flex items-center gap-1.5 px-4 py-2 bg-brand-purple text-white hover:bg-brand-purple-light rounded-xl text-xs font-bold shadow-md shadow-brand-purple/15 transition-all cursor-pointer"
                    >
                      <span>Book</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-slate-50 border border-dashed border-slate-200 rounded-3xl">
            <p className="text-slate-500 font-medium">No pests found matching your filter criteria.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedDanger("All");
              }}
              className="mt-3 text-xs font-bold text-brand-purple hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Modal for Detailed Treatment Overview */}
        {selectedModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-100 relative max-h-[90vh] flex flex-col">
              {/* Modal Icon Header */}
              <div className="relative p-5 sm:p-7 bg-gradient-to-br from-brand-purple to-brand-purple-light text-white shrink-0">
                <button
                  onClick={() => setSelectedModalService(null)}
                  className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0">
                    <LucideIcon name={selectedModalService.iconName} className="text-brand-orange-light" size={28} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 bg-brand-orange text-[10px] font-bold uppercase rounded-full">
                        {selectedModalService.dangerLevel} Danger Level
                      </span>
                      <span className="text-xs text-slate-200 font-semibold">
                        {selectedModalService.teluguName}
                      </span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight">
                      {selectedModalService.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Modal Content Body */}
              <div className="p-5 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Service Overview
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedModalService.description}
                  </p>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-2xl p-4">
                  <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wider mb-1">
                    <ShieldAlert size={16} />
                    <span>Warning Signs & Symptoms</span>
                  </div>
                  <p className="text-xs text-amber-900 leading-relaxed">
                    {selectedModalService.symptom}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Treatment Techniques & Action Plan
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {selectedModalService.techniques.map((tech, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex items-start gap-2.5"
                      >
                        <CheckCircle2 size={16} className="text-brand-purple shrink-0 mt-0.5" />
                        <span className="text-xs font-medium text-slate-700">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <button
                  onClick={() => {
                    const id = selectedModalService.id;
                    setSelectedModalService(null);
                    onSelectService(id);
                  }}
                  className="text-left group/modalquote cursor-pointer"
                >
                  <span className="text-[10px] text-brand-orange font-bold uppercase tracking-wider block">Inspection & Quotation</span>
                  <span className="text-sm sm:text-base font-extrabold text-slate-900 group-hover/modalquote:text-brand-purple transition-colors flex items-center gap-1.5">
                    Request Free Custom Quote
                    <ArrowRight size={14} className="text-brand-orange" />
                  </span>
                </button>
                <div className="flex items-center justify-end gap-2 sm:gap-3">
                  <button
                    onClick={() => setSelectedModalService(null)}
                    className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-800 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const id = selectedModalService.id;
                      setSelectedModalService(null);
                      onSelectService(id);
                    }}
                    className="flex-1 sm:flex-none px-5 py-2.5 bg-brand-orange hover:bg-brand-orange-light text-white text-xs font-bold rounded-xl shadow-md shadow-brand-orange/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Get Quote & Book Inspection</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

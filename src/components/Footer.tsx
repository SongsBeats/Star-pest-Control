import React from "react";
import { Phone, Mail, MapPin, ExternalLink, Calendar, HelpCircle, ShieldCheck } from "lucide-react";
import Logo from "./Logo";
import { CLIENTS_DATA } from "../data";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs sm:text-sm font-sans pt-16 pb-8 border-t border-slate-800">
      
      {/* Client Logos Row */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16 pb-12 border-b border-slate-800">
        <h4 className="text-center text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-orange mb-8">
          Who Are Our Clients — Trusted by Leading Establishments
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {CLIENTS_DATA.map((client, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 hover:bg-slate-800 border border-slate-800/40 hover:border-slate-700 rounded-2xl p-4 flex flex-col justify-center items-center text-center group transition-all"
            >
              <span className="font-display font-bold text-sm sm:text-base text-slate-200 group-hover:text-white transition-colors">
                {client.name}
              </span>
              <span className="text-[9px] text-slate-500 uppercase tracking-wider mt-1 block">
                {client.industry}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-12 gap-10">
        
        {/* Brand details Column */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <div className="bg-white px-4 py-2.5 rounded-xl inline-block w-fit shadow-sm">
            <Logo size="md" />
          </div>
          <p className="text-slate-400 mt-2 text-xs leading-relaxed max-w-sm">
            At Star Pest Control across Andhra Pradesh & Telangana, we prioritize your safety, delivering reliable chemical and physical barrier solutions to defend residential, commercial, and construction sites against destructive invaders.
          </p>
          <div className="flex gap-2.5 mt-2">
            <span className="p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors cursor-pointer">
              <ShieldCheck size={16} />
            </span>
            <span className="text-[11px] font-semibold text-slate-400 flex items-center">
              ISO Certified • Green Safe Certified
            </span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-3 flex flex-col gap-3.5">
          <h5 className="font-display font-bold text-white text-sm uppercase tracking-wider">
            Quick Navigation
          </h5>
          <div className="flex flex-col gap-2">
            {[
              { id: "hero", label: "Home" },
              { id: "services", label: "Pest Services Offered" },
              { id: "techniques", label: "Anti-Termite Treatment" },
              { id: "why-choose-us", label: "Why Choose Star" },
              { id: "booking", label: "Book Free Quote" },
              { id: "tracking", label: "Track Booking Status" }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="text-left text-slate-400 hover:text-white hover:underline transition-colors text-xs cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contact details Column */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <h5 className="font-display font-bold text-white text-sm uppercase tracking-wider">
            Madanapalle Branch Contact Details
          </h5>
          <div className="space-y-3 text-xs leading-relaxed">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-brand-orange shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200 block">Star Pest Control</strong>
                <span>Prasanth Nagar, Near LIC Office, Madanapalle, Andhra Pradesh, Pincode - 517325</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={16} className="text-brand-orange shrink-0" />
              <div className="flex flex-wrap gap-x-3 text-slate-300">
                <a href="tel:+918790851377" className="hover:text-white hover:underline">
                  +91 8790851377
                </a>
                <span>/</span>
                <a href="tel:+919492931535" className="hover:text-white hover:underline">
                  +91 9492931535
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={16} className="text-brand-orange shrink-0" />
              <a href="mailto:info@starpestcontrol.in" className="text-slate-300 hover:text-white hover:underline">
                info@starpestcontrol.in
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Under footer segment */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-16 pt-8 border-t border-slate-800 text-center flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-[11px]">
        <p>© {currentYear} Star Pest Control Madanapalle. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-300">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-slate-300">Terms of Service</a>
          <span>•</span>
          <a href="#" className="hover:text-slate-300">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

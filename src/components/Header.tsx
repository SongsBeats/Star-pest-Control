import React, { useState, useEffect } from "react";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavigate, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "services", label: "Our Services" },
    { id: "techniques", label: "Treatments" },
    { id: "why-choose-us", label: "Why Star" },
    { id: "faq", label: "FAQ" },
    { id: "booking", label: "Book Appointment" },
    { id: "tracking", label: "Track Status" },
  ];

  const handleItemClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <>
      {/* Top bar with quick contact info */}
      <div className="bg-brand-purple text-white text-xs py-2 px-4 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="opacity-90 font-sans">
              📍 Prasanth Nagar, Madanapalle, AP
            </span>
            <span className="opacity-60">|</span>
            <span className="opacity-90 font-sans">
              ✉️ info@starpestcontrol.in
            </span>
          </div>
          <div className="flex items-center gap-4 font-sans font-medium">
            <a href="tel:+918790851377" className="hover:text-brand-orange-light flex items-center gap-1 transition-colors">
              <Phone size={12} /> +91 8790851377
            </a>
            <a href="tel:+919492931535" className="hover:text-brand-orange-light flex items-center gap-1 transition-colors">
              <Phone size={12} /> +91 9492931535
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md py-2"
            : "bg-white/95 backdrop-blur-md py-4 border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Brand Logo */}
          <Logo size="sm" showTagline={!scrolled} />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? "text-brand-purple bg-brand-purple/5 font-semibold"
                    : "text-gray-600 hover:text-brand-purple hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action CTA & Phone Info */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="tel:+918790851377"
              className="flex items-center gap-1.5 px-3 py-1.5 border border-[#4B164C]/15 rounded-full text-xs font-semibold text-[#4B164C] hover:bg-[#4B164C]/5 transition-all"
            >
              <Phone size={13} className="text-brand-orange animate-pulse" />
              <span>Call: +91 8790851377</span>
            </a>
            <a
              href="https://wa.me/918790851377?text=Hi%20Star%20Pest%20Control,%20I%20would%20like%20to%20book%20a%20pest%20control%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 border border-emerald-500/20 bg-emerald-50/50 rounded-full text-xs font-semibold text-emerald-600 hover:bg-emerald-500/10 transition-all"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-500" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => handleItemClick("booking")}
              className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-brand-purple to-brand-purple-light hover:from-brand-purple-light hover:to-brand-purple text-white rounded-xl text-xs font-semibold shadow-md shadow-brand-purple/10 hover:shadow-lg hover:shadow-brand-purple/20 transition-all cursor-pointer"
            >
              <span>Get Free Quote</span>
              <ArrowRight size={13} />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-brand-purple hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-4 px-4 flex flex-col gap-3 animate-fadeIn">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  activeSection === item.id
                    ? "text-brand-purple bg-brand-purple/5 font-semibold"
                    : "text-gray-600 hover:text-brand-purple hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 border-t border-gray-100 flex flex-col gap-2.5 font-sans">
              <div className="grid grid-cols-1 gap-2 text-center">
                <a
                  href="tel:+918790851377"
                  className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50"
                >
                  <Phone size={14} className="text-[#F15A24]" />
                  <span>Call: +91 8790851377</span>
                </a>
                <a
                  href="tel:+919492931535"
                  className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50"
                >
                  <Phone size={14} className="text-[#F15A24]" />
                  <span>Call: +91 9492931535</span>
                </a>
                <a
                  href="https://wa.me/918790851377?text=Hi%20Star%20Pest%20Control,%20I%20would%20like%20to%20book%20a%20pest%20control%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-center items-center gap-1 py-2.5 border border-emerald-200 bg-emerald-50 rounded-xl text-[10px] font-bold text-emerald-700 hover:bg-emerald-100"
                >
                  <WhatsAppIcon className="w-4.5 h-4.5 text-emerald-500" />
                  <span>WhatsApp</span>
                </a>
              </div>
              <button
                onClick={() => handleItemClick("booking")}
                className="w-full text-center py-3.5 bg-brand-purple text-white rounded-xl text-sm font-bold shadow-md shadow-brand-purple/10 hover:bg-brand-purple-light transition-all cursor-pointer"
              >
                Book Inspection Now
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

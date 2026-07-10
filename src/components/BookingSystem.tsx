import React, { useState, useEffect } from "react";
import {
  Calendar,
  Phone,
  User,
  Mail,
  MapPin,
  ClipboardCheck,
  Search,
  CheckCircle,
  Clock,
  ArrowRight,
  Sparkles,
  RefreshCw,
  Home,
  Building,
  Activity,
  Trash2
} from "lucide-react";
import { SERVICES_DATA } from "../data";
import { Booking } from "../types";

// Pre-seeded initial bookings to make tracking immediately interesting and visual
const PRE_SEEDED_BOOKINGS: Booking[] = [
  {
    id: "SPC-1402-MPL",
    name: "Rajesh Sekhar",
    phone: "8790851377",
    email: "rajesh.sekhar@gmail.com",
    pestType: "termite",
    propertyType: "residential",
    areaSqFt: 1800,
    serviceAddress: "Prasanth Nagar, near LIC office, Madanapalle",
    preferredDate: "2026-07-12",
    preferredTime: "10:00 AM - 12:00 PM",
    status: "scheduled",
    priceEstimate: 3499,
    createdAt: "2026-07-09T09:30:00Z",
    technicianName: "Mr. Suresh Kumar",
    technicianPhone: "+91 9492931535",
    notes: "Pre-construction base inspection scheduled."
  },
  {
    id: "SPC-2294-KNL",
    name: "Kurnool Commercial Mall",
    phone: "9848022338",
    email: "facilities@kurnoolplaza.com",
    pestType: "cockroach",
    propertyType: "commercial",
    areaSqFt: 4500,
    serviceAddress: "Bellary Road, Kurnool, AP",
    preferredDate: "2026-07-11",
    preferredTime: "02:00 PM - 04:00 PM",
    status: "assigned",
    priceEstimate: 5999,
    createdAt: "2026-07-10T03:00:00Z",
    technicianName: "Mr. Ramesh Yadav",
    technicianPhone: "+91 8790851377",
    notes: "Odourless Gel Baiting in Food Court area."
  },
  {
    id: "SPC-0931-MPL",
    name: "Srinivasulu Reddy",
    phone: "9492931535",
    email: "srinivas.reddy@yahoo.com",
    pestType: "rat",
    propertyType: "residential",
    areaSqFt: 1200,
    serviceAddress: "Anantapur Road, Madanapalle",
    preferredDate: "2026-07-08",
    preferredTime: "09:00 AM - 11:00 AM",
    status: "completed",
    priceEstimate: 1499,
    createdAt: "2026-07-07T14:20:00Z",
    technicianName: "Mr. Ramesh Yadav",
    technicianPhone: "+91 8790851377",
    notes: "Bait stations deployed. Rodent trails successfully sealed."
  }
];

interface BookingSystemProps {
  preselectedPestId?: string;
  onClearPreselected?: () => void;
  activeTab: "book" | "track";
  setActiveTab: (tab: "book" | "track") => void;
}

export default function BookingSystem({
  preselectedPestId,
  onClearPreselected,
  activeTab,
  setActiveTab
}: BookingSystemProps) {
  // Booking Wizard States
  const [step, setStep] = useState(1);
  const [pestType, setPestType] = useState(preselectedPestId || "termite");
  const [propertyType, setPropertyType] = useState<Booking["propertyType"]>("residential");
  const [areaSqFt, setAreaSqFt] = useState(1500);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [serviceAddress, setServiceAddress] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("10:00 AM - 12:00 PM");
  const [notes, setNotes] = useState("");

  const [bookingSuccess, setBookingSuccess] = useState<Booking | null>(null);

  // Tracking States
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedBookings, setSearchedBookings] = useState<Booking[]>([]);
  const [searchExecuted, setSearchExecuted] = useState(false);

  // Local Storage Bookings list
  const [allBookings, setAllBookings] = useState<Booking[]>([]);

  // Initialize and load from Local Storage
  useEffect(() => {
    const saved = localStorage.getItem("star_pest_bookings");
    if (saved) {
      try {
        setAllBookings(JSON.parse(saved));
      } catch (e) {
        setAllBookings(PRE_SEEDED_BOOKINGS);
      }
    } else {
      localStorage.setItem("star_pest_bookings", JSON.stringify(PRE_SEEDED_BOOKINGS));
      setAllBookings(PRE_SEEDED_BOOKINGS);
    }
  }, []);

  // Update pest type if selected from parent
  useEffect(() => {
    if (preselectedPestId) {
      setPestType(preselectedPestId);
      setStep(1);
      setActiveTab("book");
      if (onClearPreselected) onClearPreselected();
    }
  }, [preselectedPestId]);

  // Calculate estimated price based on service details
  const getPriceEstimate = (): number => {
    const basePest = SERVICES_DATA.find((p) => p.id === pestType);
    if (!basePest) return 1000;

    let base = basePest.priceStart;
    
    // Scale slightly with area size (beyond a standard 1200 sqft baseline)
    if (areaSqFt > 1200) {
      const extraSqFt = areaSqFt - 1200;
      base += Math.round(extraSqFt * 0.45); // ₹0.45 per extra sqft
    }

    // Property factor
    if (propertyType === "commercial") {
      base = Math.round(base * 1.3); // 30% premium for commercial
    } else if (propertyType === "pre-construction") {
      base = Math.round(base * 1.2); // 20% premium for complex ground prep
    }

    return base;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const areaCode = serviceAddress.toLowerCase().includes("kurnool") ? "KNL" : "MPL";
    const bookingId = `SPC-${randomSuffix}-${areaCode}`;

    const newBooking: Booking = {
      id: bookingId,
      name,
      phone,
      email: email || "customer@starpestcontrol.in",
      pestType,
      propertyType,
      areaSqFt,
      serviceAddress,
      preferredDate,
      preferredTime,
      status: "pending",
      priceEstimate: getPriceEstimate(),
      createdAt: new Date().toISOString(),
      notes,
      technicianName: "Mr. Suresh Kumar", // Pre-assigned local coordinator
      technicianPhone: "+91 8790851377"
    };

    const updated = [newBooking, ...allBookings];
    setAllBookings(updated);
    localStorage.setItem("star_pest_bookings", JSON.stringify(updated));

    setBookingSuccess(newBooking);
    setStep(4);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const trimmed = searchQuery.trim().toLowerCase();
    const results = allBookings.filter(
      (b) => b.id.toLowerCase().includes(trimmed) || b.phone.includes(trimmed) || b.name.toLowerCase().includes(trimmed)
    );

    setSearchedBookings(results);
    setSearchExecuted(true);
  };

  const resetForm = () => {
    setStep(1);
    setName("");
    setPhone("");
    setEmail("");
    setServiceAddress("");
    setPreferredDate("");
    setNotes("");
    setBookingSuccess(null);
  };

  const handleDeleteBooking = (id: string) => {
    if (window.confirm("Are you sure you want to cancel and delete this booking record?")) {
      const updated = allBookings.filter((b) => b.id !== id);
      setAllBookings(updated);
      localStorage.setItem("star_pest_bookings", JSON.stringify(updated));
      setSearchedBookings(searchedBookings.filter((b) => b.id !== id));
    }
  };

  // Status timeline steps helper
  const getStatusStepClass = (currentStatus: string, stepName: string): { bg: string; text: string; border: string } => {
    const sequence = ["pending", "assigned", "scheduled", "completed"];
    const currentIndex = sequence.indexOf(currentStatus);
    const targetIndex = sequence.indexOf(stepName);

    if (currentIndex >= targetIndex) {
      // Completed or current
      if (currentIndex === targetIndex) {
        return { bg: "bg-brand-orange text-white", text: "text-brand-orange font-bold", border: "border-brand-orange" };
      }
      return { bg: "bg-brand-purple text-white", text: "text-brand-purple font-semibold", border: "border-brand-purple" };
    }
    return { bg: "bg-slate-100 text-slate-400", text: "text-slate-400", border: "border-slate-200" };
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/5 px-3.5 py-1.5 rounded-full">
            Online Booking Portal
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 tracking-tight text-slate-900 leading-tight">
            Schedule Your Treatment or Track Status
          </h2>
          <p className="mt-4 text-slate-600 font-sans leading-relaxed">
            Choose to book a free initial pest inspection or instantly track the real-time fulfillment status of your existing order using your registered details.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="max-w-md mx-auto flex bg-slate-100 p-1.5 rounded-2xl mb-12 border border-slate-200/50">
          <button
            onClick={() => {
              setActiveTab("book");
              setSearchExecuted(false);
            }}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "book"
                ? "bg-white text-brand-purple shadow-md"
                : "text-slate-600 hover:text-brand-purple"
            }`}
          >
            <ClipboardCheck size={16} />
            <span>Book New Service</span>
          </button>
          <button
            onClick={() => {
              setActiveTab("track");
              setSearchExecuted(false);
              setSearchQuery("");
            }}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "track"
                ? "bg-white text-brand-purple shadow-md"
                : "text-slate-600 hover:text-brand-purple"
            }`}
          >
            <Activity size={16} />
            <span>Track Live Status</span>
          </button>
        </div>

        {/* Booking Segment */}
        {activeTab === "book" && (
          <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200/80 rounded-3xl overflow-hidden shadow-xl grid md:grid-cols-12">
            
            {/* Sidebar Promo Column */}
            <div className="md:col-span-4 bg-gradient-to-br from-brand-purple to-brand-purple-light p-6 md:p-8 text-white flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-orange-light bg-white/10 px-2.5 py-1 rounded-full">
                  Free Inspection
                </span>
                <h3 className="font-display text-xl font-bold mt-4 leading-tight">
                  Zero Visiting Fee
                </h3>
                <p className="mt-3 text-xs text-purple-100 leading-relaxed font-sans">
                  Book a physical pest inspection completely free of cost. Our specialist will assess the infestation and provide a tailored, cost-effective plan.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Clock className="text-brand-orange-light" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider">Fast Turnaround</h4>
                    <p className="text-[10px] text-purple-100">Same-day inspection booking</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-black/15 rounded-2xl p-4.5 border border-white/5">
                <span className="text-[10px] uppercase font-bold tracking-wider text-purple-200 block">Inspection Fee</span>
                <span className="text-2xl font-extrabold text-white mt-1 block font-sans uppercase">
                  Free of Cost
                </span>
                <span className="text-[9px] text-purple-200 italic mt-0.5 block font-sans">
                  *Our team will inspect and provide an exact custom quotation.
                </span>
              </div>
            </div>

            {/* Form Fields Column */}
            <div className="md:col-span-8 p-6 sm:p-8 bg-white">
              {/* Steps Progress bar */}
              {step <= 3 && (
                <div className="flex items-center gap-3 mb-8">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex-1 flex items-center gap-2">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border transition-colors ${
                          step >= s
                            ? "bg-brand-purple text-white border-brand-purple"
                            : "bg-slate-50 text-slate-400 border-slate-200"
                        }`}
                      >
                        {s}
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-wider hidden sm:inline ${
                        step >= s ? "text-slate-800" : "text-slate-400"
                      }`}>
                        {s === 1 ? "Pest & Area" : s === 2 ? "Contact" : "Summary"}
                      </span>
                      {s < 3 && <div className="h-[2px] bg-slate-100 flex-1"></div>}
                    </div>
                  ))}
                </div>
              )}

              {/* STEP 1: Pest Category & Properties */}
              {step === 1 && (
                <div className="animate-fadeIn">
                  <h4 className="font-display font-bold text-slate-900 text-lg mb-4">
                    Select Pest Threat & Property Area
                  </h4>
                  <div className="space-y-5">
                    <div>
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-2">
                        Select Pest Category:
                      </label>
                      <select
                        value={pestType}
                        onChange={(e) => setPestType(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple font-medium"
                      >
                        {SERVICES_DATA.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.name} ({service.teluguName})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-2">
                        Property Type:
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { id: "residential", label: "Residential", desc: "Homes, Apartments" },
                          { id: "commercial", label: "Commercial", desc: "Offices, Hotels, Schools" },
                          { id: "pre-construction", label: "Pre-Construction", desc: "Anti-Termite Base Prep" },
                          { id: "post-construction", label: "Post-Construction", desc: "Sub-slab Drilling" }
                        ].map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setPropertyType(item.id as Booking["propertyType"])}
                            className={`p-3 text-left border rounded-xl transition-all cursor-pointer ${
                              propertyType === item.id
                                ? "border-brand-purple bg-brand-purple/5 shadow-sm"
                                : "border-slate-200 hover:border-slate-300 bg-white"
                            }`}
                          >
                            <span className="block text-xs font-bold text-slate-800">{item.label}</span>
                            <span className="text-[10px] text-slate-500 leading-tight mt-0.5 block font-sans">
                              {item.desc}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block">
                          Covered Square Footage (Sq. Ft):
                        </label>
                        <span className="text-xs font-extrabold text-brand-purple font-sans">
                          {areaSqFt.toLocaleString()} sqft
                        </span>
                      </div>
                      <input
                        type="range"
                        min="500"
                        max="8000"
                        step="100"
                        value={areaSqFt}
                        onChange={(e) => setAreaSqFt(Number(e.target.value))}
                        className="w-full accent-brand-purple h-2 bg-slate-200 rounded-lg cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-slate-400 font-sans mt-1">
                        <span>500 sqft</span>
                        <span>4000 sqft</span>
                        <span>8000 sqft</span>
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        onClick={() => setStep(2)}
                        className="px-6 py-3.5 bg-brand-purple hover:bg-brand-purple-light text-white text-xs font-bold rounded-xl shadow-md flex items-center gap-2 cursor-pointer"
                      >
                        <span>Provide Contact Details</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Client Contacts & Booking Dates */}
              {step === 2 && (
                <div className="animate-fadeIn">
                  <h4 className="font-display font-bold text-slate-900 text-lg mb-4">
                    Contact & Schedule Details
                  </h4>
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
                          Your Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="text"
                            required
                            placeholder="e.g., Rajesh Reddy"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="tel"
                            required
                            placeholder="e.g., 8790851377"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="email"
                            placeholder="e.g., name@domain.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
                          Preferred Inspection Date <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Calendar size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="date"
                            required
                            min={new Date().toISOString().split("T")[0]}
                            value={preferredDate}
                            onChange={(e) => setPreferredDate(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
                        Select Preferred Time Slot:
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          "09:00 AM - 12:00 PM",
                          "12:00 PM - 03:00 PM",
                          "03:00 PM - 06:00 PM"
                        ].map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setPreferredTime(time)}
                            className={`py-2 px-1 text-center border rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                              preferredTime === time
                                ? "border-brand-purple bg-brand-purple/5 text-brand-purple"
                                : "border-slate-200 hover:border-slate-300 text-slate-600 bg-white"
                            }`}
                          >
                            {time.split(" - ")[0]}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
                        Site Address / Location in Madanapalle area <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <MapPin size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                        <textarea
                          required
                          rows={2}
                          placeholder="Please provide full landmark and street details (e.g. Near LIC office, Prasanth Nagar, Madanapalle)"
                          value={serviceAddress}
                          onChange={(e) => setServiceAddress(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple"
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-5 py-3 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (!name.trim() || !phone.trim() || !serviceAddress.trim() || !preferredDate) {
                            alert("Please fill in all required fields (*) marked to proceed.");
                            return;
                          }
                          setStep(3);
                        }}
                        className="px-6 py-3.5 bg-brand-purple hover:bg-brand-purple-light text-white text-xs font-bold rounded-xl shadow-md flex items-center gap-2 cursor-pointer"
                      >
                        <span>Review Summary</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Review Invoice Details & Confirm */}
              {step === 3 && (
                <div className="animate-fadeIn">
                  <h4 className="font-display font-bold text-slate-900 text-lg mb-4">
                    Verify Your Booking Summary
                  </h4>
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-5 space-y-3.5">
                    <div className="grid grid-cols-2 gap-2 text-xs border-b border-slate-200/60 pb-3">
                      <div>
                        <span className="text-slate-400 uppercase font-semibold">Service:</span>
                        <p className="font-bold text-slate-800 mt-0.5">
                          {SERVICES_DATA.find((p) => p.id === pestType)?.name}
                        </p>
                      </div>
                      <div>
                        <span className="text-slate-400 uppercase font-semibold">Property:</span>
                        <p className="font-bold text-slate-800 mt-0.5 capitalize">
                          {propertyType} ({areaSqFt} sqft)
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs border-b border-slate-200/60 pb-3">
                      <div>
                        <span className="text-slate-400 uppercase font-semibold">Contact Name:</span>
                        <p className="font-bold text-slate-800 mt-0.5">{name}</p>
                      </div>
                      <div>
                        <span className="text-slate-400 uppercase font-semibold">Mobile Phone:</span>
                        <p className="font-bold text-slate-800 mt-0.5">{phone}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs border-b border-slate-200/60 pb-3">
                      <div>
                        <span className="text-slate-400 uppercase font-semibold">Preferred Schedule:</span>
                        <p className="font-bold text-slate-800 mt-0.5">
                          {preferredDate} @ {preferredTime.split(" - ")[0]}
                        </p>
                      </div>
                      <div>
                        <span className="text-slate-400 uppercase font-semibold">Support Email:</span>
                        <p className="font-bold text-slate-800 mt-0.5">{email || "N/A"}</p>
                      </div>
                    </div>

                    <div className="text-xs">
                      <span className="text-slate-400 uppercase font-semibold">Treatment Site Address:</span>
                      <p className="font-bold text-slate-800 mt-0.5 leading-relaxed">{serviceAddress}</p>
                    </div>
                  </div>

                  {/* Terms check */}
                  <p className="text-[11px] text-slate-500 leading-relaxed italic mb-6">
                    By submitting, you agree to receive a confirmation SMS and a call from Star Pest Control Madanapalle technicians to finalize the physical inspection slot. No visiting fees apply.
                  </p>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-3 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleBookingSubmit}
                      className="px-8 py-4 bg-brand-orange hover:bg-brand-orange-light text-white text-xs font-extrabold rounded-2xl shadow-lg shadow-brand-orange/20 flex items-center gap-2 cursor-pointer"
                    >
                      <span>Confirm & Book Free Inspection</span>
                      <Sparkles size={14} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: Animated Booking Success Screen */}
              {step === 4 && bookingSuccess && (
                <div className="text-center py-8 animate-fadeIn">
                  <div className="w-16 h-16 bg-green-50 text-green-500 border border-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                    <CheckCircle size={36} className="stroke-[2.5]" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-2xl">
                    Inspection Booked Successfully!
                  </h3>
                  <p className="mt-3 text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                    Thank you <strong className="text-slate-800">{bookingSuccess.name}</strong>. Your Star Pest Control appointment has been logged. Our local technicians will contact you shortly.
                  </p>

                  {/* Reference Card */}
                  <div className="mt-8 max-w-md mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left font-sans">
                    <div className="flex justify-between items-center border-b border-slate-200 pb-3 mb-3">
                      <span className="text-[10px] uppercase font-bold text-slate-400">Booking Reference</span>
                      <span className="text-sm font-black text-brand-purple font-mono bg-brand-purple/5 px-3 py-1 rounded-lg">
                        {bookingSuccess.id}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Service Area:</span>
                        <strong className="text-slate-800">Madanapalle Branch</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Scheduled Inspection:</span>
                        <strong className="text-slate-800">{bookingSuccess.preferredDate}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Contact Number:</span>
                        <strong className="text-slate-800">{bookingSuccess.phone}</strong>
                      </div>
                      <div className="flex justify-between pt-1 border-t border-slate-100 font-semibold text-brand-purple">
                        <span>Inspection Fee:</span>
                        <span className="text-brand-orange uppercase">FREE (₹0)</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-center gap-3">
                    <button
                      onClick={resetForm}
                      className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl"
                    >
                      Book Another Site
                    </button>
                    <button
                      onClick={() => {
                        setSearchQuery(bookingSuccess.id);
                        setSearchedBookings([bookingSuccess]);
                        setSearchExecuted(true);
                        setActiveTab("track");
                      }}
                      className="px-6 py-3 bg-brand-purple hover:bg-brand-purple-light text-white text-xs font-bold rounded-xl shadow-md"
                    >
                      Track Live Progress
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tracking Segment */}
        {activeTab === "track" && (
          <div className="max-w-4xl mx-auto bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-xl">
            <h3 className="font-display font-bold text-slate-900 text-2xl mb-2 text-center">
              Real-Time Treatment Tracker
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 text-center max-w-xl mx-auto mb-8 font-sans">
              Enter your unique booking reference ID (e.g. <code>SPC-1402-MPL</code>) or phone number (e.g. <code>8790851377</code>) to track your scheduled inspection or chemical spraying.
            </p>

            {/* Tracker Input form */}
            <form onSubmit={handleSearch} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3.5 mb-10">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  required
                  placeholder="Booking ID or Phone Number..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple font-medium"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-4 bg-brand-purple hover:bg-brand-purple-light text-white text-sm font-bold rounded-2xl shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Find Booking</span>
                <ArrowRight size={16} />
              </button>
            </form>

            {/* Seeding Demo Helper banner */}
            {!searchExecuted && (
              <div className="max-w-xl mx-auto bg-slate-50 border border-slate-200/60 rounded-2xl p-4 text-xs text-slate-500">
                <span className="font-bold text-brand-purple uppercase tracking-wider block mb-1">💡 Sandbox Simulation Helpers:</span>
                We pre-populated live entries. Copy & paste these references to test the progress timelines:
                <div className="mt-2 space-y-1.5 font-mono text-[11px] text-slate-700">
                  <div className="flex justify-between bg-white px-2.5 py-1.5 rounded border border-slate-100">
                    <span>📱 Phone: <strong>8790851377</strong></span>
                    <button onClick={() => { setSearchQuery("8790851377"); setTimeout(() => setSearchQuery("8790851377"), 50); }} className="text-brand-orange hover:underline">Select</button>
                  </div>
                  <div className="flex justify-between bg-white px-2.5 py-1.5 rounded border border-slate-100">
                    <span>🆔 ID: <strong>SPC-2294-KNL</strong></span>
                    <button onClick={() => { setSearchQuery("SPC-2294-KNL"); setTimeout(() => setSearchQuery("SPC-2294-KNL"), 50); }} className="text-brand-orange hover:underline">Select</button>
                  </div>
                </div>
              </div>
            )}

            {/* Results Grid / Tracking Display */}
            {searchExecuted && (
              <div className="space-y-8 animate-fadeIn border-t border-slate-100 pt-8">
                {searchedBookings.length > 0 ? (
                  searchedBookings.map((booking) => {
                    const pestDetails = SERVICES_DATA.find((p) => p.id === booking.pestType);
                    return (
                      <div key={booking.id} className="bg-slate-50 border border-slate-200 rounded-3xl p-5 sm:p-8 relative">
                        
                        {/* Cancel / Delete action */}
                        <button
                          onClick={() => handleDeleteBooking(booking.id)}
                          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                          title="Cancel Booking"
                        >
                          <Trash2 size={16} />
                        </button>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/60 pb-5 mb-6">
                          <div>
                            <span className="text-[10px] uppercase font-bold text-slate-400">Order ID & Client</span>
                            <div className="flex items-center gap-2.5 mt-1">
                              <h4 className="font-mono text-base font-extrabold text-brand-purple">
                                {booking.id}
                              </h4>
                              <span className="text-xs text-slate-500">•</span>
                              <span className="text-xs font-bold text-slate-700 capitalize">
                                {booking.name}
                              </span>
                            </div>
                          </div>
                          <div className="text-right sm:text-right">
                            <span className="text-[10px] uppercase font-bold text-slate-400">Pest Target</span>
                            <p className="text-xs font-bold text-slate-800 mt-1">
                              {pestDetails?.name || booking.pestType}
                            </p>
                          </div>
                        </div>

                        {/* Interactive Status Steps Visualizer */}
                        <div className="mb-8">
                          <span className="text-[10px] uppercase font-bold text-slate-400 block mb-4">Spraying & Fulfillment Progress</span>
                          <div className="grid grid-cols-4 gap-2 text-center relative">
                            {/* Horizontal progress background line */}
                            <div className="absolute top-[14px] left-[12%] right-[12%] h-[2px] bg-slate-200 -z-10"></div>

                            {[
                              { key: "pending", title: "Received", desc: "Inspection Logged" },
                              { key: "assigned", title: "Assigned", desc: "Officer Appointed" },
                              { key: "scheduled", title: "Scheduled", desc: "Date Confirmed" },
                              { key: "completed", title: "Completed", desc: "Sprayed & Certified" }
                            ].map((stepItem) => {
                              const classes = getStatusStepClass(booking.status, stepItem.key);
                              return (
                                <div key={stepItem.key} className="flex flex-col items-center">
                                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold transition-all ${classes.bg} ${classes.border}`}>
                                    {stepItem.key === "pending" ? "1" : stepItem.key === "assigned" ? "2" : stepItem.key === "scheduled" ? "3" : "4"}
                                  </div>
                                  <span className={`text-[11px] uppercase tracking-wider mt-2.5 ${classes.text}`}>
                                    {stepItem.title}
                                  </span>
                                  <span className="text-[9px] text-slate-400 leading-normal mt-0.5 hidden sm:block font-sans">
                                    {stepItem.desc}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Allocated Staff Card */}
                        <div className="grid sm:grid-cols-2 gap-4 bg-white rounded-2xl p-4.5 border border-slate-200/60 font-sans">
                          <div>
                            <span className="text-[9px] uppercase font-bold text-slate-400 block">Assigned Local Inspector</span>
                            <div className="flex items-center gap-2 mt-1.5">
                              <div className="w-8 h-8 bg-brand-purple/5 text-brand-purple rounded-lg flex items-center justify-center text-xs font-bold">
                                SK
                              </div>
                              <div>
                                <h5 className="text-xs font-bold text-slate-800">{booking.technicianName || "Mr. Suresh Kumar"}</h5>
                                <a href={`tel:${booking.technicianPhone || "8790851377"}`} className="text-[10px] text-brand-purple hover:underline font-semibold flex items-center gap-1 mt-0.5">
                                  <Phone size={10} /> {booking.technicianPhone || "+91 8790851377"}
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="sm:border-l sm:border-slate-100 sm:pl-4">
                            <span className="text-[9px] uppercase font-bold text-slate-400 block">Appointment Log & Info</span>
                            <div className="mt-1.5 text-xs text-slate-600 leading-relaxed font-sans space-y-1">
                              <p>🗓️ <strong>Target:</strong> {booking.preferredDate} ({booking.preferredTime})</p>
                              <p>📍 <strong>Address:</strong> {booking.serviceAddress}</p>
                            </div>
                          </div>
                        </div>

                        {/* Interactive Status Simulation (Sandbox) */}
                        <div className="mt-5 bg-brand-orange/5 border border-brand-orange/15 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div>
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-orange">Simulation Controller (Sandbox)</span>
                            <p className="text-[11px] text-slate-600 font-sans mt-0.5 leading-snug">
                              Simulate step advancement on this booking.
                            </p>
                          </div>
                          <div className="flex gap-2">
                            {(["pending", "assigned", "scheduled", "completed"] as Booking["status"][]).map((st) => (
                              <button
                                key={st}
                                onClick={() => {
                                  const updated = allBookings.map((b) => (b.id === booking.id ? { ...b, status: st } : b));
                                  setAllBookings(updated);
                                  localStorage.setItem("star_pest_bookings", JSON.stringify(updated));
                                  setSearchedBookings(searchedBookings.map((b) => (b.id === booking.id ? { ...b, status: st } : b)));
                                }}
                                className={`px-2.5 py-1.5 rounded-lg text-[10px] font-bold border transition-all cursor-pointer ${
                                  booking.status === st
                                    ? "bg-brand-purple text-white border-brand-purple"
                                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                                }`}
                              >
                                {st === "pending" ? "Recv" : st === "assigned" ? "Asgn" : st === "scheduled" ? "Sched" : "Done"}
                              </button>
                            ))}
                          </div>
                        </div>

                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-10 bg-slate-50 border border-dashed border-slate-200 rounded-3xl">
                    <p className="text-slate-500 font-medium">No booking found matching "{searchQuery}".</p>
                    <p className="text-xs text-slate-400 font-sans mt-1">Please double-check your ID or try another phone number.</p>
                    <button
                      type="button"
                      onClick={() => setSearchExecuted(false)}
                      className="mt-3.5 text-xs font-bold text-brand-purple hover:underline"
                    >
                      Clear Search & Try Helpers
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}

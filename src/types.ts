export interface PestService {
  id: string;
  name: string;
  teluguName: string;
  description: string;
  iconName: string;
  imageUrl?: string;
  dangerLevel: "High" | "Medium" | "Low";
  symptom: string;
  priceStart: number;
  techniques: string[];
}

export interface Booking {
  id: string;
  name: string;
  phone: string;
  email: string;
  pestType: string;
  propertyType: "residential" | "commercial" | "pre-construction" | "post-construction";
  areaSqFt: number;
  serviceAddress: string;
  preferredDate: string;
  preferredTime: string;
  status: "pending" | "assigned" | "scheduled" | "completed";
  priceEstimate: number;
  createdAt: string;
  notes?: string;
  technicianName?: string;
  technicianPhone?: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ClientPartner {
  name: string;
  logoText: string;
  industry: string;
}

export interface TechniqueItem {
  title: string;
  category: "Pre-Construction" | "Post-Construction" | "General";
  description: string;
  iconName: string;
  imageUrl?: string;
}

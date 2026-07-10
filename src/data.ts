import { PestService, WhyChooseUsItem, ClientPartner, TechniqueItem } from "./types";

export const SERVICES_DATA: PestService[] = [
  {
    id: "termite",
    name: "Termite & Anti-Termite Treatment",
    teluguName: "చెదపురుగు నియంత్రణ",
    description: "Comprehensive Pre and Post Construction Termite treatment designed to provide long-lasting structural protection for your property investment against termite infestations.",
    iconName: "ShieldAlert",
    imageUrl: "https://images.unsplash.com/photo-1595275313337-5a3d07245c43?auto=format&fit=crop&w=600&q=80",
    dangerLevel: "High",
    symptom: "Mud tubes on walls, hollow-sounding wood, discarded wings, damage to timber frames.",
    priceStart: 2499,
    techniques: [
      "Soil Treatment (Pre-Construction)",
      "Termite Baiting Systems (Post-Construction)",
      "Liquid Barrier Treatment",
      "Wood Preservative Spray"
    ]
  },
  {
    id: "cockroach",
    name: "Cockroach Control & Gel Treatment",
    teluguName: "బొద్దింక నియంత్రణ",
    description: "Highly effective gel baiting and residual sprays that eliminate German and American cockroaches at their source, preventing food contamination.",
    iconName: "FlameKindling",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
    dangerLevel: "High",
    symptom: "Cockroach sightings at night, small black droppings, dark smear marks on surfaces.",
    priceStart: 1199,
    techniques: [
      "Advanced Gel Baiting (Odourless)",
      "Hole-and-Crevice Vacuum Injection",
      "Pheromone Glue Traps",
      "Residual Chemical Boundary Spray"
    ]
  },
  {
    id: "rat",
    name: "Rodent & Rat Control Treatment",
    teluguName: "ఎలుక నియంత్రణ",
    description: "Strategic placement of tamper-resistant bait stations and traps to control and eliminate mice and rat infestations, protecting electrical lines.",
    iconName: "Binoculars",
    imageUrl: "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?auto=format&fit=crop&w=600&q=80",
    dangerLevel: "High",
    symptom: "Gnawed wires or plastic, scratching noises in ceilings, dark capsule-shaped droppings.",
    priceStart: 1499,
    techniques: [
      "Tamper-Resistant Rodent Bait Stations",
      "Glue Board Placement",
      "Burrow Treatment & Soil Gassing",
      "Entry Point Sealing Consultation"
    ]
  },
  {
    id: "mosquitoes",
    name: "Mosquitoes Control & Fogging",
    teluguName: "దోమల నియంత్రణ",
    description: "Keep Dengue, Malaria, and Zika at bay. Our multi-action approach includes misting, thermal fogging, and larvicide treatment in breeding areas.",
    iconName: "Wind",
    imageUrl: "https://images.unsplash.com/photo-1576089172869-4f5f6f315620?auto=format&fit=crop&w=600&q=80",
    dangerLevel: "High",
    symptom: "High swarm density around water sources or dark corners, buzzing sounds, itchy bites.",
    priceStart: 999,
    techniques: [
      "Eco-friendly Larvicidal Spraying",
      "Thermal Fogging (Outdoor)",
      "Cold Fogging / Mist Spraying (Indoor)",
      "Standing Water Treatment"
    ]
  },
  {
    id: "ant",
    name: "Ant Control & Treatment",
    teluguName: "చీమల నియంత్రణ",
    description: "Elimination of ant trails and colonies, including carpenter ants, black ants, and red ants, using systemic baits that eliminate the queen.",
    iconName: "Bug",
    imageUrl: "https://images.unsplash.com/photo-1603796846097-bee99e4a60c9?auto=format&fit=crop&w=600&q=80",
    dangerLevel: "Medium",
    symptom: "Persistent trails of ants, piles of fine sawdust (frass), soil mounds near foundations.",
    priceStart: 899,
    techniques: [
      "Systemic Bait Gels",
      "Nest Location & Direct Liquid Treatment",
      "Barrier Dusting in Wall Voids",
      "Foundation perimeter protection"
    ]
  },
  {
    id: "flies",
    name: "Flies Control & Treatment",
    teluguName: "ఫ్లైస్ కంట్రోల్",
    description: "Sanitation advice paired with highly effective electronic fly traps, chemical baiting, and structural barriers to eliminate disease-carrying houseflies.",
    iconName: "Sparkles",
    imageUrl: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=600&q=80",
    dangerLevel: "Medium",
    symptom: "Swarms around waste bins, organic material, or food prep zones, dark specks on lights.",
    priceStart: 999,
    techniques: [
      "Advanced Paint Gels",
      "UV-Light Fly Trappers (Commercial)",
      "Larvicide Spot Misting",
      "Sanitation Boundary Treatments"
    ]
  },
  {
    id: "snake",
    name: "Snake Control & Safeguarding",
    teluguName: "పాము నియంత్రణ",
    description: "Safe, expert-driven snake deterrence and removal service. We use chemical repellents and identify structural vulnerabilities to protect families.",
    iconName: "Skull",
    imageUrl: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&w=600&q=80",
    dangerLevel: "High",
    symptom: "Shed snake skins, crawl tracks in soil/dust, unexplained rustling in gardens/piles.",
    priceStart: 1999,
    techniques: [
      "Natural / Chemical Snake Repellent Barriers",
      "Debris & Rock Pile Inspection",
      "Entry Spot Identification and Proofing",
      "Emergency Certified Relocation Service"
    ]
  },
  {
    id: "spider",
    name: "Spider Control & Web Cleansing",
    teluguName: "స్పైడర్ కంట్రోల్",
    description: "Complete removal of unsightly spider webs and targeted sprays to eliminate venomous and non-venomous spiders in indoor and outdoor spaces.",
    iconName: "Eye",
    imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=600&q=80",
    dangerLevel: "Low",
    symptom: "Accumulation of cobwebs in ceiling corners, window panes, closets, and garages.",
    priceStart: 799,
    techniques: [
      "Web Removal and Cleaning",
      "Insect Food Source Elimination Spray",
      "Residual Perimeter Barrier",
      "Cracks & Crevices Dusting"
    ]
  }
];

export const WHY_US_DATA: WhyChooseUsItem[] = [
  {
    id: "no-charge",
    title: "No Visiting Charges",
    description: "We provide a complimentary initial inspection conducted by our expert technicians, ensuring there are no initial or hidden expenses.",
    iconName: "CheckCircle"
  },
  {
    id: "certified",
    title: "Certified Technicians",
    description: "Our certified technicians are equipped with the necessary expertise, tools, and training to adeptly tackle any complex pest-related concerns.",
    iconName: "Award"
  },
  {
    id: "reasonable",
    title: "Reasonable Price",
    description: "While maintaining top-notch international quality standards, we provide cost-effective solutions to safeguard your property.",
    iconName: "TrendingDown"
  },
  {
    id: "warranty",
    title: "Service Warranty",
    description: "We assure efficient pest control services and commit to resolving any recurring concerns within the warranty period without any additional costs.",
    iconName: "Shield"
  },
  {
    id: "satisfaction",
    title: "100% Satisfaction",
    description: "We strive to exceed expectations and guarantee your utmost peace of mind and satisfaction with our professional pest control services.",
    iconName: "Smile"
  },
  {
    id: "ontime",
    title: "Ontime Completion",
    description: "We provide prompt, punctual, and effective solutions to resolve your pest issues without creating unnecessary delays or downtime.",
    iconName: "Clock"
  }
];

export const CLIENTS_DATA: ClientPartner[] = [
  { name: "Greenko", logoText: "greenko", industry: "Renewable Energy" },
  { name: "Poly Jed Solar", logoText: "Poly Jed Solar", industry: "Solar Power" },
  { name: "Axis Bank", logoText: "Axis Bank", industry: "Banking & Finance" },
  { name: "Shanthiram College", logoText: "Shanthiram College", industry: "Medical Education" },
  { name: "Tourist Hotel", logoText: "Tourist Hotel", industry: "Hospitality" },
  { name: "Hotel Palla's Pride", logoText: "HOTEL PALLA'S PRIDE", industry: "Premium Hospitality" }
];

export const TECHNIQUES_DATA: TechniqueItem[] = [
  {
    title: "Soil Treatment",
    category: "Pre-Construction",
    description: "Creating a chemical barrier in the soil beneath and around the foundation during the excavation and construction stages to block subterranean termites.",
    iconName: "Layers",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Termite Baiting Systems",
    category: "Post-Construction",
    description: "Installing smart monitoring and baiting stations strategically around the property boundary that termites feed on and distribute, wiping out the entire colony.",
    iconName: "Target",
    imageUrl: "https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Liquid Barrier Treatment",
    category: "Post-Construction",
    description: "Injecting high-performance liquid termiticides into drill holes around foundation walls to establish a continuous, lethal chemical shield against pests.",
    iconName: "Droplet",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Wood Treatment",
    category: "General",
    description: "Applying deep-penetrating borate and chemical preservatives directly onto structural wood, door frames, and plywood to repel woodborers and termites.",
    iconName: "Hammer",
    imageUrl: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Foundation Ventilation",
    category: "General",
    description: "Improving airflow under floors and in crawlspaces to reduce humidity and dampness, which naturally deters termite activity and wood-decay fungi.",
    iconName: "Wind",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Physical Barriers",
    category: "Pre-Construction",
    description: "Installing robust plastic membranes, stainless steel mesh, or gravel barriers during construction that termites are physically unable to chew through.",
    iconName: "Fence",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"
  }
];

import type {
  Service,
  Stat,
  Industry,
  ProcessStep,
  Testimonial,
  NavLink,
  FooterColumn,
  SustainabilityPoint,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#why-us" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#cta" },
];

export const HERO = {
  headline: "Pristine Spaces for",
  highlightedWord: "Exceptional",
  headlineSuffix: "Businesses",
  subheadline:
    "Estonia's premier commercial cleaning partner. Trusted by leading corporations to maintain spotless environments that inspire productivity.",
  ctaPrimary: "Get a Free Quote",
  ctaSecondary: "Our Services",
};

export const LOGO_COMPANIES = [
  "Ericsson",
  "Bolt",
  "Wise",
  "Nortal",
  "Telia",
  "Swedbank",
  "Luminor",
  "Tallink",
];

export const SERVICES: Service[] = [
  {
    icon: "Building2",
    title: "Office Cleaning",
    description:
      "Daily & periodic cleaning for corporate offices, ensuring a pristine working environment for your team.",
  },
  {
    icon: "Factory",
    title: "Industrial Cleaning",
    description:
      "Warehouses, factories, and production facilities cleaned to the highest safety and hygiene standards.",
  },
  {
    icon: "Store",
    title: "Retail & Commercial",
    description:
      "Shopping centers and showrooms maintained to create an inviting atmosphere for your customers.",
  },
  {
    icon: "HardHat",
    title: "Post-Construction Cleanup",
    description:
      "After renovation deep cleaning that transforms construction sites into move-in ready spaces.",
  },
  {
    icon: "PanelsTopLeft",
    title: "Window & Facade Cleaning",
    description:
      "High-rise and commercial exterior cleaning using professional-grade equipment and techniques.",
  },
  {
    icon: "ShieldCheck",
    title: "Specialized Sanitization",
    description:
      "Disinfection and healthcare-grade protocols for environments requiring the highest hygiene standards.",
  },
];

export const STATS: Stat[] = [
  {
    value: "15",
    suffix: "+",
    label: "Years of Experience",
    description:
      "Over a decade of delivering exceptional commercial cleaning services across Estonia.",
  },
  {
    value: "500",
    suffix: "+",
    label: "Corporate Clients",
    description:
      "Trusted by hundreds of businesses, from startups to Fortune 500 enterprises.",
  },
  {
    value: "99.7",
    suffix: "%",
    label: "Satisfaction Rate",
    description:
      "Our commitment to quality is reflected in our industry-leading client satisfaction.",
  },
];

export const INDUSTRIES: Industry[] = [
  {
    name: "Corporate Offices",
    description: "Daily maintenance and deep cleaning for modern workspaces",
    clientCount: "200+",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    name: "Business Centers",
    description: "Comprehensive cleaning for multi-tenant commercial properties",
    clientCount: "85+",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    name: "Retail Chains",
    description: "Spotless shopping environments that enhance customer experience",
    clientCount: "120+",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    name: "Logistics & Warehouses",
    description: "Industrial-grade cleaning for distribution and storage facilities",
    clientCount: "60+",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    name: "Healthcare Facilities",
    description: "Medical-grade sanitization meeting strict healthcare regulations",
    clientCount: "45+",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  },
  {
    name: "Hotels & Hospitality",
    description: "Premium cleaning services for guest-facing environments",
    clientCount: "70+",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  },
  {
    name: "Educational Institutions",
    description: "Safe and hygienic learning environments for students and staff",
    clientCount: "55+",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
  },
  {
    name: "Government Buildings",
    description: "Reliable cleaning services meeting public sector compliance standards",
    clientCount: "30+",
    image:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=800&q=80",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    icon: "ClipboardList",
    title: "Consultation",
    description:
      "We assess your facility and understand your unique requirements through a comprehensive on-site evaluation.",
  },
  {
    number: 2,
    icon: "FileText",
    title: "Custom Plan",
    description:
      "Tailored cleaning protocol designed for your space, schedule, and specific industry requirements.",
  },
  {
    number: 3,
    icon: "Sparkles",
    title: "Execution",
    description:
      "Our trained professionals deliver with precision and discretion, using eco-certified products and methods.",
  },
  {
    number: 4,
    icon: "CheckCircle",
    title: "Quality Assurance",
    description:
      "Regular inspections, detailed reporting, and continuous improvement to exceed your expectations.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "SPS transformed our office environment completely. Their attention to detail is remarkable — every surface gleams, and our team has noticed a genuine improvement in workplace morale.",
    name: "Maria Kask",
    title: "Facilities Director",
    company: "Nordic Tech Solutions",
    stars: 5,
  },
  {
    quote:
      "We've worked with several cleaning companies, but none match the consistency and professionalism of SPS. They treat our retail spaces as if they were their own.",
    name: "Andrei Volkov",
    title: "Operations Manager",
    company: "Baltic Retail Group",
    stars: 5,
  },
  {
    quote:
      "The post-construction cleanup they delivered for our new headquarters was flawless. Move-in ready ahead of schedule. Highly recommend their specialized services.",
    name: "Laura Tamm",
    title: "Project Manager",
    company: "EstBuild Properties",
    stars: 5,
  },
  {
    quote:
      "Their healthcare-grade sanitization protocols gave us complete confidence during challenging times. Professional, thorough, and always reliable.",
    name: "Dr. Henrik Pärn",
    title: "Chief Medical Officer",
    company: "Tallinn Health Center",
    stars: 5,
  },
];

export const SUSTAINABILITY_POINTS: SustainabilityPoint[] = [
  { text: "Eco-certified cleaning products used across all services" },
  { text: "Waste reduction & recycling protocols at every job site" },
  { text: "Carbon footprint tracking & annual reporting" },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Services", href: "#services" },
      { label: "About Us", href: "#why-us" },
      { label: "Industries", href: "#industries" },
      { label: "Contact", href: "#cta" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Office Cleaning", href: "#" },
      { label: "Industrial Cleaning", href: "#" },
      { label: "Retail & Commercial", href: "#" },
      { label: "Post-Construction", href: "#" },
      { label: "Window & Facade", href: "#" },
      { label: "Sanitization", href: "#" },
    ],
  },
];

export const FOOTER_CONTACT = {
  address: "Tornimäe 5, 10145 Tallinn, Estonia",
  phone: "+372 600 1234",
  email: "info@sps-cleaning.ee",
  hours: "Mon – Fri: 07:00 – 20:00",
  weekendHours: "Sat: 09:00 – 16:00",
};

export const COMPANY = {
  name: "SPS",
  fullName: "SPS Professional Cleaning",
  description:
    "Estonia's leading commercial cleaning company, delivering premium facility maintenance solutions for corporate clients since 2009.",
  copyright: `© ${new Date().getFullYear()} SPS Professional Cleaning. All rights reserved.`,
};

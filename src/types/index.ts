export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  suffix: string;
  label: string;
  description: string;
}

export interface Industry {
  name: string;
  description: string;
  clientCount: string;
  image: string;
}

export interface ProcessStep {
  number: number;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  stars: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SustainabilityPoint {
  text: string;
}

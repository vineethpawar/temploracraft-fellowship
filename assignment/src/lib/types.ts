export interface Bullet { id: string; text: string }

export interface Experience {
  id: string;
  role: string;
  company: string;
  bullets: Bullet[];
}

export interface ResumeDoc {
  name: string;
  email: string;
  phone: string;
  summary: string;
  experience: Experience[];
  education: { id: string; degree: string; institution: string }[];
  skills: string[];
}

export interface Finding {
  section: "impact" | "brevity" | "completeness" | "language" | "contact";
  message: string;
  pointsLost: number;
}

export interface Template {
  slug: string;
  name: string;
  author: string;
  tags: string[];
}

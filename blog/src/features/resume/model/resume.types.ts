export interface ResumeContact {
  label: string;
  value: string;
  href: string;
}

export interface ResumeHero {
  name: string;
  role: string;
  quote: string;
  summary: string[];
  contacts: ResumeContact[];
}

export interface ResumeStrengths {
  tags: string[];
  bullets: string[];
}

export interface ResumeNarrativeItem {
  lead: string;
  detail: string;
}

export interface ResumeEntry {
  title: string;
  period: string;
  tags: string[];
  summary?: string;
  bullets: ResumeNarrativeItem[];
}

export interface ResumeCareerGroup {
  organization: string;
  tenure: string;
  entries: ResumeEntry[];
}

export interface ResumeProject {
  organization: string;
  period: string;
  title: string;
  summary: string;
  tags: string[];
  bullets: string[];
}

export interface ResumeSkillGroup {
  label: string;
  items: string[];
}

export interface ResumeEducation {
  school: string;
  program: string;
  period: string;
}

export interface ResumeCertification {
  year: string;
  name: string;
}

export interface ResumeExperienceItem {
  title: string;
  organization?: string;
  period: string;
  bullets: string[];
}

export interface ResumeExperienceYear {
  year: string;
  items: ResumeExperienceItem[];
}

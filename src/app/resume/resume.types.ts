export interface ResumeSectionLink {
  id: string;
  label: string;
}

export interface TimelineItem {
  title: string;
  period: string;
  tags: string[];
  bullets: string[];
  summary?: string;
  sub?: string;
}

export interface TimelineOrganization {
  name: string;
  role: string;
}

export interface CompactItem {
  title: string;
  period: string;
  detail?: string;
}

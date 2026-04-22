"use client";

import Wrapper from "@/components/layout/Wrapper";
import {
  activityItems,
  awardItems,
  certificationItems,
  educationItems,
  experienceItems,
  experienceOrganization,
  projectItems,
  sections,
} from "@/features/resume/model/resume.data";
import { Main, PageRoot } from "@/features/resume/styles/ResumePage.styles";
import { useEffect, useState } from "react";
import CompactSection from "./CompactSection";
import SideNavigator from "./SideNavigator";
import TimelineSection from "./TimelineSection";

export default function ResumePageClient() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const targets = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean) as HTMLElement[];

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.35, 0.6],
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    setActiveSection(id);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Wrapper maxWidth={768} center fullHeight={false}>
      <PageRoot>
        <SideNavigator
          sections={sections}
          activeSection={activeSection}
          onNavClick={handleNavClick}
        />

        <Main>
          <TimelineSection
            id="experience"
            title="Experience"
            items={experienceItems}
            organization={experienceOrganization}
          />
          <TimelineSection
            id="projects"
            title="Projects"
            items={projectItems}
          />
          <CompactSection
            id="education"
            title="Education"
            items={educationItems}
          />
          <CompactSection
            id="certification"
            title="Certification"
            items={certificationItems}
          />
          <CompactSection id="awards" title="Awards" items={awardItems} />
          <CompactSection
            id="activity"
            title="Activity"
            items={activityItems}
          />
        </Main>
      </PageRoot>
    </Wrapper>
  );
}

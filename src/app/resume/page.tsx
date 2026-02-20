"use client";

import Wrapper from "@/components/layout/Wrapper";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import CompactSection from "./components/CompactSection";
import SideNavigator from "./components/SideNavigator";
import TimelineSection from "./components/TimelineSection";
import {
  activityItems,
  awardItems,
  certificationItems,
  educationItems,
  experienceItems,
  experienceOrganization,
  projectItems,
  sections,
} from "./resume.data";

export default function ResumePage() {
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

const PageRoot = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: var(--padding-8) var(--padding-6);
  max-width: 100%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: var(--gap-12);
`;

import type { ResumeSectionLink } from "../resume.types";
import {
  SideNav,
  SideNavButton,
  SideNavList,
  SideNavRail,
} from "../styles/SideNavigator.styles";

interface SideNavigatorProps {
  sections: ResumeSectionLink[];
  activeSection: string;
  onNavClick: (id: string) => void;
}

export default function SideNavigator({
  sections,
  activeSection,
  onNavClick,
}: SideNavigatorProps) {
  return (
    <SideNavRail>
      <SideNav aria-label="Resume section navigator">
        <SideNavList>
          {sections.map((section) => (
            <li key={section.id}>
              <SideNavButton
                type="button"
                data-active={activeSection === section.id}
                onClick={() => onNavClick(section.id)}
              >
                {section.label}
              </SideNavButton>
            </li>
          ))}
        </SideNavList>
      </SideNav>
    </SideNavRail>
  );
}

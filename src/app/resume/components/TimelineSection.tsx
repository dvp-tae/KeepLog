import Text from "@/components/common/Text";
import type { TimelineItem, TimelineOrganization } from "../resume.types";
import {
  Bullet,
  BulletList,
  Organization,
  OrganizationName,
  OrganizationRole,
  RowTop,
  Section,
  SectionHeader,
  SkillPill,
  SkillPills,
  TimelineContent,
  TimelineItem as TimelineCard,
  TimelineList,
  TimelinePeriod,
  TimelineSubTitle,
  TimelineSummary,
  TimelineTitle,
} from "../styles/TimelineSection.styles";

interface TimelineSectionProps {
  id: string;
  title: string;
  items: TimelineItem[];
  organization?: TimelineOrganization;
}

export default function TimelineSection({
  id,
  title,
  items,
  organization,
}: TimelineSectionProps) {
  return (
    <Section id={id}>
      <SectionHeader>
        <Text variant="h2" color="text">
          {title}
        </Text>
      </SectionHeader>

      {organization ? (
        <Organization align="center" justify="flex-start">
          <OrganizationName>{organization.name}</OrganizationName>
          <OrganizationRole>{organization.role}</OrganizationRole>
        </Organization>
      ) : null}

      <TimelineList>
        {items.map((item) => (
          <TimelineCard key={`${item.title}-${item.period}`}>
            <TimelineContent>
              <RowTop>
                <div>
                  <TimelineTitle>{item.title}</TimelineTitle>
                  {item.sub ? <TimelineSubTitle>{item.sub}</TimelineSubTitle> : null}
                </div>
                <TimelinePeriod>{item.period}</TimelinePeriod>
              </RowTop>

              {item.summary ? <TimelineSummary>{item.summary}</TimelineSummary> : null}

              <SkillPills>
                {item.tags.map((tag) => (
                  <SkillPill key={`${item.title}-${tag}`}>{tag}</SkillPill>
                ))}
              </SkillPills>

              <BulletList>
                {item.bullets.map((bullet) => (
                  <Bullet key={`${item.title}-${bullet}`}>{bullet}</Bullet>
                ))}
              </BulletList>
            </TimelineContent>
          </TimelineCard>
        ))}
      </TimelineList>
    </Section>
  );
}

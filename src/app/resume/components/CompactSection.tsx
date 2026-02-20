import Text from "@/components/common/Text";
import type { ReactNode } from "react";
import type { CompactItem } from "../resume.types";
import {
  ActivityDetail,
  ActivityItem,
  ActivityPeriod,
  ActivityTimeline,
  ActivityTitle,
  AwardDetail,
  AwardItem,
  AwardPeriod,
  AwardsList,
  AwardTitle,
  CertificationCard,
  CertificationDetail,
  CertificationList,
  CertificationPeriod,
  CertificationTitle,
  EducationCard,
  EducationDetail,
  EducationPeriodPill,
  EducationRowTop,
  EducationTitle,
  Section,
} from "../styles/CompactSection.styles";
import { SectionHeader } from "../styles/TimelineSection.styles";

type CompactVariant = "education" | "certification" | "awards" | "activity";

interface CompactSectionProps {
  id: string;
  title: string;
  items: CompactItem[];
}

function toVariant(id: string): CompactVariant {
  if (id === "education") return "education";
  if (id === "certification") return "certification";
  if (id === "awards") return "awards";
  return "activity";
}

function splitActivityItem(item: CompactItem) {
  if (item.detail) {
    return { title: item.title, detail: item.detail };
  }

  const [title, detail] = item.title.split("|").map((part) => part.trim());
  return { title: title ?? item.title, detail: detail ?? "" };
}

function renderEducation(items: CompactItem[]) {
  const item = items[0];
  if (!item) return null;

  return (
    <EducationCard>
      <EducationRowTop>
        <div>
          <EducationTitle>{item.title}</EducationTitle>
          {item.detail ? (
            <EducationDetail>{item.detail}</EducationDetail>
          ) : null}
        </div>
        <EducationPeriodPill>{item.period}</EducationPeriodPill>
      </EducationRowTop>
    </EducationCard>
  );
}

function renderCertification(items: CompactItem[]) {
  return (
    <CertificationList>
      {items.map((item) => (
        <CertificationCard key={`${item.title}-${item.period}`}>
          <div>
            <CertificationTitle>{item.title}</CertificationTitle>
            {item.detail ? (
              <CertificationDetail>{item.detail}</CertificationDetail>
            ) : null}
          </div>
          <CertificationPeriod>{item.period}</CertificationPeriod>
        </CertificationCard>
      ))}
    </CertificationList>
  );
}

function renderAwards(items: CompactItem[]) {
  return (
    <AwardsList>
      {items.map((item) => (
        <AwardItem key={`${item.title}-${item.period}`}>
          <AwardPeriod>{item.period}</AwardPeriod>
          <AwardTitle>{item.title}</AwardTitle>
          {item.detail ? <AwardDetail>{item.detail}</AwardDetail> : null}
        </AwardItem>
      ))}
    </AwardsList>
  );
}

function renderActivity(items: CompactItem[]) {
  return (
    <ActivityTimeline>
      {items.map((item) => {
        const { title, detail } = splitActivityItem(item);

        return (
          <ActivityItem key={`${item.title}-${item.period}`}>
            <ActivityPeriod>{item.period}</ActivityPeriod>
            <ActivityTitle>{title}</ActivityTitle>
            {detail ? <ActivityDetail>{detail}</ActivityDetail> : null}
          </ActivityItem>
        );
      })}
    </ActivityTimeline>
  );
}

function renderVariant(
  variant: CompactVariant,
  items: CompactItem[]
): ReactNode {
  if (variant === "education") return renderEducation(items);
  if (variant === "certification") return renderCertification(items);
  if (variant === "awards") return renderAwards(items);
  return renderActivity(items);
}

export default function CompactSection({
  id,
  title,
  items,
}: CompactSectionProps) {
  const variant = toVariant(id);

  return (
    <Section id={id}>
      <SectionHeader>
        <Text variant="h2" color="text">
          {title}
        </Text>
      </SectionHeader>

      {renderVariant(variant, items)}
    </Section>
  );
}

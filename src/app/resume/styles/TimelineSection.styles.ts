import Flex from "@/components/layout/Flex";
import styled from "@emotion/styled";

export const Section = styled.section`
  scroll-margin-top: 88px;
`;

export const SectionHeader = styled.header`
  margin-bottom: var(--gap-5);
  padding-bottom: var(--padding-2);

  & span {
    border-left: 4px solid ${({ theme }) => theme.colors.primary07};
    padding-left: var(--padding-2);
  }
`;

export const Organization = styled(Flex)`
  margin-bottom: var(--gap-6);
  gap: var(--gap-3);
`;

export const OrganizationName = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.25rem;
`;

export const OrganizationRole = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.primary08};
`;

export const TimelineList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--gap-6);
`;

export const TimelineItem = styled.article`
  display: flex;
  gap: var(--gap-4);
  position: relative;
  min-height: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: var(--radius-3);
  padding: var(--padding-6);
`;

export const TimelineContent = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--gap-2);
`;

export const RowTop = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  column-gap: var(--gap-6);
  align-items: center;

  @media (max-width: 740px) {
    grid-template-columns: 1fr;
    row-gap: var(--gap-1);
  }
`;

export const TimelineTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.text};
`;

export const TimelineSubTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.primary08};
  margin-top: 0.25rem;
`;

export const TimelinePeriod = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray30};
  white-space: nowrap;
`;

export const TimelineSummary = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.tagText};
  margin-top: 0.125rem;
`;

export const SkillPills = styled.div`
  margin-top: var(--gap-3);
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap-2);
`;

export const SkillPill = styled.span`
  padding: 0.25rem 0.625rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.tagText};
  background: ${({ theme }) => theme.colors.tagBg};
`;

export const BulletList = styled.ul`
  list-style: disc;
  padding-left: 1.25rem;
  margin-top: var(--gap-2);
  display: flex;
  flex-direction: column;
  gap: var(--gap-2);
`;

export const Bullet = styled.li`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.45;
  color: ${({ theme }) => theme.colors.muted};
  margin-top: 0.25rem;
`;

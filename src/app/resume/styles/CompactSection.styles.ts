import styled from "@emotion/styled";

export const Section = styled.section`
  scroll-margin-top: 88px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: var(--gap-2);
  margin-bottom: var(--gap-5);
`;

export const HeaderTitle = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray30};
`;

export const HeaderIcon = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  color: ${({ theme }) => theme.colors.primary08};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }
`;

export const EducationCard = styled.section`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: var(--radius-3);
  background: ${({ theme }) => theme.colors.surface};
  padding: var(--padding-6);
`;

export const EducationRowTop = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--gap-4);
  align-items: center;

  @media (max-width: 740px) {
    grid-template-columns: 1fr;
  }
`;

export const EducationTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.3;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const EducationDetail = styled.p`
  margin: 0.25rem 0 0;
  font-size: 0.875rem;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.muted};
`;

export const EducationPeriodPill = styled.span`
  justify-self: end;
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.tagBg};
  color: ${({ theme }) => theme.colors.primary08};
  font-size: 0.75rem;
  line-height: 1;
  font-weight: 500;
  padding: 0.35rem 0.75rem;

  @media (max-width: 740px) {
    justify-self: start;
    font-size: 0.75rem;
    padding: 0.35rem 0.75rem;
  }
`;

export const CertificationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-4);
`;

export const CertificationCard = styled.article`
  border-radius: var(--radius-3);
  background: ${({ theme }) => theme.colors.surfaceSoft};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: var(--padding-6);
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--gap-3);
  align-items: center;
`;

export const CertificationTitle = styled.h4`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.text};
`;

export const CertificationDetail = styled.p`
  margin: 0.25rem 0 0;
  font-size: 0.875rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray30};
`;

export const CertificationPeriod = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary08};
`;

export const AwardsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-8);
`;

export const AwardItem = styled.article``;

export const AwardPeriod = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary08};
`;

export const AwardTitle = styled.h4`
  margin: 0.35rem 0 0;
  font-size: 1.25rem;
  line-height: 1.3;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const AwardDetail = styled.p`
  margin: 0.3rem 0 0;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.muted};
`;

export const ActivityTimeline = styled.div`
  position: relative;
  margin-left: 0.25rem;

  &::before {
    content: "";
    position: absolute;
    left: 0.4rem;
    top: 0.35rem;
    bottom: 0.85rem;
    width: 1px;
    background: ${({ theme }) => theme.colors.border};
  }
`;

export const ActivityItem = styled.article`
  position: relative;
  padding-left: 2rem;

  & + & {
    margin-top: var(--gap-7);
  }

  &::before {
    content: "";
    position: absolute;
    left: 0.12rem;
    top: 0.1rem;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.gray20};
  }
`;

export const ActivityPeriod = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray30};
`;

export const ActivityTitle = styled.h4`
  margin: 0.35rem 0 0;
  font-size: 1.25rem;
  line-height: 1.3;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const ActivityDetail = styled.p`
  margin: 0.35rem 0 0;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.muted};
`;

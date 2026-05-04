import styled from "@emotion/styled";

export const PageRoot = styled.div`
  padding: clamp(2rem, 5vw, 4rem) var(--padding-5) clamp(4rem, 7vw, 5rem);

  @media (max-width: 720px) {
    padding-left: var(--padding-4);
    padding-right: var(--padding-4);
  }
`;

export const Document = styled.div`
  display: grid;
  gap: clamp(2.4rem, 5vw, 3.8rem);
`;

export const HeroSection = styled.section`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) minmax(220px, 280px);
  gap: clamp(1.25rem, 3vw, 2rem);
  align-items: start;

  @media (max-width: 920px) {
    grid-template-columns: auto minmax(0, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const Avatar = styled.div`
  width: clamp(88px, 11vw, 112px);
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(
      circle at 50% 26%,
      rgba(255, 255, 255, 0.28),
      transparent 28%
    ),
    linear-gradient(160deg, #7b808a 0%, #5a606b 45%, #3d424b 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 18%;
    left: 50%;
    width: 34%;
    height: 34%;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.78);
    transform: translateX(-50%);
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -8%;
    width: 72%;
    height: 52%;
    border-radius: 50% 50% 42% 42%;
    background: rgba(255, 255, 255, 0.88);
    transform: translateX(-50%);
  }
`;

export const HeroCopy = styled.div`
  min-width: 0;
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: clamp(1.9rem, 4vw, 2.45rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.04em;
  margin: 0;
`;

export const SurfaceTitle = styled.p`
  color: ${({ theme }) => theme.colors.primary08};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.6;
  margin: 0.65rem 0 0;
`;

export const HeroQuote = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.98rem;
  line-height: 1.8;
  margin: 0.85rem 0 0;
`;

export const HeroSummaryList = styled.div`
  display: grid;
  gap: 0.6rem;
  margin-top: 0.9rem;
`;

export const HeroSummary = styled.p`
  color: ${({ theme }) => theme.colors.gray60};
  font-size: 0.94rem;
  line-height: 1.8;
  margin: 0;
`;

export const ContactCard = styled.aside`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 18px;
  background: ${({ theme }) => theme.colors.surface};
  padding: 1rem 1rem 1.1rem;

  @media (max-width: 920px) {
    grid-column: 1 / -1;
  }
`;

export const ContactList = styled.div`
  display: grid;
  gap: 0.8rem;
  margin-top: 0.9rem;
`;

export const ContactItem = styled.div`
  display: grid;
  gap: 0.15rem;
`;

export const ContactLabel = styled.span`
  color: ${({ theme }) => theme.colors.gray50};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const ContactValue = styled.span`
  font-size: 0.9rem;
  line-height: 1.6;
  word-break: break-all;
`;

export const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.gray70};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary09};
  }
`;

export const Section = styled.section`
  display: grid;
  gap: 1.15rem;
`;

export const SectionHeading = styled.h2`
  color: ${({ theme }) => theme.colors.gray70};
  font-size: 1.55rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.03em;
  margin: 0;
`;

export const SectionDivider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.gray20};
  margin: 0;
`;

export const StrengthItem = styled.div`
  display: grid;
  gap: 0.9rem;
`;

export const StrengthTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
`;

export const StrengthTag = styled.span`
  width: fit-content;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.primary01};
  color: ${({ theme }) => theme.colors.primary09};
  font-size: 0.83rem;
  font-weight: 700;
  line-height: 1;
  padding: 0.55rem 0.8rem;
`;

export const StrengthList = styled.ul`
  display: grid;
  gap: 0.7rem;
  padding-left: 1.1rem;
  margin: 0;
`;

export const StrengthListItem = styled.li`
  color: ${({ theme }) => theme.colors.gray60};
  font-size: 0.94rem;
  line-height: 1.8;
`;

export const CareerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const GroupLabel = styled.p`
  color: ${({ theme }) => theme.colors.gray50};
  font-size: 0.84rem;
  font-weight: 700;
  line-height: 1.5;
  margin: 0.3rem 0 0;
`;

export const CareerList = styled.div`
  display: grid;
  gap: 2rem;
`;

export const CareerCard = styled.article`
  display: grid;
  gap: 0.9rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const EntryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 1rem;

  @media (max-width: 720px) {
    flex-direction: column;
    gap: 0.35rem;
  }
`;

export const EntryTitle = styled.h3`
  color: ${({ theme }) => theme.colors.gray80};
  font-size: clamp(1.1rem, 2vw, 1.45rem);
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: -0.03em;
  margin: 0;
`;

export const EntryPeriod = styled.p`
  color: ${({ theme }) => theme.colors.gray50};
  font-size: 0.84rem;
  font-weight: 700;
  line-height: 1.5;
  white-space: nowrap;
  margin: 0;
`;

export const PillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

export const Pill = styled.span`
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.primary01};
  color: ${({ theme }) => theme.colors.primary09};
  font-size: 0.82rem;
  font-weight: 600;
  line-height: 1;
  padding: 0.5rem 0.72rem;
`;

export const EntryBulletList = styled.ul`
  display: grid;
  gap: 0.9rem;
  padding-left: 1.1rem;
  margin: 0;
`;

export const EntryBullet = styled.li`
  color: ${({ theme }) => theme.colors.gray60};
  font-size: 0.95rem;
  line-height: 1.85;
`;

export const EntryBulletLead = styled.strong`
  color: ${({ theme }) => theme.colors.gray80};
  font-weight: 700;
  margin-right: 0.2rem;
`;

export const ProjectList = styled.div`
  display: grid;
  gap: 1.9rem;
`;

export const ProjectCard = styled.article`
  display: grid;
  gap: 0.9rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 1rem;

  @media (max-width: 720px) {
    flex-direction: column;
    gap: 0.4rem;
  }
`;

export const FoundationGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(260px, 0.8fr);
  gap: 0.9rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillCluster = styled.section`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 18px;
  padding: 1rem;
`;

export const SkillGroups = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 0.9rem;
`;

export const SkillGroup = styled.div`
  display: grid;
  gap: 0.45rem;
`;

export const ContentGrid = styled.div`
  display: grid;
  gap: 0.9rem;
`;

export const DetailCard = styled.section`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 18px;
  padding: 1rem;
  display: grid;
  gap: 0.45rem;
`;

export const DetailCardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.gray80};
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.35;
  margin: 0;
`;

export const DetailCardValue = styled.p`
  color: ${({ theme }) => theme.colors.gray60};
  font-size: 0.92rem;
  line-height: 1.7;
  margin: 0;
`;

export const ExperienceTimeline = styled.div`
  display: grid;
  gap: 1.5rem;
`;

export const ExperienceYearGroup = styled.div`
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  gap: 1rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const ExperienceYear = styled.h3`
  color: ${({ theme }) => theme.colors.gray70};
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1;
  margin: 0;
`;

export const ExperienceList = styled.div`
  position: relative;
  display: grid;
  gap: 1.4rem;
  padding-left: 1.3rem;

  &::before {
    content: "";
    position: absolute;
    top: 0.35rem;
    bottom: 0.35rem;
    left: 0.35rem;
    width: 1px;
    background: ${({ theme }) => theme.colors.gray30};
  }

  @media (max-width: 720px) {
    padding-left: 1.1rem;
  }
`;

export const ExperienceItem = styled.article`
  position: relative;
`;

export const ExperienceDot = styled.span`
  position: absolute;
  top: 0.35rem;
  left: -0.95rem;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary08};
  box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.surface};
`;

export const ExperienceCard = styled.div`
  display: grid;
  gap: 0.45rem;
`;

export const ExperienceOrg = styled.p`
  color: ${({ theme }) => theme.colors.gray50};
  font-size: 0.9rem;
  line-height: 1.65;
  margin: 0.3rem 0 0;
`;

export const ExperiencePeriod = styled.p`
  color: ${({ theme }) => theme.colors.gray50};
  font-size: 0.84rem;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
`;

export const ExperienceMeta = styled.ul`
  display: grid;
  gap: 0.4rem;
  padding-left: 1rem;
  margin: 0;

  li {
    color: ${({ theme }) => theme.colors.gray60};
    font-size: 0.92rem;
    line-height: 1.8;
  }
`;

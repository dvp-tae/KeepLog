"use client";

import Wrapper from "@/components/layout/Wrapper";
import {
  careerGroups,
  certifications,
  education,
  experienceTimeline,
  hero,
  projects,
  skillGroups,
  strengths,
} from "@/features/resume/model/resume.data";
import {
  Avatar,
  CareerCard,
  CareerHeader,
  CareerList,
  ContactCard,
  ContactItem,
  ContactLabel,
  ContactLink,
  ContactList,
  ContactValue,
  ContentGrid,
  DetailCard,
  DetailCardTitle,
  DetailCardValue,
  Document,
  EntryBullet,
  EntryBulletLead,
  EntryBulletList,
  EntryHeader,
  EntryPeriod,
  EntryTitle,
  ExperienceCard,
  ExperienceDot,
  ExperienceItem,
  ExperienceList,
  ExperienceMeta,
  ExperienceOrg,
  ExperiencePeriod,
  ExperienceTimeline,
  ExperienceYear,
  ExperienceYearGroup,
  FoundationGrid,
  GroupLabel,
  HeroCopy,
  HeroQuote,
  HeroSection,
  HeroSummary,
  HeroSummaryList,
  Name,
  PageRoot,
  Pill,
  PillRow,
  ProjectCard,
  ProjectHeader,
  ProjectList,
  Section,
  SectionDivider,
  SectionHeading,
  SkillCluster,
  SkillGroup,
  SkillGroups,
  StrengthItem,
  StrengthList,
  StrengthListItem,
  StrengthTag,
  StrengthTags,
  SurfaceTitle,
} from "@/features/resume/styles/ResumePage.styles";

export default function ResumePageClient() {
  return (
    <Wrapper maxWidth={1100} center fullHeight={false}>
      <PageRoot>
        <Document>
          <HeroSection>
            <Avatar aria-hidden="true" />

            <HeroCopy>
              <Name>{hero.name}</Name>
              <SurfaceTitle>{hero.role}</SurfaceTitle>
              <HeroQuote>{hero.quote}</HeroQuote>
              <HeroSummaryList>
                {hero.summary.map((paragraph) => (
                  <HeroSummary key={paragraph}>{paragraph}</HeroSummary>
                ))}
              </HeroSummaryList>
            </HeroCopy>

            <ContactCard>
              <SectionHeading as="h2">Contact Me</SectionHeading>
              <ContactList>
                {hero.contacts.map((contact) => (
                  <ContactItem key={contact.label}>
                    <ContactLabel>{contact.label}</ContactLabel>
                    <ContactLink href={contact.href}>
                      <ContactValue>{contact.value}</ContactValue>
                    </ContactLink>
                  </ContactItem>
                ))}
              </ContactList>
            </ContactCard>
          </HeroSection>

          <Section>
            <SectionHeading>Core Strengths</SectionHeading>
            <SectionDivider />
            <StrengthItem>
              <StrengthTags>
                {strengths.tags.map((tag) => (
                  <StrengthTag key={tag}>{tag}</StrengthTag>
                ))}
              </StrengthTags>
              <StrengthList>
                {strengths.bullets.map((bullet) => (
                  <StrengthListItem key={bullet}>{bullet}</StrengthListItem>
                ))}
              </StrengthList>
            </StrengthItem>
          </Section>

          <Section>
            <SectionHeading>Career</SectionHeading>
            <SectionDivider />
            {careerGroups.map((group) => (
              <div key={group.organization}>
                <CareerHeader>
                  <div>
                    <Name as="h3">{group.organization}</Name>
                    <GroupLabel>{group.tenure}</GroupLabel>
                  </div>
                </CareerHeader>

                <CareerList>
                  {group.entries.map((entry) => (
                    <CareerCard key={`${entry.title}-${entry.period}`}>
                      <EntryHeader>
                        <div>
                          <EntryTitle>{entry.title}</EntryTitle>
                        </div>
                        <EntryPeriod>{entry.period}</EntryPeriod>
                      </EntryHeader>

                      <PillRow>
                        {entry.tags.map((tag) => (
                          <Pill key={`${entry.title}-${tag}`}>{tag}</Pill>
                        ))}
                      </PillRow>

                      <EntryBulletList>
                        {entry.bullets.map((bullet) => (
                          <EntryBullet key={`${entry.title}-${bullet.lead}`}>
                            <EntryBulletLead>{bullet.lead}</EntryBulletLead>
                            {bullet.detail}
                          </EntryBullet>
                        ))}
                      </EntryBulletList>
                    </CareerCard>
                  ))}
                </CareerList>
              </div>
            ))}
          </Section>

          <Section>
            <SectionHeading>Projects</SectionHeading>
            <SectionDivider />
            <ProjectList>
              {projects.map((project) => (
                <ProjectCard key={`${project.organization}-${project.title}`}>
                  <ProjectHeader>
                    <div>
                      <GroupLabel>{project.organization}</GroupLabel>
                      <EntryTitle>{project.title}</EntryTitle>
                      <HeroSummary>{project.summary}</HeroSummary>
                    </div>
                    <EntryPeriod>{project.period}</EntryPeriod>
                  </ProjectHeader>

                  <PillRow>
                    {project.tags.map((tag) => (
                      <Pill key={`${project.title}-${tag}`}>{tag}</Pill>
                    ))}
                  </PillRow>

                  <EntryBulletList>
                    {project.bullets.map((bullet) => (
                      <EntryBullet key={`${project.title}-${bullet}`}>
                        {bullet}
                      </EntryBullet>
                    ))}
                  </EntryBulletList>
                </ProjectCard>
              ))}
            </ProjectList>
          </Section>

          <Section>
            <SectionHeading>Technical Foundation</SectionHeading>
            <SectionDivider />
            <FoundationGrid>
              <SkillCluster>
                <SectionHeading as="h3">Skills</SectionHeading>
                <SkillGroups>
                  {skillGroups.map((group) => (
                    <SkillGroup key={group.label}>
                      <GroupLabel>{group.label}</GroupLabel>
                      <PillRow>
                        {group.items.map((item) => (
                          <Pill key={`${group.label}-${item}`}>{item}</Pill>
                        ))}
                      </PillRow>
                    </SkillGroup>
                  ))}
                </SkillGroups>
              </SkillCluster>

              <ContentGrid>
                <DetailCard>
                  <SectionHeading as="h3">Education</SectionHeading>
                  <DetailCardTitle>{education.school}</DetailCardTitle>
                  <HeroSummary>{education.program}</HeroSummary>
                  <DetailCardValue>{education.period}</DetailCardValue>
                </DetailCard>

                <DetailCard>
                  <SectionHeading as="h3">Certification</SectionHeading>
                  {certifications.map((item) => (
                    <div key={`${item.year}-${item.name}`}>
                      <DetailCardTitle>{item.year}</DetailCardTitle>
                      <DetailCardValue>{item.name}</DetailCardValue>
                    </div>
                  ))}
                </DetailCard>
              </ContentGrid>
            </FoundationGrid>
          </Section>

          <Section>
            <SectionHeading>Experience</SectionHeading>
            <SectionDivider />
            <ExperienceTimeline>
              {experienceTimeline.map((yearGroup) => (
                <ExperienceYearGroup key={yearGroup.year}>
                  <ExperienceYear>{yearGroup.year}</ExperienceYear>
                  <ExperienceList>
                    {yearGroup.items.map((item) => (
                      <ExperienceItem key={`${yearGroup.year}-${item.title}`}>
                        <ExperienceDot aria-hidden="true" />
                        <ExperienceCard>
                          <EntryHeader>
                            <div>
                              <EntryTitle>{item.title}</EntryTitle>
                              {item.organization ? (
                                <ExperienceOrg>
                                  {item.organization}
                                </ExperienceOrg>
                              ) : null}
                            </div>
                            <ExperiencePeriod>{item.period}</ExperiencePeriod>
                          </EntryHeader>
                          <ExperienceMeta>
                            {item.bullets.map((bullet) => (
                              <li key={`${item.title}-${bullet}`}>{bullet}</li>
                            ))}
                          </ExperienceMeta>
                        </ExperienceCard>
                      </ExperienceItem>
                    ))}
                  </ExperienceList>
                </ExperienceYearGroup>
              ))}
            </ExperienceTimeline>
          </Section>
        </Document>
      </PageRoot>
    </Wrapper>
  );
}

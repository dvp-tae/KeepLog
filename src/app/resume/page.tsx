"use client";

import Text from "@/components/common/Text";
import Wrapper from "@/components/layout/Wrapper";
import Flex from "@/components/layout/Flex";
import styled from "@emotion/styled";

const SectionCard = styled.section`
  width: 100%;
  border-radius: var(--radius-6);
  padding: var(--padding-7);
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.35);
  display: flex;
  flex-direction: column;
  gap: var(--gap-6);
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap-2);
`;

const Tag = styled.span`
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  font-size: 0.8rem;
  background: ${({ theme }) => theme.colors.tagBg};
  color: ${({ theme }) => theme.colors.tagText};
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-5);
`;

const TimelineRow = styled.div`
  display: grid;
  grid-template-columns: 2fr auto;
  column-gap: var(--gap-8);
  row-gap: var(--gap-2);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export default function ResumePage() {
  return (
    <Wrapper maxWidth={840} center fullHeight>
      <SectionCard>
        <Flex direction="column" gap="var(--gap-3)">
          <Text variant="h2" color="text">
            Resume
          </Text>
          <Text variant="body" color="muted">
            사용자 경험을 중심하는 프론트엔드 개발자입니다. 깔끔한 코드와 직관적인
            인터페이스를 만드는 것을 좋아합니다.
          </Text>
        </Flex>

        <Flex direction="column" gap="var(--gap-5)">
          <Text variant="h3" color="text">
            경력
          </Text>

          <Timeline>
            <TimelineRow>
              <div>
                <Text variant="h4" color="text">
                  ABC Tech
                </Text>
                <br />
                <Text variant="body" color="muted">
                  Frontend Developer
                </Text>
                <br />
                <Text variant="body" color="muted">
                  • React + TypeScript 기반 웹 애플리케이션 개발
                  <br />
                  • 디자인 시스템 구축 및 컴포넌트 라이브러리 관리
                  <br />
                  • 성능 최적화를 통한 LCP 40% 개선
                </Text>
              </div>
              <Text variant="body" color="gray70">
                2024.03 - 현재
              </Text>
            </TimelineRow>

            <TimelineRow>
              <div>
                <Text variant="h4" color="text">
                  XYZ Studio
                </Text>
                <br />
                <Text variant="body" color="muted">
                  Junior Frontend Developer
                </Text>
                <br />
                <Text variant="body" color="muted">
                  • 반응형 웹사이트 개발 및 유지보수
                  <br />
                  • 사내 어드민 대시보드 신규 개발
                  <br />
                  • 코드 리뷰 및 팀 컨벤션 정립
                </Text>
              </div>
              <Text variant="body" color="gray70">
                2022.06 - 2024.02
              </Text>
            </TimelineRow>
          </Timeline>
        </Flex>

        <Flex direction="column" gap="var(--gap-4)">
          <Text variant="h3" color="text">
            기술 스택
          </Text>
          <TagList>
            {[
              "React",
              "TypeScript",
              "JavaScript",
              "Next.js",
              "Tailwind CSS",
              "CSS-in-JS",
              "HTML/CSS",
              "Git",
              "REST API",
              "GraphQL",
              "Figma",
              "Node.js",
              "Vite",
              "Webpack",
            ].map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </TagList>
        </Flex>

        <Flex direction="column" gap="var(--gap-4)">
          <Text variant="h3" color="text">
            학력
          </Text>
          <Text variant="body" color="muted">
            컴퓨터공학 전공 / 웹·모바일 프로그래밍 트랙
          </Text>
        </Flex>
      </SectionCard>
    </Wrapper>
  );
}


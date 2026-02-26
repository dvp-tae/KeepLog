import Text from "@/components/common/Text";
import styled from "@emotion/styled";
import Link from "next/link";

export const Content = styled.div`
  padding: var(--padding-8) var(--padding-6);
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-2);
  margin-bottom: var(--gap-4);
  font-size: 0.85rem;
  text-decoration: none;
  color: #6b7280;
`;

export const Article = styled.article`
  width: 100%;
  border-radius: var(--radius-6);
  padding: var(--padding-7);
  border: 1px solid #e0e6f0;
  display: flex;
  flex-direction: column;
  gap: var(--gap-5);
`;

export const PostTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.55rem;
  border-radius: var(--radius-25);
  background: #e6f2ff;
  color: #1f54a3;
  font-size: 0.72rem;
  font-weight: 500;
  line-height: 1;
`;

export const PostDate = styled(Text)`
  color: ${({ theme }) => theme.colors.gray70};
`;

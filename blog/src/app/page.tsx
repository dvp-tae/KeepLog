"use client";

import Text from "@/components/common/Text";
import Wrapper from "@/components/layout/Wrapper";

export default function HomePage() {
  return (
    <Wrapper padding="var(--padding-6)">
      <Text variant="h1">KeepLog</Text>
      <Text variant="body">
        초기화된 상태입니다. 여기서부터 새로 시작하세요.
      </Text>
    </Wrapper>
  );
}

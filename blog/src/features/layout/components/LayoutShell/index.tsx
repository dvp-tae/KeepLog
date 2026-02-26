"use client";

import Wrapper from "@/components/layout/Wrapper";
import Header from "@/features/layout/components/Header";
import {
  Main,
  PageBackground,
} from "@/features/layout/styles/LayoutShell.styles";
import { usePathname } from "next/navigation";
import Footer from "../Footer";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <PageBackground>
      <Header>
        <Header.Brand />
        <Header.Navigation pathname={pathname} />
      </Header>

      <Main>
        <Wrapper maxWidth={"100%"} center fullHeight={false}>
          {children}
        </Wrapper>
      </Main>

      <Footer />
    </PageBackground>
  );
}

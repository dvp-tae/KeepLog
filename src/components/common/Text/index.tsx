"use client";

import { ColorsKey, TypographyKey } from "@/styles/theme";
import React, { ComponentProps } from "react";
import * as S from "./Text.styled";

export interface TextProps extends ComponentProps<"span"> {
  variant?: TypographyKey;
  color?: ColorsKey;
  opacity?: boolean;
  children: React.ReactNode;
}

const Text = ({
  variant = "body",
  color = "gray90",
  opacity = true,
  children,
  ...props
}: TextProps) => {
  return (
    <S.Container
      variant={variant}
      color={color}
      opacity={opacity ? 1 : 0}
      {...props}
    >
      {children}
    </S.Container>
  );
};

export default Text;

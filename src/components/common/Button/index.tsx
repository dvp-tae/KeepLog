"use client";

import { ColorsKey } from "@/styles/theme";
import React, { ComponentProps } from "react";
import * as S from "./Button.styled";

interface ButtonProps extends ComponentProps<"button"> {
  size?: "x-small" | "small" | "medium" | "large";
  color: ColorsKey;
  selected?: boolean;
  children: React.ReactNode;
}

const Button = ({ size, color, selected, children, ...props }: ButtonProps) => {
  return (
    <S.Container size={size} color={color} selected={selected} {...props}>
      {children}
    </S.Container>
  );
};

export default Button;

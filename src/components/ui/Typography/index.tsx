import React from "react";
import { TypographyProps } from "./types.type";

const Typography = (props: TypographyProps) => {
  const { children, type = "h1" } = props;

  const TypographyElement = type;
  return <TypographyElement>{children}</TypographyElement>;
};

export default Typography;

import React from "react";
import { ButtonProps } from "./types.type";

const Button = (props: ButtonProps) => {
  const { children, onClick, variant = "primary" } = props;
  return (
    <button className={variant} onClick={() => onClick()}>
      {children}
    </button>
  );
};

export default Button;

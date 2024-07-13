import React from "react";
import { InputProps } from "./types.type";

const Input = (props: InputProps) => {
  const { type, placeholder, label, name } = props;

  return (
    <>
      {label !== "" && <label htmlFor={name}>{label}</label>} <br />
      {type === "textarea" ? (
        <textarea id={name} placeholder={placeholder} />
      ) : (
        <input id={name} type={type} placeholder={placeholder} />
      )}
    </>
  );
};

export default Input;

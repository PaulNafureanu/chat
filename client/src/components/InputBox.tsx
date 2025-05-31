import { useState } from "react";
import "./InputBox.css";

interface InputBoxProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox = ({ id, value, onChange }: InputBoxProps) => {
  return (
    <input
      className="input-box"
      type="text"
      name={id}
      id={id}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputBox;

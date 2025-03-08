import React from "react";

interface ButtonProps {
  text: string;
  bgColor: string;
}

const Button: React.FC<ButtonProps> = ({ text, bgColor }) => {
  return (
    <button
      className={`w-full p-3 rounded-4xl text-white cursor-pointer duration-300 shadow-lg`}
      style={{ backgroundColor: bgColor }}
    >
      {text}
    </button>
  );
};

export default Button;

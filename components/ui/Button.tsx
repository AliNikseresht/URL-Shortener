import React from "react";

interface ButtonProps {
  text: string;
  bgColor?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  text,
  bgColor,
  className,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`p-3 rounded-4xl text-white cursor-pointer duration-300 shadow-lg ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {text}
    </button>
  );
};

export default Button;

import React from "react";

export type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  onClick,
}) => {
  const baseStyle = "px-4 py-2 rounded text-white focus:outline-none";
  const variantStyle =
    variant === "primary"
      ? "bg-blue-500 hover:bg-blue-700"
      : "bg-gray-500 hover:bg-gray-700";

  return (
    <button className={`${baseStyle} ${variantStyle}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;

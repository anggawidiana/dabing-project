// components/Button.tsx
import React from "react";
import type { ButtonProps } from "../components/type/MemberCardType";

const ButtonMember: React.FC<ButtonProps> = ({
  text,
  variant = "default",
  fontWeight,
  className,
  onClick,
  isActive = false,
}) => {
  const buttonStyles: Record<string, string> = {
    default:
      "cursor-pointer font-bold font-oswald text-third py-2 px-4 bg-pri rounded-lg w-fit hover:bg-sec hover:text-pri duration-300 ease-in-out",
    first:
      "cursor-pointer font-bold text-blue-600 py-2 px-4 bg-white border-2 border-blue-600 rounded-lg w-fit hover:bg-blue-600 hover:text-white duration-300 ease-in-out",
    second:
      "cursor-pointer font-bold text-gray-700 py-2 px-4 bg-gray-200 rounded-lg w-fit hover:bg-gray-300 duration-300 ease-in-out",
  };

  const activeStyle = "bg-blue-700 text-third";
  const baseVariantClasses = buttonStyles[variant];
  const finalClasses = `${baseVariantClasses} ${fontWeight || ""} ${
    className || ""
  } ${isActive ? activeStyle : ""}`.trim();

  return (
    <button
      className={finalClasses}
      onClick={onClick}
    >
      {text || "Button"}
    </button>
  );
};

export default ButtonMember;

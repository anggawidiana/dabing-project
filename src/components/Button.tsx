// Button.tsx

type ButtonProps = {
  text?: string;
  variant?: "default" | "first" | "second"; // Make sure these match your `buttonStyles` keys
  fontWeight?: string;
  className?: string; // <--- ADD THIS LINE
  onClick?: () => void;
};

const buttonStyles = {
  default:
    "cursor-pointer font-oswald text-third py-2 px-4 bg-pri rounded-[8px] w-fit hover:bg-sec hover:text-pri duration-300 ease-in-out",
  first:
    "cursor-pointer font-oswald text-pri py-2 px-4 bg-sec rounded-[8px] w-fit hover:bg-pri hover:text-third duration-300 ease-in-out",
  second:
    "cursor-pointer font-oswald text-pri py-2 px-4 bg-third rounded-[8px] w-fit hover:bg-sec hover:text-pri duration-300 ease-in-out",
};

// Destructure `className` from props
const Button = ({
  text,
  variant = "default",
  fontWeight,
  className,
  onClick,
}: ButtonProps) => {
  // <--- ADD `className` here and set default variant
  // Determine the base classes from buttonStyles
  const baseVariantClasses = buttonStyles[variant];

  // Combine all classes: base variant classes, fontWeight, and any external className
  // Use template literals for cleaner concatenation
  const finalClasses = `${baseVariantClasses} ${fontWeight || ""} ${
    className || ""
  } ${onClick}
  }`.trim();

  return (
    <button className={finalClasses}>
      {" "}
      {/* <--- Use the combined `finalClasses` here */}
      {text || "Button"}
    </button>
  );
};

export default Button;

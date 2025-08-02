type ButtonProps = {
  text?: string;
  variant?: "default" | "first" | "second";
};

const buttonStyles = {
  default:
    "cursor-pointer font-oswald text-third py-2 px-4 bg-pri rounded-[8px] max-w-[60%] hover:bg-third hover:text-pri duration-300 ease-in-out",
  first:
    " cursor-pointer font-oswald text-pri py-2 px-4 bg-sec rounded-[8px] max-w-[60%] hover:bg-third hover:text-pri duration-300 ease-in-out",
  second:
    "cursor-pointer font-oswald text-pri py-2 px-4 bg-third rounded-[8px] max-w-[60%] hover:bg-third hover:text-pri duration-300 ease-in-out",
};

const Button = (props: ButtonProps) => {
  return (
    <button className={buttonStyles[props.variant || "default"]}>
      {props.text || "Button"}
    </button>
  );
};

export default Button;

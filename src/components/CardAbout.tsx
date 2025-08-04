import IconSVG from "./IconSVG";

type CardInfo = {
  iconColor: string;
  iconBG: string;
  iconType:
    | "time"
    | "star"
    | "heart"
    | "deal"
    | "dumbbell"
    | "medal"
    | "community";
  H1: string;
  para: string;
};

const CardAbout = (props: CardInfo) => {
  return (
    <div className="px-12 flex gap-4 flex-col items-center justify-center">
      <IconSVG
        color={props.iconColor}
        style={`w-8 h-8 p-2 ${props.iconBG}`}
        type={props.iconType || "dumbbell"}
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-pri font-oswald text-center">{props.H1}</h1>
        <p className="text-pri text-center font-noto-sans font-extralight text-sm w-48">
          {props.para}
        </p>
      </div>
    </div>
  );
};

export default CardAbout;

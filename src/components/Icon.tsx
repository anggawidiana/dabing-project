import dumbbell from "../assets/img/icons/dumbbell.png";
import medal from "../assets/img/icons/medal.png";
import community from "../assets/img/icons/community.png";
import deal from "../assets/img/icons/deal.png";
import dealWhite from "../assets/img/icons/deal-white.png";
import heart from "../assets/img/icons/heart.png";
import heartWhite from "../assets/img/icons/heart-white.png";
import star from "../assets/img/icons/star.png";
import starWhite from "../assets/img/icons/star-white.png";
import time from "../assets/img/icons/time.png";
import timeWhite from "../assets/img/icons/time-white.png";
import facebook from "../assets/img/icons/fb.png";
import tiktok from "../assets/img/icons/tiktok.png";
import instagram from "../assets/img/icons/ig.png";

type IconProps = {
  icon:
    | "facebook"
    | "tiktok"
    | "instagram"
    | "dumbbell"
    | "medal"
    | "community"
    | "deal"
    | "dealWhite"
    | "heart"
    | "heartWhite"
    | "star"
    | "starWhite"
    | "time"
    | "timeWhite";
  bg: string;
  rounded?: string;
};

const iconStyles = {
  dumbbell: dumbbell,
  medal: medal,
  community: community,
  deal: deal,
  dealWhite: dealWhite,
  heart: heart,
  heartWhite: heartWhite,
  time: time,
  timeWhite: timeWhite,
  star: star,
  starWhite: starWhite,
  facebook: facebook,
  tiktok: tiktok,
  instagram: instagram,
};

const Icon = (props: IconProps) => {
  return (
    <div
      className={`w-16 h-auto p-2 ${props.rounded || "rounded-[8px]"} ${
        props.bg || "bg-sec"
      }`}
    >
      <img
        src={iconStyles[props.icon || "dumbbell"]}
        alt="Icon"
        className="w-16 h-auto"
      />
    </div>
  );
};

export default Icon;

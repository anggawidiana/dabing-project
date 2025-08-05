import IconSVG from "./IconSVG";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

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
  const card = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.refresh();
    if (card.current) {
      gsap.fromTo(
        card.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card.current,
            start: "top 60%",
            end: "bottom 20%",
            toggleActions: "play none none",
            // markers: true, // Untuk debugging, bisa diaktifkan sementara
          },
        }
      );
    }
  }, []);
  return (
    <div
      ref={card}
      className="px-12 flex gap-4 flex-col items-center justify-center"
    >
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

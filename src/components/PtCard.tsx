import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

type PtCardProps = {
  img: string;
  h1: string;
  para: string;
};

const PtCard = (props: PtCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
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
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: card.current,
            start: "top 80%",
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-third outline-[0.2px] outline-pri rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden max-w-64 mx-auto group"
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={props.img}
          alt=""
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 space-y-4">
        <h1 className="text-pri font-oswald text-2xl">{props.h1}</h1>
        <div>
          <p className="text-pri font-noto-sans font-light text-sm">
            {props.para}
          </p>
        </div>
        <Button
          text="Pilih PT"
          variant="default"
        />
      </div>
    </div>
  );
};

export default PtCard;

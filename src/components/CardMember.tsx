// components/Card.tsx
import React from "react";
import { useEffect, useRef } from "react";
import type { CardProps } from "../components/type/MemberCardType";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const CardMember: React.FC<CardProps> = ({ title, price, description }) => {
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
        }
      );
    }
  }, []);
  return (
    <div
      ref={card}
      className="bg-white rounded-lg shadow-lg p-6 m-2 w-80 flex-shrink-0 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-xl font-bold mb-3 text-gray-800 font-oswald">
        {title}
      </h3>
      <p className="text-lg text-green-600 font-bold mb-3 font-mono">{price}</p>
      <p className="text-gray-600 text-sm leading-relaxed font-noto-sans">
        {description}
      </p>
      <a href="https://member.dabingfit.com/#/">
        <button className="mt-4 w-full font-oswald bg-sec text-white py-2 px-4 rounded-lg hover:bg-third transition-colors duration-300">
          Pilih Paket
        </button>
      </a>
    </div>
  );
};

export default CardMember;

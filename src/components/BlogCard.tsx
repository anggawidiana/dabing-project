import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

type BlogCardProps = {
  img: string;
  h1: string;
  para: string;
};

const BlogCard = (props: BlogCardProps) => {
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
      className="max-w-sm bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
    >
      <a href="#">
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src={props.img}
          alt={props.h1}
        />
      </a>
      <div className="p-6">
        <a href="#">
          <h5 className="mb-3 text-xl font-bold text-gray-800 font-oswald">
            {props.h1}
          </h5>
        </a>
        <p className="mb-4 text-gray-600 text-sm leading-relaxed font-noto-sans">
          {props.para}
        </p>
        <a
          href="#"
          className="block w-full font-oswald bg-sec text-white py-2 px-4 text-center rounded-lg hover:bg-third transition-colors duration-300"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default BlogCard;

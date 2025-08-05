import logo from "../assets/img/logo.png";
import facebook from "../assets/img/icons/fb.png";
import tiktok from "../assets/img/icons/tiktok.png";
import instagram from "../assets/img/icons/ig.png";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const section = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.refresh();
    if (section.current) {
      gsap.fromTo(
        section.current,
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
            trigger: section.current,
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
    <footer
      ref={section}
      className="mt-16 flex flex-col gap-8"
    >
      <div className="flex flex-col gap-4 px-8 items-center justify-center">
        <img
          src={logo}
          alt=""
          className="w-[50%] md:w-[20%]"
        />
        <p className="md:text-lg text-center text-pri text-sm font-noto-sans font-extralight">
          Temukan kebugaran Anda di Dabing Fitness Studio. Kami menawarkan
          panduan lengkap untuk pemula dan program latihan pribadi. Bergabunglah
          dengan komunitas kebugaran kami di Gianyar, Bali.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-24 px-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-pri font-oswald md:text-2xl">CONTACT US</h1>
          <p className="text-pri md:text-lg font-noto-sans font-extralight text-sm">
            Address :Jl. Sinta 99X, Belakang Pengadilan Agama Gianyar Telphone
            :+6281938703129 Email :info@dabingfit.com Whatsapp ( Admin )
            :+6281938703129 Whatsapp ( Keluhan & Saran ) :+6281239646739
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-pri font-oswald md:text-2xl">OPENING HOURS</h1>
          <p className="text-pri md:text-lg font-noto-sans font-extralight text-sm">
            Kami buka setiap hari mulai jam 6 pagi hingga 11 malam, memberi Anda
            fleksibilitas untuk berlatih kapan pun waktu Anda memungkinkan.
            Jadwalkan latihan Anda sekarang dan mulailah hari Anda dengan
            perasaan berenergi dan bugar di Dabing Fitness Studio.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-pri font-oswald md:text-2xl">
            FIND US ON SOCIAL MEDIA
          </h1>
          <p className="text-pri md:text-lg font-noto-sans font-extralight text-sm">
            Temukan kami di media sosial untuk tetap terhubung dan terinspirasi.
            Ikuti kami sekarang di platform favorit Anda dan bergabunglah dalam
            komunitas kebugaran Dabing Fitness Studio!
          </p>
          <div className="flex gap-2">
            <a href="">
              <div className="rounded-full bg-pri w-8 h-8 flex items-center justify-center">
                <img
                  src={facebook}
                  alt=""
                />
              </div>
            </a>
            <a href="">
              <div className="rounded-full bg-pri w-8 h-8 flex items-center justify-center">
                <img
                  src={tiktok}
                  alt=""
                />
              </div>
            </a>
            <a href="">
              <div className="rounded-full bg-pri w-8 h-8 flex items-center justify-center">
                <img
                  src={instagram}
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#111111] p-8 flex items-center justify-center">
        <p className="text-center md:text-lg text-pri font-noto-sans font-extralight text-sm">
          © Copyright 2025 Dabing Fitness Studio. All Rights Reserved. Ni Kadek
          Arik Ulandari - Dabing Fitness Studio
        </p>
      </div>
    </footer>
  );
};

export default Footer;

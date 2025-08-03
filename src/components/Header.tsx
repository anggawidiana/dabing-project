import logo from "../assets/img/logo.png";
import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { Link } from "react-router"; // Pastikan ini Link dari react-router-dom

const Header = () => {
  const [isMenuTop, setIsMenuTop] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuIconRef = useRef<SVGSVGElement>(null);
  const headerContainerRef = useRef<HTMLDivElement>(null); // Ref baru untuk div container header
  const [headerWidth, setHeaderWidth] = useState(0); // State untuk menyimpan lebar header
  const [headerLeft, setHeaderLeft] = useState(0); // State untuk menyimpan posisi kiri header

  const handleMenuClick = () => {
    setIsMenuTop(!isMenuTop);
  };

  // Efek untuk mendapatkan lebar dan posisi header
  useEffect(() => {
    const updateHeaderDimensions = () => {
      if (headerContainerRef.current) {
        const rect = headerContainerRef.current.getBoundingClientRect();
        setHeaderWidth(rect.width);
        setHeaderLeft(rect.left);
      }
    };

    updateHeaderDimensions(); // Dapatkan lebar saat komponen pertama kali dirender
    window.addEventListener("resize", updateHeaderDimensions); // Perbarui lebar saat ukuran jendela berubah

    return () => {
      window.removeEventListener("resize", updateHeaderDimensions); // Hapus event listener saat unmount
    };
  }, []); // [] berarti efek hanya berjalan sekali saat mount dan cleanup saat unmount

  // Efek untuk menangani klik di luar overlay
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuIconRef.current &&
        menuIconRef.current.contains(event.target as Node)
      ) {
        return;
      }

      if (
        isMenuTop &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuTop(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuTop]);

  return (
    <div className="fixed z-10 w-full h-auto p-4 flex flex-col gap-4">
      <div
        ref={headerContainerRef} // Pasang ref di div header yang ingin diukur
        className="bg-third h-[75px] rounded-[14px] relative flex justify-between items-center p-4 "
      >
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-52"
          />
        </Link>

        <div className="hidden gap-4 md:flex">
          <ul className="flex  justify-center items-center gap-4">
            <li className="font-oswald text-pri">
              <Link to="/">Home</Link>
            </li>
            <li className="font-oswald text-pri">
              <Link to="/about-us">About Us</Link>
            </li>
            <li className="font-oswald text-pri">
              <Link to="/membership">Membership</Link>{" "}
              {/* Perbaiki link contoh */}
            </li>
            <li className="font-oswald text-pri">
              <Link to="/personal-trainer">Personal Trainer</Link>{" "}
              {/* Perbaiki link contoh */}
            </li>
            <li className="font-oswald text-pri">
              <Link to="/blog">Blog</Link> {/* Perbaiki link contoh */}
            </li>
            <li className="font-oswald text-pri">
              <Link to="/gallery">Gallery</Link> {/* Perbaiki link contoh */}
            </li>
          </ul>
          <Button
            text="Daftar Membership"
            variant="default"
          />
        </div>

        <svg
          ref={menuIconRef}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="md:hidden cursor-pointer duration-100 ease-out hover:border-2 hover:border-pri hover:rounded-[8px] "
          onClick={handleMenuClick}
        >
          <path
            d="M6.66666 9.33333H25.3333"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M6.66666 16H25.3333"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M6.66666 22.6667H25.3333"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div
        ref={menuRef}
        // Atur lebar dan posisi kiri menggunakan style inline
        style={{
          width: headerWidth > 0 ? `${headerWidth}px` : "100%",
          left: `${headerLeft}px`,
        }}
        className={`
          h-fit
          py-8
          z-50
          bg-sec
          rounded-[14px]
          flex flex-col gap-4 items-center justify-start
          transition-all duration-300 ease-in-out fixed md:hidden
          ${
            isMenuTop
              ? "opacity-100 translate-y-[91px] pointer-events-auto"
              : "opacity-0 -translate-y-0 pointer-events-none"
          }
        `}
      >
        <ul className="z-10 flex flex-col justify-center items-center gap-4">
          <li className="font-oswald text-pri">
            <Link to="/">Home</Link>
          </li>
          <li className="font-oswald text-pri">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="font-oswald text-pri">
            <Link to="/membership">Membership</Link>{" "}
            {/* Perbaiki link contoh */}
          </li>
          <li className="font-oswald text-pri">
            <Link to="/personal-trainer">Personal Trainer</Link>{" "}
            {/* Perbaiki link contoh */}
          </li>
          <li className="font-oswald text-pri">
            <Link to="/blog">Blog</Link> {/* Perbaiki link contoh */}
          </li>
          <li className="font-oswald text-pri">
            <Link to="/gallery">Gallery</Link> {/* Perbaiki link contoh */}
          </li>
        </ul>
        <Button
          text="Daftar Membership"
          variant="default"
        />
      </div>
    </div>
  );
};

export default Header;

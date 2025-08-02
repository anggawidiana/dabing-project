import { useState, useEffect, useRef, useCallback } from "react"; // Impor useCallback

interface ImageCarouselProps {
  images: string[];
  interval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  // Gunakan useCallback untuk memastikan startInterval hanya dibuat ulang jika dependensinya berubah
  const startInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
  }, [images.length, interval]); // startInterval bergantung pada images.length dan interval

  useEffect(() => {
    if (images.length > 1) {
      startInterval(); // Memanggil startInterval
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length, interval, startInterval]); // Tambahkan startInterval sebagai dependensi

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    if (images.length > 1) {
      startInterval();
    }
  };

  if (images.length === 0) {
    return (
      <div className="text-center p-4 text-gray-500">
        Tidak ada gambar untuk ditampilkan.
      </div>
    );
  }

  return (
    <div className="z-0 relative w-screen overflow-hidden shadow-lg mx-auto max-w-none">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-screen flex-shrink-0 object-cover h-64 md:h-96"
          />
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              currentIndex === index ? "bg-black" : "bg-white opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;

import { useState } from "react";
import Header from "../components/Header";

// Definisikan tipe data untuk setiap item gambar
interface ImageItem {
  id: number;
  src: string;
  alt: string;
}

// Data gambar placeholder
// Ganti ini dengan gambar gym klien Anda
const galleryImages: ImageItem[] = [
  {
    id: 1,
    src: "https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sudut Gym 1",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sudut Gym 2",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sudut Gym 3",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=994&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sudut Gym 4",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1591258370814-01609b341790?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sudut Gym 5",
  },
  {
    id: 6,
    src: "https://plus.unsplash.com/premium_photo-1665673312770-90df9f77ddfa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sudut Gym 6",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1599552683573-9dc48255fe85?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sudut Gym 7",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1550259979-ed79b48d2a30?q=80&w=468&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sudut Gym 8",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sudut Gym 9",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sudut Gym 10",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sudut Gym 11",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sudut Gym 12",
  },
];

const GalleryPage = () => {
  // State untuk mengelola visibilitas modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State untuk menyimpan gambar yang saat ini dipilih
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  // Fungsi untuk membuka modal dan menyimpan gambar yang diklik
  const openModal = (image: ImageItem) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Header />
      {/* Catatan: Komponen Header telah diabaikan sesuai permintaan Anda */}
      {/* Header, jika Anda ingin menambahkannya kembali, bisa di sini */}
      <div className=" min-h-screen py-12 px-4 pt-32">
        <main className="container mx-auto">
          <h1 className="text-4xl font-bold text-center text-pri mb-12 font-oswald">
            Galeri
          </h1>

          {/* Grid untuk menampilkan gambar */}
          <div className=" columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
                onClick={() => openModal(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold">
                    {image.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Modal, hanya ditampilkan jika isModalOpen bernilai true */}
        {isModalOpen && selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20 p-4"
            onClick={closeModal} // Tutup modal saat mengklik di luar gambar
          >
            <div
              className="max-w-4xl max-h-full overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="rounded-lg shadow-xl max-w-full max-h-[80vh] object-contain"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-4xl font-bold p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-colors duration-300"
                aria-label="Close"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GalleryPage;

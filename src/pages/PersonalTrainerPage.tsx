import Footer from "../components/Footer";
import Header from "../components/Header";
import PtCard from "../components/PtCard";
import { cardData } from "../components/data/personalTrainerData";

const PersonalTrainerPage = () => {
  return (
    <>
      <Header />
      <main>
        {/* Section1 */}
        <section className="flex flex-col gap-8 pt-32">
          {/* Bagian gambar dan teks "Tentang Kami" */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Gym background"
              className="w-screen h-[40vh] md:h-[60vh] object-cover"
            />
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-oswald text-2xl md:text-8xl text-white z-50">
              PERSONAL TRAINER
            </h1>
          </div>

          {/* Bagian deskripsi teks */}
          <div className="flex flex-col gap-4 px-8 max-w-4xl md:max-w-none mx-auto">
            {" "}
            {/* Menambahkan max-w dan mx-auto untuk centering pada layar besar */}
            <p className="text-center text-pri font-noto-sans font-extralight text-sm md:text-lg">
              Temukan potensi terbaik Anda bersama tim Personal Trainer
              bersertifikasi kami! Setiap pelatih di [Nama Gym Anda] memiliki
              keahlian dan dedikasi untuk membimbing Anda mencapai tujuan
              kebugaran, apa pun itu. Kami memahami bahwa setiap individu itu
              unik, itulah mengapa kami menawarkan pendekatan personal yang
              disesuaikan dengan kebutuhan, tingkat kebugaran, dan aspirasi
              Anda.
            </p>
            <p className="text-center text-pri font-noto-sans font-extralight text-sm md:text-lg">
              Dari program penurunan berat badan yang efektif, pembentukan otot
              yang terarah, hingga peningkatan stamina dan fleksibilitas,
              pelatih kami akan mendampingi Anda di setiap langkah. Dapatkan
              panduan nutrisi, teknik latihan yang benar, dan motivasi tanpa
              batas untuk memastikan Anda tidak hanya meraih hasil, tetapi juga
              mempertahankan gaya hidup sehat dalam jangka panjang.
            </p>
          </div>
        </section>
        {/* Section1 */}
        {/* Section2 */}
        <section>
          <div className="pt-16 flex flex-col gap-4 items-center justify-center">
            <div className="flex flex-col">
              <h1 className="text-center text-pri font-oswald text-2xl md:text-center">
                Personal Trainer
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-8 md:gap-4 pt-8 px-8 items-center justify-center">
            {cardData.map((card) => (
              <PtCard
                key={card.id} // Gunakan properti unik sebagai key
                img={card.img}
                h1={card.h1}
                para={card.para}
              />
            ))}
          </div>
        </section>
        {/* Section2 */}
      </main>
      <Footer />
    </>
  );
};

export default PersonalTrainerPage;

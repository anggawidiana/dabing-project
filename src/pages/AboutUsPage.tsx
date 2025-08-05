import CardAbout from "../components/CardAbout";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AboutUsPage = () => {
  return (
    <>
      <Header />
      <main>
        {/* Container utama dengan gap antar bagian */}
        <section className="flex flex-col gap-8 pt-32">
          {/* Bagian gambar dan teks "Tentang Kami" */}
          <div className="relative">
            <img
              src="https://plus.unsplash.com/premium_photo-1661284821625-9400498df354?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Gym background"
              className="w-screen h-[40vh] md:h-[60vh] object-cover"
            />
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-oswald text-2xl md:text-8xl text-white z-50">
              TENTANG KAMI
            </h1>
          </div>

          {/* Bagian deskripsi teks */}
          <div className="flex flex-col gap-4 px-8 max-w-4xl md:max-w-none mx-auto">
            {" "}
            {/* Menambahkan max-w dan mx-auto untuk centering pada layar besar */}
            <p className="text-center text-pri font-noto-sans font-extralight text-sm md:text-lg">
              Selamat datang di [Nama Gym Anda]! Lebih dari sekadar tempat
              berolahraga, kami adalah komunitas yang berdedikasi untuk membantu
              Anda meraih potensi kebugaran terbaik. Misi kami sederhana:
              menyediakan lingkungan yang inspiratif, fasilitas kelas dunia, dan
              dukungan ahli untuk setiap langkah perjalanan kesehatan Anda.
            </p>
            <p className="text-center text-pri font-noto-sans font-extralight text-sm md:text-lg">
              Didirikan pada [Tahun Didirikan, jika relevan] di [Lokasi/Kota
              Anda], kami percaya bahwa kebugaran adalah tentang memberdayakan
              diri sendiri. Kami bangga menjadi rumah bagi para trainer
              bersertifikasi yang siap membimbing Anda, serta komunitas anggota
              yang saling mendukung. Bersama-sama, kita bangun versi terbaik
              dari diri kita, satu latihan pada satu waktu.
            </p>
          </div>
        </section>
        {/* Section2 */}
        <section className="py-16 flex flex-col gap-16">
          <div
            id="h-1"
            className="flex flex-col"
          >
            <h1 className="text-sec font-oswald md:text-2xl text-center">
              DABING FITNESS STUDIO
            </h1>
            <h1 className="text-pri font-oswald text-2xl md:text-4xl text-center">
              WHY CHOOSE US?
            </h1>
          </div>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-center">
            <CardAbout
              H1="Pemahaman Pemula"
              iconBG="bg-[#3C3C3C]"
              iconColor="#E10130"
              iconType="deal"
              para="Kami menyediakan 5 sesi pengenalan alat dan gerakan GRATIS yang dipandu oleh instruktur berpengalaman untuk pemula."
            />
            <CardAbout
              H1="Berpengalaman"
              iconBG="bg-[#3C3C3C]"
              iconColor="#E10130"
              iconType="star"
              para="Instruktur kami yang berpengalaman siap membantu Anda mencapai tujuan kebugaran Anda."
            />
            <CardAbout
              H1="Waktu Fleksibel"
              iconBG="bg-[#3C3C3C]"
              iconColor="#E10130"
              iconType="time"
              para="Studio kami buka dari jam 6 pagi hingga 11 malam, memberikan Anda keleluasaan untuk berlatih sesuai dengan jadwal Anda."
            />
            <CardAbout
              H1="Investasi Kesehatan"
              iconBG="bg-[#3C3C3C]"
              iconColor="#E10130"
              iconType="heart"
              para="Meskipun program pengenalan kami gratis, kesehatan Anda adalah investasi terpenting dalam hidup anda."
            />
          </div>
        </section>
        {/* Section2 */}
        {/* Bagian embed video */}
        <section className="flex justify-center px-8 pb-8">
          {" "}
          {/* Menambahkan padding horizontal dan bawah */}
          {/* Wrapper untuk video responsif */}
          <div
            className="relative w-full max-w-2xl md:max-w-none"
            style={{ paddingTop: "56.25%" }}
          >
            {" "}
            {/* Rasio aspek 16:9 (9 / 16 * 100%) */}
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/xJ_fFLgGHiU?si=oqM38xmH84YIiyAR"
              title="YouTube video player"
              frameBorder="0" // Perbaikan: camelCase
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" // Perbaikan: camelCase
              allowFullScreen // Perbaikan: camelCase
            ></iframe>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUsPage;

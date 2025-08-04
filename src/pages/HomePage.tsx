import Header from "../components/Header";
import ImageCarousel from "../components/ImageCarousel";
import Button from "../components/Button";
import { Link } from "react-router";
import Icon from "../components/Icon";
import Footer from "../components/Footer";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const carouselImages = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661265933107-85a5dbd815af?q=80&w=818&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const HomePage = () => {
  const Section1Ref = useRef<HTMLDivElement>(null);
  const Section2Ref = useRef<HTMLDivElement>(null);
  const Section3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.refresh();
    if (Section1Ref.current) {
      gsap.fromTo(
        Section1Ref.current,
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
            trigger: Section1Ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none",
            markers: true, // Untuk debugging, bisa diaktifkan sementara
          },
        }
      );
    }
    if (Section2Ref.current) {
      gsap.fromTo(
        Section2Ref.current,
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
            trigger: Section2Ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none",
            markers: true, // Untuk debugging, bisa diaktifkan sementara
          },
        }
      );
    }
    if (Section3Ref.current) {
      gsap.fromTo(
        Section3Ref.current,
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
            trigger: Section3Ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none",
            markers: true, // Untuk debugging, bisa diaktifkan sementara
          },
        }
      );
    }
  }, []);

  return (
    <div>
      <Header />
      <div className=" bg-third flex items-start justify-center pt-32">
        <ImageCarousel
          images={carouselImages}
          interval={4000}
        />{" "}
      </div>
      {/* Section1 */}
      <div
        ref={Section1Ref}
        className="pb-16 md:justify-center md:items-center containerSatu flex flex-col mt-8 ml-8 md:mx-auto gap-4 max-w-[80vw]"
      >
        <div
          id="h-1"
          className="flex flex-col"
        >
          <h1 className="text-sec font-oswald md:text-2xl md:text-center">
            DABING FITNESS STUDIO
          </h1>
          <h1 className="text-pri font-oswald text-2xl md:text-4xl md:text-center">
            REGISTER MEMBERSHIP
          </h1>
        </div>
        <p className="desc-1-1 md:text-center md:text-lg text-pri font-noto-sans font-extralight text-sm">
          Dengan Menjadi Member, Anda akan mendapatkan akses eksklusif ke
          fasilitas kebugaran berkualitas, beragam program latihan, dukungan
          instruktur berpengalaman, dan komunitas yang selalu siap memberikan
          motivasi. Berikut adalah beberapa benefit dari menjadi member kami :
        </p>
        <div className="flex flex-col gap-4 my-4 md:flex-row">
          <div className="flex gap-4">
            <Icon
              icon="dumbbell"
              bg="bg-sec"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-pri font-oswald">AKSES FASILITAS PREMIUM</h1>
              <p className="text-pri font-noto-sans font-extralight text-sm">
                Kami memiliki tim instruktur yang berpengalaman dan
                berkualifikasi tinggi yang siap membimbing Anda dalam perjalanan
                kebugaran Anda.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Icon
              icon="dumbbell"
              bg="bg-sec"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-pri font-oswald">
                AKSES GRATIS KE SEMUA KELAS
              </h1>
              <p className="text-pri font-noto-sans font-extralight text-sm">
                Rasakan pengalaman kebugaran terbaik dengan akses gratis ke
                semua kelas kami! Dari Zumba yang energik, Boxing yang intens,
                hingga Sesi Pengenalan Alat yang informatif, Anda bisa mencoba
                semuanya tanpa biaya.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Icon
              icon="medal"
              bg="bg-sec"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-pri font-oswald">
                DUKUNGAN INSTRUKTUR BERPENGALAMAN
              </h1>
              <p className="text-pri font-noto-sans font-extralight text-sm">
                Anda akan memiliki akses tak terbatas ke fasilitas kebugaran
                berkualitas tinggi kami, termasuk peralatan modern, ruang
                latihan fungsional, dan kelas-kelas yang beragam.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Icon
              icon="community"
              bg="bg-sec"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-pri font-oswald">
                KOMUNITAS KEBUGARAN YANG MENDORONG
              </h1>
              <p className="text-pri font-noto-sans font-extralight text-sm">
                Bergabung dengan komunitas anggota DABING FITNESS STUDIO yang
                terinspirasi oleh kesehatan dan kebugaran. Ini adalah peluang
                untuk berbagi pengalaman, mendapatkan dukungan dari sesama
                anggota.
              </p>
            </div>
          </div>
        </div>
        <Link to="/membership">
          <Button
            text="Ke Halaman Memberhip"
            variant="default"
          />
        </Link>
      </div>
      {/* Section1 */}
      {/* Section2 */}
      <div
        ref={Section2Ref}
        className="flex flex-col mt-16 gap-4 max-w-full bg-pri px-8 py-16"
      >
        <div className="flex flex-col">
          <h1 className="text-sec font-oswald md:text-2xl">
            DABING FITNESS STUDIO
          </h1>
          <h1 className="text-third font-oswald text-2xl md:text-4xl">
            PERSONAL TRAINER
          </h1>
        </div>
        <p className="text-third md:w-[50%] font-noto-sans font-extralight text-sm md:text-lg">
          Butuh dorongan ekstra dari ahlinya? Personal trainer bersertifikasi
          kami siap membantu Anda mencapai target kebugaran dengan program
          terarah dan motivasi ahli yang terbukti. Mulai transformasimu sekarang
          dengan keyakinan penuh!
        </p>
        <Link to="/personal-trainer">
          <Button
            text="Ke Halaman Personal Trainer"
            variant="second"
          />
        </Link>
      </div>
      {/* Section2 */}
      {/* Section3 */}
      <div
        ref={Section3Ref}
        className="flex flex-col md:items-center md:justify-center gap-8 max-w-full bg-[#111111] px-8 py-16"
      >
        <div className="flex flex-col">
          <h1 className="text-sec font-oswald text-center md:text-2xl">
            DABING FITNESS STUDIO
          </h1>
          <h1 className="text-pri font-oswald text-2xl text-center md:text-4xl">
            Save Time, Improve Fitness, And Enjoy Exclusive Benefits!
          </h1>
        </div>
        <p className="text-pri md:text-lg md:w-[80%] font-noto-sans font-extralight text-sm text-center">
          Dengan aplikasi ini, Anda dapat memantau perkembangan kebugaran,
          mengakses jadwal kelas terbaru, dan mendapatkan panduan latihan di
          mana saja, kapan saja. Nikmati manfaat eksklusif seperti diskon,
          hadiah, dan komunikasi langsung dengan instruktur dan komunitas
          anggota kami.
        </p>
        <Link to="/personal-trainer">
          <div className="flex items-center justify-center">
            <Button
              text="DAFTAR MEMBERSHIP SEKARANG!"
              variant="default"
              fontWeight="font-bold"
            />
          </div>
        </Link>
      </div>
      {/* Section3 */}
      {/* Footer */}
      <Footer />
      {/* Footer */}
    </div>
  );
};

export default HomePage;

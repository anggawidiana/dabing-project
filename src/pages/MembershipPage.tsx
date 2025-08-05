import Header from "../components/Header";
import ButtonMember from "../components/ButtonMember";
import CardMember from "../components/CardMember";
import type {
  MembershipCategory,
  MembershipItem,
  CategoryButton,
} from "../components/type/MemberCardType";
import {
  allMembershipData,
  categoryButtons,
} from "../components/data/membershipData";
import { useState } from "react";
import Footer from "../components/Footer";

const MembershipPage: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<MembershipCategory>("promo");

  const handleCategoryChange = (category: MembershipCategory): void => {
    setActiveCategory(category);
  };
  return (
    <>
      <Header />
      <main>
        {/* Section1 */}
        <section className="pt-32 flex flex-col gap-4 items-center justify-center">
          <div className="flex flex-col">
            <h1 className="text-center text-sec font-oswald md:text-2xl md:text-center">
              DABING FITNESS STUDIO
            </h1>
            <h1 className="text-center text-pri font-oswald text-2xl md:text-4xl md:text-center">
              REGISTER MEMBERSHIP
            </h1>
          </div>
          <p className="text-center max-w-[80%] desc-1-1 md:text-center md:text-lg text-pri font-noto-sans font-extralight text-sm">
            Dengan Menjadi Member, Anda akan mendapatkan akses eksklusif ke
            fasilitas kebugaran berkualitas, beragam program latihan, dukungan
            instruktur berpengalaman, dan komunitas yang selalu siap memberikan
            motivasi. Berikut adalah beberapa benefit dari menjadi member kami :
          </p>
        </section>
        {/* Section1 */}
        {/* Section2 */}
        <section>
          <div className="flex flex-col gap-4">
            <div className="pt-16 flex flex-col gap-4 items-center justify-center">
              <div className="flex flex-col">
                <h1 className="text-center text-pri font-oswald text-2xl md:text-center">
                  Pilih Paket Membership
                </h1>
              </div>
              <p className="text-center max-w-[80%] desc-1-1 md:text-center md:text-lg text-pri font-noto-sans font-extralight text-sm">
                Silahkan pilih paket membership sesaui kebutuhan kamu.
              </p>
            </div>
            <div className="flex justify-center items-center">
              {/* Category Buttons */}
              <div className="flex flex-wrap gap-3 justify-center items-center max-w-4xl">
                {categoryButtons.map((button: CategoryButton) => (
                  <ButtonMember
                    key={button.key}
                    text={button.label}
                    variant="default"
                    isActive={activeCategory === button.key}
                    onClick={() => handleCategoryChange(button.key)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Membership Cards */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-6xl">
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {allMembershipData[activeCategory]?.map(
                  (membership: MembershipItem, index: number) => (
                    <CardMember
                      key={index}
                      title={membership.title}
                      price={membership.price}
                      description={membership.description}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </section>
        {/* Section2 */}
      </main>
      <Footer />
    </>
  );
};

export default MembershipPage;

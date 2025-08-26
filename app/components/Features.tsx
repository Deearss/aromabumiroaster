import React from "react";
import { GiCoffeeBeans } from "react-icons/gi";
import { IoLeafOutline } from "react-icons/io5";
import { FaFire } from "react-icons/fa";

const Features = () => {
  return (
    <>
      <section className="w-full py-12 md:py-16 lg:py-20 bg-primary_dark">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-secondary mb-8 md:mb-10 lg:mb-12">
            Mengapa Memilih Aroma Bumi Roaster?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-accent rounded-full mx-auto mb-3 md:mb-4 flexcc transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/80 group-hover:shadow-lg">
                <IoLeafOutline className="text-white text-2xl md:text-3xl transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-secondary mb-1 md:mb-2 transition-colors group-hover:text-accent">
                100% Natural
              </h3>
              <p className="text-sm md:text-base text-secondary/70 transition-colors group-hover:text-secondary/90 leading-relaxed px-2 md:px-0">
                Biji kopi pilihan langsung dari petani lokal tanpa bahan kimia
                berbahaya
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center group">
              <div className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-accent rounded-full mx-auto mb-3 md:mb-4 flexcc transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/80 group-hover:shadow-lg">
                <GiCoffeeBeans className="text-white text-2xl md:text-3xl transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-secondary mb-1 md:mb-2 transition-colors group-hover:text-accent">
                Sangrai Segar
              </h3>
              <p className="text-sm md:text-base text-secondary/70 transition-colors group-hover:text-secondary/90 leading-relaxed px-2 md:px-0">
                Disangrai dengan teknik artisan untuk menghasilkan cita rasa
                terbaik
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center group">
              <div className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-accent rounded-full mx-auto mb-3 md:mb-4 flexcc transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/80 group-hover:shadow-lg">
                <FaFire className="text-white text-2xl md:text-3xl transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-secondary mb-1 md:mb-2 transition-colors group-hover:text-accent">
                Ahli Sangrai
              </h3>
              <p className="text-sm md:text-base text-secondary/70 transition-colors group-hover:text-secondary/90 leading-relaxed px-2 md:px-0">
                Proses roasting dengan metode artisan yang dikuasai oleh ahli
                berpengalaman puluhan tahun
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

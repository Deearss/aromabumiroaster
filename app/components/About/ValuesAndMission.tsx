"use client";

import { FaSeedling, FaLeaf, FaHandshake } from "react-icons/fa";

export default function ValuesAndMission() {
  return (
    <div className="container rounded-lg p-4 md:p-6 lg:p-8 mb-12 md:mb-16">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-3 md:mb-4 font-playfair flex items-center gap-2 md:gap-3 justify-center">
          Visi & Misi
        </h2>
        <p className="text-sm md:text-base text-text/80 max-w-3xl mx-auto">
          Fondasi yang menguatkan setiap langkah perjalanan kopi dari petani
          hingga ke cangkir Anda.
        </p>
      </div>

      {/* Vision Statement */}
      <div className="text-center">
        <div className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white rounded-lg p-4 md:p-5 lg:p-6 shadow-md text-center hover:shadow-lg transall">
              <div className="flexc mb-3 md:mb-4">
                <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-accent rounded-full flexc">
                  <FaHandshake className="text-lg md:text-xl lg:text-2xl text-white" />
                </div>
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-semibold text-primary mb-2 md:mb-3 font-lato">
                Perdagangan Adil
              </h3>
              <p className="text-xs md:text-sm lg:text-base text-text font-lato leading-relaxed">
                Kami berkomitmen untuk praktik perdagangan yang adil dengan para
                petani kopi Indonesia.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 md:p-5 lg:p-6 shadow-md text-center hover:shadow-lg transall">
              <div className="flexc mb-3 md:mb-4">
                <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-accent rounded-full flexc">
                  <FaLeaf className="text-lg md:text-xl lg:text-2xl text-white" />
                </div>
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-semibold text-primary mb-2 md:mb-3 font-lato">
                Keberlanjutan
              </h3>
              <p className="text-xs md:text-sm lg:text-base text-text font-lato leading-relaxed">
                Mendukung praktik pertanian berkelanjutan untuk menjaga
                kelestarian alam Indonesia.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 md:p-5 lg:p-6 shadow-md text-center hover:shadow-lg transall">
              <div className="flexc mb-3 md:mb-4">
                <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-accent rounded-full flexc">
                  <FaSeedling className="text-lg md:text-xl lg:text-2xl text-white" />
                </div>
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-semibold text-primary mb-2 md:mb-3 font-lato">
                Kualitas Premium
              </h3>
              <p className="text-xs md:text-sm lg:text-base text-text font-lato leading-relaxed">
                Kualitas premium mulai dari pemilihan biji hingga proses
                roasting yang sempurna.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 md:p-6 lg:p-8 shadow-sm border border-accent/20">
          <h3 className="text-lg md:text-xl font-bold text-primary mb-3 md:mb-4 font-playfair flex items-center gap-2 justify-center">
            <FaSeedling className="text-accent" />
            Visi 2030
            <FaSeedling className="text-accent" />
          </h3>
          <p className="text-sm md:text-base lg:text-lg text-text leading-relaxed italic">
            &ldquo;Menjadi roaster kopi terdepan di Asia Tenggara yang dikenal
            karena komitmennya pada kualitas premium, keberlanjutan lingkungan,
            dan pemberdayaan petani lokal. Kami ingin menghubungkan cerita
            petani Indonesia dengan pecinta kopi di seluruh dunia.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

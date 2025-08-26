"use client";

import { FaUsers } from "react-icons/fa";

export default function TeamSection() {
  return (
    <div className="container bg-white rounded-lg p-4 md:p-6 lg:p-8 shadow-lg mb-12 md:mb-16">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-3 md:mb-4 font-playfair flex items-center gap-2 md:gap-3 justify-center">
          <FaUsers className="text-accent text-lg md:text-xl" />
          Tim Aroma Bumi Roaster
        </h2>
        <p className="text-sm md:text-base text-text/80 max-w-3xl mx-auto">
          Keluarga besar yang terdiri dari{" "}
          <span className="font-bold text-accent">47 karyawan</span> dari
          berbagai daerah di Indonesia
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Divisi Produksi */}
        <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg p-4 md:p-5 border border-accent/20">
          <div className="flexc mb-3 md:mb-4">
            <div className="w-full max-w-sm h-48 md:h-56 lg:h-64 bg-gradient-to-br from-primary to-accent rounded-lg shadow-md flexc">
              <div className="text-center text-white">
                <FaUsers className="w-full text-center text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4 opacity-80" />
                <p className="text-xs md:text-sm opacity-75">
                  Foto tim atau workspace
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-base md:text-lg font-bold text-primary mb-2 text-center">
            Divisi Produksi & Roasting
          </h3>

          <div className="space-y-2 text-xs md:text-sm text-text">
            <p>
              <span className="font-semibold">15 karyawan</span> - Master
              Roaster, Quality Control, Packaging
            </p>
            <div className="space-y-1">
              <p className="text-accent font-medium">Asal Daerah:</p>
              <p>• Jakarta (5 orang) - Head Roaster & QC</p>
              <p>• Bandung (4 orang) - Assistant Roaster</p>
              <p>• Surabaya (3 orang) - Packaging Team</p>
              <p>• Yogyakarta (3 orang) - Quality Control</p>
            </div>
          </div>
        </div>

        {/* Divisi Sourcing */}
        <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg p-4 md:p-5 border border-accent/20">
          <div className="flexc mb-3 md:mb-4">
            <div className="w-full max-w-sm h-48 md:h-56 lg:h-64 bg-gradient-to-br from-primary to-accent rounded-lg shadow-md flexc">
              <div className="text-center text-white">
                <FaUsers className="w-full text-center text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4 opacity-80" />
                <p className="text-xs md:text-sm opacity-75">
                  Foto tim atau workspace
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-base md:text-lg font-bold text-primary mb-2 text-center">
            Divisi Sourcing & Farmer Relations
          </h3>

          <div className="space-y-2 text-xs md:text-sm text-text">
            <p>
              <span className="font-semibold">12 karyawan</span> - Field
              Coordinator, Buyer, Partnership
            </p>
            <div className="space-y-1">
              <p className="text-accent font-medium">Asal Daerah:</p>
              <p>• Aceh (3 orang) - Gayo Highland Coordinator</p>
              <p>• Toraja (2 orang) - Sulawesi Regional</p>
              <p>• Bali (2 orang) - Kintamani Specialist</p>
              <p>• Flores (2 orang) - NTT Regional</p>
              <p>• Papua (2 orang) - Eastern Regional</p>
              <p>• Jawa Barat (1 orang) - Preanger Coordinator</p>
            </div>
          </div>
        </div>

        {/* Divisi Marketing & Sales */}
        <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg p-4 md:p-5 border border-accent/20">
          <div className="flexc mb-3 md:mb-4">
            <div className="w-full max-w-sm h-48 md:h-56 lg:h-64 bg-gradient-to-br from-primary to-accent rounded-lg shadow-md flexc">
              <div className="text-center text-white">
                <FaUsers className="w-full text-center text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4 opacity-80" />
                <p className="text-xs md:text-sm opacity-75">
                  Foto tim atau workspace
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-base md:text-lg font-bold text-primary mb-2 text-center">
            Divisi Marketing & Sales
          </h3>

          <div className="space-y-2 text-xs md:text-sm text-text">
            <p>
              <span className="font-semibold">10 karyawan</span> - Digital
              Marketing, Sales, Customer Service
            </p>
            <div className="space-y-1">
              <p className="text-accent font-medium">Asal Daerah:</p>
              <p>• Jakarta (4 orang) - Digital Marketing Lead</p>
              <p>• Bandung (2 orang) - Content Creator</p>
              <p>• Surabaya (2 orang) - Regional Sales</p>
              <p>• Medan (1 orang) - Northern Sales</p>
              <p>• Makassar (1 orang) - Eastern Sales</p>
            </div>
          </div>
        </div>

        {/* Divisi Operations */}
        <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg p-4 md:p-5 border border-accent/20">
          <div className="flexc mb-3 md:mb-4">
            <div className="w-full max-w-sm h-48 md:h-56 lg:h-64 bg-gradient-to-br from-primary to-accent rounded-lg shadow-md flexc">
              <div className="text-center text-white">
                <FaUsers className="w-full text-center text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4 opacity-80" />
                <p className="text-xs md:text-sm opacity-75">
                  Foto tim atau workspace
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-base md:text-lg font-bold text-primary mb-2 text-center">
            Divisi Operations & Logistics
          </h3>

          <div className="space-y-2 text-xs md:text-sm text-text">
            <p>
              <span className="font-semibold">6 karyawan</span> - Warehouse,
              Shipping, Inventory
            </p>
            <div className="space-y-1">
              <p className="text-accent font-medium">Asal Daerah:</p>
              <p>• Jakarta (2 orang) - Warehouse Manager</p>
              <p>• Tangerang (2 orang) - Logistics Coordinator</p>
              <p>• Bekasi (1 orang) - Inventory Control</p>
              <p>• Bogor (1 orang) - Shipping Specialist</p>
            </div>
          </div>
        </div>

        {/* Divisi Management */}
        <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg p-4 md:p-5 border border-accent/20">
          <div className="flexc mb-3 md:mb-4">
            <div className="w-full max-w-sm h-48 md:h-56 lg:h-64 bg-gradient-to-br from-primary to-accent rounded-lg shadow-md flexc">
              <div className="text-center text-white">
                <FaUsers className="w-full text-center text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4 opacity-80" />
                <p className="text-xs md:text-sm opacity-75">
                  Foto tim atau workspace
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-base md:text-lg font-bold text-primary mb-2 text-center">
            Divisi Management & Support
          </h3>

          <div className="space-y-2 text-xs md:text-sm text-text">
            <p>
              <span className="font-semibold">4 karyawan</span> - Management,
              Finance, HR, IT
            </p>
            <div className="space-y-1">
              <p className="text-accent font-medium">Asal Daerah:</p>
              <p>• Jakarta (2 orang) - CEO & Finance Manager</p>
              <p>• Bandung (1 orang) - HR Specialist</p>
              <p>• Surabaya (1 orang) - IT Administrator</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 md:mt-8 text-center">
        <div className="bg-accent/10 rounded-lg p-4 md:p-6">
          <h4 className="text-base md:text-lg font-bold text-primary mb-2 md:mb-3 text-center">
            Keberagaman adalah Kekuatan Kami
          </h4>
          <p className="text-sm md:text-base text-text leading-relaxed">
            Tim kami mewakili 15 provinsi di Indonesia, membawa keunikan budaya
            dan perspektif lokal yang memperkaya pemahaman kami tentang kopi
            nusantara. Setiap anggota tim tidak hanya bekerja, tetapi juga
            menjadi duta kopi dari daerah asalnya.
          </p>
        </div>
      </div>
    </div>
  );
}

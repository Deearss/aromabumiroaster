"use client";

import { FaUsers } from "react-icons/fa";

export default function TeamSection() {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto rounded-lg px-8 py-10 lg:py-20">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-3 md:mb-4 font-playfair flex items-center gap-2 md:gap-3 justify-center">
            <FaUsers className="text-accent text-lg md:text-xl" />
            Keluarga Besar Kami
            <FaUsers className="text-accent text-lg md:text-xl" />
          </h2>
          <p className="text-sm md:text-base text-text/80 max-w-3xl mx-auto">
            Keluarga besar yang terdiri dari{" "}
            <span className="font-bold text-accent">47 karyawan</span> dari
            berbagai daerah di Indonesia
          </p>
        </div>

        {/* Keterangan Divisi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-10 gap-4 md:space-x-0">
          {[
            {
              title: "Divisi Produksi & Roasting",
              employees: 15,
              roles: "Master Roaster, Quality Control, Packaging",
              regions: [
                "Jakarta (5 orang) - Head Roaster & QC",
                "Bandung (4 orang) - Assistant Roaster",
                "Surabaya (3 orang) - Packaging Team",
                "Yogyakarta (3 orang) - Quality Control",
              ],
            },
            {
              title: "Divisi Sourcing & Farmer Relations",
              employees: 12,
              roles: "Field Coordinator, Buyer, Partnership",
              regions: [
                "Aceh (3 orang) - Gayo Highland Coordinator",
                "Toraja (2 orang) - Sulawesi Regional",
                "Bali (2 orang) - Kintamani Specialist",
                "Flores (2 orang) - NTT Regional",
                "Papua (2 orang) - Eastern Regional",
                "Jawa Barat (1 orang) - Preanger Coordinator",
              ],
            },
            {
              title: "Divisi Marketing & Sales",
              employees: 10,
              roles: "Digital Marketing, Sales, Customer Service",
              regions: [
                "Jakarta (4 orang) - Digital Marketing Lead",
                "Bandung (2 orang) - Content Creator",
                "Surabaya (2 orang) - Regional Sales",
                "Medan (1 orang) - Northern Sales",
                "Makassar (1 orang) - Eastern Sales",
              ],
            },
            {
              title: "Divisi Operations & Logistics",
              employees: 6,
              roles: "Warehouse, Shipping, Inventory",
              regions: [
                "Jakarta (2 orang) - Warehouse Manager",
                "Tangerang (2 orang) - Logistics Coordinator",
                "Bekasi (1 orang) - Inventory Control",
                "Bogor (1 orang) - Shipping Specialist",
              ],
            },
            {
              title: "Divisi Management & Support",
              employees: 4,
              roles: "Management, Finance, HR, IT",
              regions: [
                "Jakarta (2 orang) - CEO & Finance Manager",
                "Bandung (1 orang) - HR Specialist",
                "Surabaya (1 orang) - IT Administrator",
              ],
            },
          ].map((division, index) => (
            <div key={index}>
              <div className="flexc mb-3 md:mb-4">
                <div className="w-full max-w-sm h-48 md:h-56 lg:h-64 rounded-lg bg-gradient-to-br from-primary to-accent shadow-md flexc">
                  <div className="text-center text-white">
                    <FaUsers className="w-full text-center text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4 opacity-80" />
                    <p className="text-xs md:text-sm opacity-75">
                      Foto tim atau workspace
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-base md:text-lg font-bold text-primary mb-2 text-center">
                {division.title}
              </h3>

              <div className="max-w-sm mx-auto space-y-2 text-xs md:text-sm text-text">
                <p>
                  <span className="font-semibold">
                    {division.employees} karyawan
                  </span>{" "}
                  - {division.roles}
                </p>
                <div className="space-y-1">
                  <p className="text-accent font-medium">Asal Daerah :</p>
                  {division.regions.map((region, regionIndex) => (
                    <p key={regionIndex}>• {region}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Semboyan Bersama */}
        <div className="mt-10 lg:mx-12 text-center">
          <div className="bg-accent/10 rounded-lg p-4 md:p-6">
            <h4 className="text-base md:text-lg font-bold text-primary mb-2 md:mb-3 text-center">
              Keberagaman adalah Kekuatan Kami
            </h4>
            <p className="text-[0.75rem] md:text-base text-text leading-relaxed">
              Tim kami mewakili 15 provinsi di Indonesia, membawa keunikan
              budaya dan perspektif lokal yang memperkaya pemahaman kami tentang
              kopi nusantara. Setiap anggota tim tidak hanya bekerja, tetapi
              juga menjadi duta kopi dari daerah asalnya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

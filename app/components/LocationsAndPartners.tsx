"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaStore,
  FaUniversity,
  FaCoffee,
  FaUtensils,
} from "react-icons/fa";

const LocationsAndPartners = () => {
  // Mock cabang fisik
  const branches = [
    {
      id: 1,
      name: "Aroma Bumi Roaster - Jakarta Pusat",
      address: "Jl. Sudirman No. 123, Menteng, Jakarta Pusat 10310",
      phone: "+62 21 1234 5678",
      hours: "Senin - Jumat: 08.00 - 17.00 WIB",
      type: "Kantor Pusat & Showroom",
    },
    {
      id: 2,
      name: "Aroma Bumi Roaster - Bandung",
      address: "Jl. Braga No. 45, Sumur Bandung, Bandung 40111",
      phone: "+62 22 8765 4321",
      hours: "Senin - Sabtu: 09.00 - 18.00 WIB",
      type: "Cabang & Roastery",
    },
    {
      id: 3,
      name: "Aroma Bumi Roaster - Surabaya",
      address: "Jl. Tunjungan No. 67, Genteng, Surabaya 60275",
      phone: "+62 31 9876 5432",
      hours: "Senin - Sabtu: 08.30 - 17.30 WIB",
      type: "Distribusi Regional",
    },
  ];

  // Mock mitra perkebunan
  const farmPartners = [
    {
      id: 1,
      name: "Koperasi Gayo Organic",
      location: "Takengon, Aceh Tengah",
      specialty: "Arabica Gayo Highland",
      certification: "Organic & Fair Trade",
    },
    {
      id: 2,
      name: "Asosiasi Petani Toraja Sapan",
      location: "Tana Toraja, Sulawesi Selatan",
      specialty: "Toraja Kalosi Premium",
      certification: "UTZ Certified",
    },
    {
      id: 3,
      name: "Subak Abian Kintamani",
      location: "Kintamani, Bali",
      specialty: "Kintamani Arabica",
      certification: "Geographical Indication",
    },
    {
      id: 4,
      name: "Kelompok Tani Bajawa",
      location: "Bajawa, Flores, NTT",
      specialty: "Flores Bajawa Single Origin",
      certification: "Rainforest Alliance",
    },
  ];

  // Mock mitra bisnis
  const businessPartners = [
    {
      id: 1,
      name: "Starbucks Indonesia",
      type: "Jaringan Kopi",
      icon: FaCoffee,
      description: "Supplier biji kopi premium untuk menu seasonal",
    },
    {
      id: 2,
      name: "Hotel Indonesia Kempinski",
      type: "Perhotelan",
      icon: FaUtensils,
      description: "Penyedia kopi eksklusif untuk restaurant dan room service",
    },
    {
      id: 3,
      name: "Universitas Indonesia",
      type: "Pendidikan",
      icon: FaUniversity,
      description: "Partner program penelitian dan development kopi",
    },
    {
      id: 4,
      name: "Coffee Smith Chain",
      type: "Kedai Kopi",
      icon: FaStore,
      description: "Distributor utama untuk 50+ outlet di Jabodetabek",
    },
  ];

  return (
    <section className="py-8 md:py-16 bg-secondary">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Cabang Fisik */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4 font-playfair">
              Lokasi Cabang
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-accent max-w-2xl px-2 lg:px-0 mx-auto">
              Kunjungi cabang-cabang Aroma Bumi Roaster untuk konsultasi dan
              pemesanan langsung
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-3 md:p-4 lg:p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start mb-3 md:mb-4">
                  <FaStore className="text-accent text-lg md:text-xl lg:text-2xl mt-1 mr-2 md:mr-3 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-primary text-sm md:text-base lg:text-lg leading-tight mb-1">
                      {branch.name}
                    </h3>
                    <span className="text-xs md:text-sm text-accent font-medium">
                      {branch.type}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 md:space-y-3 text-xs md:text-sm">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-accent mt-1 mr-2 md:mr-3 flex-shrink-0" />
                    <span className="text-gray-600 leading-tight">
                      {branch.address}
                    </span>
                  </div>

                  <div className="flex items-center">
                    <FaPhone className="text-accent mr-2 md:mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{branch.phone}</span>
                  </div>

                  <div className="flex items-center">
                    <FaClock className="text-accent mr-2 md:mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{branch.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mitra Perkebunan */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4 font-playfair">
              Mitra Perkebunan
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-accent max-w-2xl px-2 lg:px-0 mx-auto">
              Bermitra dengan petani kopi terbaik Indonesia untuk menjamin
              kualitas dan keaslian produk
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
            {farmPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-3 md:p-4 lg:p-6 border-l-4 border-accent"
              >
                <h3 className="font-bold text-primary text-base md:text-lg lg:text-xl mb-2">
                  {partner.name}
                </h3>
                <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-accent mr-2 md:mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{partner.location}</span>
                  </div>
                  <div className="leading-tight">
                    <span className="font-medium text-primary">
                      Spesialisasi:{" "}
                    </span>
                    <span className="text-gray-600">{partner.specialty}</span>
                  </div>
                  <div className="pt-1">
                    <span className="inline-block bg-accent/10 text-accent px-2 md:px-3 py-1 rounded-full text-xs font-medium">
                      {partner.certification}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mitra Bisnis */}
        <div>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4 font-playfair">
              Mitra Bisnis
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-accent max-w-2xl mx-auto px-2 md:px-0">
              Dipercaya oleh brand-brand ternama untuk menyediakan kopi
              berkualitas premium
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            {businessPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-4 md:p-5 lg:p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-3 md:mb-4">
                  <partner.icon className="text-accent text-2xl md:text-3xl lg:text-4xl" />
                </div>
                <h3 className="font-bold text-primary text-sm md:text-base lg:text-lg mb-1 md:mb-2 leading-tight">
                  {partner.name}
                </h3>
                <span className="inline-block bg-accent/10 text-accent px-2 md:px-3 py-1 rounded-full text-xs font-medium mb-2 md:mb-3">
                  {partner.type}
                </span>
                <p className="text-xs md:text-sm text-gray-600 leading-tight">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsAndPartners;

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
      type: "Coffee Chain",
      icon: FaCoffee,
      description: "Supplier biji kopi premium untuk menu seasonal",
    },
    {
      id: 2,
      name: "Hotel Indonesia Kempinski",
      type: "Hospitality",
      icon: FaUtensils,
      description: "Penyedia kopi eksklusif untuk restaurant dan room service",
    },
    {
      id: 3,
      name: "Universitas Indonesia",
      type: "Education",
      icon: FaUniversity,
      description: "Partner program penelitian dan development kopi",
    },
    {
      id: 4,
      name: "Coffee Smith Chain",
      type: "Coffee Shop",
      icon: FaStore,
      description: "Distributor utama untuk 50+ outlet di Jabodetabek",
    },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabang Fisik */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-playfair">
              Lokasi Cabang
            </h2>
            <p className="text-lg text-accent max-w-2xl mx-auto">
              Kunjungi cabang-cabang Aroma Bumi Roaster untuk konsultasi dan
              pemesanan langsung
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <FaStore className="text-accent text-2xl mr-3" />
                  <div>
                    <h3 className="font-bold text-primary text-lg">
                      {branch.name}
                    </h3>
                    <span className="text-sm text-accent font-medium">
                      {branch.type}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-accent mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{branch.address}</span>
                  </div>

                  <div className="flex items-center">
                    <FaPhone className="text-accent mr-3" />
                    <span className="text-gray-600">{branch.phone}</span>
                  </div>

                  <div className="flex items-center">
                    <FaClock className="text-accent mr-3" />
                    <span className="text-gray-600">{branch.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mitra Perkebunan */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-playfair">
              Mitra Perkebunan
            </h2>
            <p className="text-lg text-accent max-w-2xl mx-auto">
              Bermitra dengan petani kopi terbaik Indonesia untuk menjamin
              kualitas dan keaslian produk
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {farmPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-accent"
              >
                <h3 className="font-bold text-primary text-xl mb-2">
                  {partner.name}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-accent mr-3" />
                    <span className="text-gray-600">{partner.location}</span>
                  </div>
                  <div>
                    <span className="font-medium text-primary">
                      Spesialisasi:{" "}
                    </span>
                    <span className="text-gray-600">{partner.specialty}</span>
                  </div>
                  <div>
                    <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-playfair">
              Mitra Bisnis
            </h2>
            <p className="text-lg text-accent max-w-2xl mx-auto">
              Dipercaya oleh brand-brand ternama untuk menyediakan kopi
              berkualitas premium
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  <partner.icon className="text-accent text-4xl" />
                </div>
                <h3 className="font-bold text-primary text-lg mb-2">
                  {partner.name}
                </h3>
                <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium mb-3">
                  {partner.type}
                </span>
                <p className="text-sm text-gray-600">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsAndPartners;

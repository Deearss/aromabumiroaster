"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCoffee } from "react-icons/fa";

const Gallery = () => {
  // Mock gallery images - untuk demo menggunakan placeholder
  const galleryImages = [
    {
      id: 1,
      title: "Proses Roasting Premium",
      description:
        "Biji kopi Aceh Gayo sedang di-roast dengan kontrol suhu optimal",
      category: "Proses Sangrai",
    },
    {
      id: 2,
      title: "Tim Kontrol Kualitas",
      description:
        "Tim QC kami melakukan cupping test untuk memastikan kualitas",
      category: "Kontrol Kualitas",
    },
    {
      id: 3,
      title: "Gudang & Penyimpanan",
      description: "Fasilitas penyimpanan dengan kontrol suhu dan kelembaban",
      category: "Fasilitas",
    },
    {
      id: 4,
      title: "Departemen Kemasan",
      description: "Proses packaging menggunakan valve bag untuk freshness",
      category: "Kemasan",
    },
    {
      id: 5,
      title: "Seleksi Biji Kopi",
      description: "Proses seleksi manual biji kopi sebelum roasting",
      category: "Seleksi",
    },
    {
      id: 6,
      title: "Tim Pengiriman",
      description: "Tim distribusi kami siap mengirim ke seluruh Indonesia",
      category: "Distribusi",
    },
  ];

  return (
    <section className="w-full py-8 md:py-16 bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4 font-playfair">
            Galeri
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-accent max-w-2xl mx-auto px-2 md:px-0">
            Lihat proses produksi dan fasilitas premium Aroma Bumi Roaster
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 md:h-56 lg:h-64 bg-gradient-to-br from-accent to-primary overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent"></div>

                {/* Coffee pattern overlay */}
                <div className="absolute inset-0 opacity-30">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `radial-gradient(circle at 25% 25%, #f0ebe3 2px, transparent 2px),
                                     radial-gradient(circle at 75% 25%, #f0ebe3 1.5px, transparent 1.5px),
                                     radial-gradient(circle at 25% 75%, #f0ebe3 2.5px, transparent 2.5px)`,
                      backgroundSize: "40px 40px, 30px 30px, 50px 50px",
                    }}
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-4 lg:p-6 text-white">
                  <span className="inline-block bg-secondary/90 text-primary text-xs font-bold px-2 py-1 rounded mb-2 w-fit">
                    {image.category}
                  </span>
                  <h3 className="text-sm md:text-base lg:text-lg font-bold mb-1">
                    {image.title}
                  </h3>
                  <p className="text-xs md:text-sm opacity-90 group-hover:opacity-100 transition-opacity leading-tight md:leading-relaxed">
                    {image.description}
                  </p>
                </div>

                {/* Hover icon */}
                <div className="absolute top-3 md:top-4 right-3 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <FaCoffee className="text-secondary text-lg md:text-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

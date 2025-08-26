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
      category: "Roasting Process",
    },
    {
      id: 2,
      title: "Quality Control Team",
      description:
        "Tim QC kami melakukan cupping test untuk memastikan kualitas",
      category: "Quality Control",
    },
    {
      id: 3,
      title: "Warehouse & Storage",
      description: "Fasilitas penyimpanan dengan kontrol suhu dan kelembaban",
      category: "Facility",
    },
    {
      id: 4,
      title: "Packaging Department",
      description: "Proses packaging menggunakan valve bag untuk freshness",
      category: "Packaging",
    },
    {
      id: 5,
      title: "Coffee Bean Selection",
      description: "Proses seleksi manual biji kopi sebelum roasting",
      category: "Selection",
    },
    {
      id: 6,
      title: "Delivery Team",
      description: "Tim distribusi kami siap mengirim ke seluruh Indonesia",
      category: "Distribution",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-playfair">
            Gallery
          </h2>
          <p className="text-lg text-accent max-w-2xl mx-auto">
            Lihat proses produksi dan fasilitas premium Aroma Bumi Roaster
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div className="relative h-64 bg-gradient-to-br from-accent to-primary overflow-hidden">
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
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <span className="inline-block bg-secondary/90 text-primary text-xs font-bold px-2 py-1 rounded mb-2 w-fit">
                    {image.category}
                  </span>
                  <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                  <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity">
                    {image.description}
                  </p>
                </div>

                {/* Hover icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <FaCoffee className="text-secondary text-xl" />
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

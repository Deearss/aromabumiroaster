"use client";

import React from "react";
import { FaPlus, FaStar, FaWeight } from "react-icons/fa";
import { useCartStore } from "../../store/cartStore";
import { Product } from "../../types";
import Image from "next/image";
import Link from "next/link";

// Data produk kopi Indonesia dengan harga dan data realistis
const indonesianCoffeeProducts: Product[] = [
  {
    id: "aceh-gayo-highland",
    name: "Aceh Gayo Highland",
    description:
      "Kopi premium dari dataran tinggi Gayo dengan aroma earthy dan rasa herbal yang khas. Diproses semi-washed untuk menghasilkan karakteristik unik kopi Aceh.",
    price: 145000,
    image: "/images/coffee_banner_menu.jpg",
    weight: 250,
    origin: "Aceh Gayo",
    rating: 4.8,
    reviewCount: 127,
  },
  {
    id: "toraja-sapan",
    name: "Toraja Sapan",
    description:
      "Kopi legendaris dari Tana Toraja dengan body tebal dan aftertaste cokelat yang panjang. Full body dengan acidity seimbang yang memikat para pecinta kopi.",
    price: 185000,
    image: "/images/coffee_banner_menu.jpg",
    weight: 250,
    origin: "Toraja",
    rating: 4.9,
    reviewCount: 203,
  },
  {
    id: "bali-kintamani",
    name: "Bali Kintamani",
    description:
      "Kopi arabika dari lereng Gunung Batur dengan citrus acidity yang cerah dan floral notes. Diproses dengan metode natural untuk kemurnian rasa terbaik.",
    price: 165000,
    image: "/images/coffee_banner_menu.jpg",
    weight: 250,
    origin: "Bali Kintamani",
    rating: 4.7,
    reviewCount: 89,
  },
  {
    id: "java-preanger",
    name: "Java Preanger",
    description:
      "Warisan kopi Jawa Barat dengan tradisi berabad-abad. Medium body dengan nutty flavor dan sweetness alami yang cocok untuk berbagai metode brewing.",
    price: 125000,
    image: "/images/coffee_banner_menu.jpg",
    weight: 250,
    origin: "Java Preanger",
    rating: 4.6,
    reviewCount: 156,
  },
  {
    id: "flores-bajawa",
    name: "Flores Bajawa",
    description:
      "Kopi unik dari Pulau Flores dengan wine-like acidity dan fruity notes. Karakteristik volcanic soil memberikan kompleksitas rasa yang tak terlupakan.",
    price: 155000,
    image: "/images/coffee_banner_menu.jpg",
    weight: 250,
    origin: "Flores Bajawa",
    rating: 4.7,
    reviewCount: 94,
  },
  {
    id: "papua-wamena",
    name: "Papua Wamena",
    description:
      "Kopi eksotis dari pegunungan Papua dengan full body dan earthy undertones. Rare origin dengan production terbatas yang sangat diminati kolektor kopi.",
    price: 195000,
    image: "/images/coffee_banner_menu.jpg",
    weight: 250,
    origin: "Papua Wamena",
    rating: 4.9,
    reviewCount: 67,
  },
];

// Data paket bundle kopi untuk halaman khusus (beans page)
const coffeeBundlePackages: Product[] = [
  {
    id: "bundle-premium-highlands",
    name: "Paket Premium Highlands",
    description:
      "Kombinasi kopi dari dataran tinggi terbaik Indonesia: Aceh Gayo Highland (200g) + Bali Kintamani (200g) + Toraja Sapan (100g). Perfect untuk eksplorasi rasa kopi premium dengan karakteristik yang berbeda.",
    price: 395000,
    image: "/images/coffee_banner_menu.jpg",
    weight: 500,
    origin: "Multi Origin",
    rating: 4.8,
    reviewCount: 89,
  },
  {
    id: "bundle-explorer-nusantara",
    name: "Paket Explorer Nusantara",
    description:
      "Petualangan rasa dari ujung barat sampai timur: Aceh Gayo (150g) + Java Preanger (150g) + Flores Bajawa (150g) + Papua Wamena (150g). Nikmati keragaman cita rasa Indonesia dalam satu paket.",
    price: 485000,
    image: "/images/coffee_banner_menu.jpg",
    weight: 600,
    origin: "Multi Origin",
    rating: 4.9,
    reviewCount: 156,
  },
  {
    id: "bundle-starter-classic",
    name: "Paket Starter Classic",
    description:
      "Paket ideal untuk pemula: Java Preanger (250g) + Bali Kintamani (250g). Dua varian dengan karakteristik medium body dan balanced flavor yang mudah dinikmati siapa saja.",
    price: 265000,
    image: "/images/coffee_banner_menu.jpg",
    weight: 500,
    origin: "Multi Origin",
    rating: 4.7,
    reviewCount: 203,
  },
];

interface ProductListProps {
  showCTA?: boolean;
}

export default function ProductList({ showCTA = true }: ProductListProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-500 text-sm" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStar key="half" className="text-yellow-300 text-sm" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <FaStar key={`empty-${i}`} className="text-gray-300 text-sm" />
      );
    }

    return stars;
  };

  return (
    <>
      <section
        id="product-list"
        className="w-full relative h-10 lg:h-20 bg-transparent"
      />
      <section className="py-20 bg-secondary">
        <div className="container flexcc gap-24 mx-auto px-6">
          {/* Header - menggunakan font-playfair untuk judul utama */}
          <div className={`${showCTA ? "order-2" : "order-1"}`}>
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-playfair">
                Koleksi <br className="lg:hidden" /> Kopi Unggulan
              </h2>
              <p className="text-base lg:text-lg text-text px-3 lg:px-0 max-w-3xl mx-auto">
                koleksi biji kopi pilihan dari berbagai daerah di Indonesia.
                <br />
                Setiap biji dipilih dengan teliti untuk memberikan pengalaman
                kopi terbaik.
              </p>
            </div>

            {/* Product Grid - Single Origin */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {indonesianCoffeeProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Product Image */}
                  <div className="relative h-64 bg-gradient-to-br from-accent/20 to-primary/10">
                    <div className="absolute inset-0 flexc">
                      <div className="atranscenter w-full h-full bg-primary/30 z-[2]" />
                      <Image
                        src={product.image || "/images/coffee_banner_menu.jpg"}
                        alt={product.name}
                        width={1920}
                        height={1080}
                        title="Image by diapicard from Pixabay"
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Weight Badge */}
                    <div className="absolute z-[3] top-3 left-3 bg-accent text-white px-4 py-2 rounded-full text-xs font-bold flexc gap-1">
                      <FaWeight className="text-xs" />
                      {product.weight}g
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    {/* Product Name - menggunakan font regular (Lato) */}
                    <h3 className="text-xl text-center font-bold text-primary mb-2">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flexc w-full gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {renderStars(product.rating)}
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviewCount} ulasan)
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Price and Add to Cart */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-primary">
                          Rp{product.price.toLocaleString("id-ID")}
                        </span>
                        <span className="text-sm text-gray-500 block">
                          per {product.weight}g
                        </span>
                      </div>

                      <button
                        onClick={() => handleAddToCart(product)}
                        className="bg-accent cursor-pointer active:scale-95 transall hover:bg-accent/90 text-white px-4 py-2 rounded-lg flexc gap-2 font-medium"
                      >
                        <FaPlus className="text-sm" />
                        Tambah
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bundle Packages Section - hanya muncul jika showCTA=false */}
          {!showCTA && (
            <div className={`${showCTA ? "order-1" : "2"}`}>
              <div className="mb-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-playfair">
                  Paket Bundle <br className="lg:hidden" /> Spesial
                </h2>
                <p className="text-base lg:text-lg text-text px-3 lg:px-0 max-w-3xl mx-auto">
                  Hemat lebih banyak dengan paket bundle yang menggabungkan
                  berbagai varian kopi pilihan.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coffeeBundlePackages.map((bundle) => (
                  <div
                    key={bundle.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    {/* Bundle Image */}
                    <div className="relative h-64 bg-gradient-to-b from-accent/30 to-primary/20">
                      <div className="absolute inset-0 flexc">
                        <div className="atranscenter w-full h-full bg-primary/40 z-[2]" />
                        <Image
                          src={bundle.image || "/images/coffee_banner_menu.jpg"}
                          alt={bundle.name}
                          width={1920}
                          height={1080}
                          className="object-cover w-full h-full"
                        />
                      </div>

                      {/* Bundle Badge */}
                      <div className="absolute z-[3] top-3 left-3 bg-gradient-to-r from-accent to-primary text-white px-4 py-2 rounded-full text-xs font-bold flexc gap-1">
                        <FaWeight className="text-xs" />
                        {bundle.weight}g Bundle
                      </div>

                      {/* Special Badge */}
                      <div className="absolute z-[3] top-3 right-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        HEMAT
                      </div>
                    </div>

                    {/* Bundle Info */}
                    <div className="p-6">
                      {/* Bundle Name */}
                      <h3 className="text-xl text-center font-bold text-primary mb-2">
                        {bundle.name}
                      </h3>

                      {/* Rating */}
                      <div className="flexc w-full gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          {renderStars(bundle.rating)}
                        </div>
                        <span className="text-sm text-gray-600">
                          {bundle.rating} ({bundle.reviewCount} ulasan)
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {bundle.description}
                      </p>

                      {/* Price and Add to Cart */}
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-primary">
                            Rp{bundle.price.toLocaleString("id-ID")}
                          </span>
                          <span className="text-sm text-gray-500 block">
                            per {bundle.weight}g bundle
                          </span>
                        </div>

                        <button
                          onClick={() => handleAddToCart(bundle)}
                          className="bg-gradient-to-r cursor-pointer active:scale-95 transall from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium"
                        >
                          <FaPlus className="text-sm" />
                          Tambah
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          {showCTA && (
            <div className="text-center mt-16">
              <p className="text-lg text-text mb-6">
                Ingin mencoba semua varian? Dapatkan paket bundle dengan harga
                spesial!
              </p>
              <Link
                href={"/beans"}
                className="bg-primary hover:bg-primary_dark text-secondary px-8 py-3 rounded-lg font-bold transition-colors duration-200"
              >
                Lihat Paket Bundle
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Metadata } from "next";
import ProductList from "../components/ProductList";

export const metadata: Metadata = {
  title: "Biji Kopi Premium - Aroma Bumi Roaster",
  description:
    "Jelajahi koleksi lengkap biji kopi premium Indonesia dari Aroma Bumi Roaster. Single origin berkualitas tinggi dari berbagai daerah.",
};

const BeansPage = () => {
  return (
    <div>
      <Navbar notRoot={true} />

      {/* Hero Section */}
      {/* <section className="bg-primary text-secondary pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-playfair text-4xl lg:text-6xl font-bold mb-6">
            Premium Coffee Beans
          </h1>
          <p className="text-lg lg:text-xl text-secondary/80 max-w-2xl mx-auto">
            Koleksi lengkap biji kopi single origin berkualitas tinggi dari
            seluruh Nusantara, dipanggang dengan expertise untuk menghadirkan
            cita rasa autentik Indonesia
          </p>
        </div>
      </section> */}

      {/* Product List Component */}
      <ProductList showCTA={false} />

      <Footer />
    </div>
  );
};

export default BeansPage;

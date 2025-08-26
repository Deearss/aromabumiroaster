import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <>
      <Navbar notRoot={false} />

      <div className="flexcc min-h-screen text-center">
        {/* Hero Section - langsung render tanpa loading */}
        <HeroSection />

        {/* Product List Section */}
        <ProductList />

        {/* Features Section */}
        <Features />
      </div>

      <Footer />
    </>
  );
}

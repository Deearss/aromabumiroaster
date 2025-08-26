import { Metadata } from "next";
import { FaHeart } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import LocationsAndPartners from "../components/LocationsAndPartners";
import CompanyStory from "../components/About/CompanyStory";
import TeamSection from "../components/About/TeamSection";
import ValuesAndMission from "../components/About/ValuesAndMission";

export const metadata: Metadata = {
  title: "Tentang Kami - Aroma Bumi Roaster",
  description:
    "Pelajari lebih lanjut tentang sejarah dan misi kami di Aroma Bumi Roaster.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar notRoot={true} />
      <section className="w-full relative h-10 lg:h-20 bg-transparent" />
      <section className="min-h-screen flexcc w-full bg-secondary p-2 lg:p-0">
        {/* Hero Section */}
        <div className="container px-4 sm:px-4 md:px-6 lg:px-8 py-6 md:py-8 pt-16 md:pt-20 lg:pt-24">
          <div className="text-center mb-6 md:mb-10">
            <h1 className="flexc gap-3 text-3xl lg:text-4xl xl:text-5xl font-bold text-primary font-playfair">
              <FaHeart className="text-accent text-lg md:text-xl" />
              Cerita Kami
              <FaHeart className="text-accent text-lg md:text-xl" />
            </h1>
          </div>

          {/* Company Story */}
          <CompanyStory />
        </div>

        {/* Team Section */}
        <TeamSection />

        {/* Values & Mission Section */}
        <ValuesAndMission />

        {/* Gallery Section */}
        <Gallery />

        {/* Locations and Partners Section */}
        <LocationsAndPartners />
      </section>
      <Footer />
    </>
  );
}

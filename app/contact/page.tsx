import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaTiktok } from "react-icons/fa6";
import ContactForm from "./ContactForm";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <>
      <Navbar notRoot={true} />

      {/* Hero Section */}
      <section className="w-full relative h-16 lg:h-20 bg-transparent" />

      {/* Main Content */}
      <section className="py-8 md:py-12 lg:py-16 px-3 md:px-4 lg:px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16">
            {/* Contact Information */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl text-center md:text-left font-bold text-primary mb-2 lg:mb-3">
                  Hubungi Kami
                </h2>
                <p className="text-text/80 text-sm md:text-base text-center md:text-left px-4 md:px-0 lg:text-lg mb-6 md:mb-8">
                  Kami selalu senang mendengar cerita dari para pecinta kopi.
                  Jangan ragu untuk menghubungi kami melalui berbagai cara
                  berikut.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4 md:space-y-6">
                {/* Location */}
                <div className="bg-white p-4 md:p-5 lg:p-6 rounded-xl shadow-lg border border-accent/20 hover:shadow-xl transall">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="flexcc w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-accent/20 rounded-full flex-shrink-0">
                      <FaMapMarkerAlt className="text-accent text-lg md:text-xl" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-primary mb-1 text-sm md:text-base">
                        Lokasi Kami
                      </h3>
                      <p className="text-text/70 text-xs md:text-sm leading-tight">
                        Jl. Coffee Street No. 123
                        <br />
                        Menteng, Jakarta Pusat 10310
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white p-4 md:p-5 lg:p-6 rounded-xl shadow-lg border border-accent/20 hover:shadow-xl transall">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="flexcc w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-accent/20 rounded-full flex-shrink-0">
                      <FaPhone className="text-accent text-lg md:text-xl" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-primary mb-1 text-sm md:text-base">
                        Telepon
                      </h3>
                      <p className="text-text/70 text-xs md:text-sm">
                        0821-1234-5678
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white p-4 md:p-5 lg:p-6 rounded-xl shadow-lg border border-accent/20 hover:shadow-xl transall">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="flexcc w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-accent/20 rounded-full flex-shrink-0">
                      <FaEnvelope className="text-accent text-lg md:text-xl" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-primary mb-1 text-sm md:text-base">
                        Email
                      </h3>
                      <p className="text-text/70 text-xs md:text-sm">
                        hello@aromabumiroaster.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="bg-white p-4 md:p-5 lg:p-6 rounded-xl shadow-lg border border-accent/20 hover:shadow-xl transall">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="flexcc w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-accent/20 rounded-full flex-shrink-0">
                      <FaClock className="text-accent text-lg md:text-xl" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-primary mb-1 text-sm md:text-base">
                        Jam Operasional
                      </h3>
                      <div className="text-text/70 text-xs md:text-sm space-y-1">
                        <p>Senin - Jumat: 07:00 - 22:00</p>
                        <p>Sabtu - Minggu: 08:00 - 23:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-6 md:pt-8 mb-5 md:mb-0">
                <h3 className="text-center lg:text-left text-lg md:text-xl font-bold text-primary mb-3 md:mb-4">
                  Ikuti Kami
                </h3>
                <div className="flexc lg:justify-start gap-3 md:gap-4">
                  <a
                    href="#"
                    className="flexcc w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-accent text-white rounded-full hover:bg-accent/80 transall clicked"
                  >
                    <FaTiktok className="text-lg md:text-xl" />
                  </a>
                  <a
                    href="#"
                    className="flexcc w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-accent text-white rounded-full hover:bg-accent/80 transall clicked"
                  >
                    <FaInstagram className="text-lg md:text-xl" />
                  </a>
                  <a
                    href="#"
                    className="flexcc w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-accent text-white rounded-full hover:bg-accent/80 transall clicked"
                  >
                    <FaFacebook className="text-lg md:text-xl" />
                  </a>
                  <a
                    href="#"
                    className="flexcc w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-accent text-white rounded-full hover:bg-accent/80 transall clicked"
                  >
                    <FaYoutube className="text-lg md:text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl shadow-xl">
              <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-4 md:mb-6">
                Formulir Kontak
              </h2>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 bg-primary_dark">
        <div className="max-w-6xl mx-auto text-center relative">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-8">
            Kantor Pusat
          </h2>

          <div className="relative z-[1] w-full rounded-2xl overflow-hidden flexcc min-h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24102051799!2d106.74711713003863!3d-6.229740108094114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1756195729703!5m2!1sid!2sid"
              width="100%"
              height="450px"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="text-secondary/70 text-sm md:text-base mt-6 max-w-[20rem] md:px-0 w-full md:max-w-2xl mx-auto">
            Terletak di jantung kota Jakarta, kantor pusat kami mudah dijangkau
            dengan berbagai transportasi umum. Parkir tersedia dan akses ramah
            disabilitas.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;

"use client";

import React from "react";
import { FaEnvelope } from "react-icons/fa";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    e.currentTarget.reset();

    // Handle form submission logic here
    alert("Terima kasih karena telah menghubungi Aroma Bumi Roaster 🙏");
  };

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label className="block text-primary/60 font-semibold mb-2">
            Nama Lengkap
          </label>
          <input
            type="text"
            className="w-full p-4 border border-accent/30 rounded-lg focus:border-accent focus:outline-none transall"
            placeholder="Masukkan nama lengkap Anda"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-primary/60 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full p-4 border border-accent/30 rounded-lg focus:border-accent focus:outline-none transall"
            placeholder="contoh@email.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-primary/60 font-semibold mb-2">
            Nomor Telepon
          </label>
          <input
            type="tel"
            className="w-full p-4 border border-accent/30 rounded-lg focus:border-accent focus:outline-none transall"
            placeholder="+62 812 3456 7890"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-primary/60 font-semibold mb-2">
            Subjek
          </label>
          <select className="w-full p-4 border border-accent/30 rounded-lg focus:border-accent focus:outline-none transall">
            <option value="">Pilih subjek</option>
            <option value="pemesanan">Pemesanan Kopi</option>
            <option value="kerjasama">Kerjasama Bisnis</option>
            <option value="feedback">Feedback & Saran</option>
            <option value="lainnya">Lainnya</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-primary font-semibold mb-2">Pesan</label>
          <textarea
            rows={5}
            className="w-full p-4 border border-accent/30 rounded-lg focus:border-accent focus:outline-none transall resize-none"
            placeholder="Tulis pesan Anda di sini..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-accent text-white py-4 px-6 rounded-lg font-semibold hover:bg-accent/90 transall clicked flexc gap-2"
        >
          <FaEnvelope />
          Kirim Pesan
        </button>
      </form>
    </>
  );
};

export default ContactForm;

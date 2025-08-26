"use client";

import { FaCoffee, FaHandshake, FaSeedling, FaUsers } from "react-icons/fa";

export default function CompanyStory() {
  return (
    <div className="space-y-8 p-2 md:space-y-12 lg:space-y-16 mb-12 md:mb-16">
      {/* Chapter 1: Awal Mula Ide */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
        <div className="order-2 mb-2 lg:order-1 overflow-hidden rounded-lg relative">
          <div className="w-full h-64 md:h-72 lg:h-80 bg-gradient-to-br from-accent/30 to-primary/30 rounded-lg flexc">
            <div className="text-center text-primary">
              <FaCoffee className="text-center w-full text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4 opacity-80" />
              <p className="text-xs md:text-sm opacity-75">
                Foto momen pertama brewing kopi
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-3 md:space-y-4">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-primary mb-2 md:mb-3">
            Awal Mula Perjalanan (2019)
          </h2>
          <p className="text-sm md:text-base text-text font-lato leading-relaxed text-justify">
            <span className="h-2.5 w-3.5 inline-flex" />
            Ide Aroma Bumi Roaster lahir dari secangkir kopi sederhana yang
            diseduh Pak Joko, pendiri kami, di warung kecil di Takengon, Aceh.
            Saat itu, beliau sedang melakukan perjalanan bisnis dan terpesona
            dengan kekayaan cita rasa kopi Gayo yang begitu autentik.
            &ldquo;Bagaimana jika cita rasa luar biasa ini bisa dinikmati oleh
            lebih banyak orang?&rdquo; pikirnya waktu itu.
          </p>
          <p className="text-sm md:text-base text-text font-lato leading-relaxed text-justify">
            <span className="h-2.5 w-3.5 inline-flex" />
            Dari situlah dimulai perjalanan panjang untuk memahami dunia kopi
            Indonesia, dari hulu hingga hilir, dari petani hingga konsumen
            akhir.
          </p>
        </div>
      </div>

      {/* Chapter 2: Pertemuan dengan Petani Lokal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
        <div className="order-2 mb-2 overflow-hidden rounded-lg relative">
          <div className="w-full h-64 md:h-72 lg:h-80 bg-gradient-to-br from-primary/30 to-accent/30 rounded-lg flexc">
            <div className="text-center text-primary">
              <FaHandshake className="text-center w-full text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4 opacity-80" />
              <p className="text-xs md:text-sm opacity-75">
                Foto bersama petani Gayo
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 space-y-3 md:space-y-4">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-primary mb-2 md:mb-3">
            Pertemuan dengan Para Petani <br className="flex; md:hidden" />{" "}
            (Akhir 2019)
          </h2>
          <p className="text-sm md:text-base text-text font-lato leading-relaxed text-justify">
            <span className="h-2.5 w-3.5 inline-flex" />
            Bulan November 2019, Pak Joko kembali ke Takengon untuk bertemu
            langsung dengan Pak Abdullah, ketua Koperasi Gayo Organic. Pertemuan
            itu mengubah segalanya. Pak Abdullah bercerita tentang perjuangan
            petani lokal yang sering mendapat harga tidak adil dari tengkulak.
          </p>
          <p className="text-sm md:text-base text-text font-lato leading-relaxed text-justify">
            <span className="h-2.5 w-3.5 inline-flex" />
            &ldquo;Kopi kami berkualitas ekspor, tapi petani tidak merasakan
            kesejahteraan yang layak,&rdquo; ujar Pak Abdullah. Dari sinilah
            visi Aroma Bumi Roaster terbentuk: menciptakan rantai nilai yang
            adil untuk semua pihak, dari petani hingga konsumen.
          </p>
        </div>
      </div>

      {/* Chapter 3: Pendirian Perusahaan */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
        <div className="order-2 mb-2 lg:order-1 overflow-hidden rounded-lg relative">
          <div className="w-full h-64 md:h-72 lg:h-80 bg-gradient-to-br from-accent/30 to-primary/30 rounded-lg flexc">
            <div className="text-center text-primary">
              <FaSeedling className="text-center w-full text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4 opacity-80" />
              <p className="text-xs md:text-sm opacity-75">
                Foto roastery pertama kami
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-3 md:space-y-4">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-primary mb-2 md:mb-3">
            Membangun Mimpi Bersama <br className="flex; md:hidden" />
            (Awal 2020)
          </h2>
          <p className="text-sm md:text-base text-text font-lato leading-relaxed text-justify">
            <span className="h-2.5 w-3.5 inline-flex" />
            Januari 2020, dengan modal awal Rp 200 juta dan tim kecil 5 orang,
            Aroma Bumi Roaster resmi didirikan di Jakarta Pusat. Roastery
            pertama kami berupa ruang sederhana 50 m² dengan satu mesin roasting
            bekas yang kami renovasi sendiri.
          </p>
          <p className="text-sm md:text-base text-text font-lato leading-relaxed text-justify">
            <span className="h-2.5 w-3.5 inline-flex" />
            Tantangan terbesar adalah pandemi COVID-19 yang dimulai Maret 2020.
            Alih-alih menyerah, kami justru semakin fokus membangun hubungan
            dengan petani dan mengembangkan sistem direct trade yang
            menguntungkan semua pihak.
          </p>
        </div>
      </div>

      {/* Chapter 4: Ekspansi dan Perkembangan */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
        <div className="order-2 mb-2 overflow-hidden rounded-lg relative">
          <div className="w-full h-64 md:h-72 lg:h-80 bg-gradient-to-br from-primary/30 to-accent/30 rounded-lg flexc">
            <div className="text-center text-primary">
              <FaUsers className="text-center w-full text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4 opacity-80" />
              <p className="text-xs md:text-sm opacity-75">
                Tim Aroma Bumi Roaster
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 space-y-3 md:space-y-4">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-primary mb-2 md:mb-3">
            Pertumbuhan dan Ekspansi <br className="flex; md:hidden" />{" "}
            (2021-2025)
          </h2>
          <p className="text-sm md:text-base text-text font-lato leading-relaxed text-justify">
            <span className="h-2.5 w-3.5 inline-flex" />
            Tahun 2021 menjadi titik balik. Kami berhasil menjalin kemitraan
            dengan 8 koperasi petani di 6 provinsi. Penjualan online meningkat
            300% berkat kepercayaan konsumen pada kualitas dan cerita di balik
            setiap produk kami.
          </p>
          <p className="text-sm md:text-base text-text font-lato leading-relaxed text-justify">
            <span className="h-2.5 w-3.5 inline-flex" />
            Tahun 2023, kami membuka cabang kedua di Bandung dan ketiga di
            Surabaya. Kini, Aroma Bumi Roaster menjadi rumah bagi{" "}
            <span className="font-bold text-accent">47 karyawan</span> yang
            berasal dari berbagai daerah di Indonesia, mencerminkan keberagaman
            dan kekayaan budaya bangsa.
          </p>
        </div>
      </div>
    </div>
  );
}

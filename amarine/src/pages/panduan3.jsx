import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import NavbarMobile from "../components/NavbarMobile";

function panduan2() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Header End */}

      {/* Main Content */}
      <div className="main-content wrapper-main-content-panduan-artikel-isi">
        <header
          className="judul-panduan-artikel"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
           Muro, Tradisi Merawat Ekosistem Laut yang Berkelanjutan di Lembata
        </header>
        <div
          className="sumber-panduan-artikel"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
          Sumber: Sarana K3 Nusantara
        </div>
        <div
          className="gambar-panduan-artikel"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
          <img src="assets/artikel 1.png" alt="" />
        </div>
        <p
          className="deskripsi-panduan-artikel"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
       Keselamatan kerja adalah hal mendasar yang harus diterapkan di setiap lingkungan kerja untuk melindungi karyawan dari risiko kecelakaan dan penyakit akibat kerja. Langkah pertama dalam menciptakan lingkungan kerja yang aman adalah mengidentifikasi potensi bahaya, seperti bahaya fisik (jatuh atau terbakar), kimia (paparan bahan beracun), biologis (mikroorganisme), ergonomis (postur kerja salah), dan psikososial (stres kerja). Identifikasi ini menjadi dasar untuk mengambil tindakan pencegahan seperti pelatihan keselamatan dan penggunaan alat pelindung diri (APD)​
        </p>
        <p
          className="deskripsi-panduan-artikel"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
     SMK3 menjadi kerangka utama dalam pengelolaan keselamatan di tempat kerja. Proses ini meliputi perencanaan risiko, pelaksanaan program keselamatan, monitoring berkala, serta evaluasi dan perbaikan berkelanjutan. Dengan menerapkan SMK3, perusahaan dapat mengintegrasikan keselamatan ke dalam aktivitas harian, meningkatkan produktivitas, dan menciptakan lingkungan kerja yang aman
        </p>
        <p
          className="deskripsi-panduan-artikel"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
          <br></br>
          Kesuksesan penerapan keselamatan kerja memerlukan kerja sama antara manajemen, petugas keselamatan, dan karyawan. Manajemen bertugas menyediakan fasilitas dan pelatihan keselamatan, sedangkan karyawan harus mematuhi prosedur yang ditetapkan dan menggunakan APD sesuai standar. Pelatihan yang memadai akan meningkatkan kesadaran akan pentingnya keselamatan, sehingga risiko kecelakaan dapat diminimalkan
        </p>
        
      </div>
      {/* Main Content End */}

      {/* Footer */}
      <Footer />
      {/* Footer End */}

      {/* Navbar Mobile */}
      <NavbarMobile />
      {/* Navbar Mobile End*/}
    </div>
  );
}

export default panduan2;

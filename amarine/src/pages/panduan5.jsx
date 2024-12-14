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
           Cara Nelayan Mencari Ikan Supaya Kelestarian Ekosistem Terjaga
        </header>
        <div
          className="sumber-panduan-artikel"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
         Sumber: Indo.news
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
         Kelestarian ekosistem laut dapat terjaga, jika nelayan 
          menggunakan cara-cara yang sifatnya lebih ramah lingkungan. 
          Artinya nelayan tidak hanya mementingkan hasil tangkapan saja, 
          tetapi juga mengutamakan kelestarian ekosistem beserta sumber dayanya. 
        </p>
        <p
          className="deskripsi-panduan-artikel"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
        Menurut Yulia A. Hasan dalam buku Hukum Laut Konservasi Sumber Daya Ikan di Indonesia (2020), 
          menjaga kelestarian ekosistem laut atau perairan merupakan tanggung jawab pengguna sumber daya laut. 
          Sudah menjadi hak nelayan untuk menangkap dan memanfaatkan sumber daya, 
          berupa ikan atau hasil tangkapan laut. Sebagai bentuk tanggung jawab, 
          nelayan harus menjaga kelestarian ekosistem beserta sumber dayanya.
        </p>
        <p
          className="deskripsi-panduan-artikel"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
          <br></br>
          <h5><b>Cara Nelayan Mencari Ikan</b></h5>
          Dilansir dari situs Dinas Ketahanan Pangan dan Perikanan Pemerintah Kabupaten Klungkung, 
          ada beberapa cara untuk mencari ikan dengan cara yang ramah lingkungan. 
          Adapun cara yang disebutkan ini didasarkan pada Code of Conduct for Responsible Fisheries, FAO 1995. Berikut penjelasannya:
        </p>
        <ol>
          <li>
            Diusahakan untuk menangkap ikan yang telah ditargetkan. Gunakan alat tangkap yang tidak merusak habitat, tempat tinggal, serta lokasi perkembangbiakan ikan.
          </li>
          <li>
            Menggunakan alat tangkap yang aman bagi nelayan.
          </li>
          <li>
            Ikan ditangkap dalam kondisi segar atau hidup.
          </li>
          <li>
            Ikan harus aman dikonsumsi atau tidak mengandung bahan kimia berbahaya.
          </li>
          <li>
            Alat tangkap aman untuk kelestarian sumber daya hayati.
          </li>
          <li>
            Tidak menangkap spesies yang dilindungi undang-undang atau terancam punah.
          </li>
        </ol>
        <p
          className="deskripsi-panduan-artikel"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
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

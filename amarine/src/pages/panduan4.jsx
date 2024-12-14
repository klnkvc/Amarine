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
         Menghadapi Tantangan dan Peluang dengan Panduan Praktis
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
       Di dunia yang terus berubah, memiliki panduan praktis untuk berbagai aspek kehidupan sangat penting. Dari pengelolaan limbah hingga mitigasi bencana, panduan ini memberikan solusi untuk membantu individu dan organisasi beradaptasi dengan lebih baik.
        </p>
        <p
          className="deskripsi-panduan-artikel"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
           Mengelola limbah dengan benar adalah langkah penting dalam menjaga lingkungan tetap bersih dan sehat. Prosesnya dimulai dengan memilah limbah berdasarkan jenisnya, seperti organik, anorganik, atau berbahaya. Limbah berbahaya, seperti bahan kimia atau elektronik, harus ditangani dengan prosedur ketat, seperti penyimpanan aman dan pengiriman ke fasilitas daur ulang yang berizin. Penerapan prinsip reduce, reuse, recycle juga dapat mengurangi beban limbah sekaligus membantu menjaga keseimbangan ekosistem. Dengan langkah-langkah ini, setiap individu dapat berkontribusi pada lingkungan yang lebih berkelanjutan.
        </p>
        <p
          className="deskripsi-panduan-artikel"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
Bencana alam seperti banjir, gempa, atau angin topan dapat terjadi kapan saja. Oleh karena itu, memiliki rencana mitigasi yang baik adalah kunci untuk mengurangi dampaknya. Penyediaan jalur evakuasi yang jelas, pelatihan tanggap darurat, dan akses terhadap peralatan penyelamatan adalah langkah-langkah dasar yang harus diterapkan. Selain itu, sistem peringatan dini yang efektif dapat memberikan waktu yang cukup bagi masyarakat untuk mengamankan diri. Dalam situasi darurat, kesadaran dan kesiapan adalah senjata terbaik untuk melindungi diri dan komunitas.
        </p>
        <p
          className="deskripsi-panduan-artikel"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
          <br></br>
          Tekanan hidup modern sering kali menjadi beban bagi kesehatan mental. Untuk menjaga keseimbangan, lingkungan kerja atau rumah harus mendukung relaksasi dan interaksi positif. Aktivitas seperti olahraga ringan, meditasi, atau bahkan sekadar berjalan-jalan di alam dapat membantu mengurangi stres. Selain itu, kampanye kesadaran dan akses terhadap layanan konseling dapat menjadi jaring pengaman untuk mereka yang membutuhkan. Menjadikan kesehatan mental sebagai prioritas tidak hanya bermanfaat bagi individu, tetapi juga bagi masyarakat secara keseluruhan.
Dengan menerapkan panduan ini, kita tidak hanya mempersiapkan diri menghadapi tantangan, tetapi juga menciptakan peluang untuk hidup lebih sehat, aman, dan produktif.
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

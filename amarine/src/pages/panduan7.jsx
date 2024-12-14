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
      Manfaat Kegiatan Pelelangan Ikan dan Manfaat Penanganan Ikan yang Baik
        </header>
        <div
          className="sumber-panduan-artikel"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
        Sumber: Aldise Kresna Dewi, S.Pi, Penyuluh Perikanan Pertama
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
          <h5><b>Manfaat Kegiatan Pelelangan Ikan :</b></h5>
          Manfaat dari kegiatan pelelangan ikan adalah agar para nelayan 
          memperoleh nilai jual yang lebih besar melalui proses lelang 
          dibanding saat nelayan berhadapan langsung dengan pembeli. 
          Kegiatan ini dapat mempengaruhi besarnya pendapatan nelayan. 
          Maka dari itu, pelelangan ikan perlu dikelola secara optimal. 
          Kegiatan ini melibatkan banyak pihak di dalamnya sehingga bisa 
          memberikan keuntungan bagi semuanya. Penentuan harga yang terjadi 
          selama proses tawar-menawar memperoleh harga yang layak. 
          Perolehan harga final ikan pun tidak merugikan nelayan dan 
          juga tidak memberatkan pedagang ikan. Selain itu, ikan yang 
          dilelang adalah ikan yang benar-benar baru dibawa dari laut. Oleh karena itu, 
          kualitasnya tentu masih sangat baik. Pelelangan ikan memberikan 
          keuntungan bagi pelanggan karena memperoleh ikan segar dari asal 
          habitatnya melalui pedagang ikan yang mendistribusikan ke daerah-daerah lain.
        </p>
        <p
          className="deskripsi-panduan-artikel"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
             <br></br>
          <h5><b>Manfaat Penanganan Ikan yang Baik:</b></h5>
            <ol>
            <li>
                Mampu mempertahankan kualitas ikan dalam waktu yang lebih lama.
            </li>
            <li>
                Dapat menyingkat waktu dalam penanganan ikan karena menggunakan teori dan metode yang benar.
            </li>
            <li>
                Kualitas ikan yang dihasilkan akan memiliki mutu yang lebih baik.
            </li>
            </ol>
        </p>
        <p
          className="deskripsi-panduan-artikel"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
        
        </p>
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

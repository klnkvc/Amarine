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
          Cara Penanganan Ikan yang Baik: Penanganan Ikan di Atas Kapal
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
           <ol>
          <ol>
          <li>
            <b>Ganco dan Mendaratkan Ikan di Atas Kapal</b><br></br>
            <i>Cara Kerja:</i> Ganco ikan pada bagian kepala dekat insang. Apabila ukuran ikan agak besar, gunakan satu ganco lagi yaitu pada bagian mulut. Kemudian letakkan ikan di atas kapal secara hati-hati dengan posisi menyamping untuk mempermudah penanganan selanjutnya. Jangan sampai ganco mengenai jantung. Jantung harus berdetak ketika proses pengeluaran darah.
          </li>
          <li>
            <b>Mematikan Ikan</b><br></br>
            <i>Cara Kerja:</i> Posisi ikan menyamping. Pingsankan ikan dengan cara memukul ikan pada bagian tepat di antara dua mata (otak kecil). Pukulan pada titik yang tepat akan memingsankan ikan, meskipun pukulan tidak terlalu keras. Matikan ikan dengan menusuk pada titik lunak kepala ikan. Pastikan ikan sudah mati dengan mengusap mata atau menggerakkan rahang bagian bawah untuk memeriksa respons ikan.
          </li>
          <li>
            <b>Pendarahan</b><br></br>
            <i>Cara Kerja:</i> Tusuk bagian bawah sirip dada dengan kedalaman 2 cm. Lakukan pada kedua sisi. Darah hangat akan mengucur deras apabila titik penusukan benar. Buat irisan pada pangkal ekor. Lakukan pada kedua sisi.
          </li>
          <li>
            <b>Penyiangan</b><br></br>
            <i>Cara Kerja:</i> Buat sobekan kecil pada perut dekat anus kemudian potong saluran pencernaan/gonad yang menuju dan mengait ke anus. Lepaskan insang dengan cara mengiris membran pada seluruh pinggiran insang. Kemudian potong bagian yang mengaitkan insang dengan rahang maupun tengkorak. Angkat insang yang diikuti dengan seluruh isi perut ikan. Bersihkan sisa darah dengan bantuan sikat dan air bersih.
          </li>
        </ol>
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

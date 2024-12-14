import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import NavbarMobile from "../components/NavbarMobile";

function panduan1() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Header End */}

      {/* Main Content */}
      <div className="main-content">
        {/* <div
          className="main-search"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
          <input
            type="text"
            placeholder="Apa yang ingin kamu cari?"
            style={{ marginTop: "30px" }}
          />
        </div> */}
        <div
          className="wrapper-main-content-panduan-dan-artikel-secondary wrapper-main-content-panduan-dan-artikel wrapper-main-content-panduan-dan-artikel-2"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
          <div className="wrapper-main-content-panduan-dan-artikel-secondary-content-card wrapper-main-content-panduan-dan-artikel-secondary-content-card-2">

            <div className="wrapper-card-main-content-panduan-dan-artikel-secondary">
              <div
                href="panduan2"
                className="card-main-content-panduan-dan-artikel-secondary"
              >
                <img src="assets/artikel 1.png" alt="panduan" />
                <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi">
                  <h2>Rantai Distribusi Perikanan</h2>
                  <h3>
                    Hubungan Nelayan, Pengepul Ikan, Pedagang Ikan melalui Teori
                    Struktural
                  </h3>
                  <a href="panduan2">Baca Selengkapnya</a>
                </div>
              </div>
            </div>

            <div className="wrapper-card-main-content-panduan-dan-artikel-secondary">
              <div
                href="panduan3"
                className="card-main-content-panduan-dan-artikel-secondary"
              >
                <img src="assets/artikel 2.png" alt="panduan" />
                <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi">
                  <h2>Pentingnya Keselamatan</h2>
                  <h3>
                   Keselamatan kerja adalah hal mendasar yang harus diterapkan
                  </h3>
                  <a href="panduan3">Baca Selengkapnya</a>
                </div>
              </div>
            </div>

            <div className="wrapper-card-main-content-panduan-dan-artikel-secondary">
              <div
                href="panduan4"
                className="card-main-content-panduan-dan-artikel-secondary"
              >
                <img src="assets/artikel 3.png" alt="panduan" />
                <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi">
                  <h2>Panduan Praktis Atasi Tantangan</h2>
                  <h3>
                  Di dunia yang terus berubah, memiliki panduan praktis untuk berbagai aspek kehidupan sangat penting
                  </h3>
                  <a href="panduan4">Baca Selengkapnya</a>
                </div>
              </div>
            </div>

            <div className="wrapper-card-main-content-panduan-dan-artikel-secondary">
              <div
                href="panduan5"
                className="card-main-content-panduan-dan-artikel-secondary"
              >
                <img src="assets/artikel 1.png" alt="panduan" />
                <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi">
                  <h2>Rantai Distribusi Perikanan</h2>
                  <h3>
                    Hubungan Nelayan, Pengepul Ikan, Pedagang Ikan melalui Teori
                    Struktural
                  </h3>
                  <a href="panduan5">Baca Selengkapnya</a>
                </div>
              </div>
            </div>

            <div className="wrapper-card-main-content-panduan-dan-artikel-secondary">
              <div
                href="panduan6"
                className="card-main-content-panduan-dan-artikel-secondary"
              >
                <img src="assets/artikel 2.png" alt="panduan" />
                <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi">
                  <h2>Tradisi & Modernisasi Nelayan</h2>
                  <h3>
                    Muro, Tradisi Merawat Ekosistem Laut yang Berkelanjutan di
                    Lembata
                  </h3>
                  <a href="panduan6">Baca Selengkapnya</a>
                </div>
              </div>
            </div>

            <div className="wrapper-card-main-content-panduan-dan-artikel-secondary">
              <div
                href="panduan7"
                className="card-main-content-panduan-dan-artikel-secondary"
              >
                <img src="assets/artikel 3.png" alt="panduan" />
                <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi">
                  <h2>Inovasi Untuk Nelayan</h2>
                  <h3>
                    Tanpa BBM, Kapal Nelayan Inovasi Mahasiswa ITS Ramah
                    Lingkungan
                  </h3>
                  <a href="panduan7">Baca Selengkapnya</a>
                </div>
              </div>
            </div>

          </div>
        </div>
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

export default panduan1;

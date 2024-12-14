import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom'; 

function CatatanPengepul1() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [penjualanData, setPenjualanData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Mengambil data penjualan ketika komponen dimuat
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/get-penjualan`); //API DHANI
        if (response.ok) {
          const data = await response.json();
          setPenjualanData(data); // Menyimpan data penjualan yang diterima dari API
          setFilteredData(data);  // Set data awal untuk ditampilkan
        } else {
          console.error("Error fetching penjualan data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [BASE_URL]);

  // Fungsi untuk menangani perubahan input pencarian
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter data berdasarkan pencarian (nama atau jenis)
    const filtered = penjualanData.filter(
      (item) =>
        item.nama.toLowerCase().includes(query.toLowerCase()) ||
        item.jenis.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(filtered); // Menampilkan data yang sesuai dengan pencarian
  };

  return (
    <div>
      {/* Header */}
      <Header />
      {/* Header End */}

      {/* Main Content */}
      <div className="main-content container-fluid">
        <div
          className="wrapper-main-content"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
          <div className="main-search">
            {/* Input Pencarian */}
            <input
              type="text"
              placeholder="Apa yang ingin kamu cari?"
              value={searchQuery}
              onChange={handleSearchChange} // Memanggil handleSearchChange ketika input berubah
            />
          </div>

          <div className="main-title">
            <p>Catatan Penjualan</p>
            <button type="button" className="button-cus">
              <a href="tambahhasiltangkapan">
                <img src="assets/plus.svg" alt="Tambah Hasil Tangkapan" />
              </a>
            </button>
          </div>

          <div className="wrapper-catatan-hasil">
            {/* Menampilkan data yang sudah difilter */}
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <Link to={`/detailcatatanpengepul?id=${item.id}`}>
                  <div className="card-catatan-hasil-tangkapan-nelayan">
                    <div className="container-image-catatan">
                      <img
                          src={item.gambar ? item.gambar : "assets/Ikan-default.jpg"} // Pastikan URL gambar sudah lengkap di API
                          alt={item.nama}
                      />
                      <div className="jumlah-berat">{item.berat} Kg</div>
                    </div>
                    <div className="nama-nelayan">{item.nama}</div>
                    <div className="nama-tangkapan">{item.jenis}</div>
                  </div>
                </Link>
              ))
            ) : (
              <p>No data found</p> // Menampilkan pesan jika tidak ada data yang sesuai dengan pencarian
            )}
          </div>
        </div>
      </div>
      {/* Main Content End */}

      {/* Footer */}
      <Footer />
      {/* Footer End */}

      {/* Navbar Mobile */}
      <div className="wrapper-navbar-bottom d-none">
        <a href="laporan">
          <img src="assets/laporan icon.svg" alt="Laporan" />
        </a>
        <a href="catatannelayan1">
          <img src="assets/catatan nelayan icon.svg" alt="Catatan Nelayan" />
        </a>
        <a href="catatanpengepul1">
          <img
            src="assets/catatan pengepul icon active.svg"
            alt="Catatan Pengepul"
          />
        </a>
        <a href="stok">
          <img src="assets/stok icon.svg" alt="Stok" />
        </a>
      </div>
      {/* Navbar Mobile End */}
    </div>
  );
}

export default CatatanPengepul1;

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom'; 

function CatatanNelayan1() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [data, setData] = useState([]); // State untuk menyimpan data hasil tangkapan
  const [searchTerm, setSearchTerm] = useState(""); // State untuk input pencarian
  const [filteredData, setFilteredData] = useState([]); // Data yang sudah difilter

  // Fetch data dari API saat komponen pertama kali dimuat
  useEffect(() => {
    fetch(`${BASE_URL}/get-catatan-nelayan`)
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Simpan data mentah ke state
        setFilteredData(data); // Tampilkan semua data sebagai default
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [BASE_URL]);

  // Fungsi untuk menangani pencarian
  const handleSearch = (event) => {
    const keyword = event.target.value.toLowerCase(); // Ambil keyword dari input
    setSearchTerm(keyword); // Update state pencarian
    const results = data.filter(
      (item) =>
        item.nama_nelayan.toLowerCase().includes(keyword) || // Filter berdasarkan nama nelayan
        item.nama.toLowerCase().includes(keyword) || // Filter berdasarkan nama tangkapan
        item.jenis.toLowerCase().includes(keyword) // Filter berdasarkan jenis
    );
    setFilteredData(results); // Update state dengan data yang difilter
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
          {/* Pencarian */}
          <div className="main-search">
            <input
              type="text"
              placeholder="Apa yang ingin kamu cari?"
              value={searchTerm}
              onChange={handleSearch} // Fungsi pencarian
            />
          </div>

          {/* Judul Halaman */}
          <div className="main-title">
            <p>Catatan Hasil Tangkapan Nelayan</p>
          </div>

          {/* Daftar Hasil Tangkapan */}
          <div className="wrapper-catatan-hasil">
  {filteredData.map((item) => (
    <Link to={`/detailhasiltangkapan?id=${item.id}`}>
      <div className="card-catatan-hasil-tangkapan-nelayan">
        <div className="container-image-catatan">
          <img
            src={item.gambar ? item.gambar : "assets/ikan-default.jpg"} // Pastikan URL gambar sudah lengkap di API
            alt={item.nama}
          />
          <div className="jumlah-berat">{item.berat} Kg</div>
        </div>
        <div className="nama-nelayan">{item.nama_nelayan}</div>
        <div className="nama-tangkapan">{item.nama}</div>
      </div>
    </Link>
  ))}
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
          <img
            src="assets/catatan nelayan icon active.svg"
            alt="Catatan Nelayan"
          />
        </a>
        <a href="catatanpengepul1">
          <img src="assets/catatan pengepul icon.svg" alt="Catatan Pengepul" />
        </a>
        <a href="stok">
          <img src="assets/stok icon.svg" alt="Stok" />
        </a>
      </div>
      {/* Navbar Mobile End */}
    </div>
  );
}

export default CatatanNelayan1;

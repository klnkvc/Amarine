import React, { useState, useEffect } from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';


function Laporan() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [nelayanData, setNelayanData] = useState([]); // Inisialisasi dengan array kosong
  const [totalKuantitas, setTotalKuantitas] = useState(0); // Menyimpan total kuantitas
  const [totalTangkapan, setTotalTangkapan] = useState(0); // Menyimpan total tangkapan

  // Fetch data nelayan dan total tangkapan saat komponen dimuat
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mengambil data nelayan
        const responseNelayan = await fetch(`${BASE_URL}/kuantitas`);
        if (responseNelayan.ok) {
          const dataNelayan = await responseNelayan.json();
          console.log("Data Nelayan:", dataNelayan);
          setNelayanData(dataNelayan.results); // Menyimpan data nelayan
          setTotalKuantitas(dataNelayan.total_kuantitas_keseluruhan); // Menyimpan total kuantitas
        } else {
          console.error("Error fetching nelayan data");
        }

        // Mengambil total tangkapan keseluruhan
        const responseTangkapan = await fetch(`${BASE_URL}/total-tangkapan`);
        if (responseTangkapan.ok) {
          const dataTangkapan = await responseTangkapan.json();
          console.log("Total Tangkapan:", dataTangkapan);
          setTotalTangkapan(dataTangkapan.total_tangkapan); // Menyimpan total tangkapan
        } else {
          console.error("Error fetching total tangkapan data");
        }
        
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    fetchData();
  }, [BASE_URL]); // Menjalankan fetch hanya sekali setelah komponen pertama kali dirender
  
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
          <div className="main-title">
            <p>Laporan Hasil Nelayan</p>
          </div>
          <div className="wrapper-tabel-laporan">
            <div className="header-wrapper-tabel-laporan">
              {/* <div className="total-kuantitas">
                Total Kuantitas
              </div> */}
              {/* <div className="jumlah-kuantitas">
                {totalTangkapan} Kg  
              </div> */}
            </div>

            <table className="tabel-laporan">
              <thead>
                <tr>
                  <td>Nelayan</td>
                  <td>Jumlah Kuantitas</td>
                  <td>Aksi</td>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(nelayanData) && nelayanData.length > 0 ? (
                  nelayanData.map((nelayan) => (
                    <tr key={nelayan.id}>
                      <td>
                        <div className="content-tabel-laporan-nelayan">
                          <img src="assets/pak bahrul.png" alt="Nelayan" />
                          <span>{nelayan.nama}</span>
                        </div>
                      </td>
                      <td>{nelayan.total_berat} Kg</td>
                     
                      <td><a href="#"> <Link to={`/laporandetail?id=${nelayan.id}`}>Detail</Link></a></td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">Data tidak tersedia</td> {/* Menampilkan pesan jika data kosong atau tidak valid */}
                  </tr>
                )}
              </tbody>
            </table>
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
          <img src="assets/laporan icon active.svg" alt="Laporan" />
        </a>
        <a href="catatannelayan1">
          <img src="assets/catatan nelayan icon.svg" alt="Catatan Nelayan" />
        </a>
        <a href="catatanpengepul1">
          <img src="assets/catatan pengepul icon.svg" alt="Catatan Pengepul" />
        </a>
        <a href="stok">
          <img src="assets/stok icon.svg" alt="Stok" />
        </a>
      </div>
      {/* Navbar Mobile End*/}
    </div>
  );
}

export default Laporan;

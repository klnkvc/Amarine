import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Stok() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [stokData, setStokData] = useState([]);
  const [totals, setTotals] = useState({ total_terjual: 0, total_tersedia: 0 }); // Tambahkan state untuk totals

  useEffect(() => {
    // Fetch data from backend API
    // fetch("http://localhost:3001/stok-web")
    fetch(`${BASE_URL}/stok-web`)
      .then((response) => response.json())
      .then((data) => {
        setStokData(data.data || []); // Pastikan data stok diatur
        setTotals(data.totals || { total_terjual: 0, total_tersedia: 0 }); // Fallback untuk totals
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [BASE_URL]);

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
            <p>Detail Stok</p>
          </div>
          <div className="wrapper-tabel-stok">
            {/* <div className="header-wrapper-tabel-stok">
              <div className="total-terjual">Terjual</div>
              <div className="jumlah-terjual">{totals.total_terjual} Kg</div>
              <div className="total-tersedia">Tersedia</div>
              <div className="jumlah-tersedia">{totals.total_tersedia} Kg</div>
            </div> */}
            <table className="tabel-stok">
              <thead>
                <tr>
                  <td>Nama</td>
                  <td>Jenis</td>
                  <td>Terjual</td>
                  <td>Tersedia</td>
                </tr>
              </thead>
              <tbody>
                {stokData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.nama}</td>
                    <td>{item.jenis}</td>
                    <td>{item.terjual} Kg</td>
                    <td>{item.tersedia} Kg</td>
                  </tr>
                ))}
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
          <img src="assets/laporan icon.svg" alt="Laporan" />
        </a>
        <a href="catatannelayan1">
          <img src="assets/catatan nelayan icon.svg" alt="Catatan Nelayan" />
        </a>
        <a href="catatanpengepul1">
          <img src="assets/catatan pengepul icon.svg" alt="Catatan Pengepul" />
        </a>
        <a href="stok">
          <img src="assets/stok icon active.svg" alt="Stok" />
        </a>
      </div>
      {/* Navbar Mobile End*/}
    </div>
  );
}

export default Stok;

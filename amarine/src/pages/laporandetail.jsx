import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Mengimpor useLocation
import Header from "../components/Header";
import Footer from "../components/Footer";

function LaporanDetail() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [dataPencatatan, setDataPencatatan] = useState([]);
  const [totalKuantitas, setTotalKuantitas] = useState(0);

  // Mengambil query parameter id dari URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id'); // Mengambil nilai id

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await fetch(`${BASE_URL}/pencatatanweb?id=${id}`);
          if (response.ok) {
            const data = await response.json();
            setDataPencatatan(data);

            // Menghitung total kuantitas (berat)
            const total = data.reduce((sum, item) => sum + item.berat, 0);
            setTotalKuantitas(total);
          } else {
            console.error("Error fetching pencatatan data");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };

      fetchData();
    }
  }, [id,BASE_URL]); // Efek ini hanya dijalankan saat id berubah

  return (
    <div>
      <Header />
      <div className="main-content container-fluid">
        <div className="wrapper-main-content" data-aos="fade-down" data-aos-duration="900" data-aos-once="true">
          <div className="main-title">
            <p>Laporan Hasil Nelayan</p>
          </div>
          <div className="wrapper-tabel-laporan">
            <div className="header-wrapper-tabel-laporan">
              <div className="total-kuantitas">Total Kuantitas</div>
              <div className="jumlah-kuantitas">{totalKuantitas} Kg</div>
            </div>
            <table className="tabel-laporan">
              <thead>
                <tr>
                  <td>Nama</td>
                  <td>Jenis Ikan</td>
                  <td>Jumlah Kuantitas</td>
                </tr>
              </thead>
              <tbody>
                {dataPencatatan.length > 0 ? (
                  dataPencatatan.map((item) => (
                    <tr key={item.id}>
                      <td>{item.nama}</td>
                      <td>{item.jenis}</td>
                      <td>{item.berat} Kg</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">Data tidak tersedia</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LaporanDetail;

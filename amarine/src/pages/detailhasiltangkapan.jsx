import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";

function Detailhasiltangkapan() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id'); // Mengambil nilai id
  const [detail, setDetailData] = useState([]);


  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await fetch(`${BASE_URL}/detailhasil?id=${id}`);
          if (response.ok) {
            const data = await response.json();
            console.log(data); // Debug: memeriksa data yang diterima
            setDetailData(data); // Menyimpan data ke state
          } else {
            console.error("Error fetching pencatatan data");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
      

      fetchData();
    }
  }, [id,BASE_URL])
  
  if (!detail || Object.keys(detail).length === 0) {
    return <div>Loading...</div>;
  }
  
  
  ; 

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
            <p>Detail Hasil Tangkapan</p>
          </div>
          {detail && detail.length > 0 ? (
          <div className="wrapper-detail-hasil-tangkapan">
            <div className="gambar-detail-hasil-tangkapan">
              Gambar
              <hr />
              <img
                src={detail[0].gambar || "assets/Ikan-default.jpg"} 
                alt="Hasil Tangkapan"
              />
            </div>
            <div className="informasi-detail-hasil-tangkapan">
              <p className="m-0">Informasi</p>
              <hr />
              <div className="jenis-detail">
                <p className="judul-informasi">Nama</p>
                <p className="isi-informasi">{detail[0].nama}</p> {/* Nama dari API */}
              </div>
              <div className="jenis-detail">
                <p className="judul-informasi">Jenis</p>
                <p className="isi-informasi"> {detail[0].jenis}</p> {/* Jenis dari API */}
              </div>
              <div className="jenis-detail">
                <p className="judul-informasi">Berat</p>
                <p className="isi-informasi">{detail[0].berat}</p> {/* Berat dari API */}
              </div>
              <div className="jenis-detail">
                <p className="judul-informasi">Tanggal</p>
                <p className="isi-informasi"> {detail[0].tanggal ? detail[0].tanggal.substring(0, 10) : "Tidak tersedia"}</p> {/* Tanggal dari API */}
              </div>
              <div className="jenis-detail">
                <p className="judul-informasi">Waktu</p>
                <p className="isi-informasi">{detail[0].waktu ? detail[0].waktu.substring(0, 5) : "Tidak tersedia"}</p> {/* Waktu dari API */}
              </div>
              <div className="jenis-detail">
                <p className="judul-informasi">Lokasi Penyimpanan</p>
                <p className="isi-informasi">{detail[0].lokasi_penyimpanan}</p> {/* Lokasi penyimpanan */}
              </div>
              <div className="jenis-detail">
                <p className="judul-informasi">Catatan</p>
                <p className="isi-catatan">{detail[0].catatan}</p> 
              </div>
            </div>
          </div>
          ) : (
            <p>Loading atau Data Tidak Ditemukan</p>
          )}
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
export default Detailhasiltangkapan;

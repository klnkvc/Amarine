import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import * as script from "../script";
function TambahHasilTangkapan() {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id'); // Mengambil nilai id dari query string

    const [detail, setDetailData] = useState(null); // State awal null
    const [error, setError] = useState(null); // State untuk menangani error
    const [isLoading, setIsLoading] = useState(true); // State untuk loading

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const response = await fetch(`${BASE_URL}/detailpul?id=${id}`);
                    if (response.ok) {
                        const data = await response.json();
                        console.log("Fetched data:", data);
                        setDetailData(data); // Menyimpan data yang diambil
                        setIsLoading(false); // Set loading selesai
                    } else {
                        console.error("Error fetching data:", response.statusText);
                        setError("Terjadi kesalahan saat mengambil data.");
                        setIsLoading(false); // Set loading selesai
                    }
                } catch (error) {
                    console.error("Fetch error:", error);
                    setError("Terjadi kesalahan saat mengambil data.");
                    setIsLoading(false); // Set loading selesai
                }
            };
            fetchData();
        } else {
            setError("ID tidak ditemukan pada URL.");
            setIsLoading(false); // Set loading selesai
        }
    }, [id, BASE_URL]);

        const handleClick = () => {
          // Menampilkan popup konfirmasi
          const confirmAction = window.confirm("Apakah Anda yakin ingin melakukan UPDATE data ?");
          if (confirmAction) {
            // Kembali ke halaman sebelumnya
            window.history.back();
          }
        };

        const hahah = () => {
            // Menampilkan popup konfirmasi
            const confirmAction = window.confirm("Apakah Anda yakin ingin melakukan HAPUS data ?");
            if (confirmAction) {
              // Kembali ke halaman sebelumnya
              window.history.back();
            }
          };

    return (
        <div>
            {/* Header */}
            <Header />

            {/* Main Content */}
            <div className="main-content container-fluid">
                <div className="wrapper-main-content" data-aos="fade-down" data-aos-duration="900" data-aos-once="true">
                    <div className="main-title">
                        <p>Detail Hasil Tangkapan</p>
                    </div>

                    {/* Error Message */}
                    {error && <div className="error-message">{error}</div>}

                    {/* Loading State */}
                    {isLoading ? (
                        <div>Memuat data...</div>
                    ) : (
                        detail && (
                            <div className="wrapper-detail-hasil-tangkapan wrapper-informasi-detail-hasil-tangkapan">
                                <div className="wrapper-gambar-informasi">
                                    <form className="form-detail-hasil-tangkapan">
                                        <div className="gambar-detail-hasil-tangkapan tambah-gambar-detail-hasil-tangkapan">
                                            Gambar
                                            <hr />
                                            <img
                                                src={detail.image || "assets/Ikan-default.jpg"}
                                                alt="Gambar"
                                            />
                                        </div>

                                        <div className="informasi-detail-hasil-tangkapan tambah-informasi-detail-hasil-tangkapan">
                                            <p className="m-0">Informasi</p>
                                            <hr />

                                            <div className="jenis-detail">
                                                <label htmlFor="nama" className="judul-informasi">Nama</label>
                                                <input
                                                    type="text"
                                                    name="nama"
                                                    className="isi-informasi"
                                                    value={detail[0].nama || ""}
                                                    disabled
                                                />
                                            </div>

                                            <div className="jenis-detail">
                                                <label htmlFor="jenis" className="judul-informasi">Jenis</label>
                                                <input
                                                    name="jenis"
                                                    className="isi-informasi"
                                                    value={detail[0].jenis || ""}
                                                    disabled
                                                />
                                            </div>

                                            <div className="jenis-detail">
                                                <label htmlFor="berat" className="judul-informasi">Berat</label>
                                                <input
                                                    type="number"
                                                    name="berat"
                                                    className="isi-informasi"
                                                    value={detail[0].berat || ""}
                                                    disabled
                                                />
                                            </div>

                                            <div className="jenis-detail">
                                                <label htmlFor="tanggal" className="judul-informasi">Tanggal</label>
                                                <input
                                                    type="date"
                                                    name="tanggal"
                                                    className="isi-informasi"
                                                    value={detail[0].tanggal || ""}
                                                    disabled
                                                />
                                            </div>

                                            <div className="jenis-detail">
                                                <label htmlFor="harga" className="judul-informasi">Harga</label>
                                                <input
                                                    type="text"
                                                    name="harga"
                                                    className="isi-informasi"
                                                    value={detail[0].harga || ""}
                                                    placeholder="Rp. "
                                                    disabled
                                                />
                                            </div>

                                            <div className="jenis-detail">
                                                <label htmlFor="catatan" className="judul-informasi">Catatan</label>
                                                <textarea
                                                    name="catatan"
                                                    className="isi-informasi"
                                                    value={detail[0].catatan || ""}
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        <div className="button-hapus-simpan ms-auto">
                  <button
                    onClick={hahah}
                    className="hapus-detail-hasil-tangkapan"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="#FF620A"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
                      />
                    </svg>
                    Hapus
                  </button>

                  <button
      type="button"
      className="submit-detail-hasil-tangkapan"
      onClick={handleClick}
    >
      UPDATE
    </button>

                </div>
                                    </form>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default TambahHasilTangkapan;

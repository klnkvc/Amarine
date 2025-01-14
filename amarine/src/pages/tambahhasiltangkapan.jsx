import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Tambahhasiltangkapan() {
  const [formData, setFormData] = useState({
    nama: "",
    jenis: "",
    berat: "",
    tanggal: "",
    harga: "",
    catatan: "",
  });

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem("user"));
  const idAkun = user.id;
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const requestBody = {
      nama: formData.nama || "",
      jenis: formData.jenis || "",
      berat: formData.berat || "",
      tanggal: formData.tanggal || "",
      harga: formData.harga || "",
      catatan: formData.catatan || "",
    };
  
    console.log("requestBody:", requestBody);
  
    try {
      const response = await fetch(`${BASE_URL}/tambah-penjualan?id_akun=${idAkun}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
  
      if (response.ok) {
        navigate("/catatanpengepul1");
      } else {
        console.error("Failed to submit data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
          <div className="main-title">
            <p>Tambah Hasil Tangkapan</p>
          </div>
          <div className="wrapper-detail-hasil-tangkapan wrapper-informasi-detail-hasil-tangkapan">
            <div className="wrapper-gambar-informasi">
              <form
                onSubmit={handleSubmit}
                className="form-detail-hasil-tangkapan"
              >
                <div className="gambar-detail-hasil-tangkapan tambah-gambar-detail-hasil-tangkapan">
                  Gambar
                  <hr />
                  <img src="assets/placeholder image.png" alt="Gambar" />
                </div>

                <div className="informasi-detail-hasil-tangkapan tambah-informasi-detail-hasil-tangkapan">
                  <p className="m-0">Informasi</p>
                  <hr />

                  <div className="jenis-detail">
                    <label htmlFor="nama" className="judul-informasi">
                      Nama
                    </label>
                    <input
                      type="text"
                      name="nama"
                      className="isi-informasi"
                      value={formData.nama}
                      onChange={(e) =>
                        setFormData({ ...formData, nama: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="jenis-detail">
                    <label htmlFor="jenis" className="judul-informasi">
                      Jenis
                    </label>
                    <select
                      name="jenis"
                      className="isi-informasi"
                      value={formData.jenis}
                      onChange={(e) =>
                        setFormData({ ...formData, jenis: e.target.value })
                      }
                      required
                    >
                      <option value="" disabled hidden>
                        Pilih Jenis Ikan
                      </option>
                      <option value="ikan">Ikan</option>
                      <option value="kepiting">Kepiting</option>
                      <option value="kerang">Kerang</option>
                    </select>
                  </div>
                  <div className="jenis-detail">
                    <label htmlFor="berat" className="judul-informasi">
                      Berat
                    </label>
                    <input
                      type="number"
                      name="berat"
                      className="isi-informasi"
                      value={formData.berat}
                      onChange={(e) =>
                        setFormData({ ...formData, berat: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="jenis-detail">
                    <label htmlFor="tanggal" className="judul-informasi">
                      Tanggal
                    </label>
                    <input
                      type="date"
                      name="tanggal"
                      className="isi-informasi"
                      value={formData.tanggal}
                      onChange={(e) =>
                        setFormData({ ...formData, tanggal: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="jenis-detail">
                    <label htmlFor="harga" className="judul-informasi">
                      Harga
                    </label>
                    <input
                      type="text"
                      name="harga"
                      className="isi-informasi"
                      value={formData.harga}
                      onChange={(e) =>
                        setFormData({ ...formData, harga: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="jenis-detail">
                    <label htmlFor="catatan" className="judul-informasi">
                      Catatan
                    </label>
                    <textarea
                      name="catatan"
                      className="isi-informasi"
                      value={formData.catatan}
                      onChange={(e) =>
                        setFormData({ ...formData, catatan: e.target.value })
                      }
                    ></textarea>
                  </div>
                </div>
                <div className="button-hapus-simpan ms-auto">
                  <button
                    type="submit"
                    value="submit"
                    className="submit-detail-hasil-tangkapan"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content End */}

      {/* Footer */}
      <Footer />
      {/* Footer End */}
    </div>
  );
}

export default Tambahhasiltangkapan;
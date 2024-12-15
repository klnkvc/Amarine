import React, { useState } from "react";
import * as script from "../script";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Tambahhasiltangkapan() {
  const [image, setImage] = useState(null);
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
  const idAkun = user.id; // Mendapatkan id_akun dari data user

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare form data
    const data = new FormData();
    data.append("nama", formData.nama);
    data.append("jenis", formData.jenis);
    data.append("berat", formData.berat);
    data.append("tanggal", formData.tanggal);
    data.append("harga", formData.harga);
    data.append("catatan", formData.catatan);
    if (image) {
      data.append("upload-image", image);
    }

    try {
      const response = await fetch(`${BASE_URL}/tambah-penjualan?id_akun=${idAkun}`, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        script.tampilkanPopupBerhasil();
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
            <p>Detail Hasil Tangkapan</p>
          </div>
          <div className="wrapper-detail-hasil-tangkapan wrapper-informasi-detail-hasil-tangkapan">
            <div className="wrapper-gambar-informasi">
              <form
                onSubmit={handleSubmit}  // Update this to use handleSubmit function
                className="form-detail-hasil-tangkapan"
              >
                <div className="gambar-detail-hasil-tangkapan tambah-gambar-detail-hasil-tangkapan">
                  Gambar
                  <hr />
                  <img src="assets/placeholder image.png" alt="Gambar" />
                  <button className="add-image">
                    <input
                      type="file"
                      id="upload-image"
                      accept="image/*"
                      name="upload-image"
                      onChange={(e) => setImage(e.target.files[0])}  // Handle file upload
                      onInput={(e) => e.target.setCustomValidity("")}
                    />
                    <label for="upload-image" className="">
                      <img src="assets/add photo.svg" alt="add-image" />
                    </label>
                  </button>
                </div>
                <div className="informasi-detail-hasil-tangkapan tambah-informasi-detail-hasil-tangkapan">
                  <p className="m-0">Informasi</p>
                  <hr />
                  <div className="jenis-detail">
                    <label for="nama" className="judul-informasi">
                      Nama
                    </label>
                    <input
                      type="text"
                      name="nama"
                      className="isi-informasi"
                      value={formData.nama}
                      onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                      required
                    />
                  </div>
                  <div className="jenis-detail">
                    <label for="jenis" className="judul-informasi">
                      Jenis
                    </label>
                    <select
                      name="jenis"
                      className="isi-informasi"
                      value={formData.jenis}
                      onChange={(e) => setFormData({ ...formData, jenis: e.target.value })}
                      required
                    >
                      <option value="" disabled hidden>
                        Jenis Ikan
                      </option>
                      <option value="ikan">Ikan</option>
                      <option value="kepiting">Kepiting</option>
                      <option value="kerang">Kerang</option>
                    </select>
                  </div>
                  <div className="jenis-detail">
                    <label for="berat" className="judul-informasi">
                      Berat
                    </label>
                    <input
                      type="number"
                      name="berat"
                      className="isi-informasi"
                      value={formData.berat}
                      onChange={(e) => setFormData({ ...formData, berat: e.target.value })}
                      required
                    />
                  </div>
                  <div className="jenis-detail">
                    <label for="tanggal" className="judul-informasi">
                      Tanggal
                    </label>
                    <input
                      type="date"
                      name="tanggal"
                      className="isi-informasi"
                      value={formData.tanggal}
                      onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
                      required
                    />
                  </div>
                  <div className="jenis-detail">
                    <label for="harga" className="judul-informasi">
                      Harga
                    </label>
                    <input
                      type="text"
                      name="harga"
                      className="isi-informasi"
                      value={formData.harga}
                      onChange={(e) => setFormData({ ...formData, harga: e.target.value })}
                      required
                    />
                  </div>
                  <div className="jenis-detail">
                    <label for="catatan" className="judul-informasi">
                      Catatan
                    </label>
                    <textarea
                      name="catatan"
                      className="isi-informasi"
                      value={formData.catatan}
                      onChange={(e) => setFormData({ ...formData, catatan: e.target.value })}
                    ></textarea>
                  </div>
                </div>
                <div className="button-hapus-simpan ms-auto">
                  <button
                    onClick={() => script.tampilkanPopup()}
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
                  <input
                    type="submit"
                    value="Simpan"
                    className="submit-detail-hasil-tangkapan"
                  />
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

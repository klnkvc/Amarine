import React, { useEffect, useState } from "react";
import * as script from "../script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PopupLogout from "../components/PopupLogout";
import NavbarMobile from "../components/NavbarMobile";

function Profil1() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")); // Mengambil data user dari localStorage

    if (user && user.id) {
      const idAkun = user.id; // Mendapatkan id_akun dari data user

      const fetchProfile = async () => {
        try {
          const response = await fetch(`${BASE_URL}/profileweb?id_akun=${idAkun}`);
          const data = await response.json();

          if (response.ok) {
            setProfile(data); // Menyimpan data profil yang didapatkan
          } else {
            console.error("Data profil tidak ditemukan");
          }
        } catch (error) {
          console.error("Terjadi kesalahan saat mengambil data profil:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchProfile();
    } else {
      console.error("ID akun tidak ditemukan");
      setLoading(false);
    }
  }, [BASE_URL]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!profile) {
    return <p>Data profil tidak ditemukan</p>;
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Mencegah reload halaman
    const user = JSON.parse(localStorage.getItem("user"));
    const idAkun = user.id;
  
    console.log("Tombol Update diklik!");
  
    // Validasi dasar (contoh)
    if (!profile.nama || !profile.email) {
      alert("Nama dan email wajib diisi!");
      return;
    }
  
    console.log("Data yang akan dikirim:", {
      email: profile.email,
      nama: profile.nama,
      no_hp: profile.no_hp,
      tanggal_lahir: profile.tanggal_lahir,
      alamat: profile.alamat,
      idAkun: idAkun
    });
  
    try {
      // Kirim data ke server
      const response = await fetch(`http://localhost:3001/update-profileweb?idAkun=${idAkun}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: profile.email,
          nama: profile.nama,
          no_hp: profile.no_hp,
          tanggal_lahir: profile.tanggal_lahir,
          alamat: profile.alamat
        }),
      });
  
      if (response.ok) {
        console.log("Profil berhasil diperbarui!");
        // Tampilkan popup sukses
        script.tampilkanPopupBerhasilPerubahanProfil();
      } else {
        console.error("Gagal memperbarui profil:", await response.text());
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };
  
  function formatTanggalLahir(tanggal) {
    if (!tanggal) return ''; // Pastikan tanggal ada
    const dateObj = new Date(tanggal); // Mengonversi string ke objek Date
    return dateObj.toISOString().split('T')[0]; // Ambil bagian YYYY-MM-DD
  }
  
  const formattedTanggalLahir = profile.tanggal_lahir ? formatTanggalLahir(profile.tanggal_lahir) : '';
  
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Header End */}

      {/* Main Content */}
      <div className="main-content">
        <div
          className="wrapper-main-content-tentang-kami"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
          <div className="main-content-profil-section-satu">
            <div className="main-content-profil-section-satu-background-image"></div>
            <div className="profil-info-section-satu">
              <img className="m-0" src={profile.foto || "assets/pak bahrul.png"} alt="Gambar Profil" />
              <h3 className="profil-name">{profile.nama || "Nama Pengguna"}</h3>
            </div>
            <a href="profil1">
              <div className="link-profil-nav-satu profil-nav-active">
                <img src="assets/edit icon.svg" alt="" />
                Edit Profil
              </div>
            </a>
            <a href="profil2">
              <div className="link-profil-nav-dua">
                <img src="assets/key person icon.svg" alt="" />
                Ubah Kata Sandi
              </div>
            </a>
            <a href="profil3">
              <div className="link-profil-nav-tiga">
                <img src="assets/laporkan masalah icon.svg" alt="" />
                Laporkan Masalah
              </div>
            </a>
            <div
              className="link-profil-nav-empat"
              onClick={() => script.tampilkanPopup()}
            >
              <img src="assets/logout icon.svg" alt="" />
              Keluar
            </div>
          </div>

          <div className="main-content-tentang-kami-section-kedua">
            <div className="main-content-profil-section-kedua-isi">
              <form
                action=""
                method="POST"
                onSubmit={(event) => handleFormSubmit(event)}
              >
                <div className="main-content-profil-section-kedua-background-image"></div>
                <img src={profile.foto || "assets/pak bahrul.png"} alt="Gambar Profil" />
                <input
                  type="file"
                  name="foto-profil"
                  id="foto-profil"
                  className="d-none"
                />
                <label htmlFor="foto-profil" className="custom-file-upload">
                  Ubah Foto Profil
                </label>
                <div className="form-wrapper-profil-section-kedua">
                  <label htmlFor="nama-lengkap">Nama Lengkap</label>
                  <input
                  type="text"
                  name="nama"
                  value={profile.nama || ""}
                  placeholder="Belum Tersedia"
                  required
                  onChange={(e) => setProfile({ ...profile, nama: e.target.value })}
                  onInvalid={(e) => e.target.setCustomValidity("Tolong masukkan Data Valid!")}
                  onInput={(e) => e.target.setCustomValidity("")}
                 />
                </div>
                <div className="form-wrapper-profil-section-kedua">
                  <label htmlFor="nomor-telepon">Nomor Telepon</label>
                  <input
                  type="number"
                  name="no_hp"
                  value={profile.no_hp || ""}
                  placeholder="Belum Tersedia"
                  required
                  onChange={(e) => setProfile({ ...profile, no_hp: e.target.value })}
                  onInvalid={(e) => e.target.setCustomValidity("Tolong masukkan Data Valid!")}
                  onInput={(e) => e.target.setCustomValidity("")}
                  />
                </div>
                <div className="form-wrapper-profil-section-kedua">
                  <label htmlFor="email">Email</label>
                  <input
                  type="email"
                  name="email"
                  value={profile.email || ""}
                  placeholder="Belum Tersedia"
                  className={profile.email ? "" : "placeholder-gray"}
                  required
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  onInvalid={(e) =>
                  e.target.setCustomValidity("Tolong masukkan Data Valid!")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  disabled
                  />
                </div>
                <div className="form-wrapper-profil-section-kedua">
                  <label htmlFor="alamat">Alamat</label>
                  <input
                  type="text"
                  name="alamat"
                  value={profile.alamat || ""}
                  placeholder="Belum Tersedia"
                  required
                  onChange={(e) => setProfile({ ...profile, alamat: e.target.value })}
                  onInvalid={(e) =>
                  e.target.setCustomValidity("Tolong masukkan Data Valid!")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                 />
                </div>
                <div className="form-wrapper-profil-section-kedua">
                  <label htmlFor="tempat-tanggal-lahir">Tanggal Lahir</label>
                  <input
                  type="date"
                  name="tanggal_lahir"
                  value={formattedTanggalLahir}
                  placeholder="Belum Tersedia"
                  required
                  onChange={(e) => setProfile({ ...profile, tanggal_lahir: e.target.value })}
                  onInvalid={(e) => e.target.setCustomValidity("Tolong masukkan Data Valid!")}
                  onInput={(e) => e.target.setCustomValidity("")}
                  />
                </div>
                <button
                  type="submit"
                  value="Simpan Perubahan"
                  className="input-simpan-perubahan"
                >UPDATE</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content End */}

      {/* Popup Berhasil Simpan */}
      <div id="popup-berhasil-simpan" className="popup-hidden-hapus">
        <div className="popup-box">
          <div className="popup-mini-icon"></div>
          <div className="popup-mini-icon"></div>
          <div className="popup-mini-icon"></div>
          <div className="popup-mini-icon"></div>
          <div className="popup-icon">
            <img src="assets/accept.svg" alt="Berhasil" />
          </div>
          <p className="popup-message">Berhasil!</p>
          <p className="popup-message popup-message-child">
            Perubahan profil berhasil di simpan
          </p>
        </div>
      </div>
      {/* Popup End */}

      {/* Popup Logout*/}
      <PopupLogout />
      {/* Popup End */}

      {/* Footer */}
      <Footer />
      {/* Footer End */}

      {/* Navbar Mobile */}
      <NavbarMobile />
      {/* Navbar Mobile End*/}
    </div>
  );
}

export default Profil1;

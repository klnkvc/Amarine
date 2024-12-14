-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 07 Des 2024 pada 07.19
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `amarine`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `akun`
--

CREATE TABLE `akun` (
  `id` int(11) NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `detail_stok`
--

CREATE TABLE `detail_stok` (
  `id` int(11) NOT NULL,
  `id_pencatatan` int(11) DEFAULT NULL,
  `id_penjualan` int(11) DEFAULT NULL,
  `nama` varchar(255) NOT NULL,
  `jenis` varchar(255) DEFAULT NULL,
  `terjual` int(11) DEFAULT NULL,
  `tersedia` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `nelayan`
--

CREATE TABLE `nelayan` (
  `id` int(11) NOT NULL,
  `id_akun` int(11) DEFAULT NULL,
  `nama` varchar(255) NOT NULL,
  `no_hp` varchar(15) DEFAULT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `pencatatan`
--

CREATE TABLE `pencatatan` (
  `id` int(11) NOT NULL,
  `id_nelayan` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `jenis` varchar(255) DEFAULT NULL,
  `berat` int(11) DEFAULT NULL,
  `tanggal` date DEFAULT NULL,
  `waktu` time DEFAULT NULL,
  `lokasi_penyimpanan` varchar(255) DEFAULT NULL,
  `catatan` text DEFAULT NULL,
  `gambar` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `pengepul`
--

CREATE TABLE `pengepul` (
  `id` int(11) NOT NULL,
  `id_akun` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `no_hp` varchar(20) DEFAULT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `alamat` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `penjualan`
--

CREATE TABLE `penjualan` (
  `id` int(11) NOT NULL,
  `id_pengepul` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `jenis` varchar(255) DEFAULT NULL,
  `harga` int(11) DEFAULT NULL,
  `berat` int(11) DEFAULT NULL,
  `catatan` varchar(255) DEFAULT NULL,
  `tanggal` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `akun`
--
ALTER TABLE `akun`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `detail_stok`
--
ALTER TABLE `detail_stok`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_pencatatan` (`id_pencatatan`),
  ADD KEY `id_penjualan` (`id_penjualan`);

--
-- Indeks untuk tabel `nelayan`
--
ALTER TABLE `nelayan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_nelayan_akun` (`id_akun`);

--
-- Indeks untuk tabel `pencatatan`
--
ALTER TABLE `pencatatan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_nelayan` (`id_nelayan`);

--
-- Indeks untuk tabel `pengepul`
--
ALTER TABLE `pengepul`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_pengepul_akun` (`id_akun`);

--
-- Indeks untuk tabel `penjualan`
--
ALTER TABLE `penjualan`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_pengepul` (`id_pengepul`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `akun`
--
ALTER TABLE `akun`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=504933;

--
-- AUTO_INCREMENT untuk tabel `detail_stok`
--
ALTER TABLE `detail_stok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `nelayan`
--
ALTER TABLE `nelayan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=928497;

--
-- AUTO_INCREMENT untuk tabel `pencatatan`
--
ALTER TABLE `pencatatan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=928496;

--
-- AUTO_INCREMENT untuk tabel `pengepul`
--
ALTER TABLE `pengepul`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `penjualan`
--
ALTER TABLE `penjualan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `detail_stok`
--
ALTER TABLE `detail_stok`
  ADD CONSTRAINT `detail_stok_ibfk_1` FOREIGN KEY (`id_pencatatan`) REFERENCES `pencatatan` (`id`),
  ADD CONSTRAINT `detail_stok_ibfk_2` FOREIGN KEY (`id_penjualan`) REFERENCES `penjualan` (`id`);

--
-- Ketidakleluasaan untuk tabel `nelayan`
--
ALTER TABLE `nelayan`
  ADD CONSTRAINT `fk_nelayan_akun` FOREIGN KEY (`id_akun`) REFERENCES `akun` (`id`);

--
-- Ketidakleluasaan untuk tabel `pencatatan`
--
ALTER TABLE `pencatatan`
  ADD CONSTRAINT `pencatatan_ibfk_1` FOREIGN KEY (`id_nelayan`) REFERENCES `nelayan` (`id`);

--
-- Ketidakleluasaan untuk tabel `pengepul`
--
ALTER TABLE `pengepul`
  ADD CONSTRAINT `fk_pengepul_akun` FOREIGN KEY (`id_akun`) REFERENCES `akun` (`id`);

--
-- Ketidakleluasaan untuk tabel `penjualan`
--
ALTER TABLE `penjualan`
  ADD CONSTRAINT `penjualan_ibfk_1` FOREIGN KEY (`id_pengepul`) REFERENCES `pengepul` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

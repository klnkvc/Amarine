const express = require("express");
const mysql = require("mysql2");
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const { expressjwt } = require('express-jwt');
require('dotenv').config();
// const multer = require('multer');
// const { sequelizeAmarine } = require('/Model/database'); 
// const Akun = require('/Model/Akun');  

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


app.get('/config', (req, res) => {
  res.json({ baseUrl: process.env.BASE_URL });
});

// Konfigurasi koneksi database ----------------------------------------------------------------------------------------------------------------------------------------
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "amarine",
});

// Cek koneksi database ----------------------------------------------------------------------------------------------------------------------------------------
db.connect((err) => {
  if (err) {
    console.error("Koneksi gagal:", err.message);
  } else {
    console.log("Berhasil terhubung ke database MySQL");
  }
});

// Endpoint untuk daftar ----------------------------------------------------------------------------------------------------------------------------------------
app.post("/akun-web", async (req, res) => {
  const { email, password, nama, no_hp } = req.body; // Ubah 'noTelepon' menjadi 'no_hp'
  console.log("Input dari pengguna:", { email, nama, no_hp });
  try {
      // Hash password menggunakan bcrypt
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("Hashed password:", hashedPassword); // Log hasil hashing

      const query = "INSERT INTO akun (email, password, role) VALUES (?, ?, 'pengepul')";
      db.query(query, [email, hashedPassword], (err, results) => {
          if (err) {
              console.error("Database query error:", err);
              return res.status(500).json({ error: "Terjadi kesalahan pada server" });
          }

          const akunId = results.insertId; // Ambil ID akun yang baru dibuat

          // Data untuk tabel pengepul
          const nelayanQuery = "INSERT INTO pengepul (id_akun, nama, no_hp) VALUES (?, ?, ?)";
          db.query(nelayanQuery, [akunId, nama, no_hp], (err) => { // Ubah 'noTelepon' menjadi 'no_hp'
              if (err) {
                  console.error("Error inserting into pengepul:", err);
                  return res.status(500).json({ error: "Terjadi kesalahan saat membuat pengepul" });
              }

              res.status(201).json({ message: "Akun dan pengepul berhasil dibuat", insertId: akunId });
          });
      });
  } catch (error) {
      console.error("Error hashing password:", error);
      return res.status(500).json({ error: "Terjadi kesalahan saat membuat akun" });
  }
});

// Middleware autentikasi
const authenticate = expressjwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
});

const checkUser = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Token tidak valid atau tidak ditemukan' });
  }
  next();
};

// Endpoint login
app.post("/logincoy", async (req, res) => {
  try {
    console.log("Login request received:", req.body);
    const { email, password } = req.body;

    if (!email || !password) {
      console.log("Email or password is missing");
      return res.status(400).json({ error: "Email dan password harus diisi" });
    }

    const query = "SELECT * FROM akun WHERE email = ?";
    console.log("Running query for email:", email);
    const [rows] = await db.promise().query(query, [email]);
    console.log("Query result rows:", rows); // Log hasil query

    if (rows.length === 0) {
      console.log("No user found with this email:", email);
      return res.status(401).json({ error: "Email tidak ditemukan" });
    }

    const user = rows[0];
    console.log("User found:", user);
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch); // Log hasil pengecekan password

    if (!isMatch) {
      console.log("Password mismatch for email:", email);
      return res.status(401).json({ error: "Password salah" });
    }

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET || 'your_default_jwt_secret',
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login berhasil",
      token,
      user: {
        id: user.id,
        email: user.email,
        nama: user.nama,
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
});


// // Rute dilindungi
// app.get('/protected-route', authenticate, checkUser, (req, res) => {
//   res.json({ message: 'Berhasil mengakses rute yang dilindungi', user: req.user });
// });



// Endpoint untuk menambahkan pengepul ----------------------------------------------------------------------------------------------------------------------------------------
app.post("/pengepul", (req, res) => {
  const { id_akun, nama, no_hp } = req.body; // Ambil data dari request body
  const query = "INSERT INTO pengepul (id_akun, nama, no_hp) VALUES (?, ?, ?)";

  db.query(query, [id_akun, nama, no_hp], (err, results) => {
      if (err) {
          console.error("Error inserting into pengepul:", err);
          return res.status(500).json({ error: "Terjadi kesalahan saat membuat pengepul" });
      }

      res.status(201).json({ message: "pengepul berhasil dibuat", insertId: results.insertId });
  });
});

app.get('/stok-web', (req, res) => {
  const query = 'SELECT * FROM detail_stok';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching stok data:', err);
      return res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data stok' });
    }

    // Menghitung total terjual dan tersedia
    const totalTerjual = results.reduce((acc, item) => acc + (item.terjual || 0), 0);
    const totalTersedia = results.reduce((acc, item) => acc + (item.tersedia || 0), 0);

    res.status(200).json({
      data: results,
      totals: {
        total_terjual: totalTerjual,
        total_tersedia: totalTersedia,
      },
    });
  });
});


app.get("/get-penjualan", (req, res) => {
  const query = `
    SELECT 
      penjualan.id,
      penjualan.nama,
      penjualan.jenis,
      penjualan.harga,
      penjualan.berat,
      penjualan.catatan,
      penjualan.tanggal,
      penjualan.gambar
    FROM penjualan
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching data:", err);
      res.status(500).json({ error: "Failed to fetch data" });
      return;
    }

    // Menampilkan hasil data di konsol
    console.log("Data fetched from database:", results);

    // Mengirim data sebagai respons
    res.status(200).json(results);
  });
});




// endpoint untuk mengambil data nelayan dengan total kuantitas mereka -----------------------------------------------------------------
app.get("/kuantitas", (req, res) => {
  const query = `
      SELECT n.id, n.nama, IFNULL(SUM(p.berat), 0) AS total_berat
      FROM nelayan n
      LEFT JOIN pencatatan p ON n.id = p.id_nelayan
      GROUP BY n.id, n.nama
      HAVING total_berat > 0
  `;
  
  db.query(query, (err, results) => {
      if (err) {
          console.error("Error fetching nelayan data with total quantity:", err);
          return res.status(500).json({ error: "Terjadi kesalahan saat mengambil data nelayan" });
      }

      // Menghitung total keseluruhan berat dari semua nelayan yang hasilnya > 0
      const totalKuantitasKeseluruhan = results.reduce((total, nelayan) => total + nelayan.total_berat, 0);

      // Mengirim data nelayan dan total kuantitas, serta total keseluruhan
      res.status(200).json({
          results,  // Data nelayan dan total kuantitas mereka
          total_kuantitas_keseluruhan: totalKuantitasKeseluruhan  // Total keseluruhan berat
      });
  });
});


//End Point Detail Dari Catatan PerOrang
app.get('/pencatatanweb', (req, res) => {
  const { id } = req.query; // Mengambil id dari query string
  console.log('Received id:', id); // Pastikan id diterima dengan benar

  if (!id) {
    return res.status(400).json({ error: 'ID Nelayan diperlukan' }); // Jika id tidak ada
  }

  const query = `
    SELECT id, nama, jenis, berat
FROM pencatatan
WHERE id_nelayan = ?;

  `;

  // Menjalankan query untuk mengambil data berdasarkan id
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error fetching pencatatan data:', err);
      return res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data pencatatan' });
    }

    if (results.length > 0) {
      res.status(200).json(results); // Mengirim data pencatatan
    } else {
      res.status(404).json({ error: 'Data tidak ditemukan' }); // Jika data tidak ditemukan
    }
  });
}); 

//Api Mengambil semua datanelayan
// API Endpoint untuk mendapatkan data nelayan
app.get('/api/nelayan', (req, res) => {
  const query = `
    SELECT nelayan.id, nelayan.nama, nelayan.no_hp, nelayan.tanggal_lahir, nelayan.alamat, akun.email
    FROM nelayan
    LEFT JOIN akun ON nelayan.id_akun = akun.id
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data: ', err);
      return res.status(500).send('Server Error');
    }
    res.json(results); 
  });
});

// Endpoint untuk mengambil data catatan nelayan
app.get("/api/get-catatan-nelayan", (req, res) => {
  const query = `
    SELECT 
      pencatatan.id,
      nelayan.nama AS nama_nelayan,
      pencatatan.nama,
      pencatatan.jenis,
      pencatatan.berat,
      pencatatan.gambar
    FROM pencatatan
    JOIN nelayan ON pencatatan.id_nelayan = nelayan.id
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching data:", err);
      res.status(500).json({ error: "Failed to fetch data" });
      return;
    }
    res.status(200).json(results);
  });
});

// Query untuk mengambil data nelayan dan pencatatan berdasarkan id nelayan
app.get("/detailhasil", (req, res) => {
  const { id } = req.query; // Ambil id dari query string
  
  console.log("Received id:", id); // Pastikan id diterima dengan benar

  // Cek apakah id tersedia
  if (!id) {
    return res.status(400).json({ error: 'ID diperlukan' }); // Jika id tidak ada
  }

  const query = `SELECT * FROM pencatatan WHERE id = ?`;
  
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error fetching pencatatan data:', err);
      return res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data pencatatan' });
    }

    if (results.length > 0) {
      res.status(200).json(results); // Mengirim data pencatatan
    } else {
      res.status(404).json({ error: 'Data tidak ditemukan' }); // Jika data tidak ditemukan
    }
  });
}); 

app.get('/profileweb', (req, res) => {
  const { id_akun } = req.query; // Mengambil id_akun dari query parameter

  if (!id_akun) {
    return res.status(400).json({ error: 'ID akun diperlukan' });
  }

  // Query untuk menggabungkan tabel akun dan pengepul
  const query = `
    SELECT akun.email, pengepul.nama, pengepul.no_hp, pengepul.tanggal_lahir, pengepul.alamat
    FROM akun
    JOIN pengepul ON akun.id = pengepul.id_akun
    WHERE akun.id = ?
  `;

  db.query(query, [id_akun], (err, results) => {
    if (err) {
      console.error('Error fetching profile data:', err);
      return res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data profil' });
    }

    if (results.length) {
      res.status(200).json(results[0]); // Mengirim data profil yang ditemukan
    } else {
      res.status(404).json({ error: 'Data profil tidak ditemukan' });
    }
  });
});


app.post("/update-profileweb", (req, res) => {
  const { email, nama, no_hp, tanggal_lahir, alamat } = req.body;
  const idAkun = req.query.idAkun;  // Mengambil idAkun dari query string

  if (!idAkun) {
    return res.status(401).json({ error: "Anda belum login!" });
  }

  // Query untuk memperbarui email di tabel akun
  const updateAkunQuery = `
      UPDATE akun
      SET email = ?
      WHERE id = ?
  `;

  // Query untuk memperbarui data di tabel pengepul
  const updatePengepulQuery = `
      UPDATE pengepul
      SET nama = ?, no_hp = ?, tanggal_lahir = ?, alamat = ?
      WHERE id_akun = ?
  `;

  // Jalankan query untuk tabel akun
  db.query(updateAkunQuery, [email, idAkun], (err, akunResult) => {
    if (err) {
      console.error("Error updating akun:", err);
      return res.status(500).json({ error: "Terjadi kesalahan saat memperbarui email" });
    }

    // Jika berhasil memperbarui email, lanjutkan dengan tabel pengepul
    db.query(updatePengepulQuery, [nama, no_hp, tanggal_lahir, alamat, idAkun], (err, pengepulResult) => {
      if (err) {
        console.error("Error updating pengepul:", err);
        return res.status(500).json({ error: "Terjadi kesalahan saat memperbarui data pengepul" });
      }

      res.status(200).json({ message: "Profil berhasil diperbarui" });
    });
  });
});

// Fungsi untuk verifikasi password lama
const findUserById = (id) => {
  return users.find(user => user.id === id);
};
app.post('/verify-password', async (req, res) => {
  const { passwordLama, idAkun } = req.body;
  
  // Logika untuk memverifikasi password lama di sini
  // Contoh:
  const user = await Akun.findOne({ where: { id: idAkun } });

  if (!user) {
    return res.status(404).json({ message: 'User tidak ditemukan.' });
  }

  const isMatch = await bcrypt.compare(passwordLama, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Password lama salah.' });
  }
  
  return res.status(200).json({ message: 'Password lama benar.' });
});

app.post('/cpassword', async (req, res) => {
  const { passwordLama, passwordBaru, idAkun } = req.body;

  // Validasi input
  if (!passwordLama || !passwordBaru || !idAkun) {
    return res.status(400).json({ message: 'Semua data harus diisi.' });
  }

  try {
    // Cari user berdasarkan ID
    const user = await Akun.findOne({ where: { id: idAkun } });

    if (!user) {
      return res.status(404).json({ message: 'User tidak ditemukan.' });
    }

    // Verifikasi password lama dengan bcrypt
    const isMatch = await bcrypt.compare(passwordLama, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Password lama salah.' });
    }

    // Validasi panjang password baru
    if (passwordBaru.length < 8) {
      return res.status(400).json({ message: 'Password baru minimal 8 karakter.' });
    }

    // Enkripsi password baru
    const hashedPassword = await bcrypt.hash(passwordBaru, 10);

    // Update password baru di database
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: 'Kata sandi berhasil diubah.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan server.' });
  }
});

app.get("/detailpul", (req, res) => {
  const { id } = req.query;

  console.log("Request received at /detailpul");
  console.log("Query parameters:", req.query);
  console.log("Received id:", id);

  // Validasi ID
  if (!id || isNaN(id)) {
    console.error("ID tidak tersedia dalam query string atau bukan angka");
    return res.status(400).json({ error: "ID diperlukan dan harus berupa angka" });
  }

  const query = `SELECT * FROM penjualan WHERE id = ?`;
  console.log("Executing query:", query, "with id:", id);

  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("Query error:", err);
      return res.status(500).json({ error: "Terjadi kesalahan saat mengambil data pencatatan" });
    }

    if (results.length > 0) {
      console.log("Query results:", results);
      return res.status(200).json(results);
    } else {
      console.log("Data tidak ditemukan untuk id:", id);
      return res.status(404).json({ error: "Data tidak ditemukan" });
    }
  });
});






// Jalankan server
app.listen(3001,'0.0.0.0', () => {
  console.log("Server berjalan di http://localhost:3001");
});


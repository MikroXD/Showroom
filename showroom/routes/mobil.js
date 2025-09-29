var express = require('express');
var router = express.Router();

// Route 1: Halaman Beranda (HTML)
router.get('/', function(req, res) {
  res.send(`
    <html>
      <head>
        <title>Dealer Mobil</title>
        <link rel="stylesheet" href="/stylesheets/style.css">
      </head>
      <body>
        <h1>ARS</h1>
        <h2>CAR</h2>
        <p>Kami menjual berbagai mobil baru & bekas dengan harga terbaik.</p>
        <a href="/mobil/daftar">Lihat Daftar Mobil</a>
      </body>
    </html>
  `);
});


// Route 2: Daftar Mobil (HTML)
router.get('/daftar', function(req, res) {
  res.send(`
    <html>
      <head><title>Daftar Mobil</title></head>
      <body>
        <h1>Daftar Mobil Tersedia</h1>
        <ul>
          <li>Toyota Avanza - Rp 200.000.000</li>
          <li>Honda Brio - Rp 180.000.000</li>
          <li>Mitsubishi Xpander - Rp 250.000.000</li>
        </ul>
        <a href="/mobil">Kembali ke Beranda</a>
      </body>
    </html>
  `);
});

// Route 3: Data Mobil (JSON)
router.get('/data', function(req, res) {
  const mobil = [
    { id: 1, merk: "Toyota Avanza", harga: 200000000 },
    { id: 2, merk: "Honda Brio", harga: 180000000 },
    { id: 3, merk: "Mitsubishi Xpander", harga: 250000000 }
  ];
  res.json(mobil);
});

module.exports = router;

import { ambilProyek } from './api.js';
import { render, pasangFilter, aturMemuat, tampilkanGalat } from './dom.js';

const profil = {
  nama: "muchamad adi prasetyo",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript", "figma"],
  tahunAngkatan: 2025
};

const kalimat = `Nama saya ${profil.nama}, angkatan ${profil.tahunAngkatan}, dan saya belajar ${profil.keahlian.length} hal.`;
console.log(kalimat);


function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// 2. Merapikan daftar keahlian menjadi satu baris teks
const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(formatKeahlian(profil.keahlian));
console.log(buatPerkenalan(profil));

// UJI CEPAT C.4: Memanggil fungsi 3 kali dengan data berbeda
console.log(buatPerkenalan({ nama: "Budi", peran: "Desainer Grafis" }));
console.log(buatPerkenalan({ nama: "Siti", peran: "Backend Developer" }));
console.log(buatPerkenalan({ nama: "Tono", peran: "Data Analyst" }));

// Struktur data baru: Array of Object
const daftarProyek = [
  { judul: "Cinderella", penyanyi: "Mac Miller", tahun: 2016, kategori: "hiphop" },
  { judul: "God is", penyanyi: "Kanye West", tahun: 2019, kategori: "hiphop" },
  { judul: "Money Trees", penyanyi: "Kendrick Lamar", tahun: 2012, kategori: "hiphop" },
  { judul: "Beauty and a Beat", penyanyi: "Justin Bieber", tahun: 2012, kategori: "pop" },
  { judul: "Love Yourself", penyanyi: "Justin Bieber", tahun: 2015, kategori: "pop" },
];



console.table(profil.keahlian);
console.table(daftarProyek);

const laguPop = daftarProyek.filter((proyek) => proyek.kategori === "pop");
console.table(laguPop);

const laguDicari = daftarProyek.find((proyek) => proyek.judul === "God is");
console.log(laguDicari);

const daftarJudul = daftarProyek.map((proyek) => proyek.judul);
console.log(daftarJudul);


// CONTOH PERCOBAAN untuk worksheet F SOAL NOMOR 3

// 1. DENGAN titik tiga (...)
const salinanPakaiTitikTiga = { ...profil, status: "Aktif" };
console.log("Hasil DENGAN titik tiga (...):", salinanPakaiTitikTiga);

// 2. TANPA titik tiga
const salinanTanpaTitikTiga = { profil, status: "Aktif" };
console.log("Hasil TANPA titik tiga:", salinanTanpaTitikTiga);

// CONTOH PEMAKAIAN 'let' (untuk nilai yang bisa berubah/diperbarui)
let statusProjekSelesai = false; 

// Suatu saat nilainya bisa diubah:
statusProjekSelesai = true; 
console.log("Status proyek terbaru:", statusProjekSelesai);

// Tambahkan ini di baris paling bawah app.js Anda
async function muat() {
  aturMemuat(true); // Tampilkan tulisan "Memuat data..."

  try {
    const daftar = await ambilProyek(); // 1. Ambil data JSON (api.js)
    pasangFilter(daftar);               // 2. Pasang fungsi filter dengan data asli (dom.js)
    render(daftar);                     // 3. Gambar kartu-kartunya ke layar (dom.js)
  } catch (galat) {
    tampilkanGalat('Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.');
    console.error(galat.message); // Pesan merah untuk dilihat di Console saja
  } finally {
    aturMemuat(false); // Sembunyikan tulisan "Memuat data..." apapun hasilnya
  }
}

muat();

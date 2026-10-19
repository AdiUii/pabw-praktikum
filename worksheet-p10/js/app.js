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

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(formatKeahlian(profil.keahlian));
console.log(buatPerkenalan(profil));

console.log(buatPerkenalan({ nama: "Budi", peran: "Desainer Grafis" }));
console.log(buatPerkenalan({ nama: "Siti", peran: "Backend Developer" }));
console.log(buatPerkenalan({ nama: "Tono", peran: "Data Analyst" }));

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

const salinanPakaiTitikTiga = { ...profil, status: "Aktif" };
console.log("Hasil DENGAN titik tiga (...):", salinanPakaiTitikTiga);

const salinanTanpaTitikTiga = { profil, status: "Aktif" };
console.log("Hasil TANPA titik tiga:", salinanTanpaTitikTiga);

let statusProjekSelesai = false; 

statusProjekSelesai = true; 
console.log("Status proyek terbaru:", statusProjekSelesai);

async function muat() {
  aturMemuat(true); 

  try {
    const daftar = await ambilProyek(); 
    pasangFilter(daftar);               
    render(daftar);                     
  } catch (galat) {
    tampilkanGalat('Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.');
    console.error(galat.message); 
  } finally {
    aturMemuat(false); 
  }
}

muat();

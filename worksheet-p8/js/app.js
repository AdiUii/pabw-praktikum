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
  { judul: "haloDek", tahun: 2025, selesai: true },
  { judul: "tanganLiat", tahun: 2026, selesai: true },
  { judul: "membaca", tahun: 2026, selesai: false },
];



console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find((proyek) => proyek.judul === "Katalog Produk");
console.log(katalog);



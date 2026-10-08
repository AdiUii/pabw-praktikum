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


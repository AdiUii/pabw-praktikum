export const profil = {
  nama: "muchamad adi prasetyo",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript", "figma"],
  tahunAngkatan: 2025
};

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export function saring(daftar, kategori) {
  if (kategori === 'semua') return daftar;
  return daftar.filter((musik) => musik.kategori === kategori);
}

export const formatKeahlian = (daftar) => daftar.join(" · ");
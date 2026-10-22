export const profil = {
  nama: "muchamad adi prasetyo",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript", "figma"],
  tahunAngkatan: 2025
};

export const daftarMusik = [
  { id: 1, judul: "Money Trees", penyanyi: "Kendrick Lamar", tahun: 2012, kategori: "hiphop", gambar: "https://images.icon-icons.com/3215/PNG/512/music_melody_audio_song_tone_icon_196488.png" },
  { id: 2, judul: "Love Yourself", penyanyi: "Justin Bieber", tahun: 2015, kategori: "pop", gambar: "https://images.icon-icons.com/3215/PNG/512/music_melody_audio_song_tone_icon_196488.png" },
  { id: 3, judul: "God Is", penyanyi: "Kanye West", tahun: 2019, kategori: "hiphop", gambar: "https://images.icon-icons.com/3215/PNG/512/music_melody_audio_song_tone_icon_196488.png" },
  { id: 4, judul: "Cinderella", penyanyi: "Mac Miller", tahun: 2016, kategori: "pop", gambar: "https://images.icon-icons.com/3215/PNG/512/music_melody_audio_song_tone_icon_196488.png" }
];

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export function saring(daftar, kategori) {
  if (kategori === 'semua') return daftar;
  return daftar.filter((musik) => musik.kategori === kategori);
}

export const formatKeahlian = (daftar) => daftar.join(" · ");
import { saring } from './data.js';

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#kosong");
const muatEl = document.querySelector("#muat");

export function aturMemuat(aktif) {
  if (muatEl) muatEl.hidden = !aktif;
}

export function tampilkanGalat(pesan) {
  if (wadah) wadah.textContent = '';
  if (kosong) {
    kosong.textContent = pesan;
    kosong.hidden = false;
  }
}

export function buatKartu(musik, favorit = []) {
  const kartu = document.createElement("li");
  kartu.className = "kartu";

  const isi = document.createElement("div");
  isi.className = "kartu__isi";

  const judul = document.createElement("h3");
  judul.className = "kartu__judul";
  judul.textContent = musik.judul; 

  const penyanyi = document.createElement("p");
  penyanyi.textContent = musik.penyanyi; 

  isi.append(judul, penyanyi);

  const kaki = document.createElement("div");
  kaki.className = "kartu__kaki";

  const tahun = document.createElement("span");
  tahun.textContent = musik.tahun ? musik.tahun : "-"; 

  const tombolPutar = document.createElement("button");
  tombolPutar.textContent = "Putar";

  // --- Mulai penambahan tombol Favorit (Lembar C Revisi) ---
  const tombolBintang = document.createElement("button");
  tombolBintang.className = "favorit";
  tombolBintang.dataset.id = musik.id; // Pastikan data API mu punya .id
  
  // Jika id musik ada di dalam daftar favorit, tampilkan ★, jika tidak ☆
  tombolBintang.textContent = favorit.includes(String(musik.id)) ? "★" : "☆";
  // --- Akhir penambahan ---

  kaki.append(tahun, tombolPutar, tombolBintang);
  kartu.append(isi, kaki);
  
  return kartu;
}

// --- FUNGSI RENDER SUDAH DIUBAH SESUAI WORKSHEET REVISI ---
export function render(state) {
  if (!wadah) return;
  wadah.textContent = ''; 

  // Menyaring daftar proyek berdasarkan kategori aktif di state
  const tampil = saring(state.daftarProyek, state.kategoriAktif);

  if (!tampil || tampil.length === 0) { 
    if (kosong) {
      kosong.textContent = 'Belum ada lagu yang tersedia.';
      kosong.hidden = false;
    }
    return;
  }

  if (kosong) kosong.hidden = true; 

  tampil.forEach((musik) => {
    // Sekarang kita mengirim musik DAN daftar favorit ke buatKartu
    wadah.append(buatKartu(musik, state.favorit));
  });
}



import { render } from './dom.js';

const KUNCI = "pabw-p11";
const VERSI = 2; 

export const state = {
  daftarProyek: [],
  kategoriAktif: 'semua',
  favorit: [],
  laguTambahan: [] // <-- Tempat untuk menyimpan lagu buatanmu
};

export function simpan(state) {
  const isi = { 
    versi: VERSI, 
    kategoriAktif: state.kategoriAktif, 
    favorit: state.favorit,
    laguTambahan: state.laguTambahan // Ikut disimpan ke memori
  };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI); 
      return null;
    }
    return isi;
  } catch {
    localStorage.removeItem(KUNCI); 
    return null;
  }
}

export function pulihkan(isi) {
  if (!isi) return; 
  state.kategoriAktif = isi.kategoriAktif;
  state.favorit = isi.favorit;
  state.laguTambahan = isi.laguTambahan || []; // Pulihkan lagu buatanmu
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = 'semua';
  state.favorit = [];
  state.laguTambahan = []; // Lagu tambahan dihapus kalau direset
  
  // Hapus lagu lokal dari daftar tampilan saat ini
  state.daftarProyek = state.daftarProyek.filter(lagu => !lagu.id_lokal);
  render(state);
}

export function isiProyek(daftar) {
  // GABUNGKAN data lagu dari API dengan data lagu tambahan dari LocalStorage
  state.daftarProyek = [...daftar, ...state.laguTambahan];
  render(state);
}

export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
  simpan(state);
  render(state);
}

export function tambahFavorit(id) {
  // Mengecek apakah lagu sudah ada di daftar favorit
  if (state.favorit.includes(id)) {
    // Jika sudah ada, hapus bintangnya (batal favorit)
    state.favorit = state.favorit.filter(idFavorit => idFavorit !== id);
  } else {
    // Jika belum ada, tambahkan bintangnya
    state.favorit = [...state.favorit, id];
  }
  
  simpan(state); // Simpan perubahan ke memori
  render(state); // Gambar ulang layarnya
}

// --- FUNGSI BARU UNTUK MENAMBAH LAGU ---
export function tambahLagu(laguBaru) {
  // Beri tanda bahwa ini lagu lokal
  laguBaru.id_lokal = true; 
  
  // Masukkan ke tampilan dan ke memori permanen
  state.daftarProyek.push(laguBaru);
  state.laguTambahan.push(laguBaru);
  
  simpan(state);
  render(state);
}
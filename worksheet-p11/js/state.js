import { render } from './dom.js';

export const state = {
  daftarProyek: [],
  kategoriAktif: 'semua',
  favorit: [] 
};

export function isiProyek(daftar) {
  state.daftarProyek = daftar;
  render(state); // Memanggil render setiap kali data diisi
}

export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
  render(state); // Memanggil render setiap kali kategori berubah
}

export function tambahFavorit(id) {
  if (state.favorit.includes(id)) return;
  state.favorit = [...state.favorit, id];
  render(state);
}
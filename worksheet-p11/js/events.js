import { pilihKategori, tambahFavorit } from './state.js';

export function pasangPendengar() {
  const barisFilter = document.querySelector("#filter");
  if (barisFilter) {
    barisFilter.addEventListener('click', (event) => {
      const tombol = event.target.closest('button');
      if (!tombol) return;

      // Mengubah tampilan tombol aktif
      document.querySelectorAll('#filter button').forEach(btn => btn.classList.remove('aktif'));
      tombol.classList.add('aktif');

      // Mengubah state
      pilihKategori(tombol.dataset.kategori);
    });
  }

  // Pendengar klik untuk tombol favorit (bintang)
  const wadahDaftar = document.querySelector("#daftar");
  if (wadahDaftar) {
    wadahDaftar.addEventListener("click", (event) => {
      const tombolBintang = event.target.closest(".favorit");
      if (!tombolBintang) return;
      
      tambahFavorit(Number(tombolBintang.dataset.id));
    });
  }
}
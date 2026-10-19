// js/events.js
import { pilihKategori, tambahFavorit, aturUlang, tambahLagu } from './state.js'; // Jangan lupa tambahLagu

export function pasangPendengar() {
  const barisFilter = document.querySelector("#filter");
  if (barisFilter) {
    barisFilter.addEventListener('click', (event) => {
      const tombol = event.target.closest('button');
      if (!tombol) return;

      if (tombol.id === 'atur-ulang') return; 

      document.querySelectorAll('#filter button').forEach(btn => btn.classList.remove('aktif'));
      tombol.classList.add('aktif');

      pilihKategori(tombol.dataset.kategori);
    });
  }

 const wadahDaftar = document.querySelector("#daftar");
  if (wadahDaftar) {
    wadahDaftar.addEventListener("click", (event) => {
      const tombolBintang = event.target.closest(".favorit");
      if (!tombolBintang) return;
      
      // HILANGKAN kata Number() di sini agar sama dengan data dari server
      tambahFavorit(tombolBintang.dataset.id);
    });
  }

  const tombolReset = document.querySelector("#atur-ulang");
  if (tombolReset) {
    tombolReset.addEventListener('click', () => {
      aturUlang();
      
      document.querySelectorAll('#filter button').forEach(btn => btn.classList.remove('aktif'));
      const tombolSemua = document.querySelector('#filter button[data-kategori="semua"]');
      if (tombolSemua) tombolSemua.classList.add('aktif');
    });
  }

  // --- FITUR FORM TAMBAH LAGU ---
  const formTambah = document.querySelector("#tambah-lagu form");
  if (formTambah) {
    formTambah.addEventListener("submit", (event) => {
      event.preventDefault(); // Jangan refresh halamannya
      
      const isiJudul = document.querySelector("#judul").value;
      const isiPenyanyi = document.querySelector("#penyanyi").value;
      const isiTahun = document.querySelector("#tahun-rilis").value;
      const isiKategori = document.querySelector("#kategori-lagu").value;

      if (isiJudul && isiPenyanyi) {
        const laguBaru = {
          id: Date.now(), // Bikin ID unik pakai waktu
          judul: isiJudul,
          penyanyi: isiPenyanyi,
          tahun: isiTahun,
          kategori: isiKategori
        };

        tambahLagu(laguBaru);
        formTambah.reset(); // Form kembali kosong otomatis
      }
    });
  }
}
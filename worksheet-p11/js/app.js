import { ambilProyek } from './api.js';
import { isiProyek } from './state.js';
import { tampilkanGalat, aturMemuat } from './dom.js';
import { pasangPendengar } from './events.js';

async function mulai() {
  // pulihkan(muat()); // Ini untuk Lembar D nanti, jadikan komentar dulu
  pasangPendengar();                
  aturMemuat(true);

  try {
    const daftar = await ambilProyek();
    isiProyek(daftar); 
  } catch (galat) {
    tampilkanGalat('Data gagal dimuat. Periksa koneksi, lalu muat ulang.');
  } finally {
    aturMemuat(false);
  }
}

mulai();

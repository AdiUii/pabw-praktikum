const ALAMAT = 'lagu.json';

export async function muat() {
  try {
    const respons = await fetch(ALAMAT);
    
    // Periksa status, lempar galat jika bukan 2xx
    if (!respons.ok) throw new Error('status ' + respons.status);
    
    const data = await respons.json();
    return data;
  } catch (galat) {
    // Tangkap galat jaringan atau salah alamat
    console.error('gagal memuat di api.js:', galat.message);
    throw galat; // Lempar lagi agar bisa ditangkap oleh app.js
  }
}
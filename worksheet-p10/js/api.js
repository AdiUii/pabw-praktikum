const ALAMAT = 'https://raw.githubusercontent.com/AdiUii/pabw-praktikum/refs/heads/main/worksheet-p10/data/lagu.json';

export async function ambilProyek() {
  try {
    const respons = await fetch(ALAMAT);
    
    if (!respons.ok) {
      throw new Error('status ' + respons.status);
    }
    
    const data = await respons.json();
    return data;
    
  } catch (galat) {
    console.error('gagal memuat', galat.message);
    throw galat; // Lempar galat ke pemanggilnya (app.js)
  }
}


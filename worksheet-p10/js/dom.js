const wadah = document.querySelector("#daftar");
// Pastikan ID elemen pesan kosong dan memuat sesuai dengan di HTML kamu (misal: id="kosong" dan id="muat")
const kosong = document.querySelector("#kosong");
const muatEl = document.querySelector("#muat");
const barisFilter = document.querySelector("#filter");

// 1. FUNGSI MENGATUR TAMPILAN MEMUAT
export function aturMemuat(aktif) {
  if (muatEl) muatEl.hidden = !aktif;
}

// 2. FUNGSI MENAMPILKAN PESAN GALAT
export function tampilkanGalat(pesan) {
  if (wadah) wadah.textContent = '';
  if (kosong) {
    kosong.textContent = pesan;
    kosong.hidden = false;
  }
}

// FUNGSI MEMBUAT ELEMEN KARTU (Dari Pertemuan 9)
function buatKartu(musik) {
  const kartu = document.createElement("li");
  kartu.className = "kartu";

  const judul = document.createElement("h3");
  judul.textContent = musik.judul; 

  const penyanyi = document.createElement("p");
  penyanyi.textContent = musik.penyanyi; 

  const tahun = document.createElement("span");
  tahun.textContent = musik.tahun; 

  kartu.append(judul, penyanyi, tahun);
  return kartu;
}

// 3. FUNGSI RENDER UTAMA (Menggambar ke layar)
export function render(daftar) {
  if (!wadah) return;
  wadah.textContent = ''; // Kosongkan wadah sebelum diisi ulang

  if (!daftar || daftar.length === 0) { // Jika data kosong
    if (kosong) {
      kosong.textContent = 'Belum ada lagu yang tersedia.';
      kosong.hidden = false;
    }
    return;
  }

  if (kosong) kosong.hidden = true; // Sembunyikan pesan kosong jika ada data

  // Telusuri array dan gambar kartu
  daftar.forEach((musik) => {
    wadah.append(buatKartu(musik));
  });
}

// 4. FUNGSI FILTER (Menggunakan data dari argumen, bukan dari app.js)
export function pasangFilter(daftar) {
  if (!barisFilter) return;
  barisFilter.addEventListener('click', (event) => {
    const tombol = event.target.closest('button');
    if (!tombol) return;

    const kategori = tombol.dataset.kategori;
    // Saring data jaringan yang dikirim dari app.js
    const hasilFilter = daftar.filter((musik) => kategori === 'semua' || musik.kategori === kategori);
    
    render(hasilFilter); // Gambar hasil saringan
  });
}


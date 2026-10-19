const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#kosong");
const muatEl = document.querySelector("#muat");
const barisFilter = document.querySelector("#filter");

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

function buatKartu(musik) {
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
  tahun.textContent = musik.tahun; 

  const tombolPutar = document.createElement("button");
  tombolPutar.textContent = "Putar";

  kaki.append(tahun, tombolPutar);
  kartu.append(isi, kaki);
  
  return kartu;
}


export function render(daftar) {
  if (!wadah) return;
  wadah.textContent = ''; 

  if (!daftar || daftar.length === 0) { 
    if (kosong) {
      kosong.textContent = 'Belum ada lagu yang tersedia.';
      kosong.hidden = false;
    }
    return;
  }

  if (kosong) kosong.hidden = true; 

  daftar.forEach((musik) => {
    wadah.append(buatKartu(musik));
  });
}

export function pasangFilter(daftar) {
  if (!barisFilter) return;
  barisFilter.addEventListener('click', (event) => {
    const tombol = event.target.closest('button');
    if (!tombol) return;

    const kategori = tombol.dataset.kategori;
    const hasilFilter = daftar.filter((musik) => kategori === 'semua' || musik.kategori === kategori);
    
    render(hasilFilter); 
  });
}


const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");

// Tempat menyimpan SELURUH lagu dari JSON (tidak boleh tertimpa filter)
let dataMasterLagu = [];

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

export function renderStatus(keadaan, pesan = "") {
  if (!wadah) return;
  if (keadaan === "memuat") {
    wadah.textContent = "Memuat data lagu...";
  } else if (keadaan === "gagal") {
    wadah.textContent = "Gagal memuat data: " + pesan;
  }
}

// Fungsi internal untuk menggambar array apa pun ke layar
function gambarDaftar(daftar) {
  if (!wadah) return;
  wadah.textContent = "";

  if (!daftar || daftar.length === 0) {
    if (pesanKosong) pesanKosong.hidden = false;
    wadah.textContent = "Belum ada lagu yang tersedia.";
    return;
  }

  if (pesanKosong) pesanKosong.hidden = true;

  daftar.forEach((musik) => {
    wadah.append(buatKartu(musik));
  });
}

// FUNGSI RENDER UTAMA (Dipanggil dari app.js saat data JSON berhasil diambil)
export function render(data) {
  if (data) {
    dataMasterLagu = data; // Simpan data awal ke dataMasterLagu
  }
  gambarDaftar(dataMasterLagu);
}

// ==========================================
// FITUR FILTER
// ==========================================
const barisFilter = document.querySelector("#filter");

if (barisFilter) {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    barisFilter.querySelectorAll("button").forEach((b) => {
      const aktif = b === tombol;
      b.classList.toggle("aktif", aktif);
      b.setAttribute("aria-pressed", String(aktif));
    });

    const kategori = tombol.dataset.kategori;

    // KUNCI PERBAIKAN: Selalu filter dari dataMasterLagu!
    let hasilFilter = dataMasterLagu;
    if (kategori !== "semua") {
      hasilFilter = dataMasterLagu.filter((musik) => musik.kategori === kategori);
    }

    gambarDaftar(hasilFilter); // Gambar hasil filter tanpa merusak dataMasterLagu
  });
}

// ==========================================
// FITUR TAMBAH LAGU
// ==========================================
const formTambah = document.querySelector("#tambah-lagu form");

if (formTambah) {
  formTambah.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const inputJudul = document.querySelector("#judul");
    const inputPenyanyi = document.querySelector("#penyanyi");
    const inputTahun = document.querySelector("#tahun-rilis");
    const inputKategori = document.querySelector("#kategori-lagu");

    if (!inputJudul.value || !inputPenyanyi.value || !inputTahun.value) return;

    const laguBaru = {
      judul: inputJudul.value.trim(),
      penyanyi: inputPenyanyi.value.trim(),
      tahun: Number(inputTahun.value),
      kategori: inputKategori.value
    };

    dataMasterLagu.push(laguBaru); // Tambahkan lagu baru ke dataMasterLagu
    formTambah.reset();
    
    gambarDaftar(dataMasterLagu);
    document.querySelector('[data-kategori="semua"]')?.click();
  });
}


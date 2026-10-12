import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");
const daftarTombol = document.querySelectorAll("#filter button");

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

// ==========================================
// LEMBAR D.1: SATU FUNGSI RENDER (Sesuai Urutan Modul)
// ==========================================
function render(data) {
  // 1. Kosongkan wadah lebih dulu
  wadah.textContent = ""; 
  
  // 2. Periksa keadaan kosong (Hentikan proses jika kosong)
  if (data.length === 0) {
    pesanKosong.hidden = false;
    return; // Berhenti di sini, tidak perlu looping
  } 
  
  // Jika tidak kosong, sembunyikan pesan
  pesanKosong.hidden = true;

  // 3. Isi ulang data ke layar
  data.forEach((musik) => {
    wadah.append(buatKartu(musik));
  });
}

// Render data awal
render(daftarProyek);


// ==========================================
// LEMBAR C.2: TOMBOL YANG SEDANG AKTIF
// ==========================================
function tandaiTombolAktif(tombolAktif) {
  daftarTombol.forEach((tombol) => {
    // Mengecek apakah tombol yang sedang dilooping adalah tombol yang diklik
    const aktif = tombol === tombolAktif;
    
    // Toggle class "aktif" (tambah jika true, hapus jika false)
    tombol.classList.toggle("aktif", aktif); 
    
    // Setel aria-pressed untuk aksesibilitas (pembaca layar)
    tombol.setAttribute("aria-pressed", String(aktif));
  });
}

// Pasang event listener pada setiap tombol
daftarTombol.forEach((tombol) => {
  tombol.addEventListener("click", () => {
    // Panggil fungsi penanda visual
    tandaiTombolAktif(tombol);

    const kategori = tombol.dataset.kategori;

    let hasilFilter = daftarProyek;
    if (kategori !== "semua") {
      hasilFilter = daftarProyek.filter((musik) => musik.kategori === kategori);
    }

    render(hasilFilter);
  });
});

// LEMBAR D.2: VALIDASI FORM YANG MENJAWAB SEBELUM DIKIRIM
const formTambah = document.querySelector("#tambah-lagu form");
const tombolSimpan = formTambah.querySelector('button[type="submit"]');

// Matikan validasi bawaan browser agar JS mengambil alih
formTambah.noValidate = true;

function periksaForm() {
  let sah = true;
  let kolomBermasalah = null;

  const inputJudul = document.querySelector("#judul");
  const inputPenyanyi = document.querySelector("#penyanyi");
  const inputTahun = document.querySelector("#tahun-rilis");

  // Validasi Judul
  if (inputJudul.value.trim() === "") {
    inputJudul.setAttribute("aria-invalid", "true");
    sah = false;
    if (!kolomBermasalah) kolomBermasalah = inputJudul;
  } else {
    inputJudul.removeAttribute("aria-invalid");
  }

  // Validasi Penyanyi
  if (inputPenyanyi.value.trim() === "") {
    inputPenyanyi.setAttribute("aria-invalid", "true");
    sah = false;
    if (!kolomBermasalah) kolomBermasalah = inputPenyanyi;
  } else {
    inputPenyanyi.removeAttribute("aria-invalid");
  }

  // Validasi Tahun
  if (inputTahun.value.trim() === "" || Number(inputTahun.value) < 1900) {
    inputTahun.setAttribute("aria-invalid", "true");
    sah = false;
    if (!kolomBermasalah) kolomBermasalah = inputTahun;
  } else {
    inputTahun.removeAttribute("aria-invalid");
  }

  // Matikan tombol jika tidak sah
  tombolSimpan.disabled = !sah;

  return { sah, kolomBermasalah };
}

// Jalankan validasi SAAT pengguna mengetik (Sesuai modul)
formTambah.addEventListener("input", periksaForm);

formTambah.addEventListener("submit", (event) => {
  event.preventDefault();

  const hasilCek = periksaForm();

  // Jika ada kolom bermasalah, pindahkan pandangan ke kolom tersebut
  if (!hasilCek.sah) {
    hasilCek.kolomBermasalah.focus();
    return;
  }

  const inputKategori = document.querySelector("#kategori-lagu").value;

  const laguBaru = {
    judul: document.querySelector("#judul").value.trim(),
    penyanyi: document.querySelector("#penyanyi").value.trim(),
    tahun: Number(document.querySelector("#tahun-rilis").value),
    kategori: inputKategori,
    selesai: true
  };

  daftarProyek.push(laguBaru);
  
  formTambah.reset();
  periksaForm(); // Memastikan tombol kembali nonaktif
  
  document.querySelector('[data-kategori="semua"]').click();
});


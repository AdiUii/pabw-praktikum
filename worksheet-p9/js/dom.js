import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");

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
// LEMBAR D.1: SATU FUNGSI RENDER
// ==========================================
function render(data) {
  wadah.textContent = ""; 
  
  if (data.length === 0) {
    pesanKosong.hidden = false;
    return;
  } 
  
  pesanKosong.hidden = true;

  data.forEach((musik) => {
    wadah.append(buatKartu(musik));
  });
}

render(daftarProyek);


// ==========================================
// LEMBAR C: SATU PENDENGAR DI INDUK (EVENT DELEGATION)
// ==========================================
const barisFilter = document.querySelector("#filter");

function tandaiTombolAktif(tombolAktif) {
  const semuaTombol = barisFilter.querySelectorAll("button");
  
  semuaTombol.forEach((tombol) => {
    const aktif = tombol === tombolAktif;
    tombol.classList.toggle("aktif", aktif);
    tombol.setAttribute("aria-pressed", String(aktif));
  });
}

// SATU EVENT LISTENER SAJA DI ELEMEN INDUK
barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  
  if (!tombol) return;

  tandaiTombolAktif(tombol);

  const kategori = tombol.dataset.kategori;

  let hasilFilter = daftarProyek;
  if (kategori !== "semua") {
    hasilFilter = daftarProyek.filter((musik) => musik.kategori === kategori);
  }

  render(hasilFilter);
});


// ==========================================
// LEMBAR D.2: VALIDASI FORM YANG MENJAWAB SEBELUM DIKIRIM
// ==========================================
const formTambah = document.querySelector("#tambah-lagu form");
const tombolSimpan = formTambah.querySelector('button[type="submit"]');

formTambah.noValidate = true;

function periksaForm() {
  let sah = true;
  let kolomBermasalah = null;

  const inputJudul = document.querySelector("#judul");
  const inputPenyanyi = document.querySelector("#penyanyi");
  const inputTahun = document.querySelector("#tahun-rilis");

  if (inputJudul.value.trim() === "") {
    inputJudul.setAttribute("aria-invalid", "true");
    sah = false;
    if (!kolomBermasalah) kolomBermasalah = inputJudul;
  } else {
    inputJudul.removeAttribute("aria-invalid");
  }

  if (inputPenyanyi.value.trim() === "") {
    inputPenyanyi.setAttribute("aria-invalid", "true");
    sah = false;
    if (!kolomBermasalah) kolomBermasalah = inputPenyanyi;
  } else {
    inputPenyanyi.removeAttribute("aria-invalid");
  }

  if (inputTahun.value.trim() === "" || Number(inputTahun.value) < 1900) {
    inputTahun.setAttribute("aria-invalid", "true");
    sah = false;
    if (!kolomBermasalah) kolomBermasalah = inputTahun;
  } else {
    inputTahun.removeAttribute("aria-invalid");
  }

  tombolSimpan.disabled = !sah;

  return { sah, kolomBermasalah };
}

formTambah.addEventListener("input", periksaForm);

formTambah.addEventListener("submit", (event) => {
  event.preventDefault();

  const hasilCek = periksaForm();

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
  periksaForm(); 
  
  document.querySelector('[data-kategori="semua"]').click();
});


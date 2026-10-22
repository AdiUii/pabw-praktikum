import { reactive } from 'vue'

const KUNCI = 'pabw-p11'
const VERSI = 2

export const state = reactive({
  daftarProyek: [],
  kategoriAktif: 'semua',
  favorit: [],
  laguTambahan: [],
  memuat: true,
  galat: '',
})

export function simpan(nilai) {
  const isi = {
    versi: VERSI,
    kategoriAktif: nilai.kategoriAktif,
    favorit: nilai.favorit,
    laguTambahan: nilai.laguTambahan,
  }
  localStorage.setItem(KUNCI, JSON.stringify(isi))
}

export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI))
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI)
      return null
    }
    return isi
  } catch {
    localStorage.removeItem(KUNCI)
    return null
  }
}

export function pulihkan(isi) {
  if (!isi) return
  state.kategoriAktif = isi.kategoriAktif
  state.favorit = isi.favorit
  state.laguTambahan = isi.laguTambahan || []
}

// data dari api.js digabung dengan lagu buatan pengguna
export function isiProyek(daftar) {
  state.daftarProyek = [...daftar, ...state.laguTambahan]
}

export function pilihKategori(kategori) {
  state.kategoriAktif = kategori
}

export function tambahFavorit(id) {
  const kunci = String(id)
  if (state.favorit.includes(kunci)) {
    state.favorit = state.favorit.filter((f) => f !== kunci)
  } else {
    state.favorit = [...state.favorit, kunci]
  }
}

export function tambahLagu(laguBaru) {
  const lagu = { ...laguBaru, id_lokal: true }
  state.daftarProyek.push(lagu)
  state.laguTambahan.push(lagu)
}

export function aturUlang() {
  localStorage.removeItem(KUNCI)
  state.kategoriAktif = 'semua'
  state.favorit = []
  state.laguTambahan = []
  state.daftarProyek = state.daftarProyek.filter((lagu) => !lagu.id_lokal)
}
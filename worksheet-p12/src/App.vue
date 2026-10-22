<script setup>
import { onMounted, watch } from 'vue'
import { profil } from './data.js'
import { ambilProyek } from './api.js'
import { state, simpan, muat, pulihkan, isiProyek } from './state.js'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

onMounted(async () => {
  pulihkan(muat()) // pilihan terakhir dari localStorage
  try {
    const data = await ambilProyek()
    isiProyek(Array.isArray(data) ? data : data.lagu)
  } catch (galat) {
    state.galat = 'Data gagal dimuat. Periksa koneksi, lalu muat ulang.'
  } finally {
    state.memuat = false
  }
})

watch(state, (nilai) => simpan(nilai), { deep: true })
</script>

<template>
  <div class="page">
    <header class="header-baris">
      <div>
        <input type="checkbox" id="tema" class="pengalih-tema">
        <label for="tema" class="tombol-tema">Tema gelap</label>
      </div>
      <h1>Playlist musik</h1>
      <nav class="navbar">
        <ul>
          <li><a href="#daftar-musik">Daftar musik</a></li>
          <li><a href="#tambah-lagu">Tambah lagu</a></li>
          <li><a href="#premium">Premium</a></li>
        </ul>
      </nav>
    </header>

    <main class="isi">
      <aside class="sisi">
        <KepalaProfil :profil="profil" />
        <figure style="margin-top: 2rem;">
          <img src="https://images.icon-icons.com/3215/PNG/512/music_melody_audio_song_tone_icon_196488.png" alt="Melodi" loading="lazy">
          <figcaption>Ilustrasi rangkaian nada atau melodi</figcaption>
        </figure>
      </aside>

      <div class="utama">
        <section id="daftar-musik">
          <h2>Daftar musik</h2>
          <TombolFilter />
          <DaftarProyek />
        </section>

        <section id="tambah-lagu" style="margin-top: 2rem;">
          <h2>Tambah Lagu</h2>
          <FormKontak />
        </section>
      </div>

      <section id="premium" class="sorotan">
        <h2>Layanan Premium</h2>
        <p>Nikmati pengalaman mendengarkan musik tanpa Iklan dan kualitas audio terbaik.</p>
        <button>Gabung Sekarang</button>
      </section>
    </main>

    <footer>
      <p>Muchamad Adi Prasetyo · 25523259 · 2026</p>
    </footer>
  </div>
</template>
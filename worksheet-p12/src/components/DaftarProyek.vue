<script setup>
import { computed } from 'vue'
import { state, tambahFavorit } from '../state.js'
import { saring } from '../data.js'


const tampil = computed(() => saring(state.daftarProyek, state.kategoriAktif))

const difavoritkan = (id) => state.favorit.includes(String(id))
</script>

<template>
  <p v-if="state.memuat">Memuat data...</p>
  <p v-else-if="state.galat">{{ state.galat }}</p>
  <p v-else-if="tampil.length === 0" id="pesan-kosong">
    Tidak ada musik pada kategori itu.
  </p>

  <ul id="daftar" class="galeri">
    <li v-for="lagu in tampil" :key="lagu.id" class="kartu">
      <div class="kartu__isi">
        <h3 class="kartu__judul">{{ lagu.judul }}</h3>
        <p>{{ lagu.penyanyi }}</p>
      </div>
      <div class="kartu__kaki">
        <span>{{ lagu.tahun }}</span>
        <button class="favorit" @click="tambahFavorit(lagu.id)">
          {{ difavoritkan(lagu.id) ? '★' : '☆' }}
        </button>
        <button>Putar</button>
      </div>
    </li>
  </ul>
</template>
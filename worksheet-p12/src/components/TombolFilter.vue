<script setup>
import { state, pilihKategori, aturUlang } from '../state.js'

const kategori = [
  { nilai: 'semua', label: 'Semua' },
  { nilai: 'hiphop', label: 'Hip Hop' },
  { nilai: 'pop', label: 'Pop' },
]
</script>

<template>
  <div id="filter" style="margin-bottom: 1rem;">
    <button
      v-for="k in kategori"
      :key="k.nilai"
      :data-kategori="k.nilai"
      :class="{ aktif: state.kategoriAktif === k.nilai }"
      :aria-pressed="state.kategoriAktif === k.nilai"
      @click="pilihKategori(k.nilai)"
    >
      {{ k.label }}
    </button>
    <button id="atur-ulang" @click="aturUlang">Atur ulang</button>
  </div>
</template>
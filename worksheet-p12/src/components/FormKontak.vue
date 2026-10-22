<script setup>
import { ref, reactive } from 'vue'
import { tambahLagu } from '../state.js'

const judul = ref('')
const penyanyi = ref('')
const tahun = ref('')
const kategori = ref('hiphop')

const galat = reactive({ judul: false, penyanyi: false, tahun: false })

function periksa() {
  galat.judul = judul.value.trim() === ''
  galat.penyanyi = penyanyi.value.trim() === ''
  const angka = Number(tahun.value)
  galat.tahun = tahun.value === '' || !Number.isInteger(angka) || angka < 1900 || angka > 2026
  return !galat.judul && !galat.penyanyi && !galat.tahun
}

function kirim() {
  if (!periksa()) return

  tambahLagu({
    id: Date.now(),
    judul: judul.value.trim(),
    penyanyi: penyanyi.value.trim(),
    tahun: Number(tahun.value),
    kategori: kategori.value,
  })

  judul.value = ''
  penyanyi.value = ''
  tahun.value = ''
  kategori.value = 'hiphop'
}
</script>

<template>
  <form novalidate @submit.prevent="kirim">
    <div class="form-kolom">
      <label for="judul">Judul :</label>
      <input type="text" id="judul" name="judul" v-model="judul"
             :aria-invalid="galat.judul ? 'true' : null">
      <p class="pesan-galat">Judul lagu belum diisi.</p>
    </div>
    <div class="form-kolom">
      <label for="penyanyi">Penyanyi:</label>
      <input type="text" id="penyanyi" name="penyanyi" v-model="penyanyi"
             :aria-invalid="galat.penyanyi ? 'true' : null">
      <p class="pesan-galat">Penyanyi belum diisi.</p>
    </div>
    <div class="form-kolom">
      <label for="tahun-rilis">Tahun rilis:</label>
      <input type="number" id="tahun-rilis" name="tahun-rilis" min="1900" max="2026"
             v-model="tahun" :aria-invalid="galat.tahun ? 'true' : null">
      <p class="pesan-galat">Masukkan tahun rilis berupa angka (1900-2026).</p>
    </div>
    <div class="form-kolom">
      <label for="kategori-lagu">Kategori:</label>
      <select id="kategori-lagu" name="kategori-lagu" v-model="kategori"
              style="width: 100%; padding: 0.5rem; margin-top: 0.2rem;">
        <option value="hiphop">Hip Hop</option>
        <option value="pop">Pop</option>
      </select>
    </div>
    <button type="submit" style="margin-top: 1rem;">Simpan Data</button>
  </form>
</template>
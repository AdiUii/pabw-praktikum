# pabw-praktikum
 
## pertemuan 3 - HAlaman profil saya

Topik halaman saya : Koleksi musik

- Judul halaman: Playlist Musik
- Deskripsi: Daftar yang berisi lagu-lagu pilihan
- Tautan Navigasi: Daftar musik, Tambah lagu, Premium
- Dua bagian utama: Daftar musik, Tambah lagu
- Kolom tabel: Judul, Penyanyi, Tahun rilis
- Kolom form: Judul, Penyanyi, Tahun rilis
- Gambar: https://images.icon-icons.com/3215/PNG/512/music_melody_audio_song_tone_icon_196488.png

(Update 28/09/2026 tautan navigasi sebelumnya ada sebuah profil di ganti menjadi premium)
## Pertemuan 4 — Design token halaman profil
 
- Berkas gaya yang akan dibuat: tokens.css, base.css,
  layout.css, komponen.css, tema.css
- Warna utama: #1DB954 (hijau), dipilih karena sangat identik dengan aplikasi musik yang sudah ada
 
Token yang saya tetapkan
 
| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | #1DB954 | tombol, tautan, penanda |
| --color-fg | #0F172A | warna teks utama |
| --color-bg | #F8FAFC | latar halaman |
| --radius-md | 0.75rem | sudut tombol dan kartu |
| --space-4 | 1.125rem | jarak standar antar elemen |
 
Kriteria selesai saya: mengubah --color-primary di satu baris
harus mengubah warna tombol, tautan, judul, dan garis fokus.

## Rangkuman Pertemuan 5: Tata Letak dan Komponen
Pada pertemuan ini, fokus pengerjaan adalah menstrukturkan HTML agar semantik dan membangun fondasi tata letak yang rapi.
 **Arsitektur CSS Modular:** Memecah kode menjadi tokens.css, base.css, layout.css, komponen.css, dan tema.css.
 **CSS Variables:** Mendefinisikan variabel global untuk warna, ukuran font, dan spasi agar konsisten, serta menyiapkan dasar untuk fitur pengalih tema (gelap/terang).
 **Flexbox & CSS Grid:** Menggunakan CSS Grid untuk membagi area *sidebar* dan konten utama, serta Flexbox untuk merapikan susunan navigasi dan elemen di dalam kartu musik.

## Rangkuman Pertemuan 6: Desain Web Responsif 
Pada pertemuan ini, halaman web disempurnakan agar adaptif terhadap berbagai ukuran layar menggunakan file responsif.css.
 **Pendekatan Mobile-First:** Gaya dasar halaman diatur menjadi satu kolom vertikal yang optimal untuk perangkat seluler berukuran kecil (360px).
 **Konfigurasi Viewport:** Pemasangan meta tag viewport untuk memastikan skala tampilan sesuai dengan perangkat pengguna.
 **Titik Henti (Media Queries):** Menerapkan aturan layar lebar tanpa menimpa kode dasar:
   min-width: 48rem (Tablet - 768px): Susunan kartu pada daftar musik berubah menjadi dua kolom berdampingan.
   min-width: 60rem (Desktop - 1280px): Tata letak berubah menjadi tiga kolom keseluruhan, dengan *sidebar* melodi berada menetap di sisi kiri dan konten meluas di sisi kanan.
 **Penanganan Elemen Luber:** Menerapkan max-width: 100% pada gambar dan menggunakan ukuran relatif (rem) agar tidak ada elemen yang memaksa munculnya *scroll* mendatar di layar sempit.

Ada BANTUAN AI
Dalam mengerjakan tugas ini sebagai bantuan untuk memahami materi, mencari kesalahan kode, dan membantu proses perbaikan CSS.


tampilan akhir tetap saya sesuaikan dengan kebutuhan tugas.
# Rupix Frontend Spec

## 1. Ringkasan Produk

Rupix adalah startup pembayaran biometrik berbasis telapak tangan dan pembuluh darah (palm vein recognition). Pengguna cukup menunjukkan tangan ke device untuk verifikasi identitas dan pembayaran tanpa kartu, tanpa HP, dan tanpa kontak fisik. Target pasar awal adalah masyarakat umum yang sudah terbiasa dengan QRIS, dengan positioning sebagai alternatif yang lebih cepat dan seamless.

Versi pertama adalah web company profile single page, fokus edukasi pasar dan akuisisi pendaftaran biometrik awal, belum dashboard transaksi atau portal merchant.

Referensi desain:
- Struktur dan flow konten: https://palm.tencent.com/
- Gaya visual dan layout fintech: https://webflow.com/templates/html/yapay-website-template

## 2. Tech Stack

- Framework: React.js (Vite atau Next.js, pilih Next.js kalau butuh SEO server-rendered untuk landing page)
- Styling: Tailwind CSS
- Animasi: Framer Motion untuk transisi section dan micro-interaction
- Font: Plus Jakarta Sans atau Inter
- Icon: Lucide React

## 3. Design Tokens

### Warna

| Token | Hex | Penggunaan |
|---|---|---|
| primary | #5271FF | CTA utama, link aktif, elemen interaktif |
| primary-light | #38B6FF | Gradient, hover state, aksen sekunder |
| neutral-900 | #0F172A | Heading text, background section gelap |
| neutral-950 | #07112B | Background footer, CTA penutup |
| neutral-200 | #E5E7EB | Teks sekunder di atas background gelap, border halus |
| white | #FFFFFF | Background utama, teks di atas background gelap |

Gradient utama: `linear-gradient(135deg, #5271FF 0%, #38B6FF 100%)` dipakai di hero background dan CTA button hover.

### Tipografi

- Heading: bold, ukuran besar 40-64px di hero, 28-36px di section title
- Body: regular, 16-18px, line-height longgar untuk keterbacaan
- Tone tulisan: trustworthy, banking-grade, hindari bahasa terlalu playful karena menyangkut data biometrik sensitif

### Border Radius

- Button: 8-12px (medium, bukan full rounded)
- Card: 16px
- Input: 8px

## 4. Struktur Halaman (Single Page)

### Section 1 — Navbar
- Logo Rupix kiri
- Menu tengah: Produk, Cara Kerja, Tentang Kami, Kontak
- Kanan: tombol sekunder "Sign In", tombol primary "Daftar Biometrik" (warna primary, jadi CTA paling menonjol di navbar)
- Sticky on scroll, background transparan di hero lalu solid putih saat scroll

### Section 2 — Hero
- Headline: "Satu Telapak Tangan untuk Semua Transaksi"
- Subheadline: penjelasan singkat verifikasi dan pembayaran tanpa kartu, tanpa HP
- Background: video/animasi scan tangan dengan gradient primary ke primary-light
- CTA: "Daftar Sekarang" mengarah ke halaman registrasi biometrik
- Referensi struktur: hero section di palm.tencent.com dengan video background dan headline besar

### Section 3 — Trust Bar
- Counter angka berjalan (animated number)
- Contoh metrik: akurasi verifikasi, response time dalam milidetik, jumlah pengguna terdaftar
- Layout horizontal 3-4 kolom

### Section 4 — Keunggulan Teknologi
- 4 card fitur:
  1. Keamanan Vein Recognition
  2. Kecepatan Verifikasi
  3. Tanpa Kontak Fisik
  4. Terintegrasi dengan Merchant Lokal
- Tiap card: icon, judul, deskripsi 1-2 kalimat
- Referensi: section "Cutting-Edge Technology / Security & Compliance / Proven Expertise / Open Ecosystem" di palm.tencent.com

### Section 5 — Cara Kerja
- 3 langkah dengan ilustrasi/numbering besar:
  1. Scan telapak tangan saat registrasi
  2. Hubungkan ke metode pembayaran
  3. Bayar cukup tunjuk tangan di device merchant
- Layout horizontal stepper atau vertical timeline

### Section 6 — Use Case
- Card horizontal scroll, tiap card: gambar, nama skenario, deskripsi singkat
- Contoh skenario: minimarket, kantin kampus, transportasi umum
- Referensi: section "Success Stories" di palm.tencent.com (Beijing Subway, Visa, 7-Eleven)

### Section 7 — Perbandingan dengan QRIS
- Section khusus pasar Indonesia, highlight kecepatan dan kepraktisan dibanding scan QR
- Format bisa tabel perbandingan atau dua kolom side-by-side (QRIS vs Rupix)

### Section 8 — CTA Penutup
- Background solid neutral-950
- Headline ajakan daftar biometrik
- Tombol CTA besar, warna primary

### Section 9 — Footer
- Background neutral-950, teks neutral-200/putih
- Kolom: Produk, Perusahaan, Kontak, Media Sosial
- Copyright line di bawah

## 5. Halaman Terpisah

### Halaman Registrasi Biometrik
- Diakses dari navbar dan CTA hero/penutup
- Form data diri (nama, nomor HP/email, metode pembayaran)
- Stepper 2-3 langkah, langkah terakhir instruksi scan tangan
- Konfirmasi sukses dengan ringkasan data terdaftar

### Halaman Cara Kerja Detail (opsional, fase 2)
- Versi panjang dari section 5, untuk audiens yang butuh penjelasan lebih dalam soal keamanan data biometrik

## 6. Component Inventory

| Komponen | Varian/Catatan |
|---|---|
| Navbar | sticky, transparan ke solid on scroll |
| Button | primary, secondary, outline |
| Card | feature card, use-case card |
| Stepper | dipakai di Cara Kerja dan form registrasi |
| StatCounter | animated number untuk trust bar |
| Badge | tag kecil, contoh "Tanpa Kartu", "Tanpa HP" |
| Footer | multi-column |
| Input/Form | text input, phone input, select |

Bangun component inventory ini lebih dulu sebagai library kecil sebelum assembling section, supaya styling konsisten di semua halaman dan gampang diubah massal.

## 7. Prioritas Build

1. Setup design tokens (Tailwind config: warna, font, radius)
2. Bangun component inventory (Button, Card, Navbar, Footer, Badge)
3. Assembling Hero + Navbar
4. Assembling Trust Bar + Keunggulan Teknologi
5. Assembling Cara Kerja + Use Case
6. Assembling Perbandingan QRIS + CTA Penutup
7. Halaman Registrasi Biometrik
8. Responsive pass (mobile, tablet) di semua section

## 8. Referensi

- Struktur dan flow konten: https://palm.tencent.com/
- Gaya visual dan layout fintech: https://webflow.com/templates/html/yapay-website-template

// data/membershipData.ts
import type { MembershipData, CategoryButton } from "../type/MemberCardType";

export const allMembershipData: MembershipData = {
  promo: [
    {
      title: "Promo A - 1 Bulan",
      price: "Rp 250.000",
      description: "Akses penuh ke semua fasilitas + kelas grup.",
    },
    {
      title: "Promo B - 3 Bulan",
      price: "Rp 600.000",
      description: "Diskon 10% untuk pendaftaran Personal Trainer.",
    },
    {
      title: "Promo C - Trial Gratis",
      price: "Gratis",
      description: "Coba kelas perdana kami secara gratis!",
    },
  ],
  umum: [
    {
      title: "Paket Bulanan Reguler",
      price: "Rp 300.000",
      description: "Akses studio dan alat fitness standar.",
    },
    {
      title: "Paket Tahunan Umum",
      price: "Rp 3.000.000",
      description: "Hemat 15% untuk keanggotaan jangka panjang.",
    },
  ],
  couple: [
    {
      title: "Paket Pasangan - 6 Bulan",
      price: "Rp 1.500.000",
      description: "Diskon khusus untuk dua orang, termasuk kelas privat.",
    },
    {
      title: "Duo Fit - 1 Tahun",
      price: "Rp 2.800.000",
      description: "Nikmati fasilitas premium berdua dengan harga terbaik.",
    },
  ],
  pelajar: [
    {
      title: "Student Pass - Bulanan",
      price: "Rp 180.000",
      description: "Akses gym khusus pelajar (perlu ID pelajar).",
    },
    {
      title: "Student Pass - Semester",
      price: "Rp 900.000",
      description: "Akses 6 bulan untuk mahasiswa dan pelajar aktif.",
    },
  ],
  "karyawan/organisasi": [
    {
      title: "Korporat Paket A",
      price: "Rp 280.000/org/bln",
      description: "Harga spesial untuk grup minimal 5 orang.",
    },
    {
      title: "Korporat Paket B",
      price: "Rp 250.000/org/bln",
      description: "Harga lebih rendah untuk grup minimal 10 orang.",
    },
  ],
  "paket pt": [
    {
      title: "Personal Trainer - 5 Sesi",
      price: "Rp 800.000",
      description: "Pendampingan latihan pribadi untuk 5 sesi.",
    },
    {
      title: "Personal Trainer - 10 Sesi",
      price: "Rp 1.500.000",
      description: "Program latihan terpersonalisasi dengan 10 sesi PT.",
    },
  ],
};

export const categoryButtons: CategoryButton[] = [
  { key: "promo", label: "Promo" },
  { key: "umum", label: "Umum" },
  { key: "couple", label: "Couple" },
  { key: "pelajar", label: "Pelajar" },
  { key: "karyawan/organisasi", label: "Karyawan/Organisasi" },
  { key: "paket pt", label: "Paket PT" },
];

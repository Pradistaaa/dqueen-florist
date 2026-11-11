// ====== PRODUK TERLARIS SETIAP HARI (satu-satunya tempat edit) ======
// Urutan array = urutan tampil di web.
// Cara update katalog: timpa PDF dengan nama yang sama di public/katalog/,
// lalu ubah "v" (versi, supaya cache browser ikut refresh), "upd", dan "hal".
// Selama "file" kosong, kartu hanya menampilkan tombol pesan lewat WhatsApp.
import type { Katalog } from "./katalog";

export const terlarisHarian: Katalog[] = [
  { slug: "paket-peresmian", nama: "Paket Peresmian", hal: 37, upd: "9 Nov 2026", v: "20261109", harga: "Mulai Rp350.000",
    desc: "", file: "paket-peresmian.pdf" },
  { slug: "standing-flowers", nama: "Standing Flowers", hal: 80, upd: "26 Okt 2026", v: "20261026", harga: "Mulai Rp499.000",
    desc: "", file: "standing-flowers.pdf" },
  { slug: "simbolis", nama: "Simbolis", hal: 27, upd: "9 Nov 2026", v: "20261109", harga: "Mulai Rp100.000",
    desc: "", file: "simbolis.pdf" },
  { slug: "pita-motor", nama: "Pita Motor", hal: 30, upd: "2 Okt 2026", v: "20261002", harga: "Mulai Rp35.000",
    desc: "", file: "pita-motor.pdf" },
  { slug: "pita-kain-peresmian", nama: "Pita Kain Peresmian", hal: 49, upd: "9 Nov 2026", v: "20261109", harga: "Mulai Rp80.000",
    desc: "", file: "pita-kain-peresmian.pdf" },
  { slug: "artificial", nama: "Artificial", hal: 67, upd: "9 Nov 2026", v: "20261109", harga: "Mulai Rp130.000",
    desc: "", file: "artificial.pdf" },
  { slug: "bunga-dukacita", nama: "Bunga Dukacita", hal: 123, upd: "2 Nov 2026", v: "20261102", harga: "Mulai Rp250.000",
    desc: "", file: "bunga-dukacita.pdf" },
];

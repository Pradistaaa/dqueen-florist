// ====== DATA KATALOG (satu-satunya tempat edit) ======
// Urutan array = urutan tampil di web (ke 1 sampai ke 6).
// Cara update katalog: timpa file PDF dengan nama yang sama di public/katalog/,
// lalu ubah "v" (versi) supaya cache browser ikut ter-refresh. Ubah juga "upd" dan "hal".

export const WA = "628161456508";
export const WA2 = "62816991971"; // nomor alternatif (0816-991-971)

export type Katalog = {
  slug: string;   // dipakai di URL /baca?f=slug dan nama cover /img/slug.jpg
  nama: string;
  hal: number;    // jumlah halaman PDF (0 = belum diketahui, disembunyikan di web)
  upd: string;    // tanggal update tampil di web
  v: string;      // versi file untuk cache, format tanggal bebas (mis. 20261109)
  harga: string;  // harga mulai dari
  desc: string;
  file: string;   // nama file di public/katalog/
  tampil?: boolean; // false = disembunyikan dari beranda (halaman /baca tetap bisa dibuka)
  tautan?: string;  // opsional: kalau diisi, kartu menuju link ini (mis. "#hari-raya")
};

export const katalog: Katalog[] = [
  { slug: "bunga-box", nama: "Bunga Box", hal: 77, upd: "5 Nov 2026", v: "20261105", harga: "Mulai Rp150.000",
    desc: "Rangkaian bunga segar dalam box, tinggi sekitar 40–50 cm. Warna bisa custom, gratis kartu ucapan.",
    file: "bunga-box.pdf" },
  { slug: "pita-peresmian", nama: "Pita Peresmian", hal: 101, upd: "9 Nov 2026", v: "20261109", harga: "Mulai Rp60.000",
    desc: "Pompom dan jambul untuk gunting pita peresmian, lengkap dengan pita hias, gunting, dan tali satin. Diameter dan warna bisa custom.",
    file: "pita-peresmian.pdf" },
  { slug: "bunga-papan-akrilik", nama: "Bunga Papan Akrilik", hal: 53, upd: "11 Nov 2026", v: "20261111", harga: "Mulai Rp550.000",
    desc: "Papan bunga akrilik dan PVC dengan bunga artificial dan kaki kayu natural, tinggi total sekitar 1,3 m. Bunga bisa custom.",
    file: "bunga-papan-akrilik.pdf" },
  { slug: "bunga-papan-biasa", nama: "Bunga Papan Biasa", hal: 33, upd: "5 Okt 2026", v: "20261005", harga: "Mulai Rp500.000",
    desc: "Papan bunga ucapan ukuran besar, mulai 200 x 130 cm, untuk selamat, ulang tahun, dan duka cita.",
    file: "bunga-papan-biasa.pdf" },
  { slug: "buket-bunga", nama: "Buket Bunga", hal: 74, upd: "9 Nov 2026", v: "20261109", harga: "Mulai Rp100.000",
    desc: "Buket bunga segar, dari mawar sampai hortensia, cocok untuk anniversary dan ulang tahun. Gratis kartu ucapan.",
    file: "buket-bunga.pdf" },
  { slug: "pita-dekorasi", nama: "Pita Dekorasi", hal: 37, upd: "9 Nov 2026", v: "20261109", harga: "Mulai Rp45.000",
    desc: "Pita dan jambul besar dari spon dan satin untuk dekorasi mobil, panggung, dan hadiah besar.",
    file: "pita-dekorasi.pdf" },
];

// Yang tampil di beranda (katalog dengan tampil: false tidak ikut)
export const katalogTampil = katalog.filter((k) => k.tampil !== false);

// Total halaman dibulatkan ke bawah per 50, jadi klaim "300+" selalu benar
export const totalHal = katalogTampil.reduce((a, k) => a + k.hal, 0);
export const totalHalBulat = Math.floor(totalHal / 50) * 50;
export const jumlahKatalog = katalogTampil.length;

// ====== GRUP KATALOG BARU ======
// Isi "file", "hal", "upd", "v", "harga", "desc" kalau PDF-nya sudah ada.
// Cover: taruh di public/img/{slug}.jpg (kalau belum ada, gambarnya disembunyikan otomatis).
const baru = (slug: string, nama: string, o: Partial<Katalog> = {}): Katalog =>
  ({ slug, nama, hal: 0, upd: "", v: "1", harga: "", desc: "", file: "", ...o });

export type Grup = { id: string; judul: string; kecil?: boolean; items: Katalog[] };

export const grupBaru: Grup[] = [
  {
    id: "pilihan",
    judul: "Produk Pilihan Kami",
    items: [
      baru("papan-balon", "Papan Balon"),
      baru("graduation", "Graduation"),
      baru("bunga-papan-unik", "Bunga Papan Unik"),
    ],
  },
  {
    id: "unggulan",
    judul: "Produk Unggulan",
    kecil: true,
    items: [
      baru("paket-bundling", "Paket Bundling"),
      baru("buket-duit-snack-box", "Buket Duit Snack Box"),
      baru("bunga-vas", "Bunga Vas"),
      baru("balon-mosaic", "Balon Mosaic"),
      baru("new-born-gift", "New Born Gift"),
      baru("rangkaian-anggrek", "Rangkaian Anggrek"),
      baru("hampers-buah", "Hampers Buah"),
      baru("bunga-papan-mini", "Bunga Papan Mini"),
      baru("bunga-papan-kertas", "Bunga Papan Kertas"),
      baru("hari-raya", "Hari Raya", { tautan: "#hari-raya" }),
      baru("bunga-papan-banner", "Bunga Papan Banner"),
      baru("papan-backdrop", "Papan Backdrop"),
      baru("balon-gate", "Balon Gate"),
      baru("kusudama", "Kusudama"),
      baru("bunga-wedding", "Bunga Wedding"),
      baru("rupa-rupa", "Rupa-Rupa"),
    ],
  },
  {
    id: "hari-raya",
    judul: "Hari Raya",
    kecil: true,
    items: [
      baru("idul-fitri", "Idul Fitri"),
      baru("natal", "Natal"),
      baru("imlek", "Imlek"),
      baru("valentine", "Valentine"),
    ],
  },
];

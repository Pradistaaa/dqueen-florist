// ====== GRUP KATALOG BARU (file terpisah dari katalog.ts) ======
// Produk yang PDF-nya sudah ada pakai pdf(...): "file", "upd", "v" terisi otomatis.
// Isi "hal" (jumlah halaman), "harga", dan "desc" lewat objek di belakangnya, contoh:
//   pdf("papan-balon", "Papan Balon", { hal: 40, harga: "Mulai Rp200.000", desc: "..." })
// Produk yang PDF-nya belum ada pakai baru(...) (kartu hanya punya tombol Tanya produk).
// Cover: public/img/{slug}.jpg. PDF: public/katalog/{slug}.pdf

export type Item = {
  slug: string;
  nama: string;
  hal: number;
  upd: string;
  v: string;
  harga: string;
  desc: string;
  file: string;
  tautan?: string; // kalau diisi, kartu menuju link ini (mis. "#hari-raya")
};

export type Grup = { id: string; judul: string; kecil?: boolean; dua?: boolean; items: Item[] };

const UPD = "11 Nov 2026"; // tanggal update yang tampil di web
const V = "20261111";      // versi cache PDF (ubah kalau PDF ditimpa)

const baru = (slug: string, nama: string, o: Partial<Item> = {}): Item =>
  ({ slug, nama, hal: 0, upd: "", v: "1", harga: "", desc: "", file: "", ...o });

const pdf = (slug: string, nama: string, o: Partial<Item> = {}): Item =>
  baru(slug, nama, { file: `${slug}.pdf`, upd: UPD, v: V, ...o });

export const grupBaru: Grup[] = [
  {
    id: "pilihan",
    judul: "Produk Pilihan Kami",
    items: [
      pdf("papan-balon", "Papan Balon", { hal: 133 }),
      pdf("graduation", "Graduation", { hal: 25 }),
      pdf("bunga-papan-unik", "Bunga Papan Unik", { hal: 62 }),
    ],
  },
  {
    id: "unggulan",
    judul: "Produk Unggulan",
    kecil: true,
    items: [
      pdf("paket-bundling", "Paket Bundling", { hal: 5 }),
      pdf("buket-duit-snack-box", "Buket Duit Snack Box", { hal: 20 }),
      pdf("bunga-vas", "Bunga Vas", { hal: 51 }),
      pdf("balon-mosaic", "Balon Mosaic", { hal: 52 }),
      pdf("new-born-gift", "New Born Gift", { hal: 80 }),
      pdf("rangkaian-anggrek", "Rangkaian Anggrek", { hal: 15 }),
      pdf("hampers-buah", "Hampers Buah", { hal: 35 }),
      pdf("bunga-papan-mini", "Bunga Papan Mini", { hal: 33 }),
      pdf("bunga-papan-kertas", "Bunga Papan Kertas", { hal: 43 }),
      pdf("hari-raya", "Hari Raya", { hal: 54 }),
      pdf("bunga-papan-banner", "Bunga Papan Banner", { hal: 16 }),
      pdf("papan-backdrop", "Papan Backdrop", { hal: 34 }),
      pdf("balon-gate", "Balon Gate", { hal: 8 }),
      pdf("kusudama", "Kusudama", { hal: 15 }),
      pdf("bunga-wedding", "Bunga Wedding", { hal: 32 }),
      pdf("rupa-rupa", "Rupa-Rupa", { hal: 35 }),
    ],
  },
];

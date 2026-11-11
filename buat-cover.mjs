// Bikin cover .jpg dari halaman 1 setiap PDF di public/katalog/
// Hasil: public/img/{nama-pdf}.jpg. Cover yang sudah ada tidak ditimpa.
//
// Cara pakai (di terminal, dari folder project):
//   npm i -D pdf-to-img
//   node buat-cover.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pdf } from "pdf-to-img";
import sharp from "sharp";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PDF_DIR = path.join(ROOT, "public", "katalog");
const IMG_DIR = path.join(ROOT, "public", "img");
const TERLARIS_DIR = path.join(IMG_DIR, "terlaris");
const LEBAR = 1280;

fs.mkdirSync(IMG_DIR, { recursive: true });
let dibuat = 0;
let dilewati = 0;

for (const nama of fs.readdirSync(PDF_DIR).sort()) {
  if (!nama.toLowerCase().endsWith(".pdf")) continue;
  const slug = path.parse(nama).name;
  const tujuan = path.join(IMG_DIR, slug + ".jpg");
  if (fs.existsSync(tujuan) || fs.existsSync(path.join(TERLARIS_DIR, slug + ".jpg"))) {
    console.log("lewati (sudah ada):", slug);
    dilewati++;
    continue;
  }
  try {
    const doc = await pdf(path.join(PDF_DIR, nama), { scale: 2 });
    let halaman1 = null;
    for await (const img of doc) {
      halaman1 = img;
      break; // cukup halaman pertama
    }
    if (!halaman1) throw new Error("PDF kosong");
    await sharp(halaman1)
      .resize({ width: LEBAR, withoutEnlargement: true })
      .jpeg({ quality: 85 })
      .toFile(tujuan);
    console.log("dibuat:", slug + ".jpg");
    dibuat++;
  } catch (e) {
    console.log("GAGAL:", nama, "->", e.message);
  }
}

console.log(`\nSelesai. Dibuat: ${dibuat}, dilewati: ${dilewati}`);

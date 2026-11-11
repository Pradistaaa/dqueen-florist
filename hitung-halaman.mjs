// Menampilkan jumlah halaman setiap PDF di public/katalog/
// Cara pakai: node hitung-halaman.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pdf } from "pdf-to-img";

const DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "public", "katalog");

for (const nama of fs.readdirSync(DIR).sort()) {
  if (!nama.toLowerCase().endsWith(".pdf")) continue;
  try {
    const doc = await pdf(path.join(DIR, nama));
    console.log(path.parse(nama).name + ": " + doc.length);
  } catch (e) {
    console.log(nama + ": GAGAL (" + e.message + ")");
  }
}

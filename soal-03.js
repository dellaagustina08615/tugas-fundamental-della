// soal-03 - Conditional
const nilai = 85;

if (nilai < 0 || nilai > 100) {
  console.log("Nilai tidak valid, harus 0-100");
} else if (nilai >= 85) {
  console.log("Nilai:", nilai, "Predikat: A");
} else if (nilai >= 75) {
  console.log("Nilai:", nilai, "Predikat: B");
} else if (nilai >= 65) {
  console.log("Nilai:", nilai, "Predikat: C");
} else if (nilai >= 50) {
  console.log("Nilai:", nilai, "Predikat: D");
} else {
  console.log("Nilai:", nilai, "Predikat: E");
}
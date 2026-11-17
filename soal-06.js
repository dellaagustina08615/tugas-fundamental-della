// soal-06 - Array
const nilai = [80, 75, 90, 65, 85, 95, 70];

console.log("Seluruh nilai:", nilai);
console.log("Nilai tertinggi:", Math.max(...nilai));
console.log("Nilai terendah:", Math.min(...nilai));

let total = 0;
let lulus = 0;
for (let n of nilai) {
  total += n;
  if (n >= 75) lulus++;
}

console.log("Rata-rata:", total / nilai.length);
console.log("Jumlah lulus:", lulus);
// soal-04 - Looping
let jumlahGenap = 0;
let genap = [];
let ganjil = [];

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    genap.push(i);
    jumlahGenap += i;
  } else {
    ganjil.push(i);
  }
}

console.log("Angka Genap:", genap.join(", "));
console.log("Angka Ganjil:", ganjil.join(", "));
console.log("Jumlah seluruh angka genap:", jumlahGenap);
// soal-02 - Operator Aritmatika
const hargaBarang = 25000;
const jumlahBarang = 4;
const diskonPersen = 10;

const totalSebelumDiskon = hargaBarang * jumlahBarang;
const besaranDiskon = totalSebelumDiskon * diskonPersen / 100;
const totalSetelahDiskon = totalSebelumDiskon - besaranDiskon;

console.log("Total sebelum diskon: Rp", totalSebelumDiskon);
console.log("Besaran diskon: Rp", besaranDiskon);
console.log("Total setelah diskon: Rp", totalSetelahDiskon);
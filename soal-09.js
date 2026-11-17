// soal-09 - Array of O bjects
const mahasiswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 60 },
  { nama: "Citra", nilai: 90 },
  { nama: "Doni", nilai: 70 },
  { nama: "Eka", nilai: 95 },
];

console.log("Yang Lulus:");
let jumlahLulus = 0;
for (let m of mahasiswa) {
  if (m.nilai >= 75) {
    console.log(m.nama, "-", m.nilai);
    jumlahLulus++;
  }
}

console.log("Yang Tidak Lulus:");
for (let m of mahasiswa) {
  if (m.nilai < 75) {
    console.log(m.nama, "-", m.nilai);
  }
}

console.log("Jumlah lulus:", jumlahLulus);

console.log("Urut nilai tertinggi:");
const urut = [...mahasiswa].sort((a, b) => b.nilai - a.nilai);
for (let m of urut) {
  console.log(m.nama, "-", m.nilai);
}
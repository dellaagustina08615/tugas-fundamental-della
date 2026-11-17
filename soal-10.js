// Soal 10 - Mini Project Sistem Kasir Sederhana

// 1. Simpan data produk pakai array of objects
const produk = [
  { nama: "Mouse", harga: 50000 },
  { nama: "Keyboard", harga: 100000 },
  { nama: "Monitor", harga: 1500000 },
  { nama: "Headset", harga: 200000 },
];

// 2. Pengguna memilih produk berdasarkan nama + jumlah
// Ini sesuai contoh di soal
const keranjang = [
  { nama: "Mouse", jumlah: 2 },
  { nama: "Keyboard", jumlah: 1 },
  { nama: "Headset", jumlah: 1 },
];

// 3. Function hitung subtotal tiap produk
function hitungSubtotal(nama, jumlah) {
  const item = produk.find(p => p.nama === nama);
  return item.harga * jumlah;
}

console.log("=========== STRUK PEMBELIAN ===========");

let subtotal = 0;
for (let item of keranjang) {
  const totalItem = hitungSubtotal(item.nama, item.jumlah);
  subtotal += totalItem;
  console.log(`${item.nama} x${item.jumlah}   Rp${totalItem.toLocaleString("id-ID")}`);
}

console.log("----------------------------------------");

// 4. Jika total > 500.000, diskon 10%
let diskon = 0;
if (subtotal > 500000) {
  diskon = subtotal * 0.1;
}

let totalBayar = subtotal - diskon;

console.log(`Subtotal   Rp${subtotal.toLocaleString("id-ID")}`);
console.log(`Diskon     Rp${diskon.toLocaleString("id-ID")}`);
console.log(`Total      Rp${totalBayar.toLocaleString("id-ID")}`);
console.log("========== Terima kasih! ==========");
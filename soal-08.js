// soal-08 - String Manipulation
const produk = { nama: "Laptop", harga: 7500000, stok: 10, kategori: "Elektronik" };

console.log("Nama:", produk.nama);
console.log("Harga:", produk.harga);

// Ubah stok jadi 5, tambah merek Lenovo
produk.stok = 5;
produk.merek = "Lenovo";

console.log("Seluruh properti:", produk);
//pengulangan while
// while (true) {
//   console.log("hello world");
// }

//dihentikan oleh user
// var ulang = true;
// while (ulang) {
//   console.log("hello world");
//   ulang = confirm("lagi?..");
// }

//dihentikan oleh program
// var nilaiAwal = 1;
// while (nilaiAwal <= 5) {
//   console.log("hello world");
//   nilaiAwal++;
// }
//CONTOH LAIN
// var nilaiAwal = 1;
// while (nilaiAwal <= 100) {
//   console.log("hello world " + nilaiAwal + "X");
//   nilaiAwal++;
// }

//  TUGAS dari pak Sandhika Galih
// var angkut = 1;
// while (angkut <= 10) {
//   console.log("Angkut No. " + angkut + " beroperasi dengan baik");
//   angkut++;
// }

var angkut = 1;
var jumlah = 10;
var aktif = 5;
while (angkut <= aktif) {
  console.log("Angkut No. " + angkut + " beroperasi dengan baik");
  angkut++;
}
var sisa = aktif + 1;
while (sisa <= jumlah) {
  console.log("Angkut No. " + sisa + " tidak beroperasi dengan baik");
  sisa++;
}

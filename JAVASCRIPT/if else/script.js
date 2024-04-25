// var angka = prompt("masukan angka");
// if (angka % 2 == 0) {
//   alert(angka + " adalah bilangan genap");
// } else {
//   alert(angka + " adalah bilangan ganjil");
// }

//SOAL
var angkut = 10;
var angktAkt = prompt("angkut aktif");
var noAngkt = 1;
for (noAngkt; noAngkt <= angkut; noAngkt++) {
  if (noAngkt <= angktAkt) {
    console.log("angkut No " + noAngkt + " sedang beroperasi");
  } else {
    console.log("angkut No " + noAngkt + " sedang tidak beroperasi");
  }
}

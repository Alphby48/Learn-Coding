// function tambah(a, b) {
//   return a + b;
// }
// var a = parseInt(prompt("Masukan nilai pertama"));
// var b = parseInt(prompt("Masukan Nilai kedua"));
// var hasil = tambah(a, b);
// console.log(hasil);

// function tambah(a, b) {
//   return a + b;
// }

// function kali(a, b) {
//   return a * b;
// }
// var hasil = kali(tambah(1, 2), tambah(3, 4));
// console.log(hasil);

// function tambah() {
//   return arguments;
// }
// var coba = tambah(5, 10, 20, "hi", false);
// console.log(coba);

function tambah() {
  var hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}
var coba = tambah(1, 2, 3, 48);
console.log(coba);

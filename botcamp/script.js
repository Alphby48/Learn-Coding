let angka = 68;
let jenis = angka % 2 === 0 ? "bilangan genap" : "bilangan ganjil";
let huruf = "";

if (angka < 60) {
  huruf = "D";
  console.log("Nilai Angka : " + angka);
  console.log("Nilai Huruf : " + huruf);
  console.log(jenis);
} else if (angka <= 74) {
  huruf = "C";
  console.log("Nilai Angka : " + angka);
  console.log("Nilai Huruf : " + huruf);
  console.log(jenis);
} else if (angka <= 84) {
  huruf = "B";
  console.log("Nilai Angka : " + angka);
  console.log("Nilai Huruf : " + huruf);
  console.log(jenis);
} else if (angka <= 100) {
  huruf = "A";
  console.log("Nilai Angka : " + angka);
  console.log("Nilai Huruf : " + huruf);
  console.log(jenis);
} else if (angka > 100) {
  console.log("diluar batas");
} else {
  console.log("yang anda masukan bukan angka");
}

alert("Kalkulator Penghitung Luas Persegi");

function sisiPersegi(sisi) {
  return sisi * sisi;
}
var sisi = parseInt(prompt("masukan nilai sisi persegi"));
alert("hasil luas nya adalah \n " + sisiPersegi(sisi) + " m");

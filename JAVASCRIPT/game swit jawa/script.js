var tanya = true;
while (tanya) {
  // menangkap pilahan player
  var p = prompt("Pilih : gajah, semut, orang");
  //menangkap pilihan komputer
  //membangkitkan bilangan random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }
  var hasil = "";
  //menerapkan rules
  if (p == comp) {
    hasil = "SERI";
  } else if (p == "gajah") {
    hasil = comp == "semut" ? "KALAH" : "MENANG";
  } else if (p == "orang") {
    hasil = comp == "gajah" ? "KALAH" : "MENANG";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "KALAH" : "MENANG";
  } else {
    hasil = "anda memasukan input yang salah";
  }
  // tampilkan hasilnya
  alert(
    "Kamu memilih " + p + " dan Komputer memilih " + comp + ".\nAnda " + hasil
  );
  tanya = confirm("lagi...?");
}
alert("terima kasih sudah bermain");

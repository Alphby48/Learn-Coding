alert("hellow world");

var nama = prompt("hellow world");
alert(nama);

confirm("kamu Yakin??");

var tes = confirm("Kamu Yakin");
if (tes === true) {
  alert("terima kasih");
} else {
  alert("saya akan berusaha sebaik mungkin");
}

alert("selamat datang");
var lagi = true;
while (lagi === true) {
  var nama = prompt("masukkan nama anda");
  alert("hello " + nama);
  lagi = confirm("coba lagi?,,");
}
alert("terima kasih");

var tanya = true;
while (tanya) {
  var k = 3;
  var h = "";
  alert("game tebak angka \n anda punya " + k + " kesempatan");
  var p = prompt("masukan angka 1 - 10");
  var comp = parseInt(Math.random() * 10);
  while (k > 1) {
    if (p == comp) {
      h = "Benar";
      alert("Anda " + h);
      break;
    } else if (p < comp) {
      h = "Rendah";
      k -= 1;
      alert(
        "tebakan anda masih " + h + " \n kesempatan anda tinggal " + k + " lagi"
      );
      p = prompt(" coba lagi...");
    } else if (p > comp) {
      h = "Tinggi";
      k -= 1;
      alert(
        "tebakan anda terlalu " +
          h +
          " \n kesempatan anda tinggal " +
          k +
          " lagi"
      );
      p = prompt(" coba lagi...");
    } else if (k == 0) {
      break;
    } else {
      alert("Diluar Nalar...");
      break;
    }
  }
  while (k <= 1) {
    if (p < comp) {
      h = "Rendah";
      alert(
        "tebakan anda masih " +
          h +
          " \n kesempatan anda habis \n jawabannya " +
          comp
      );
      break;
    } else if (p > comp) {
      h = "Tinggi";
      alert(
        "tebakan anda masih " +
          h +
          " \n kesempatan anda habis \n jawabannya " +
          comp
      );
      break;
    }
  }
  tanya = confirm("lagi ? .....");
}
alert("terima kasih");

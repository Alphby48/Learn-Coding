function Angkut(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    if (this.penumpang.length == 0) {
      this.penumpang.push(namaPenumpang);
      return this.penumpang;
    }
    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == undefined) {
        this.penumpang[i] = namaPenumpang;
        return this.penumpang;
      } else if (this.penumpang[i] == namaPenumpang) {
        alert(
          "penumpang dengan nama " + namaPenumpang + " sudah didalam angkot"
        );
        console.log(
          "penumpang dengan nama " + namaPenumpang + " sudah didalam angkot"
        );
        return this.penumpang;
      } else if (i == this.penumpang.length - 1) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
      }
    }
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      alert("Penumpang masih kosong");
      return false;
    }
    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      } else if (i == this.penumpang.length - 1) {
        console.log(
          "penumpang dengan nama " + namaPenumpang + " tidak ada didalam angkot"
        );
        return this.penumpang;
      }
    }
  };
}
var angkot1 = new Angkut("Shandika Galih", ["madiun", "ponorogo"], [], 0);

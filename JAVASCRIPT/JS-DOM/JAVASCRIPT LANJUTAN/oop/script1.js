// pewarisan class

class Hewan {
  constructor(nama) {
    this.nama = nama;
  }
  jalan() {
    console.log(`${this.nama} sedang jalan pelan`);
  }
}

class Burung extends Hewan {
  terbang() {
    console.log(`${this.nama} sedang terbang`);
  }
  jalan() {
    super.jalan();
    console.log(`${this.nama} sedang jalan cepat`);
    this.terbang();
  }
}

let kenari = new Burung("kenari");

kenari.terbang();
kenari.jalan();

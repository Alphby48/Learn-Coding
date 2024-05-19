// pewarisan class dan override constructor

class Hewan {
  static habitat = "darat";
  constructor(nama) {
    this.nama = nama;
  }
  jalan() {
    console.log(`${this.nama} sedang jalan pelan`);
  }
}

class Burung extends Hewan {
  constructor(nama, warna) {
    super(nama);
    this.warna = warna;
  }
  terbang() {
    console.log(`${this.nama} sedang terbang`);
  }
  jalan() {
    console.log(`${this.nama} warna ${this.warna} sedang jalan cepat`);
  }
}

// object oriented programming

class Siswa {
  namaSekolah = "smkn 1 kebonsari";
  constructor(nama) {
    console.log(`selamat datang ${nama}`);
    this._nama = nama;
  }

  halo() {
    console.log(`halo ${this.nama} dari ${this.namaSekolah}`);
  }

  get nama() {
    let namaBaru = this._nama.toUpperCase();
    return namaBaru;
  }
  set nama(val) {
    if (val.length < 3) {
      alert("panjang nama harus kurang dari 3");
      return;
    }
    this._nama = val;
  }
}
let teman1 = new Siswa("andi");

teman1.nama = "sera";
console.log(teman1.nama);

const methodMahasiswa = {
  makan: function (porsi) {
    this.energy += porsi;
    console.log(`hello ${this.nama} selamat makan`);
  },

  main: function (jam) {
    this.energy -= jam;
    console.log(`hello ${this.nama} selamat bermain`);
  },
  tidur: function (jam) {
    this.energy += jam * 2;
    console.log(`hello ${this.nama} selamat bermain`);
  },
};

function Mahasiswa(nama, energy) {
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.energy = energy;

  return mahasiswa;
}

let aditya = Mahasiswa("aditya", 5);
let ahfazh = Mahasiswa("ahfazh", 10);

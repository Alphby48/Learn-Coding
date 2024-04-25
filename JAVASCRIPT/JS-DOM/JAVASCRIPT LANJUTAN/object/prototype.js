// const methodMahasiswa = {
//     makan: function (porsi) {
//       this.energy += porsi;
//       console.log(`hello ${this.nama} selamat makan`);
//     },

//     main: function (jam) {
//       this.energy -= jam;
//       console.log(`hello ${this.nama} selamat bermain`);
//     },
//     tidur: function (jam) {
//       this.energy += jam * 2;
//       console.log(`hello ${this.nama} selamat bermain`);
//     },
//   };

function Mahasiswa(nama, energy) {
  this.nama = nama;
  this.energy = energy;
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energy += porsi;
  return `halo ${this.nama} selamat makan`;
};

Mahasiswa.prototype.tidur = function (jam) {
  this.energy += jam * 2;
  return `halo ${this.nama} selamat tidur`;
};

Mahasiswa.prototype.main = function (jam) {
  this.energy -= jam;
  return `halo ${this.nama} selamat bermain`;
};

let aditya = new Mahasiswa("aditya", 5);
let ahfazh = new Mahasiswa("ahfazh", 10);

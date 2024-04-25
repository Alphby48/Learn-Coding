// OBJECT LITERAL
let mahasiswa1 = {
  nama: "sandhika",
  energy: 10,
  makan: function (porsi) {
    this.energy = this.energy + porsi;
    console.log(`Selamat datang ${this.nama} dan selamat makan`);
  },
};

// FUNCTION DECLARATION

// function Mahasiswa(nama, energy) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energy = energy;

//   mahasiswa.makan = function (porsi) {
//     this.energy += porsi;
//     console.log(`hello ${this.nama} selamat makan`);
//   };

//   mahasiswa.main = function (jam) {
//     this.energy -= jam;
//     console.log(`hello ${this.nama} selamat bermain`);
//   };
//   return mahasiswa;
// }

// let aditya = Mahasiswa("aditya", 5);
// let ahfazh = Mahasiswa("ahfazh", 10);

// constructor

function Mahasiswa(nama, energy) {
  this.nama = nama;
  this.energy = energy;

  this.makan = function (porsi) {
    this.energy += porsi;
    console.log(`hello ${this.nama} selamat makan`);
  };

  this.main = function (jam) {
    this.energy -= jam;
    console.log(`hello ${this.nama} selamat bermain`);
  };
}

let aditya = new Mahasiswa("aditya", 0);

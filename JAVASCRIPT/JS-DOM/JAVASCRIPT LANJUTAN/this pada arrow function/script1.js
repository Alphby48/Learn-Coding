const Mahasiswa = function () {
  this.nama = "aditya";
  this.umur = 18;
  this.sayhallo = () => {
    console.log(`hai ${this.nama} umur ${this.umur}`);
  };
};

const mahasiswa = new Mahasiswa();

// object literal

const mhs = {
  nama: "aditya",
  umur: 18,
  sayhalo: function () {
    console.log(`hai nama saya ${this.nama} umur saya ${this.umur}`);
  },
};

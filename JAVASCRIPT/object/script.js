// // cara membuat object
// var mhs = {
//   nama: "Aditya Ahfazh",
//   umur: 18,
//   ips: [3.0, 2.5, 3.2],
//   alamat: {
//     jalan: "jalan jalan",
//     kabupaten: "Madiun",
//     propinsi: "Jawa Timur",
//   },
// };

// // Object literal
// var mhs = {
//   nama: "Aditya Ahfazh",
//   umur: 18,
//   ips: [3.0, 2.5, 3.2],
//   alamat: {
//     jalan: "jalan jalan",
//     kabupaten: "Madiun",
//     propinsi: "Jawa Timur",
//   },
// };

// // function declaration

// function objectMahasiswa(nama, umur, ips) {
//   var mhs = {};
//   mhs.nama = nama;
//   mhs.umur = umur;
//   mhs.ips = ips;
//   return mhs;
// }

// var mhs2 = objectMahasiswa("Aditya", 18, 3.0);
// console.log(mhs2);

// //constructor

// function Mahasiswa(nama, umur, jurusan) {
//   this.nama = nama;
//   this.umur = umur;
//   this.jurusan = jurusan;
// }
// var Mhs = new Mahasiswa("Aditya", 18, "tkj");
// console.log(Mhs);

// membuat object function

// // cara 1
// function halo() {
//   console.log(this);
//   console.log("halo0");
// }
// this.halo();

//cara 2 - object literal
var obj = { nama: "Aditya", kelas: "XII TKJ A" };
obj.halo = function () {
  console.log(this);
  console.log("Halo");
};
obj.halo();

// // cara 3
// function Halo() {
//   console.log(this);
//   console.log("hAlo");
// }
// var obj1 = new Halo();
// var obj2 = new Halo();

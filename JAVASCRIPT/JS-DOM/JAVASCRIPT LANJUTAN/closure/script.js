// function init() {
//   //   let nama = "Sandhika";
//   return function (nama) {
//     console.log(nama);
//   };
// }
// init();
// let panggilNama = init();
// panggilNama("aditya");

function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama} selamat ${waktu}, semoga harimu menyenangkan`);
  };
}

let selamatPagi = ucapkanSalam("pagi");
selamatPagi("adit");

let selamatSiang = ucapkanSalam("siang");
selamatSiang("ahfazh");

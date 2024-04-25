//spread operator
const mhs = ["sandika", "dody", "erik"];
const dosen = ["aji", "danil", "samuel"];

const orang = [...mhs, ...dosen];
console.log(orang);

// mengcopy array

const mhs1 = [...mhs];
mhs1[0] = "fahar";
console.log(mhs1);

//

const judul = document.querySelector("h1");
const jdlArr = [...judul.textContent].map((h) => `<span>${h}</span>`).join("");

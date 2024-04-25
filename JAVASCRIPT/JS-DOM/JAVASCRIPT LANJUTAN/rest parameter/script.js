function myFunct(...myArg) {
  return myArg;
}

console.log(myFunct(1, 2, 3, 4));

// cara lain selain menggunakan rest parametter
function fun() {
  return Array.from(arguments);
}

console.log(fun(0, 9, 8, 7, 6));

// contoh 1

function jumlahAngka(...angka) {
  let total = 0;
  for (m of angka) {
    total += m;
  }
  return total;
}

console.log(jumlahAngka(6, 5));

//contoh 2

function jumlahAngka1(...angka1) {
  return angka1.reduce((a, b) => a + b);
}

console.log(jumlahAngka1(6, 5));

// array destructuring

const kelompok1 = ["aditya", "ahfazh", "firmansyah"];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(ketua);

// object destructuring

const team = {
  pm: "sandhika",
  frontEnd: "aditya",
  backEnd: "Dea Afrizal",
  uiUx: "hendra",
  devOps: "ponco",
};

const { pm, ...myteam } = team;
console.log(pm);

//filtering

function filtering(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(filtering("boolean", 1, 4, "sandika", false, 3, true, "aditya"));

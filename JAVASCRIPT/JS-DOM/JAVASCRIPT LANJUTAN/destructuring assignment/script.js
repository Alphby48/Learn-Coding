// const mhs = {
//   nama: "sandika",
//   umur: 33,
// };

// const { nama, umur } = mhs;

// console.log(nama);

// assign ke var baru

const mhs = {
  nama: "sandika",
  umur: 33,
};

const { nama: a, umur: b } = mhs;

console.log(a);

// mengambil field pada object setelah dikirim sbg parameter
const mahas = {
  id: 123,
  nama: "sandika",
  umur: 33,
};

function getMahas({ id }) {
  return id;
}

console.log(getMahas(mahas));

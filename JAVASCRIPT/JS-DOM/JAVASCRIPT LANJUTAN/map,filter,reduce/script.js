const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// filter
const angkaaa = angka.filter((a) => a >= 3);

// map
const kaliDua = angka.map((a) => a * 2);

// reduce
const jumlahAll = angka.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  5
);

// Method Chaining

const hasil = angka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .reduce((acc, cur) => acc + cur, 0);

console.log(hasil);

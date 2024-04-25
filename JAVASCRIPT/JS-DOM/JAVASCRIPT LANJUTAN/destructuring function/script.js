// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b];
// }

// const [jumlah, kurang, kali] = kalkulasi(2, 3);
// console.log(jumlah);

function kalkulasi(a, b) {
  return {
    tambah: a + b,
    kurang: a - b,
    kali: a * b,
  };
}

const { kali, tambah, kurang } = kalkulasi(4, 7);
console.log(kali);

const mhs = {
  nama: "aditya",
  umur: 18,
  passion: "coding dan pentesting",
  skil: {
    s1: "konfigurasi jaringan",
    s2: "pengoperasian os linux",
    s3: "desain grafis",
    s4: "coding(javascript)",
    s5: "penetrasion testing",
  },
};

function cetakMahasiswa({ nama, umur, passion, skil: { s1, s2, s3, s4, s5 } }) {
  return `Halo nama saya ${nama} dan passion saya ${passion} dan keahlian saya di ${s4}
  ${umur >= 18 ? "wih dah mau kuliah" : "bacot"}
  `;
}

console.log(cetakMahasiswa(mhs));

const mhs = ["agus", "cemple", "dobleh"];

for (const m of mhs) {
  console.log(m);
}

for (const [s, i] of mhs.entries()) {
  console.log(`${i} adalah mahasiswa ke-${s + 1}`);
}

const liNama = document.querySelectorAll("li");

// liNama.forEach((ln) => console.log(ln.textContent));

for (const li of liNama) {
  console.log(li.innerHTML);
}

// function
// for of

function tambahNilai() {
  let jumlah = 0;
  for (a of arguments) {
    jumlah += a;
  }
  return jumlah;
}

console.log(tambahNilai(1, 2, 3, 4, 5));

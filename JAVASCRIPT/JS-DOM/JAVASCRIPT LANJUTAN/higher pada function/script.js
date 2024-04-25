function Kerjakantugas(mapel, selesai) {
  console.log(`selamat mengerjakan tugas papel ${mapel} ..`);
  selesai();
}

function selesai() {
  setTimeout(function () {
    alert("sedah selesai");
  }, 3000);
}

Kerjakantugas("ipa", selesai);

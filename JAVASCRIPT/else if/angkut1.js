var jmlAngkt = 10;
var noAngkt = 1;
var angktAktf = 6;
for (noAngkt; noAngkt <= jmlAngkt; noAngkt++) {
  if (noAngkt <= angktAktf) {
    console.log("Angkut No. " + noAngkt + " beroperasi dengan baik.");
  } else if (noAngkt === 8 || noAngkt === 10) {
    console.log("Angkut No. " + noAngkt + " sedang lembur.");
  } else {
    console.log("Angkut No. " + noAngkt + " tidak beroperasi.");
  }
}

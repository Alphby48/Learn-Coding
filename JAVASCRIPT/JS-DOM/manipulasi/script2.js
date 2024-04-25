// buat element baru
const pBaru = document.createElement("p");
const teksP = document.createTextNode("P baru");
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksP);
//simpan pBaru ke dalam section A
const sectA = document.querySelector("section#a");
sectA.appendChild(pBaru);
pBaru.style.backgroundColor = "lightgreen";
//
const liBaru = document.createElement("li");
const txLiBaru = document.createTextNode("Li Baru");
liBaru.appendChild(txLiBaru);
const ul = document.querySelector("#b ul");
const li2 = ul.querySelector("li:nth-child(2)");
ul.insertBefore(liBaru, li2);
liBaru.style.backgroundColor = "lightgreen";
//

const link = document.getElementsByTagName("a")[0];
sectA.removeChild(link);

//
const sectB = document.getElementById("b");
const p4 = sectB.querySelector("p");
const judulBaru = document.createElement("h1");
const h1Baru = document.createTextNode("Judul baru");
judulBaru.appendChild(h1Baru);
sectB.replaceChild(judulBaru, p4);
judulBaru.style.backgroundColor = "lightgreen";

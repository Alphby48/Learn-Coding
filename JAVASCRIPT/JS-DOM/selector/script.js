// // DOM Selection
// // getElementById
// const judul = document.getElementById("judul");
// judul.style.color = "red";
// judul.style.backgroundColor = "grey";
// judul.innerHTML = "sandhika galih";

// // getElementsByTagName  ->  HTML Collections
// const p = document.getElementsByTagName("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }

// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = "50px";

// // getElementByClassName    ->   HTML Collection
// const p1 = document.getElementsByClassName("p1")[0];
// p1.innerHTML = "ini diubah oleh JS";

// querySelector    ->  element
const p4 = document.querySelector("#b p");
p4.style.color = "green";
p4.style.fontSize = "30px";

const li2 = document.querySelector("#b ul li:nth-child(2)");
li2.style.backgroundColor = "orange";

const p = document.querySelector("p");
p.innerHTML = "ubah js";

// querySelectorAll
const pe = document.querySelectorAll("p");
for (let i = 0; i < pe.length; i++) {
  pe[i].style.backgroundColor = "lightblue";
}

// nodeRoot
const sectB = document.getElementById("b");
const li3 = sectB.querySelector("ul li:nth-child(3)");
li3.style.backgroundColor = "#ddd";

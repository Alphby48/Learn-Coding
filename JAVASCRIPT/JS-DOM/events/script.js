//eventHendler
const p3 = document.querySelector("#a .p3");
p3.onclick = ubahWarna;
function ubahWarna() {
  p3.style.backgroundColor = "lightblue";
}

//addEventListener()
const p4 = document.querySelector("#b p");
p4.addEventListener("click", function () {
  const ul = document.querySelector("#b ul");
  const liBaru = document.createElement("li");
  const txtLiBaru = document.createTextNode("li Baru");
  liBaru.appendChild(txtLiBaru);
  ul.appendChild(liBaru);
});

const p2 = document.querySelector(".p2");
p2.addEventListener("mouseenter", function () {
  p2.style.backgroundColor = "green";
  p2.style.color = "blue";
});
p2.addEventListener("mouseleave", function () {
  p2.style.backgroundColor = "lightblue";
  p2.style.color = "green";
});

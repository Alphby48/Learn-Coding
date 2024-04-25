const h1 = document.querySelector("h1");
const input = document.querySelector("button");
// h1.addEventListener("click", function () {
//   h1.style.color = "red";
// });

// input.addEventListener("click", function () {
//   document.body.classList.toggle("cls");
// });

const btn = document.createElement("button");
const txtBtn = document.createTextNode("ubah warna");
btn.appendChild(txtBtn);
input.after(btn);

btn.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

const Red = document.querySelector("input[name=sRed]");
const Green = document.querySelector("input[name=sGreen]");
const Blue = document.querySelector("input[name=sBlue]");
Red.addEventListener("input", function () {
  const r = Red.value;
  const g = Green.value;
  const b = Blue.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

Green.addEventListener("input", function () {
  const r = Red.value;
  const g = Green.value;
  const b = Blue.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

Blue.addEventListener("input", function () {
  const r = Red.value;
  const g = Green.value;
  const b = Blue.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

document.body.addEventListener("mousemove", function (event) {
  const xPost = Math.round((event.clientX / window.innerWidth) * 255);
  const yPost = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = "rgb(" + xPost + "," + yPost + ",100)";
});

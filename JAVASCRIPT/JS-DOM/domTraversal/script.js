const card = document.querySelectorAll(".card");
const close = document.querySelectorAll(".close");
// close.addEventListener("click", function () {
//   card.style.display = "none";
// });

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//   });
// }

close.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
  });
});

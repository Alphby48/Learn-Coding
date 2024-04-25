// global scope / window scope

// var a = 1;
// function tes() {
//   var b = 2;
//   console.log(b);
// }
// tes();

// var a = 1;
// function tes() {
//   // name conflict
//   var a = 2;
// }
// tes();
// console.log(a);

// var a = 1;
// function tes() {
//   // name conflict
//   var a = 2;
//   console.log(window.a);
// }
// tes();

"use strict";

function tes() {
  // name conflict
  a = 2;
}
tes();
console.log(a);

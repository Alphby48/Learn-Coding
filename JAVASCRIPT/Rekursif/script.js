// function tambahAngka(n) {
//   if (n === 11) {
//     return;
//   }
//   console.log(n);
//   return tambahAngka(n + 1);
// }
// tambahAngka(1);

function faktorial(n) {
  if (n === 0) {
    return 1;
  }
  console.log(n);
  return n * faktorial(n - 1);
}
faktorial(5);

function lind() {
  let n = 12;
  function tmbN() {
    return ++n;
  }
  return tmbN;
}
n = 200;

let q = lind();
console.log(q());
console.log(q());

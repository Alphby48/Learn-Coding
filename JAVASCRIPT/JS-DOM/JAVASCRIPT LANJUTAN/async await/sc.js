//function bersarang

function ntb1() {
  return function ntb2() {
    const say = "hai";
    return say;
  };
}
const panggil = ntb1();

console.log(panggil());

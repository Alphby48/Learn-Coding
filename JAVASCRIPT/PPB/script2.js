var s = "";
for (var i = 10; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);

var d = "";
for (var r = 0; r < 10; r++) {
  for (var w = 0; w <= r; w++) {
    d += "*";
  }
  d += "\n";
}
console.log(d);

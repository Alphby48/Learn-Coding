function identitas(nama, power) {
  this.nama = nama;
  this.power = power;
}
identitas.prototype.senang = function (level) {
  this.power *= level;
  return this.power;
};

let aditya = new identitas("aditya", 100);

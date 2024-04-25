// //1. MENAMBAHKAN ISI ARRAY

// var arr = ["asd", 1, true];
// console.log(arr);

// //2. MEMILIH ARRAY

// var arr = ["asd", 1, true];
// console.log(arr[1]);

// //3. MENAMBAH ARRAY

// var arr = [];
// arr[0] = "Shandika";
// arr[1] = "Galih";
// arr[2] = "Nova";
// console.log(arr);

// //4. MENGHAPUS ISI ARRAY

// var arr = ["shandika", "galih", "nova"];
// arr[1] = undefined;
// console.log(arr);

// //5. MENAMPILKAN ISI ARRAY dgn loop

var arr = ["shandika", "galih", "nova", "adit", "dea", "afrizal"];
for (var i = 0; i < arr.length; i++) {
  console.log("mahasiswa :\n ke " + (i + 1) + " " + arr[i]);
}

// //6. METHOD PADA ARRAY
// //6.1 JOIN

// var arr = ["Shandika", "Galih", "Nova"];
// console.log(arr.join(" - "));

// //6.2 LENGTH

// var arr = ["Shandika", "Galih", "Nova"];
// console.log(arr.length);

// //6.3 POP

// var arr = ["Shandika", "Galih", "Nova"];
// arr.pop();
// console.log(arr.join());

// //6.4 PUSH

// var arr = ["Shandika", "Galih", "Nova"];
// arr.push("Adit", "WPU");
// console.log(arr.join());

// //6.5 UNSHIFT

// var arr = ["Shandika", "Galih", "Nova"];
// arr.unshift("Adit", "WPU");
// console.log(arr.join());

// // 6.6 SHIFT

// var arr = ["Shandika", "Galih", "Nova"];
// arr.shift();
// console.log(arr.join());

// //6.7 SPLICE
// // Rumus Splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenbaru2)

// var arr = ["Shandika", "Galih", "Nova"];
// arr.splice(2, 0, "Aditya");
// console.log(arr.join());

// //Atau

// var arr = ["Shandika", "Galih", "Nova"];
// arr.splice(1, 2, "Aditya", "Ahfazh");
// console.log(arr.join(" "));

// //6.8 SLICE
// // Rumus slice(awal, akhir)
// var arr = ["Shandika", "Galih", "Nova", "Aditya", "Ahfazh"];
// var arr2 = arr.slice(1, 3);
// console.log(arr.join(" "));
// console.log(arr2.join(" "));

// //6.9 forEach
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var cetak = function (e) {
//   console.log(e);
// };
// arr.forEach(cetak);
// // ATAU
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var nama = ["Sandhika", "Galih", "Nova"];
// nama.forEach(function (e, i) {
//   console.log("Mahasiswa ke " + (i + 1) + " adalah " + e);
// });

// // 6.10 map

// var angka = [1, 3, 5, 7, 9];
// var angka2 = angka.map(function (w) {
//   return w * 2;
// });
// console.log(angka2.join(" "));

// // //6.11 sort

// var angka = [1, 4, 2, 5, 3, 6, 8, 7, 9];
// angka.sort();
// console.log(angka);
// //Atau
// var angka = [1, 4, 20, 10, 2, 5, 3, 6, 8, 7, 9];
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join(" "));

// //6.12 FILTER

// var angka = [1, 4, 20, 10, 2, 5, 3, 6, 8, 7, 9];
// var angka2 = angka.filter(function (b) {
//   return b > 5;
// });
// console.log(angka2.join(" "));

// //6,13 FIND
// var angka = [1, 4, 20, 10, 2, 5, 3, 6, 8, 7, 9];
// var find = angka.find(function (x) {
//   return x > 6;
// });
// console.log(find);

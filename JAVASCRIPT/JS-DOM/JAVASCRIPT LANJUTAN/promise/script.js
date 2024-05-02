// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers",
//   success: (movies) => console.log(movies),
// });

// const movie = fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=avengers");
// console.log(movie);

// promise
// contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve(`janji di tepati`);
//   } else {
//     reject(`janji di ingkari`);
//   }
// });

// janji1
//   .then((result) => console.log(`oke, ${result}`))
//   .catch((result) => console.log(`not oke, ${result}`));

// console.log(janji1);

//contoh 2

// let janji = false;
// const janji2 = new Promise((resolve, reject) => {
//   if (janji) {
//     setTimeout(() => {
//       resolve("janji telah ditepati");
//     }, 3000);
//   } else {
//     setTimeout(() => {
//       reject("janji tidak ditepati");
//     }, 3000);
//   }
// });

// console.log("mulai");
// janji2
//   .then((response) => console.log(response))
//   .catch((response) => console.log(response));
// console.log("selesai");

//penggabungan promise

const biodata = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        nama: "aditya",
        umur: 18,
        sekolah: "smk",
      },
    ]);
  }, 3000);
});

const school = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        nama: "smkn 1 kebonsari",
        akreditasi: "A",
        website: "smkn1kebonsari.sch.id",
      },
    ]);
  }, 1000);
});

Promise.all([biodata, school]).then((response) => {
  const [biodata, school] = response;
  console.log(biodata);
  console.log(school);
});

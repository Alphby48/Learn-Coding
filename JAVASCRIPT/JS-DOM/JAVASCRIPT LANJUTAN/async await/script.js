// const coba = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("selesai");
//   }, 3000);
// });

// coba.then(() => console.log(coba));

// async await

// function cobaPromise() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("selesai");
//     }, 3000);
//   });
// }
// cobaAsync();

// async function cobaAsync() {
//   const coba = await cobaPromise();
//   console.log(coba);
// }

// eror handling

function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 3000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("selesai");
      }, waktu);
    } else {
      reject("kelamaan");
    }
  });
}

// const coba = cobaPromise();
// coba.then(() => console.log(coba)).catch(() => console.log(coba));

async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (eror) {
    console.log(eror);
  }
}

cobaAsync();

const nama = "sandika galih";
const umur = 33;
const email = "ahfazhaditya@gmail.com";

function coba(strins, ...arg) {
  //   let = reslt = "";
  //   strins.forEach((str, i) => {
  //     reslt += `${str}${arg[i] || ""}`;
  //   });
  //   return reslt;

  return strins.reduce(
    (result, str, i) =>
      `${result}${str}<span class="hl">${arg[i] || ""}</span>`,
    ""
  );
}

const tampil = coba`halo saya ${nama}, umur ${umur}, email saya ${email}`;

document.body.innerHTML = tampil;

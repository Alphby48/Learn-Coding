const video = Array.from(document.querySelectorAll("[data-duration]"));

let find = video
  .filter((v) => v.textContent.includes("JAVASCRIPT LANJUTAN"))
  .map((item) => item.dataset.duration)
  .map((waktu) => {
    const part = waktu.split(":").map((part1) => parseFloat(part1));
    return part[0] * 60 + part[1];
  })
  .reduce((total, detik) => total + detik);

const jam = Math.floor(find / 3600);
find = find - jam * 3600;

const menit = Math.floor(find / 60);

const detik = find - menit * 60;

const jumlah = video.filter((v) =>
  v.textContent.includes("JAVASCRIPT LANJUTAN")
);

console.log(jumlah);
document.querySelector(".jumlah-video").innerHTML = `${jumlah.length}`;

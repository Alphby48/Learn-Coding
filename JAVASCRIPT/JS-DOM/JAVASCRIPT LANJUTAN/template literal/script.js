const mhs = [
  {
    nama: "sandika galih",
    umur: 35,
    pekerjaan: "dosen",
  },
  {
    nama: "aditya",
    umur: 18,
    matPel: ["rekayasa perangkat lunak", "sistem informasi", "analisis data"],
  },
];

function cetakMatpel(mata) {
  return `<ol>
    ${mata.map((mp) => `<li>${mp}</li>`).join("")}
    </ol>`;
}

const el = `
<div class="mhs">
${mhs.map(
  (m) => `<ul>
<li>${m.nama}</li>
<li>${m.umur}</li>
<li>${m.pekerjaan ? `pekerjaan ${m.pekerjaan}` : ``}</li>
<li>${m.matPel ? `mata pelajaran : ${cetakMatpel(m.matPel)}` : ""}</li>
<br></br>
</ul`
)}
</div>
`;

document.body.innerHTML = el;

import member from "./data-member.js";
import detail from "./member-detail.js";
const btnMember = document.querySelectorAll(".btnmember");
const styMember = document.querySelector(".member");
const inputForm = document.querySelector(".form-control");
const btnform = document.querySelector("#button-addon2");

//

member.forEach(function (m) {
  let templ = showCards(m);

  styMember.innerHTML += templ;
});

//

btnform.addEventListener("click", function () {
  const dataM = member.filter((f) =>
    f.name.toUpperCase().includes(inputForm.value.toUpperCase())
  );

  datajuga(dataM);
  UIshow(datajuga);
});

//

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btnmember")) {
    const imdbid = e.target.dataset.imdbid;
    tampilModal(imdbid);
  }
});

// // // // ////////////////////////////////////////////

function tampilModal(imdbid) {
  const panggil = detail.filter((de) => de.id === imdbid);
  const ad = panggil.map(
    (d) => `<div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">${d.fullName}</h5>
    <button
      type="button"
      class="close"
      data-dismiss="modal"
      aria-label="Close"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p>Nama: ${d.nickname}</p>
    <p>Tanggal Lahir: ${d.birthday}</p>
    <p>Golongan Darah: ${d.bloodType}</p>
    <p>Zodiac: ${d.zodiac}</p>
    <p>Tinggi Badan: ${d.height}</p>
  </div>
  <div class="modal-footer">
    <button
      type="button"
      class="btn btn-secondary"
      data-dismiss="modal"
    >
      Close
    </button>
  </div>
</div>`
  );
  const modalTitle = document.querySelector(".modal-dialog");
  modalTitle.innerHTML = ad;
}

function datajuga(dataM) {
  return new Promise((resolve, reject) => {
    if (dataM.length) {
      resolve(showFinding(dataM));
    } else {
      reject(
        alert(
          `pencarian ' ${inputForm.value} ' tidak ada. gunakan nama panjang`
        )
      );
    }
  });
}

function UIshow(datajuga) {
  return datajuga()
    .then((response) => response)
    .catch((response) => response);
}

//
function showFinding(dataM) {
  const dataD = dataM.map((dm) => showCards(dm));
  styMember.innerHTML = dataD;
}

function showCards(m) {
  return `<div class="card mx-2 " style="width: 18rem;">
  <img src="${m.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${m.name}</h5>
    <p class="card-text">${m.memberStatus}</p>
    <a href="#" class="btn btn-primary btnmember" data-toggle="modal" data-target="#exampleModal" data-imdbid="${m.id}">Go somewhere</a>
  </div>
</div>`;
}
function showmodal(d) {
  return `<div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel"></h5>
    <button
      type="button"
      class="close"
      data-dismiss="modal"
      aria-label="Close"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">...</div>
  <div class="modal-footer">
    <button
      type="button"
      class="btn btn-secondary"
      data-dismiss="modal"
    >
      Close
    </button>
  </div>
</div>`;
}

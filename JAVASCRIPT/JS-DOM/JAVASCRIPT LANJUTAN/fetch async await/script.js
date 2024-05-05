//async
const searchButtton = document.querySelector(".search-button");

const movieContainer = document.querySelector(".movie-container");
searchButtton.addEventListener("click", async function () {
  const inputKeyword = document.querySelector(".input-keyword");
  const movies = await getMovies(inputKeyword.value);

  updateUI(movies);
});

// event binding
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-button")) {
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMovieDetail(imdbid);

    updateUIDetail(movieDetail);
  }
});

function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=1590c1f1&s=" + keyword)
    .then((response) => response.json())

    .then((response) => response.Search);
}

function updateUI(movies) {
  let card = "";
  movies.forEach((m) => (card += showCards(m)));
  movieContainer.innerHTML = card;
}

function getMovieDetail(imdbid) {
  return fetch("http://www.omdbapi.com/?apikey=1590c1f1&i=" + imdbid)
    .then((response) => response.json())
    .then((m) => m);
}

function updateUIDetail(m) {
  const movieDetail = showModal(m);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetail;
}
//
function showCards(m) {
  return `<div class="col-md-4 my-5">
    <div class="card">
      <img src="${m.Poster}" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">${m.Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
        <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal"
        data-target="#movieDetaiModal" data-imdbid="${m.imdbID}">Show Detail</a>
      </div>
    </div>
  </div>`;
}

function showModal(m) {
  return `
           <div class="container-fluid">
           <div class="row">
             <div class="col-md-3">
               <img src="${m.Poster}" alt="" class="img-fluid" />
             </div>
             <div class="col-md">
               <ul class="list-group">
                 <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                 <li class="list-group-item">
                   <strong>Director : </strong> ${m.Director}
                 </li>
                 <li class="list-group-item">
                   <strong>Actor : </strong> ${m.Actors}
                 </li>
                 <li class="list-group-item">
                   <strong>Writer : </strong> ${m.Writer}
                 </li>
                 <li class="list-group-item">
                   <strong>Plot : </strong> <br> ${m.Plot}
                 </li>
               </ul>
             </div>
           </div>
         </div>
           `;
}

//async
const searchButtton = document.querySelector(".search-button");
const movieContainer = document.querySelector(".movie-container");
searchButtton.addEventListener("click", async function () {
  try {
    const inputKeyword = document.querySelector(".input-keyword");
    const movies = await getMovies(inputKeyword.value);

    updateUI(movies);
  } catch (err) {
    alert(err);
  }
});

function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=1590c1f1&s=" + keyword)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })

    .then((response) => {
      if (response.Response === "false") {
        throw new Error(response.Error);
      }
      return response.Search;
    });
}

function updateUI(movies) {
  let card = "";
  movies.forEach((m) => (card += showCards(m)));
  movieContainer.innerHTML = card;
}

// event binding
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-button")) {
    try {
      const imdbid = e.target.dataset.imdbid;
      const movieDetail = await getMovieDetail(imdbid);

      updateUIDetail(movieDetail);
    } catch (er) {
      alert(er);
    }
  }
});

function getMovieDetail(imdbid) {
  return fetch("http://www.omdbapi.com/?apikey=1590c1f1&i=" + imdbid)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((m) => {
      if (m.Response === "false") {
        throw new Error(m.Error);
      }
      return m;
    });
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

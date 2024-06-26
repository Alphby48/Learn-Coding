$(".search-button").on("click", function () {
  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=1590c1f1&s=" + $(".input-keyword").val(),
    success: (results) => {
      const movies = results.Search;
      let film = ``;
      movies.forEach((m) => {
        film += showCards(m);
      });
      $(".movie-container").html(film);
      $(".modal-detail-button").on("click", function () {
        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=1590c1f1&i=" +
            $(this).data("imdbid"),
          success: (m) => {
            const movieDetail = showModal(m);
            $(".modal-body").html(movieDetail);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

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

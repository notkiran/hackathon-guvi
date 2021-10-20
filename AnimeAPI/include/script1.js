document.body.innerHTML = `
<div class="row d-flex justify-content-center">
<div class="col-8 col-md-6 col-lg-5 col-xl-4 col-xxl-4 pg-title text-center fw-bolder mt-4 mb-2">Anime Page- Naruto
</div>
</div>
<section class="container">
<div class="row anime-page align-items-center justify-content-center gx-5">
    <p>HELLO</p>

</section>`;

async function getAnime() {
  const data = await fetch("https://api.jikan.moe/v3/search/anime?q=naruto", {
    method: "GET",
  });
  const allAnimes = await data.json();
  const animes = allAnimes.results;

  const animeContainer = document.querySelector(".anime-page");
  animeContainer.innerHTML = ``;

  animes.forEach((anime) => {
    var dateS = new Date(anime.start_date);
    var dateStart = dateS.toLocaleDateString();
    var dateE = new Date(anime.end_date);
    var dateEnd = dateE.toLocaleDateString();

    animeContainer.innerHTML += `
    <div class="col-12 col-md-8 col-lg-6 m-2 p-3 bg-light rounded justify-content-center align-items-center d-md-flex">
    <div class="col-12 col-md-6">
    <img src="${anime.image_url}"/>
    </div>
    <div class="col-12 col-md-6">
    <p>Title: <span>${anime.title}</span></p>
    <p>Type: <span>${anime.type}</span></p>
    <p>Start Date: <span>${dateStart}</span></p>
    <p>End Date: <span>${dateEnd}</span></p>
    <p>Epipsodes: <span>${anime.episodes}</span></p>
    <p>IMDB Rating: <span>${anime.score}<IMDB RAting:/span></p>
    <a href="${anime.url}" target="_blank" type="button" class="btn btn-primary">Details</a>
    </div>
    </div>
  `;
  });

  console.log(animes);
}
// <div class="row justify-content-center align-items-center m-4 p-3 bg-light d-md-flex rounded"></div>
getAnime();

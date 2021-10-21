document.body.innerHTML = `
<div class="row d-flex justify-content-center">
<div class="col-8 col-md-6 col-lg-5 col-xl-4 col-xxl-4 pg-title text-center fw-bolder mt-4 mb-2"><i class="fad fa-tv-retro"></i> Anime Page- Naruto
</div>
</div>
<section class="container">
<div class="row anime-page align-items-center justify-content-center gx-5">

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

<div
      class="
        col-12 col-md-8 col-lg-6
        m-2
        p-3
        rounded
        justify-content-center
        align-items-center
        d-md-flex
        flex-column
        anim-box
      "
    >
      <div class="row justify-content-center align-items-center d-flex">
        <div class="col-sm-12 fw-bold fs-3 d-flex justify-content-center align-items-center">
          <p>
            <i class="fad fa-play"></i> Title:
            <span class="animeTitle">${anime.title}</span>
          </p>
        </div>
      </div>
      <div class="row justify-content-center align-items-center d-flex">
        <div class="col-12 col-md-6 justify-content-center d-flex">
          <img src="${anime.image_url}" />
        </div>
        <div class="col-12 col-md-6">
          <div class="row justify-content-center d-flex t-c">
            <p>
              <i class="fas fa-camera-movie"></i>
              <span class="sub-title">Type: </span><span>${anime.type}</span>
            </p>
            <p>
              <i class="fad fa-calendar-check"></i>
              <span class="sub-title">Start Date: </span
              ><span>${dateStart}</span>
            </p>
            <p>
              <i class="fad fa-calendar-times"></i>
              <span class="sub-title">End Date: </span><span>${dateEnd}</span>
            </p>
            <p>
              <i class="fad fa-film"></i>
              <span class="sub-title">Episodes: </span
              ><span>${anime.episodes}</span>
            </p>
            <p>
              <i class="fad fa-registered"></i>
              <span class="sub-title">Rated: </span><span>${anime.rated}</span>
            </p>
            <p>
              <i class="fas fa-star-half-alt"></i>
              <span class="sub-title">IMDB Rating: </span
              ><span>${anime.score}<IMDB Score:</span>
            </p>
            <div class="d-grid d-md-block">
              <a
                href="${anime.url}"
                target="_blank"
                type="button"
                class="btn btn-primary"
                ><i class="fad fa-angle-double-right"></i> More Details
                <i class="fad fa-external-link"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  });

  console.log(animes);
}
// <div class="row justify-content-center align-items-center m-4 p-3 bg-light d-md-flex rounded"></div>
getAnime();

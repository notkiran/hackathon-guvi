document.body.innerHTML = `<h1>Anime Page- Naruto</h1>
<section class="anime-page"></section>`;

async function getAnime() {
  const data = await fetch("https://api.jikan.moe/v3/search/anime?q=naruto", {
    method: "GET",
  });
  const allAnimes = await data.json();
  const animes = allAnimes.results;

  const animeContainer = document.querySelector(".anime-page");
  animeContainer.innerHTML = "";

  animes.forEach((anime) => {
    var dateS = new Date(anime.start_date);
    var dateStart = dateS.toLocaleDateString();
    var dateE = new Date(anime.end_date);
    var dateEnd = dateE.toLocaleDateString();

    animeContainer.innerHTML += `
    <div class="anime-container">
    <img src="${anime.image_url}"/>
    <div>
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

getAnime();

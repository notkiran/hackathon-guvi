document.body.innerHTML = `<h1>Anime Page- Naruto</h1>
<section class="anime-page"></section>`;

async function getAnime() {
  const data = await fetch("https://api.jikan.moe/v3/search/anime?q=naruto", {
    method: "GET",
  });
  const allAnimes = await data.json();
  const animes = allAnimes.results;

  //   const animes = JSON.parse(anim);

  const animeContainer = document.querySelector(".anime-page");

  animeContainer.innerHTML = "";

  animes.forEach((anime) => {
    animeContainer.innerHTML += `
    <div>
    <img src="${anime.image_url}"/>
    <div>
    <p>Title: <span>${anime.title}</span></p>
    <p>Type: <span>${anime.type}</span></p>
    <p>${anime.url}</p>
    <p>Epipsodes: <span>${anime.episodes}</span></p>
    <p>IMDB Rating: <span>${anime.score}<IMDB RAting:/span></p>
    </div>
    </div>
  `;
  });

  console.log(animes);
}

getAnime();

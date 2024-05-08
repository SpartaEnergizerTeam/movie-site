import {getMovieData} from "./api.js";

const $container = document.querySelector('#searchMainContainer');

const loadMoviesAndDisplay = (movieTypeString, sectionName) => {
  const $wrapper = document.createElement('div');
  $wrapper.className = 'cards-section';
  const titleHtml = `<div class="cards-section-title">${sectionName}</div>`;

  getMovieData(movieTypeString)
    .then(({results}) => {
      const cardsHtml = results.map((movie) => {
        if (!movie.poster_path || !movie.backdrop_path) return;

        return `
          <li class="swiper-slide card-poster">
            <a href="./detail.html?movieId=${movie.id}">
              <div class="card-image-wrap">
                <img src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}"/>
              </div>
               <p class="contentsName">${movie.title}</p>
             </a>
          </li>
        `;
      }).join("");

      $wrapper.innerHTML = `
        ${titleHtml}
        <div class="swiper-container">
          <ul class="swiper-wrapper">
          ${cardsHtml}
          </ul>
        </div>
      `;
      $container.appendChild($wrapper);

      new Swiper('.swiper-container', {
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 10,
        freeMode: false,
        slidesPerGroup: 5,
        navigation: {
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        },
      });
    })
};

loadMoviesAndDisplay("upcoming", "개봉 예정 영화");
loadMoviesAndDisplay("popular", "인기 영화");

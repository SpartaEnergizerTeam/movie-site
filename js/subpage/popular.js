import { getMovieData } from "../api.js";

// 영화 api data 출력
const loadDetailsPopular = (movieTypeString) => {
  try {
    getMovieData(movieTypeString).then((movieData) => {
      const movies = movieData.results;

      const cardList = document.querySelector(`.cards-section`);

      const cardsHtml = movies
        .map((movie) => {
          return `<li class="card-poster">
          <a href="./detail.html?movieId=${movie.id}">
          <div class="card-image-wrap"><img class="card-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"/></div>
          </a>
          </li>`;
        })
        .join("");

      cardList.innerHTML = cardsHtml;
    });
  } catch (error) {
    console.error(
      "영화 데이터(${movieTypeString})를 불러오는 중 오류가 발생했습니다:",
      error
    );
  }
};

loadDetailsPopular("popular");

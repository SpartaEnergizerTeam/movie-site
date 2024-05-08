import { getMovieData } from "../api.js";

// 영화 api data 출력
const loadDetailsTop = (movieTypeString) => {
  try {
    getMovieData(movieTypeString).then((movieData) => {
      const movies = movieData.results;

      const cardList = document.querySelector(`.list-view-detail`);

      const cardsHtml = movies
        .map((movie) => {
          // const ratedNumberHtml =
          //   movieTypeString === "top"
          //     ? `<img class="rated-number" src="./img/main/rate-num/${
          //         index + 1
          //       }.png" alt="rated-num ${index + 1}"/>`
          //     : "";
          return `<li class="card-poster">
          <div class="card-image-wrap"><img class="card-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"/></div>
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

loadDetailsTop("top");
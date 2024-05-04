// 슬라이드 배너 함수

function SliderBox1__init() {
  const swiper = new Swiper("#main-banner", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: "#main-banner .swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: "#main-banner .swiper-next",
      prevEl: "#main-banner .swiper-prev",
    },
  });
}

SliderBox1__init();

// 영화 api data 출력

import { getMovieData } from "./api.js";

const loadMoviesAndDisplay = async () => {
  try {
    const movieData = await getMovieData("top");
    const movies = movieData.results;

    const cardList = document.querySelector("#cards");
    cardList.innerHTML = "";

    const cardsHtml = movies
      .map(
        (movie) =>
          `<li class="card-poster" id=${movie.id}>
          <img class="card-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"/>
         </li>`
      )
      .join("");

    cardList.innerHTML = cardsHtml;
  } catch (error) {
    console.error("영화 데이터를 불러오는 중 오류가 발생했습니다:", error);
  }
};

loadMoviesAndDisplay();

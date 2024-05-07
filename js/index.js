import { getMovieData } from "./api.js";

const mainImgSwiper = async (movieTypeString) => {
  try {
    const movieData = await getMovieData(movieTypeString);
    const movies = movieData.results.slice(0, 5); // 5개의 이미지만 롤링되도록 합니다

    const swiperWrapper = document.querySelector("#main-slider");

    movies.forEach((movie) => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";
      slide.innerHTML = `<img src="https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}" class="big-banner"/>`;
      swiperWrapper.appendChild(slide);
    });

    new Swiper("#main-banner", {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      centeredSlides: true,
      pagination: {
        el: ".main-nav .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
      disableOnInteraction: false,
      on: {
        init: function () {
          this.slideToLoop(0, 5); // 첫 번째 슬라이드로 이동
        },
      },
      autoplay: {
        delay: 3500, // 3.5초마다 자동 재생
      },
    });
  } catch (error) {
    console.error(
      `영화 데이터(${movieTypeString})를 불러오는 중 오류가 발생했습니다:`,
      error
    );
  }
};

mainImgSwiper("popular");

// 영화 api data 출력
const loadMoviesAndDisplay = async (movieTypeString) => {
  try {
    const movieData = await getMovieData(movieTypeString);
    const movies = movieData.results;

    const cardList = document.querySelector(`#cards-${movieTypeString}`);

    const cardsHtml = movies
      .map((movie) => {
        return `<li class="card-poster swiper-slide" id=${movie.id}>
          <img class="card-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"/>
          </li>`;
      })
      .join("");

    cardList.innerHTML = cardsHtml;
  } catch (error) {
    console.error(
      "영화 데이터(${movieTypeString})를 불러오는 중 오류가 발생했습니다:",
      error
    );
  }
};

loadMoviesAndDisplay("top");
loadMoviesAndDisplay("playing");
loadMoviesAndDisplay("upcoming");
loadMoviesAndDisplay("popular");

// 영화리스트 스크롤

function movieScroll() {
  new Swiper(`#card-carousel`, {
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
}

movieScroll();

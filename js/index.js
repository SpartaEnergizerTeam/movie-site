import { getMovieData } from "./api.js";

const mainImgSwiper = (movieTypeString) => {
  try {
    getMovieData(movieTypeString)
      .then(movieData => {
        const movies = movieData.results.slice(0, 5); // 5개의 이미지만 롤링되도록 합니다

        const swiperWrapper = document.querySelector("#main-slider");

        movies.forEach((movie) => {
          const slide = document.createElement("div");
          slide.className = "swiper-slide";
          slide.innerHTML = ` <div class="slide-img-container">
      <title class="main-title">${movie.title}</title>
      <img src="https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}" class="big-banner"/>
      </div>`;
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
      })
  } catch (error) {
    console.error(
      `영화 데이터(${movieTypeString})를 불러오는 중 오류가 발생했습니다:`,
      error
    );
  }
};

mainImgSwiper("popular");

// 영화 api data 출력
const loadMoviesAndDisplay = (movieTypeString) => {
  try {
    getMovieData(movieTypeString)
      .then(movieData => {
        const movies = movieData.results;

        const cardList = document.querySelector(`#cards-${movieTypeString}`);

        const cardsHtml = movies
          .map((movie, index) => {
            const ratedNumberHtml =
              movieTypeString === "top"
                ? `<img class="rated-number" src="./img/main/rate-num/${
                  index + 1
                }.png" alt="rated-num ${index + 1}"/>`
                : "";
            return `
              <li class="card-poster swiper-slide" id=${movie.id}>
                <a href="./detail.html?movieId=${movie.id}">
                  ${ratedNumberHtml} <!-- 여기에 순위 이미지 코드를 추가합니다. -->
                  <div class="card-image-wrap">
                      <img class="card-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"/>
                  </div>
                </a>
              </li>`;
          })
          .join("");

        cardList.innerHTML = cardsHtml;
      })
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
  new Swiper(`.cards-section .card-carousel`, {
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

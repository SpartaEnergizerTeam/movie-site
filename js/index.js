import { getMovieData } from "./api.js";

// 슬라이드 배너 함수
// 3번 이미지부터 뜨는 것, 옆 이미지가 안뜨는 것 해결해야함 //

function SliderBox1__init() {
  new Swiper("#main-banner", {
    loop: true, //반복재생
    slidesPerView: "auto", // 슬라이드 갯수 조정 (지금은 css로 맞춰두었기 때문에  auto로 함)
    spaceBetween: 20, // 다른 슬라이드와의 간격
    centeredSlides: true, // 가운데 중심의 슬라이드
    autoplay: {
      delay: 3000, // 3초마다 자동 재생
    },
    disableOnInteraction: false, // 사람이 넘겨도 멈추지 않고 다시 자동재생 유지
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
document.addEventListener("DOMContentLoaded", function () {
  movieScroll();
});

function movieScroll() {
  new Swiper(`#card-carousel`, {
    slidesPerView: 5,
    paginationClickable: true,
    spaceBetween: 5,
    freeMode: false,
    slidesPerGroup: 5,
  });
}

movieScroll();

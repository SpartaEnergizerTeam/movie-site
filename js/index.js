import { getMovieData } from "./api.js";

// 슬라이드 배너 함수
function SliderBox1__init() {
  new Swiper("#main-banner", {
    loop: true, //반복재생
    slidesPerView: 'auto', // 슬라이드 갯수 조정 (지금은 css로 맞춰두었기 때문에  auto로 함)
    spaceBetween: 20, // 다른 슬라이드와의 간격
    centeredSlides: true, // 가운데 중심의 슬라이드
    autoplay: {
      delay: 5000, // 5초마다 자동 재생
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
const loadMoviesAndDisplay = async () => {
  try {
    const movieData = await getMovieData("top");
    const movies = movieData.results;

    const cardList = document.querySelector("#cards");

    const cardsHtml = movies
      .map((movie) => {
          return `<li class="card-poster" id=${movie.id}>
          <img class="card-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"/>
         </li>`
        })
      .join("");

    cardList.innerHTML = cardsHtml;
  } catch (error) {
    console.error("영화 데이터를 불러오는 중 오류가 발생했습니다:", error);
  }
};

loadMoviesAndDisplay();

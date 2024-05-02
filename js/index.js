const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGU1NjY2Yjk0Yjc1NDg1ZTJmM2QxZDQxZWE2NGMyMCIsInN1YiI6IjY2Mjg2OTdmMjIxYmE2MDE3YzE3ZTIwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.di8q-a-oZSQzN9BfpzUocwn5_lxuO_GwsBB2Ga-pxAg",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

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
      nextEl: "#main-banner .swiper-button-next",
      prevEl: "#main-banner .swiper-button-prev",
    },
  });
}

SliderBox1__init();

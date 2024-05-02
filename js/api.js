// 옵션
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTQ5MzRmNzg4ZjRlYzI1NmViY2RlYzcyNzVhMDdlZCIsInN1YiI6IjY2MjdhNGMyNjJmMzM1MDE2NGQ5ZDU0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UrmYmAFfVZN-YSlLPyTfP10QreSXWz1VYKRQeak1yxU",
  },
};

const urlAddress = {
  playing: "https://api.themoviedb.org/3/movie/now_playing?language=ko&page=2",
  popular: "https://api.themoviedb.org/3/movie/popular?language=ko&page=1",
  top: "https://api.themoviedb.org/3/movie/top_rated?language=ko&page=3",
  upcoming: "https://api.themoviedb.org/3/movie/upcoming?language=ko&page=4",
};
// 아래의 함수는 위의 urlAddress 안에서 하나씩 url 꺼내서 사용하시면 됩니다.
export const getData = async (url) => {
  const response = await fetch(url, options);
  const data = await response.json(response);
  return data;
};

// 영화를 한글 키워드로 검색을 할 수 있습니다.
export const getMovieWithKeywords = async (keywords) => {
  const urlString = changeKorToUrl(keywords);

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${urlString}&include_adult=false&language=ko&page=1`,
    options
  );
  const data = await response.json(response);
  return data;
};

// 무비 id를 입력하면 영화 디테일 정보를 가져옵니다.
export const getMovieDetail = async (movie_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?language=ko`;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

// 무비 id를 입력하면 영화 이미지들을 가져옵니다.
export const getMovieImages = async (movie_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/images`;
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

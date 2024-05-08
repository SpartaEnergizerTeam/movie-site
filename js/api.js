const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTQ5MzRmNzg4ZjRlYzI1NmViY2RlYzcyNzVhMDdlZCIsInN1YiI6IjY2MjdhNGMyNjJmMzM1MDE2NGQ5ZDU0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UrmYmAFfVZN-YSlLPyTfP10QreSXWz1VYKRQeak1yxU",
  },
};
const defaultUrl = "https://api.themoviedb.org/3/";

// playing, popular, top, upcoming 중 하나를 movieTypeString의 인자로 넣으면 됩니다.
export const getMovieData = async (movieTypeString, pageNum = 1) => {
  let url = "";
  switch (movieTypeString) {
    case "playing":
      url = `${defaultUrl}movie/now_playing?language=ko&page=${pageNum}`;
      break;
    case "popular":
      url = `${defaultUrl}movie/popular?language=ko&page=${pageNum}"`;
      break;
    case "top":
      url = `${defaultUrl}movie/top_rated?language=ko&page=${pageNum}`;
      break;
    case "upcoming":
      url = `${defaultUrl}movie/upcoming?language=ko&page=${pageNum}`;
      break;
  }
  const response = await fetch(url, options);
  return await response.json();
};

// 영화를 한글 키워드로 검색을 할 수 있습니다.
export const getMovieWithKeywords = async (keywords) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${keywords}&include_adult=false&language=ko&page=1`,
    options
  );
  return await response.json();
};

// 무비 id를 입력하면 영화 디테일 정보를 가져옵니다.
export const getMovieDetail = async (movie_id) => {
  const url = `${defaultUrl}movie/${movie_id}?language=ko`;
  const response = await fetch(url, options);
  return await response.json();
};

// 무비 id를 입력하면 영화 이미지들을 가져옵니다.
export const getMovieImages = async (movie_id) => {
  const url = `${defaultUrl}${movie_id}/images`;
  const response = await fetch(url, options);
  return await response.json();
};

// 무비 id를 입력하면 영화 영상들을 유튜브로 가져옵니다.
// 유튜브 url을 리턴하는 함수로 없으면 빈배열을 리턴합니다.
export const getMovieVideos = async (movie_id) => {
  const url = `${defaultUrl}movie/${movie_id}/videos?language=ko`;
  const response = await fetch(url, options);
  const data = await response.json();

  // 하나라도 있으면?
  if (data.results.length !== 0) {
    const videoList = data.results.map((value) => {
      return `https://www.youtube.com/watch?v=${value.key}`;
    });
    return videoList;
  }
  return [];
};

import {getMovieDetail} from './api.js';

//getMovieDetail('1096197').then((response) => {
//  const dsd = document.querySelector('.logo-box');
//  dsd.textContent = response.title;
//  const genre = document.querySelector('.dot-item');
//  genre.textContent =response.genres(name);
//});

getMovieDetail('1094844').then((response) => {
  // 영화 제목 설정
  const titleElement = document.querySelector('.logo-box');
  titleElement.textContent = response.title;

  // 장르 정보 설정
  const genreContainer = document.querySelector('.dot-item');
  genreContainer.innerHTML = '';
  response.genres.forEach((genre, index) => {
    const genreElement = document.createElement('span');
    genreElement.textContent = genre.name;
    genreContainer.appendChild(genreElement);
    if (index < response.genres.length - 1) {
      const space = document.createTextNode(' ');
      genreContainer.appendChild(space);
    }
  });

  // 이미지 설정
  const imageBox = document.querySelector('.video-detail .image-box img');
  const thumbImg = document.querySelector('.thumb-img');
  if (response.poster_path) {
    const posterUrl = `https://image.tmdb.org/t/p/original${response.poster_path}`;
    imageBox.src = posterUrl;
    thumbImg.src = posterUrl;
  }

  // 개요 설정
  const overviewElement = document.querySelector('.detail-info-box .content-clamp .text');
  overviewElement.textContent = response.overview;

  // preview-title 설정
  const previewTitleElement = document.querySelector('.preview-title');
  previewTitleElement.textContent = response.title;

  // preview-dsc 설정
  const previewDscElement = document.querySelector('.preview-dsc');
  previewDscElement.textContent = response.overview;

  // detail-dsc 설정
  const detailDscElement = document.querySelector('.detail-dsc');
  detailDscElement.textContent = response.overview;

  // Production Companies 설정
  const productionCompaniesElement = document.querySelector('.detail-info-table tbody tr:nth-child(1) td');
  productionCompaniesElement.textContent = response.production_companies.map(company => company.name).join(', ');

  // 장르 정보 설정
  const genres = response.genres.map(genre => genre.name).join(' ');
  const genreRow = document.querySelector('.detail-info-table tbody tr:nth-child(2) td');
  genreRow.innerHTML = `<a class="genre">${genres}</a>`;
});
//////////영화 인물 감독 ////////////
//1.인물 api. 상단4명만 출력할것

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDQ1MzFmMGRkOGY3NmY2NDE2NWEwNzU4MDQ1M2QzOSIsInN1YiI6IjY2MmIyMzQ5NzY0ODQxMDExZDJjMzFkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bNR43UvxNhyv-aUuh3xtx44tXz-IjayN-QrgO-ATUMA'
  }
};

fetch('https://api.themoviedb.org/3/movie/1094844/credits?language=en-US', options)
  .then(response => response.json())
  .then(response => {
    // API에서 가져온 출연진 정보
    const actors = response.cast.slice(0, 4); // 배열의 처음 4개 요소만 선택

    // preview-dsc에 있는 요소를 찾아서 출연진 정보를 추가합니다.
    const actorListElement = document.querySelector('.content-actor-list');
    actorListElement.innerHTML = ''; // 기존의 내용 초기화

    // 출연진 정보를 추가합니다.
    actors.forEach((actor, index) => {
      const actorElement = document.createElement('span');
      actorElement.classList.add('content-actor-list');
      actorElement.innerHTML = `<a>${actor.name}</a>`;
      actorListElement.appendChild(actorElement);

      // 마지막 요소가 아닐 경우에만 쉼표를 추가합니다.
      if (index < actors.length - 1) {
        const comma = document.createTextNode(', ');
        actorListElement.appendChild(comma);
      }
    });

    // 출연진 정보를 detail-info-table에 추가합니다.
    const genreRow = document.querySelector('.detail-info-table tbody tr:nth-child(3) td');
    genreRow.innerHTML = '';
    actors.forEach((actor, index) => {
      const actorElement = document.createElement('a');
      actorElement.classList.add('genre');
      actorElement.textContent = actor.name;
      genreRow.appendChild(actorElement);

      // 마지막 요소가 아닐 경우에만 쉼표를 추가합니다.
      if (index < actors.length - 1) {
        const comma = document.createTextNode(', ');
        genreRow.appendChild(comma);
      }
    });
  })
  .catch(err => console.error(err));
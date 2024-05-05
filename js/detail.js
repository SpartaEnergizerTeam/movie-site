import {getMovieDetail} from './api.js';

//getMovieDetail('1096197').then((response) => {
//  const dsd = document.querySelector('.logo-box');
//  dsd.textContent = response.title;
//  const genre = document.querySelector('.dot-item');
//  genre.textContent =response.genres(name);
//});

getMovieDetail('1096197').then((response) => {
  const titleElement = document.querySelector('.logo-box');
  titleElement.textContent = response.title;

  const genreContainer = document.querySelector('.dot-item');
  
  // 기존에 있던 내용을 지워주고 새로운 장르 정보를 넣기 위해 초기화
  genreContainer.innerHTML = '';

  // 장르 정보를 순회하면서 각각의 장르를 화면에 추가
  response.genres.forEach((genre, index) => {
    const genreElement = document.createElement('span');
    genreElement.textContent = genre.name;
    genreContainer.appendChild(genreElement);

    // 마지막 요소가 아닐 경우에만 스페이스 추가
    if (index < response.genres.length - 1) {
      const space = document.createTextNode(' ');
      genreContainer.appendChild(space);
    }
  });
});

getMovieDetail('1096197').then((response) => {
  // 이미지 소스를 설정할 요소들을 선택합니다.
  const imageBox = document.querySelector('.video-detail .image-box img');
  const thumbImg = document.querySelector('.thumb-img');

  // API에서 가져온 poster_path를 이미지 소스로 설정합니다.
  if (response.poster_path) {
    const posterUrl = `https://image.tmdb.org/t/p/original${response.poster_path}`;
    imageBox.src = posterUrl;
    thumbImg.src = posterUrl;
  }
});

getMovieDetail('1096197').then((response) => {
  const overviewElement = document.querySelector('.detail-info-box .content-clamp .text');
  overviewElement.textContent = response.overview;
});
getMovieDetail('1096197').then((response) => {
  const titleElement = document.querySelector('.preview-title');
  titleElement.textContent = response.title;
});
getMovieDetail('1105407').then((response) => {
  const taglineElement = document.querySelector('.preview-dsc');
  console.log(response);
  taglineElement.textContent = response.overview;
});

document.addEventListener('DOMContentLoaded', function() {
  getMovieDetail('1096197').then((response) => {
      // overview 설정
      const overviewElement = document.querySelector('.detail-dsc');
      overviewElement.textContent = response.overview;
  });
});

document.addEventListener('DOMContentLoaded', function() {
  getMovieDetail('1096197').then((response) => {
      // production_companies 설정
      const productionCompaniesElement = document.querySelector('.detail-info-table tbody tr:nth-child(1) td');
      productionCompaniesElement.textContent = response.production_companies.map(company => company.name).join(', ');
  });
});


document.addEventListener('DOMContentLoaded', function() {
  getMovieDetail('1096197').then((response) => {
      // 장르 정보를 가져와서 '#'을 추가한 뒤 genres 값과 스페이스를 포함하여 문자열로 결합
      const genres = response.genres.map(genre => genre.name).join(' ');

      // dot-item 클래스를 가진 요소 선택
      const dotItemElement = document.querySelector('.dot-item');
      // dot-item 요소 안에 span 요소들을 새로 만들어서 장르 정보를 삽입
      response.genres.forEach(genre => {
          const spanElement = document.createElement('span');
          spanElement.textContent = genre.name;
          dotItemElement.appendChild(spanElement);
      });

      // detail-info-table 클래스를 가진 요소 선택
      const detailInfoTableElement = document.querySelector('.detail-info-table tbody');
      // 출연진 및 기타 정보 테이블의 장르 정보 부분에 장르 정보 삽입
      const genreRow = detailInfoTableElement.querySelector('tr:nth-child(2) td');
      genreRow.innerHTML = `<a class="genre">${genres}</a>`;

  });
});
//////////영화 인물 감독 ////////////


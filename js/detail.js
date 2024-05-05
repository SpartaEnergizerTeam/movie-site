import {getMovieDetail} from './api.js';

//getMovieDetail('1096197').then((response) => {
//  const dsd = document.querySelector('.logo-box');
//  dsd.textContent = response.title;
//  const genre = document.querySelector('.dot-item');
//  genre.textContent =response.genres(name);
//});

getMovieDetail('1096197').then((response) => {
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


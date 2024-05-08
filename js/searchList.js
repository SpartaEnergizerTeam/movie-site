import getUrlParamValue from "./utils/getUrlParamValue.js";
import {getMovieWithKeywords} from "./api.js";

const $searchResultSection = document.querySelector('#searchResultSection');

const searchKeyword = getUrlParamValue('query');
const searchKeywordKor = decodeURIComponent(searchKeyword);

getMovieWithKeywords(searchKeyword).then(({results}) => {
  if (results.length === 0) {
    const $div = document.createElement('div');
    $div.className = 'no-result-box';
    $div.innerHTML = `
      <img src="./img/common/icon-alert.svg" alt="" />
      <p class="search-empty-text">
          '<span class="error-word">${searchKeywordKor}</span>' 검색결과가 없어요.<br/>다시 한 번 확인해주세요
      </p>
    `;
    $searchResultSection.appendChild($div);
    return;
  }

  const $ul = document.createElement('ul');
  $ul.className = 'cards-section';

  $ul.innerHTML = results.map((movie) => {
    if (!movie.poster_path || !movie.backdrop_path) return;

    return `
      <li class="card-poster">
        <a href="./detail.html?movieId=${movie.id}">
          <div class="card-image-wrap">
            <img class="card-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"/>
          </div>
          <p>${movie.title}</p>
        </a>
      </li>
    `}).join('');

  $searchResultSection.appendChild($ul);
});

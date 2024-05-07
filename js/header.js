import getUrlParamValue from "./utils/getUrlParamValue.js";
import {getMovieWithKeywords} from "./api.js";

const $searchForm = document.querySelector('#searchContainer');
const $searchInput = document.querySelector('#searchInput');
const $searchResultSection = document.querySelector('#searchResultSection');

document.querySelector('#searchDeleteBtn').addEventListener('click', () => {
  $searchInput.value = '';
  $searchInput.focus();
});

$searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  window.location.href = `./search-result.html?query=${encodeURIComponent($searchInput.value)}`;
});

const value = decodeURIComponent(getUrlParamValue('query'));
$searchInput.value = value;

getMovieWithKeywords(value).then(({results}) => {
  const a = document.createElement('ul');
  a.className = 'cards-section';
  a.innerHTML = results.map((movie) => {
    if (!movie.poster_path || !movie.backdrop_path) return;

    return `
      <li class="card-poster">
        <a href="./detail.html?movieId=${movie.id}">
          <div class="card-image-wrap">
            <img class="card-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"/>
          </div>
        </a>
      </li>
    `}).join('');

  $searchResultSection.appendChild(a);
});

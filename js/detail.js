import {getMovieDetail} from './api.js';

getMovieDetail('1096197').then((response) => {
  const dsd = document.querySelector('.logo-box');
  dsd.textContent = response.title;
});
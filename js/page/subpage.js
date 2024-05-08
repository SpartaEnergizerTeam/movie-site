import renderMovieDisplay from "../renderMovieDisplay.js";

const $nowPlayingPage = document.querySelector("#nowPlayingPage");
const $popularPage = document.querySelector("#popularPage");
const $upcomingPage = document.querySelector("#upcomingPage");
const $topPage = document.querySelector("#topPage");

if ($nowPlayingPage) {
  renderMovieDisplay("playing", ".cards-section");
}
if ($popularPage) {
  renderMovieDisplay("popular", ".cards-section");
}
if ($upcomingPage) {
  renderMovieDisplay("upcoming", ".cards-section");
}
if ($topPage) {
  renderMovieDisplay("top", ".cards-section");
}

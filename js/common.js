import getUrlParamValue from "./utils/getUrlParamValue.js";

const $searchForm = document.querySelector('#searchContainer');
const $searchInput = document.querySelector('#searchInput');
const $searchResetBtn = document.querySelector('#searchDeleteBtn');

if ($searchResetBtn) {
  $searchResetBtn.addEventListener('click', () => {
    $searchInput.value = '';
    $searchInput.focus();
  });
}

if ($searchForm) {
  $searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!$searchInput.value) return window.alert('검색어를 입력해주세요');

    window.location.href = `./search-result.html?query=${encodeURIComponent($searchInput.value)}`;
  });
}

const value = decodeURIComponent(getUrlParamValue('query'));
if (value) {
  $searchInput.value = value;
}

const themeButton = document.querySelector('#themeBtn');

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

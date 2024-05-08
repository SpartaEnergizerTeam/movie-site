import getUrlParamValue from "./utils/getUrlParamValue.js";

const $searchForm = document.querySelector('#searchContainer');
const $searchInput = document.querySelector('#searchInput');

document.querySelector('#searchDeleteBtn').addEventListener('click', () => {
  $searchInput.value = '';
  $searchInput.focus();
});

$searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!$searchInput.value) return window.alert('검색어를 입력해주세요');

  window.location.href = `./search-result.html?query=${encodeURIComponent($searchInput.value)}`;
});

const value = decodeURIComponent(getUrlParamValue('query'));
$searchInput.value = value;
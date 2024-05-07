const $searchInput = document.querySelector('#searchInput');

document.querySelector('#searchDeleteBtn').addEventListener('click', () => {
  $searchInput.value = '';
  $searchInput.focus();
});
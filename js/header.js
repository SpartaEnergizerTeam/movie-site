import getUrlParamValue from "./utils/getUrlParamValue.js";
import {getLocalStorage, setLocalStorage} from "./utils/localStorage.js";

const header = () => {
  const handleSearch = () => {
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

        window.location.href = `../page/search-result.html?query=${encodeURIComponent($searchInput.value)}`;
      });
    }

    const value = decodeURIComponent(getUrlParamValue('query'));
    if (value) {
      $searchInput.value = value;
    }
  };

  const themeHandler = () => {
    const themeButton = document.querySelector('#themeBtn');
    const rootElement = document.querySelector(':root');

    if (themeButton) {
      themeButton.addEventListener('click', () => {
        const lightMode = rootElement.dataset.theme;
        rootElement.dataset.theme = lightMode ? '' : 'light-mode';
        setLocalStorage('theme-mode', lightMode ? '' : 'light-mode');
      });
    }
  };

  handleSearch();
  themeHandler();
}

export default header;
const themeMode = localStorage.getItem('theme-mode');

if (themeMode === 'light-mode') {
  document.querySelector(':root').dataset.theme = 'light-mode';
}
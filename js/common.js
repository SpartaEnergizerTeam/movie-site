import header from "./header.js";
import footer from "./footer.js";

const notOpenPageHandler = () => {
  const elements = document.querySelectorAll('.not-open-link');
  if (elements.length !== 0) {
    const noAllowPage = () => {
      window.alert('작업하지 않은 곳이에요, 다른 서비스를 이용해주세요.');
    }

    elements.forEach((element) => {
      element.addEventListener('click', noAllowPage);
    });
  }
};

notOpenPageHandler();
header();
footer();
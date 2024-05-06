import {addReviewToLocalStorage} from "./utils.js";
import {isValidReviewValues} from "./isValidReviewValues.js";
import {getUserInformation, notifyAndReload} from "../utils.js";

const writeReviewHandler = () => {
  const form = document.querySelector('#writeReviewForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const $rate = this.querySelector('#commentRateBox');
    const $comment = this.querySelector('#comment');

    const {username, imageUrl} = getUserInformation();

    const values = {
      rate: $rate.dataset.rate,
      comment: $comment.value,
      name: username,
      thumbnail: imageUrl
    };

    const isValid = isValidReviewValues(values);
    if (!isValid) return;

    addReviewToLocalStorage(values);
    notifyAndReload('작성이 완료되었어요');
  });
};

export default writeReviewHandler;
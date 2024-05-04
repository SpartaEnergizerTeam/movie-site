import addReviewToLocalStorage from "./addReviewToLocalStorage.js";
import isValidReviewValues from "./isValidReviewValues.js";
import {getUserInformation} from "../utils.js";

const reviewFormSubmitHandler = () => {
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

    window.location.reload();
  });
};

export default reviewFormSubmitHandler;
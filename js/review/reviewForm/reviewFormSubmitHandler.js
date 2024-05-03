import submitReview from "./submitReview.js";
import isValidReviewValues from "./isValidReviewValues.js";

const reviewFormSubmitHandler = () => {
  const form = document.querySelector('#writeReviewForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const $rate = this.querySelector('#commentRateBox');
    const $rateFillBox = this.querySelector('#fillRateBox');
    const $comment = this.querySelector('#comment');
    const $name = this.querySelector('#name');

    const values = {
      rate: $rate.dataset.rate,
      comment: $comment.value,
      name: $name.value
    };

    const isValid = isValidReviewValues(values);
    if (!isValid) return;

    submitReview(values);

    $rate.dataset.rate = '';
    $rateFillBox.style.width = '0%';
    $comment.value = '';
    $name.value = '';
    window.location.reload();
  });
};

export default reviewFormSubmitHandler;
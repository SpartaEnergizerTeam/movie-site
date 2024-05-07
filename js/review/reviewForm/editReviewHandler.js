import {getMovieReviewFromIndex, updateMovieReview} from "./utils.js";
import {isValidPassword, isValidReviewValues} from "./isValidReviewValues.js";
import {getUserInformation, notifyAndReload} from "../utils.js";
import useModal from "./useModal.js";
import starRatingHandler from "./starRatingHandler.js";

const MODAL_CONTENT = `
  <div class="rate-container big">
      <div class="rate-box gray">
          <span class="star-fill"></span>
          <span class="star-fill"></span>
          <span class="star-fill"></span>
          <span class="star-fill"></span>
          <span class="star-fill"></span>
      </div>
      <div class="fill-rate-box rate-box">
          <span class="star-fill"></span>
          <span class="star-fill"></span>
          <span class="star-fill"></span>
          <span class="star-fill"></span>
          <span class="star-fill"></span>
      </div>
  </div>
  <input class="text-input" type="password" placeholder="비밀번호를 입력해주세요" autocomplete="off"/>
  <div class="comment-wrap">
      <textarea class="comment" placeholder="내용을 입력해주세요" maxlength="300"></textarea>
  </div>
`;

const editReviewHandler = () => {
  const onClick = (event) => {
    const index = parseInt(event.target.closest('.comment-util').dataset.index);
    const review = getMovieReviewFromIndex(index);

    const modal = useModal({
      name: 'editPopup',
      title: '수정하실 내용을 적어주세요',
      innerHtmlText: MODAL_CONTENT,
      buttonText: '수정하기',
      onSubmit: () => onSubmit({modal, index})
    });

    starRatingHandler('#editPopup .rate-box');

    const $comment = modal.querySelector('.comment');
    const $rateContainer = modal.querySelector('.fill-rate-box');
    $comment.value = review.comment;
    $rateContainer.style.width = `${review.rate / 0.05}%`;
    $rateContainer.parentNode.dataset.rate = review.rate;
  }

  document.querySelectorAll('.comment-util .edit-btn')
    .forEach(btn => btn.addEventListener('click', onClick));

  const onSubmit = ({ modal, index }) => {
    const $rate = modal.querySelector('.rate-container');
    const $password = modal.querySelector('input[type=password]');
    const $comment = modal.querySelector('.comment');
    const {username, imageUrl} = getUserInformation();

    const values = {
      rate: $rate.dataset.rate,
      comment: $comment.value,
      name: username,
      thumbnail: imageUrl
    };

    const isValidPw = isValidPassword($password.value);
    if (!isValidPw) return;

    const isValidDefaultForm = isValidReviewValues(values);
    if (!isValidDefaultForm) return;

    updateMovieReview({index, values});
    notifyAndReload('수정이 완료되었어요');
  }
};

export default editReviewHandler;
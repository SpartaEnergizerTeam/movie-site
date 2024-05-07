import {addReviewToLocalStorage} from "./utils.js";
import {isValidRate, isValidReviewValues} from "./isValidReviewValues.js";
import {getUserInformation, notifyAndReload} from "../utils.js";
import useModal from "./useModal.js";

const MODAL_CONTENT = `
  <div class="comment-wrap">
      <textarea class="comment" placeholder="내용을 입력해주세요" maxlength="300"></textarea>
  </div>
`;

const writeReviewHandler = () => {
  const openReviewButton = document.querySelector('#openWriteReviewBtn');
  const $rate = document.querySelector('.write-button-container .rate-container');

  openReviewButton.addEventListener('click', () => {
    const isValid = isValidRate($rate.dataset.rate);
    if (!isValid) return;

    const modal = useModal({
      name: 'writePopup',
      title: '감상평을 남겨주세요',
      innerHtmlText: MODAL_CONTENT,
      buttonText: '평가하기',
      onSubmit: () => onSubmit({modal})
    });
  });

  const onSubmit = ({ modal }) => {
    const $comment = modal.querySelector('.comment');
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
  }
};

export default writeReviewHandler;
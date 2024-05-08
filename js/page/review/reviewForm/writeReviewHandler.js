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
    const {username, imageUrl} = getUserInformation();

    if (!username) {
      window.alert('먼저 프로필을 설정하신 뒤에 작성해주세요');
      window.location.href = '../page/profile.html';
      return;
    }

    const isValid = isValidRate($rate.dataset.rate);
    if (!isValid) return;

    const modal = useModal({
      name: 'writePopup',
      title: '감상평을 남겨주세요',
      innerHtmlText: MODAL_CONTENT,
      buttonText: '평가하기',
      onSubmit: () => onSubmit({modal, username, imageUrl})
    });
  });

  const onSubmit = ({ modal, username, imageUrl }) => {
    const $comment = modal.querySelector('.comment');

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
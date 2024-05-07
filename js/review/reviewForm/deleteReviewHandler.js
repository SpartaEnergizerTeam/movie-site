import {deleteReviewToLocalStorage} from "./utils.js";
import {isValidPassword} from "./isValidReviewValues.js";
import {notifyAndReload} from "../utils.js";
import useModal from "./useModal.js";

const POPUP_NAME = 'popup';

const MODAL_CONTENT = `
  <input class="text-input" type="password" placeholder="비밀번호를 입력해주세요" autocomplete="off"/>
`;

const deleteReviewHandler = () => {
  const onClick = (event) => {
    const index = parseInt(event.target.closest('.comment-util').dataset.index);

    const modal = useModal({
      name: POPUP_NAME,
      title: '삭제하시겠어요?',
      buttonText: '삭제하기',
      innerHtmlText: MODAL_CONTENT,
      onSubmit: () => onSubmit({passwordInput, index})
    });

    const passwordInput = modal.querySelector('input[type=password]');
  };

  document.querySelectorAll('.comment-util .delete-btn')
    .forEach(btn => btn.addEventListener('click', onClick));
};

const onSubmit = ({passwordInput, index}) => {
  const isValid = isValidPassword(passwordInput.value);
  if (!isValid) return;

  deleteReviewToLocalStorage(index);
  notifyAndReload('삭제가 완료되었어요');
};

export default deleteReviewHandler;
import {deleteReviewToLocalStorage} from "./utils.js";
import {isValidPassword} from "./isValidReviewValues.js";
import {notifyAndReload} from "../utils.js";
import useDeleteModal from "./useDeleteModal.js";

const POPUP_NAME = 'popup';

const deleteReviewHandler = () => {
  const onClick = (event) => {
    const popup = document.getElementById(POPUP_NAME);
    if (popup) return;

    const index = parseInt(event.target.closest('.comment-util').dataset.index);

    const modal = useDeleteModal({
      name: POPUP_NAME,
      onSubmit: () => onSubmit({passwordInput, index})
    });

    const passwordInput = modal.querySelector('.text-input[type=password]');

    document.getElementById('reviewContainer').appendChild(modal);
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
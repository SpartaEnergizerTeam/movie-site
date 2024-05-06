import {deleteReviewToLocalStorage} from "./utils.js";
import {isValidPassword} from "./isValidReviewValues.js";
import {notifyAndReload} from "../utils.js";
import useDeleteModal from "./useDeleteModal.js";

const deleteReviewHandler = () => {
  const handleButtonClick = (event) => {
    const index = parseInt(event.target.closest('.comment-util').dataset.index);

    const modal = useDeleteModal({
      name: 'popup',
      onSubmit: () => onSubmit({passwordInput, index})
    });

    const passwordInput = modal.querySelector('.text-input[type=password]');
    passwordInput.focus();

    document.getElementById('reviewContainer').appendChild(modal);
  };

  document.querySelectorAll('.comment-util .delete-btn')
    .forEach(btn => btn.addEventListener('click', handleButtonClick));
};

const onSubmit = ({passwordInput, index}) => {
  const isValid = isValidPassword(passwordInput.value);
  if (!isValid) return;

  deleteReviewToLocalStorage(index);
  notifyAndReload('삭제가 완료되었어요');
};

export default deleteReviewHandler;
const useDeleteModal = ({name, onSubmit}) => {
  const modal = createModal(name);

  modal.addEventListener('click', (event) => {
    if (event.target.id === name || event.target.className === 'close-button') {
      modal.parentNode.removeChild(modal);
    }
  });

  modal.querySelector('#modalForm').addEventListener('submit',(event) => {
    event.preventDefault();
    onSubmit();
  });

  return modal;
}

const createModal = (id) => {
  const modal = document.createElement('div');
  modal.id = id;
  modal.innerHTML = `
    <form id="modalForm" class="delete-modal">
        <strong>삭제하시겠어요?</strong>
        <button class="close-button" type="button"><span class="blind">닫기</span></button>
        <input class="text-input" type="password" placeholder="비밀번호를 입력해주세요" autocomplete="off"/>
        <button class="modal-button" type="submit">삭제하기</button>
    </form>
    `;
  return modal;
};

export default useDeleteModal;
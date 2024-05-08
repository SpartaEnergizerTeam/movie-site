const FORM_CLASS = 'modal-form';

const useModal = ({name, onSubmit, buttonText, innerHtmlText, title}) => {
  const popup = document.getElementById(name);
  if (popup) return;

  const modal = createModal({name, buttonText, innerHtmlText, title});

  modal.addEventListener('click', (event) => {
    if (event.target.id === name || event.target.className === 'close-button') {
      modal.parentNode.removeChild(modal);
    }
  });

  modal.querySelector(`.${FORM_CLASS}`).addEventListener('submit',(event) => {
    event.preventDefault();
    onSubmit?.();
  });

  document.getElementById('reviewContainer').appendChild(modal);

  return modal;
}

const createModal = ({name, buttonText, innerHtmlText, title}) => {
  const modal = document.createElement('div');
  modal.id = name;
  modal.className = 'popup';
  modal.innerHTML = `
    <form class="${FORM_CLASS} ${name}-modal">
        <button class="close-button" type="button"><span class="blind">닫기</span></button>
        <strong>${title}</strong>
        ${innerHtmlText}
        <button class="modal-button" type="submit">${buttonText}</button>
    </form>
    `;
  return modal;
};

export default useModal;
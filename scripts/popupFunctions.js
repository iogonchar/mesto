import { popupsArray } from './defaultConstants.js';

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEscape);
}

function closePopupByEscape(evt) {
  if (evt.key === 'Escape') {
    popupsArray.forEach((item) => {
      if (item.classList.contains('popup_opened')) {
        closePopup(item);
      }
    });
  }
}

function handleClosePopup(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

export { openPopup, closePopup, handleClosePopup }

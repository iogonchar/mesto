export const inputAuthor = document.querySelector('#author');
export const inputAboutAuthor = document.querySelector('#about-author');

export const buttonEditProfile = document.querySelector('.profile__edit-profile-btn');
export const buttonAddPlace = document.querySelector('.profile__add-button');

export const popupImg = document.querySelector('.popup__img');
export const popupText = document.querySelector('.popup__text');

export const formEditProfile = document.querySelector('#popup-edit-profile-form');
export const formAddPlace = document.querySelector('#popup-add-place-form');

export const formData = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__form-submit',
  inactiveButtonClass: 'popup__form-submit_inactive',
  inputErrorClass: 'popup__form-input-error_active',
  errorClass: 'popup__form-input_type_error',
}

export const placesSection = '.places';
export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

import './index.css';

import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';

import { cardRenderer } from '../utils/utils.js';

import { formData, placesSection, initialCards } from '../utils/constants.js';

// DOM-элементы
const inputAuthor = document.querySelector('#author');
const inputAboutAuthor = document.querySelector('#about-author');

const buttonEditProfile = document.querySelector('.profile__edit-profile-btn');
const buttonAddPlace = document.querySelector('.profile__add-button');

const formEditProfile = document.querySelector('#popup-edit-profile-form');
const formAddPlace = document.querySelector('#popup-add-place-form');

// валидация форм
const cardFormValidator = new FormValidator(formData, formAddPlace);
cardFormValidator.enableValidation();
const profileFormValidator = new FormValidator(formData, formEditProfile);
profileFormValidator.enableValidation();

// профиль пользователя
const user = new UserInfo(
  {
    userNameSelector: '.profile__author',
    userInfoSelector: '.profile__about-author'
  }
);

const popupEditProfile = new PopupWithForm(
  {
    popupSelector: '#edit-profile-popup',
    handleFormSubmit: (formData) => {
      user.setUserInfo(formData);

      popupEditProfile.close();
    }
  }
);

popupEditProfile.setEventListeners();

buttonEditProfile.addEventListener('click', () => {
  // подставление информации из профиля в инпуты
  const userData = user.getUserInfo();
  inputAuthor.value = userData.author;
  inputAboutAuthor.value = userData.info;

  // открытие попапа
  popupEditProfile.open();
});

// отрисовываем карточки places
export const popupPlaceCard = new PopupWithImage('#place-popup');
popupPlaceCard.setEventListeners();

export const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = cardRenderer(item);
      cardsList.addItem(cardElement);
    }
  },
  placesSection
);

cardsList.renderItems();

// добавление новой карточки
const popupAddPlace = new PopupWithForm(
  {
    popupSelector: '#add-place-popup',
    handleFormSubmit: (formData) => {
      const cardElement = cardRenderer(formData);
      cardsList.addItem(cardElement);

      popupAddPlace.close();
    }
  }
);
popupAddPlace.setEventListeners();

buttonAddPlace.addEventListener('click', () => {
  cardFormValidator.toggleButtonState();
  popupAddPlace.open();
});

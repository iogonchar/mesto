import './index.css';

import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { FormValidator } from '../components/FormValidator.js';

import { handleCardClick } from '../utils/utils.js';

import {
  inputAuthor,
  inputAboutAuthor,
  buttonEditProfile,
  buttonAddPlace,
  formEditProfile,
  formAddPlace,
  formData,
  placesSection,
  initialCards
} from '../utils/constants.js';

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
    }
  }
);

popupEditProfile.setEventListeners();

buttonEditProfile.addEventListener('click', () => {
  // подставление информации из профиля в инпуты
  const userData = user.getUserInfo.bind(user)();
  inputAuthor.value = userData.author;
  inputAboutAuthor.value = userData.info;

  // открытие попапа
  popupEditProfile.open();
});




// отрисовываем карточки places
const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, '.place-template', handleCardClick);

      const cardElement = card.generateCard();

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
      const card = new Card(formData, '.place-template', handleCardClick);

      const cardElement = card.generateCard();

      cardsList.addItem(cardElement);
    }
  }
);
popupAddPlace.setEventListeners();

buttonAddPlace.addEventListener('click', popupAddPlace.open.bind(popupAddPlace));


// валидация форм
const cardFormValidator = new FormValidator(formData, formAddPlace);
cardFormValidator.enableValidation();
const profileFormValidator = new FormValidator(formData, formEditProfile);
profileFormValidator.enableValidation();

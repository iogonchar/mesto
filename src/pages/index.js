import './index.css';

import Api from '../components/Api.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupConfirmDelete from '../components/PopupConfirmDelete.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';

import { renderLoadingForm } from '../utils/utils.js';

import { formData, placesSection, initialCards } from '../utils/constants.js';

// DOM-элементы
const inputAuthor = document.querySelector('#author');
const inputAboutAuthor = document.querySelector('#about-author');

const buttonEditProfile = document.querySelector('.profile__edit-profile-btn');
const buttonAddPlace = document.querySelector('.profile__add-button');
const buttonUpdateAvatar = document.querySelector('.profile__avatar-btn');

const formEditProfile = document.querySelector('#popup-edit-profile-form');
const formAddPlace = document.querySelector('#popup-add-place-form');
const formUpdateAvatar = document.querySelector('#popup-update-avatar-form')

// валидация форм
const cardFormValidator = new FormValidator(formData, formAddPlace);
cardFormValidator.enableValidation();
const profileFormValidator = new FormValidator(formData, formEditProfile);
profileFormValidator.enableValidation();
const avatarFormValidator = new FormValidator(formData, formUpdateAvatar)
avatarFormValidator.enableValidation();

// подключение к апи
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-25',
  headers: {
    authorization: '9e82b33c-b2e5-449e-9e88-6aec219db861',
    'Content-Type': 'application/json'
  }
});


// функция открытия попапа при клике на карточку
const handleCardClick = (title, imgLink) => {
  popupPlaceCard.open(title, imgLink)
}

const handleLikeClick = (cardId, isLiked) => {
  if (!isLiked) {
    return api.addLike(cardId)
  } else {
    return api.deleteLike(cardId)
  }
}

const handleDeleteClick = (cardId, cardEvt) => {
  popupConfirmDelete.open(cardId, cardEvt);
}

const cardRenderer = (cardData, userData) => {
  const card = new Card(cardData, userData, '.place-template', handleCardClick, handleLikeClick, handleDeleteClick);
  // console.log(cardData)
  return card.generateCard();
}


// профиль пользователя
const user = new UserInfo(
  {
    userNameSelector: '.profile__author',
    userInfoSelector: '.profile__about-author',
    userAvatarSelector: '.profile__avatar'
  }
);

// Установка изначальных значений в профиль
const userInfo = api.getUserInfo();
userInfo
  .then(res => {
    user.setUserInfo({author: res.name, about: res.about, avatar: res.avatar})
  })
  .catch(err => console.log(err));

// Создаем экземпляр класса попапа с формой для редактирования профиля
const popupEditProfile = new PopupWithForm({
  popupSelector: '#edit-profile-popup',
  handleFormSubmit: (formData, buttonSubmit) => {
    renderLoadingForm(true, buttonSubmit, 'Сохранить', 'Сохранение...')
    // patch в api + обновление информации на странице
    api.updateUserInfo(formData)
      .then(res => {
        user.setUserInfo({ author: res.name, about: res.about, avatar: res.avatar });
        popupEditProfile.close();
      })
      .catch(err => console.log(err))
      .finally(() => renderLoadingForm(false, buttonSubmit, 'Сохранить', 'Сохранение...'))
  }
});
popupEditProfile.setEventListeners();

buttonEditProfile.addEventListener('click', () => {
  // получаем данные для инпутов с сервера
  const userData = user.getUserInfo();
  inputAuthor.value = userData.author;
  inputAboutAuthor.value = userData.info;

  // открытие попапа
  popupEditProfile.open();
});

// Создание экземпляра класса попапа с картинкой
const popupPlaceCard = new PopupWithImage('#place-popup');
popupPlaceCard.setEventListeners();

// Создание экземпляра класса секции с карточками
const cardsList = new Section(
  {
    renderer: (item) => {
      userInfo
        .then(res => {
          const cardElement = cardRenderer(item, res);
          cardsList.addItem(cardElement);
        })
        .catch(err => console.log(err));
    }
  },
  placesSection
);

// отрисовываем карточки places
api.getInitialCards()
  .then(res => {
    cardsList.renderItems(res);
  })
  .catch(err => console.log(err));

// добавление новой карточки
const popupAddPlace = new PopupWithForm(
  {
    popupSelector: '#add-place-popup',
    handleFormSubmit: (formData, buttonSubmit) => {
      renderLoadingForm(true, buttonSubmit, 'Сохранить', 'Сохранение...');
      userInfo
      .then(userData => {
        api.addNewCard(formData, userData)
        .then(res => {
          const cardElement = cardRenderer(res, userData);
          cardsList.addItem(cardElement);
          popupAddPlace.close();
        })
        .catch(err => console.log(err))
        .finally(() => renderLoadingForm(false, buttonSubmit, 'Сохранить', 'Сохранение...'));
      })
    }
  }
);
popupAddPlace.setEventListeners();

buttonAddPlace.addEventListener('click', () => {
  cardFormValidator.toggleButtonState();
  popupAddPlace.open();
});

const popupUpdateAvatar = new PopupWithForm({
  popupSelector: '#update-avatar-popup',
  handleFormSubmit: (formData, buttonSubmit) => {
    renderLoadingForm(true, buttonSubmit, 'Сохранить', 'Сохранение...');
    api.updateUserAvatar(formData)
      .then(res => {
        user.setUserAvatar(res.avatar);
        popupUpdateAvatar.close();
      })
      .catch(err => console.log(err))
      .finally(() => renderLoadingForm(false, buttonSubmit, 'Сохранить', 'Сохранение...'));
  }
})
popupUpdateAvatar.setEventListeners();

buttonUpdateAvatar.addEventListener('click', () => {
  avatarFormValidator.toggleButtonState();
  popupUpdateAvatar.open();
})

// popup confirm delete
const popupConfirmDelete = new PopupConfirmDelete({
  popupSelector: '#delete-place-popup',
  handleFormSubmit: (cardId, buttonSubmit, cardEvt) => {
    renderLoadingForm(true, buttonSubmit, 'Да', 'Удаление...');
    api.deleteCard(cardId)
    .then(res => {
      cardEvt.target.closest('.places__place').remove();
      popupConfirmDelete.close();
    })
    .catch(err => console.log(err))
    .finally(() => renderLoadingForm(false, buttonSubmit, 'Да', 'Удаление...'));
  }
})

popupConfirmDelete.setEventListeners();

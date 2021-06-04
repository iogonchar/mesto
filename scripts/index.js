import { initialCards } from './initial-cards.js';

import {
  cardsContainer,
  buttonEditProfile,
  buttonClosePopupEditProfile,
  formEditProfile,
  popupEditProfile,
  profileAuthor,
  inputAuthor,
  profileAboutAuthor,
  inputAboutAuthor,
  buttonAddPlace,
  buttonClosePopupAddPlace,
  popupAddPlace,
  formAddPlace,
  popupsArray
} from './defaultConstants.js'

import { openPopup, closePopup, handleClosePopup } from './popupFunctions.js';
import { handleSubmitPopupProfile, handleAddPlaceCard } from './formFunctions.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

// create initial cards
initialCards.forEach((item) => {
  const card = new Card(item, '#place-template');
  const cardElement = card.generateCard();
  cardsContainer.append(cardElement);
})

// turn on form validation
const formData = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__form-submit',
  inactiveButtonClass: 'popup__form-submit_inactive',
  inputErrorClass: 'popup__form-input-error_active',
  errorClass: 'popup__form-input_type_error',
}

const formsArr = Array.from(document.forms);
formsArr.forEach((item) => {
  new FormValidator(formData, item).enableValidation();
});

// listeners
// listener: open edit profile popup
buttonEditProfile.addEventListener('click', function () {
  inputAuthor.value = profileAuthor.textContent;
  inputAboutAuthor.value = profileAboutAuthor.textContent;
  openPopup(popupEditProfile);
});

// listener: close edit profile popup
buttonClosePopupEditProfile.addEventListener('click', function () {
  closePopup(popupEditProfile);
});

// listener: open add place card popup
buttonAddPlace.addEventListener('click', function () {
  openPopup(popupAddPlace);
});

// listener: close add place card popup
buttonClosePopupAddPlace.addEventListener('click', function () {
  closePopup(popupAddPlace);
});

// listener: submit changes profile
formEditProfile.addEventListener('submit', handleSubmitPopupProfile);

// listener: submit add new place card
formAddPlace.addEventListener('submit', handleAddPlaceCard);

// listener: close popup by overlay click
popupsArray.forEach((item) => {
  item.addEventListener('click', handleClosePopup);
});

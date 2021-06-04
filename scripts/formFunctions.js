import {
  popupEditProfile,
  profileAuthor,
  profileAboutAuthor,
  inputAuthor,
  inputAboutAuthor,
  cardsContainer,
  popupAddPlace,
  formAddPlace,
  inputPlaceImg,
  inputPlaceName
} from './defaultConstants.js';

import { closePopup } from './popupFunctions.js';
import { Card } from './Card.js';

// edit profile form
function handleSubmitPopupProfile (evt) {
  evt.preventDefault();
  profileAuthor.textContent = inputAuthor.value;
  profileAboutAuthor.textContent = inputAboutAuthor.value;
  closePopup(popupEditProfile);
}

// add place card form
function handleAddPlaceCard(evt) {
  evt.preventDefault();

  const cardData = {
    name: inputPlaceName.value,
    link: inputPlaceImg.value
  }
  const card = new Card(cardData, '#place-template');
  const cardElement = card.generateCard();
  cardsContainer.prepend(cardElement);

  formAddPlace.reset();

  closePopup(popupAddPlace);
}

export { handleSubmitPopupProfile, handleAddPlaceCard };

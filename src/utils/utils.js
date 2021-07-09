import Card from '../components/Card.js';

import { api } from '../pages/index.js';

import { popupPlaceCard, popupConfirmDelete } from '../pages/index.js';

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

export const cardRenderer = (cardData, userData) => {
  const card = new Card(cardData, userData, '.place-template', handleCardClick, handleLikeClick, handleDeleteClick);
  // console.log(cardData)
  return card.generateCard();
}

export const renderLoadingForm = (isLoading, buttonSubmit, mainText, loadingText) => {
  if (isLoading) {
    buttonSubmit.textContent = loadingText;
  } else {
    buttonSubmit.textContent = mainText;
  }
}

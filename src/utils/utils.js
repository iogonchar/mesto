import Card from '../components/Card.js';

import { cardsList, popupPlaceCard } from '../pages/index.js';

// функция открытия попапа при клике на карточку
export const handleCardClick = (title, imgLink) => {
  popupPlaceCard.open(title, imgLink)
}

export const cardRenderer = (obj) => {
  const card = new Card(obj, '.place-template', handleCardClick);

  return card.generateCard();
}

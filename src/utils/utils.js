import PopupWithImage from '../components/PopupWithImage.js';

// функция открытия попапа при клике на карточку
export const handleCardClick = (title, imgLink) => {
  const popupPlaceCard = new PopupWithImage('#place-popup');
  popupPlaceCard.setEventListeners();
  popupPlaceCard.open(title, imgLink)
}

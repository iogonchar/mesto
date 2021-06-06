import { cardPopup, popupImg, popupText } from "./defaultConstants.js";
import { closePopup, openPopup } from "./popupFunctions.js";

export class Card {
  constructor(data, cardTemplate) {
    this._imgLink = data.link;
    this._title = data.name;
    this._cardTemplate = cardTemplate;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardTemplate)
      .content
      .querySelector('.places__place')
      .cloneNode(true);

    return cardElement;
  }

  _handleOpenPopup() {
    popupImg.src = this._imgLink;
    popupImg.alt = this._title;
    popupText.textContent = this._title;

    openPopup(cardPopup);
  }

  _handleClosePopup() {
    closePopup(cardPopup);
  }

  _setEventListeners() {
    this._element.querySelector('.places__img').addEventListener('click', () => {
      this._handleOpenPopup();
    });

    this._element.querySelector('.places__like-place-btn').addEventListener('click', function (evt) {
      evt.target.classList.toggle('places__like-place-btn_active');
    });

    this._element.querySelector('.places__delete-place').addEventListener('click', function (evt) {
      evt.target.closest('.places__place').remove();
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const placePopupImg = this._element.querySelector('.places__img')

    placePopupImg.src = this._imgLink;
    placePopupImg.alt = this._title;
    this._element.querySelector('.places__title').textContent = this._title;

    return this._element;
  }
}

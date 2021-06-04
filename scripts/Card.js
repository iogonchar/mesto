import { cardPopup } from "./defaultConstants.js";
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
    document.querySelector('.popup__img').src = this._imgLink;
    document.querySelector('.popup__img').alt = this._title;
    document.querySelector('.popup__text').textContent = this._title;

    openPopup(cardPopup);
  }

  _handleClosePopup() {
    closePopup(cardPopup);
  }

  _setEventListeners() {
    this._element.querySelector('.places__img').addEventListener('click', () => {
      this._handleOpenPopup();
    });

    document.querySelector('#place-popup-close').addEventListener('click', () => {
      this._handleClosePopup();
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

    this._element.querySelector('.places__img').src = this._imgLink;
    this._element.querySelector('.places__img').alt = this._title;
    this._element.querySelector('.places__title').textContent = this._title;

    return this._element;
  }
}

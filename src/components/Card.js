export default class Card {
  constructor({name, link}, cardSelector, handleCardClick) {
    this._imgLink = link;
    this._title = name;

    this._cardSelector = cardSelector;

    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.places__place')
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._element.querySelector('.places__img').addEventListener('click', () => {
      this._handleCardClick(this._title, this._imgLink);
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

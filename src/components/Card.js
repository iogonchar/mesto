export default class Card {
  constructor(cardData, userData, cardSelector, handleCardClick, handleLikeClick, handleDeleteClick) {
    this._imgLink = cardData.link;
    this._title = cardData.name;

    this._userId = userData._id

    this._cardId = cardData._id;
    this._likes = cardData.likes;
    // console.log(this._likes);
    this._ownerId = cardData.owner._id;

    this._isLiked = false;

    this._cardSelector = cardSelector;

    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
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

    this._element.querySelector('.places__like-place-btn').addEventListener('click', (evt) => {
      this._handleLikeClick(this._cardId, this._isLiked)
        .then(res => {
          this._element.querySelector('.places__likes-count').textContent = res.likes.length
          console.log(res.likes.length)
          evt.target.classList.toggle('places__like-place-btn_active');
          this._isLiked = !this._isLiked;
        })
        .catch(err => console.log(err));
    })

    this._element.querySelector('.places__delete-place').addEventListener('click', (evt) => {
      this._handleDeleteClick(this._cardId, evt)
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const placePopupImg = this._element.querySelector('.places__img')

    placePopupImg.src = this._imgLink;
    placePopupImg.alt = this._title;
    this._element.querySelector('.places__title').textContent = this._title;

    if (this._ownerId !== this._userId) {
      this._element.querySelector('.places__delete-place').classList.add('places__delete-place_display_none');
    }

    // Проверяем мой лайк
    if (this._likes.some(item => item._id === this._userId)) {
      this._element.querySelector('.places__like-place-btn').classList.add('places__like-place-btn_active')
      this._isLiked = true;
    }
    this._element.querySelector('.places__likes-count').textContent = this._likes.length;

    return this._element;
  }

  deleteCard() {
    this._element.remove();
  }
}

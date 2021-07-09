import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._popupImg = this._popup.querySelector('.popup__img');
    this._popupText = this._popup.querySelector('.popup__text');
  }

  open(title, imgLink) {

    // указание на изображение и подпись для попапа
    this._popupImg.src = imgLink;
    this._popupImg.alt = title;
    this._popupText.textContent = title;

    // Открытие попапа
    super.open();
  }
}

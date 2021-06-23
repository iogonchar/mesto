import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  open(title, imgLink) {
    const popupImg = this._popup.querySelector('.popup__img');
    const popupText = this._popup.querySelector('.popup__text');

    // указание на изображение и подпись для попапа
    popupImg.src = imgLink;
    popupImg.alt = title;
    popupText.textContent = title;

    // Открытие попапа
    super.open();
  }
}

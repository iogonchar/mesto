import Popup from './Popup.js';

import {
  popupImg,
  popupText
} from '../utils/constants.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
  }

  open(title, imgLink) {
    // указание на изображение и подпись для попапа
    popupImg.src = imgLink;
    popupImg.alt = title;
    popupText.textContent = title;

    // Открытие попапа
    this._popup.classList.add('popup_opened');
  }
}

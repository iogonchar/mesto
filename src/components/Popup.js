export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;

    this._popup = document.querySelector(popupSelector);
  }

  open() {
    // открытие попапа
    this._popup.classList.add('popup_opened');
  }

  close() {
    // закрытие попапа
    this._popup.classList.remove('popup_opened');
  }

  _handleEscClose(evt) {
    // закрытие попапа при нажатии на Esc
    if (evt.key === 'Escape') {
      this.close()
    }
  }

  setEventListeners() {
    // слушатель закрытия попапа на кнопку закрытия формы
    this._popup.querySelector('.popup__form-close-btn').addEventListener('click', this.close.bind(this));

    // слушатель закрытия попапа на Esc
    document.addEventListener('keydown', this._handleEscClose.bind(this));
  }
}

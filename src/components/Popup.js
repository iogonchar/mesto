export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;

    this._popup = document.querySelector(popupSelector);

    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClick = this._handleOverlayClick.bind(this);
  }

  open() {
    // открытие попапа
    this._popup.classList.add('popup_opened');

    // слушатель закрытия попапа на Esc
    document.addEventListener('keydown', this._handleEscClose);

    // слушатель закрытия попапа на оверлей
    this._popup.addEventListener('click', this._handleOverlayClick);
  }

  close() {
    // закрытие попапа
    this._popup.classList.remove('popup_opened');

    // удаление слушателя закрытия попапа на Esc
    document.removeEventListener('keydown', this._handleEscClose);

    // удаление слушателя закрытия попапа на оверлей
    this._popup.removeEventListener('click', this._handleOverlayClick);
  }

  _handleEscClose(evt) {
    // закрытие попапа при нажатии на Esc
    if (evt.key === 'Escape') {
      this.close()
    }
  }

  _handleOverlayClick(evt) {
    // закрытие попапа при нажатии на оверлей
    if (evt.target.classList.contains('popup')) {
      this.close();
    }
  }

  setEventListeners() {
    // слушатель закрытия попапа на кнопку закрытия формы
    this._popup.querySelector('.popup__form-close-btn').addEventListener('click', this.close.bind(this));
  }
}

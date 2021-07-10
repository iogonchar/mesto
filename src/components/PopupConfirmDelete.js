import Popup from './Popup.js';

export default class PopupConfirmDelete extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector)

    this._handleFormSubmit = handleFormSubmit;
  }

  open(cardId, cardEvt) {
    super.open();
    this._cardId = cardId;
    this._cardEvt = cardEvt;
  }

  setEventListeners() {
    super.setEventListeners();

    // слушатель сабмита формы
    this._popup.querySelector('.popup__form').addEventListener('submit', (evt) => {
      // отмена стандартного поведения при сабмите
      evt.preventDefault();

      const buttonSubmit = this._popup.querySelector('.popup__form-submit');

      // обработчик сабмита
      this._handleFormSubmit(this._cardId, buttonSubmit);
    });
  }
}

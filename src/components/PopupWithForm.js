import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector)

    this._handleFormSubmit = handleFormSubmit;
  }

  close() {
    // закрытие попапа
    super.close();

    // удаление данных из формы
    this._popup.querySelector('.popup__form').reset();
  }

  _getInputValues() {
    // получение всех интпутов формы
    this._formInputs = this._popup.querySelectorAll('.popup__form-input');

    this._formValues = {}

    // запись значений из инпутов формы
    this._formInputs.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    // слушатель сабмита формы
    this._popup.querySelector('.popup__form').addEventListener('submit', (evt) => {
      // отмена стандартного поведения при сабмите
      evt.preventDefault();

      // обработчик сабмита
      this._handleFormSubmit(this._getInputValues());
    });
  }
}

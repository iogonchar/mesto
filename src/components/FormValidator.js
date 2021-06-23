export default class FormValidator {
  constructor(data, form) {
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._form = form;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-input-error`);
    inputElement.classList.add(this._errorClass);

    errorElement.textContent = errorMessage;

    errorElement.classList.add(this._inputErrorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-input-error`);

    inputElement.classList.remove(this._errorClass);

    errorElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  }

  _isValid(inputElement) {
    if(!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage)
    } else {
      this._hideInputError(inputElement)
    }
  }

  _getVerifiableInputs() {
    return Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
  }

  _getButtonElement() {
    return this._form.querySelector(this._submitButtonSelector);
  }

  _hasInvalidInput() {
     return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disableSubmitButton();
    } else {
      this._buttonElement.disabled = false;
      this._buttonElement.classList.remove(this._inactiveButtonClass);
    }
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {

        this._isValid(inputElement)

        this.toggleButtonState();
      });
    })
  }

  disableSubmitButton() {
    this._buttonElement = this._getButtonElement();
    this._buttonElement.disabled = true;
    this._buttonElement.classList.add(this._inactiveButtonClass);
  }

  enableValidation() {
    this._inputList = this._getVerifiableInputs();
    this._buttonElement = this._getButtonElement();
    this.toggleButtonState();

    this._setEventListeners();
  }
}

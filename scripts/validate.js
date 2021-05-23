const formElement = document.querySelector('.popup__form');

// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage, validationObj) => {
  // Находим элемент ошибки внутри самой функции
  const errorElement = formElement.querySelector(`.${inputElement.id}-input-error`);
  inputElement.classList.add(validationObj.errorClass);

  // Заменим содержимое span с ошибкой на переданный параметр
  errorElement.textContent = errorMessage;

  // Показываем сообщение об ошибке
  errorElement.classList.add(validationObj.inputErrorClass);
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement, validationObj) => {
  // Находим элемент ошибки
  const errorElement = formElement.querySelector(`.${inputElement.id}-input-error`);

  inputElement.classList.remove(validationObj.errorClass);

  // Скрываем сообщение об ошибке
  errorElement.classList.remove(validationObj.inputErrorClass);

  // Очистим ошибку
  errorElement.textContent = '';
};

const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся фунцкция
    // hasInvalidInput вернёт true

    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove(inactiveButtonClass);
  }
};

// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement, validationObj) => {
  if (!inputElement.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    // Передадим сообщение об ошибке вторым аргументом
    showInputError(formElement, inputElement, inputElement.validationMessage, validationObj);
  } else {
    // Если проходит, скроем
    hideInputError(formElement, inputElement, validationObj);
  }
};

const setEventListeners = (formElement, validationObj) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll(validationObj.inputSelector));

  // Найдём в текущей форме кнопку отправки
  const buttonElement = formElement.querySelector(validationObj.submitButtonSelector);

  // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
  toggleButtonState(inputList, buttonElement, validationObj.inactiveButtonClass);

  // Обойдём все элементы полученной коллекции
  inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(formElement, inputElement, validationObj)

      // Вызовем toggleButtonState и передадим ей массив полей и кнопку
      toggleButtonState(inputList, buttonElement, validationObj.inactiveButtonClass);
    });
  });
};

const enableValidation = (validationObj) => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll(validationObj.formSelector));

  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });

    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(formElement, validationObj);
  });
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__form-submit',
  inactiveButtonClass: 'popup__form-submit_inactive',
  inputErrorClass: 'popup__form-input-error_active',
  errorClass: 'popup__form-input_type_error',
})

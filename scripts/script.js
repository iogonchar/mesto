let popup = document.querySelector('.popup');
let popupEditBtn = document.querySelector('.profile__edit-profile');
let popupCloseBtn = document.querySelector('.popup__form-close');
let formElement = document.querySelector('.popup__form');

// get profile data
let profileAuthor = document.querySelector('.profile__author');
let profileAboutAuthor = document.querySelector('.profile__about-author');
let inputAuthor = document.querySelector('#author');
let inputAboutAuthor = document.querySelector('#about-author');

// open popup
function openPopup() {
  // popup visible
  popup.classList.add('popup_opened');

  // set profile data to form
  inputAuthor.value = profileAuthor.textContent;
  inputAboutAuthor.value = profileAboutAuthor.textContent;
}

// close popup
function closePopup() {
  popup.classList.remove('popup_opened');
}

// form submit
function formSubmitHandler (evt) {
  evt.preventDefault();

  // set new profile data to document
  profileAuthor.textContent = inputAuthor.value;
  profileAboutAuthor.textContent = inputAboutAuthor.value;

  closePopup();
}

popupEditBtn.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);

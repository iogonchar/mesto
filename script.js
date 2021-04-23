let popup = document.querySelector('.popup');
let popupEditBtn = document.querySelector('.profile__edit-profile');
let popupCloseBtn = document.querySelector('.popup__form-close');
let formElement = document.querySelector('.popup__form');

// open popup
function openPopup() {
  // popup visible
  popup.classList.add('popup_opened');

  // get profile data
  let profileAuthor = document.querySelector('.profile__author');
  let profileAboutAuthor = document.querySelector('.profile__about-author');

  // set profile data to form
  let inputAuthor = document.querySelector('#author');
  inputAuthor.value = profileAuthor.textContent;

  let inputAboutAuthor = document.querySelector('#about-author');
  inputAboutAuthor.value = profileAboutAuthor.textContent;
}
popupEditBtn.addEventListener('click', openPopup);

// close popup
function closePopup() {
  popup.classList.remove('popup_opened');
}
popupCloseBtn.addEventListener('click', closePopup);

// form submit
function formSubmitHandler (evt) {
  evt.preventDefault();

  // get profile data
  let profileAuthor = document.querySelector('.profile__author');
  let profileAboutAuthor = document.querySelector('.profile__about-author');

  // set new profile data to document
  let inputAuthor = document.querySelector('#author');
  profileAuthor.textContent = inputAuthor.value;

  let inputAboutAuthor = document.querySelector('#about-author');
  profileAboutAuthor.textContent = inputAboutAuthor.value;

  closePopup();
}
formElement.addEventListener('submit', formSubmitHandler);

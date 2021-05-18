const buttonEditProfile = document.querySelector('.profile__edit-profile');
const popupEditProfile = document.querySelector('#edit-profile-popup');
const buttonClosePopupEditProfile = document.querySelector('#close-edit-profile-popup');

const formEditProfile = document.querySelector('#popup-edit-profile-form');
const profileAuthor = document.querySelector('.profile__author');
const profileAboutAuthor = document.querySelector('.profile__about-author');

// const buttonAddPlace = document.querySelector('.profile__add-button-img');
const buttonAddPlace = document.querySelector('.profile__add-button');
const popupAddPlace = document.querySelector('#add-place-popup');
const buttonClosePopupAddPlace = document.querySelector('#close-add-place-popup');

const formAddPlace = document.querySelector('#popup-add-place-form');
const inputPlaceName = document.querySelector('#place');
const inputPlaceImg = document.querySelector('#place-img');

const placesContainer = document.querySelector('.places');
const placePopup = document.querySelector('#place-popup');
const buttonClosePopupPlace = document.querySelector('#place-popup-close');

const popupImg = document.querySelector('.popup__img');
const popupText = document.querySelector('.popup__text');

const inputAuthor = document.querySelector('#author');
const inputAboutAuthor = document.querySelector('#about-author');


function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(evt) {
  evt.target.closest('.popup').classList.remove('popup_opened');
}

function handleSubmitPopupProfile (evt) {
  evt.preventDefault();
  profileAuthor.textContent = inputAuthor.value;
  profileAboutAuthor.textContent = inputAboutAuthor.value;
  closePopup(evt);
}

function createPlaceCard(placeTitle, placeImageLink) {
  const placeTemplate = document.querySelector('#place-template').content;
  const placeElement = placeTemplate.querySelector('.places__place').cloneNode(true);

  placeElement.querySelector('.places__img').setAttribute('src', `${placeImageLink}`);
  placeElement.querySelector('.places__img').setAttribute('alt', `${placeTitle}`);
  placeElement.querySelector('.places__title').textContent = placeTitle;

  placeElement.querySelector('.places__like-place-btn').addEventListener('click', function (evt) {
    evt.target.classList.toggle('places__like-place-btn_active');
  });

  placeElement.querySelector('.places__delete-place').addEventListener('click', function (evt) {
    evt.target.closest('.places__place').remove();
  });

  placeElement.querySelector('.places__img').addEventListener('click', function (evt) {
    openPlacePopup(evt.target.getAttribute('src'), evt.target.getAttribute('alt'));
  });

  return placeElement;
}

function handleAddPlaceCard (evt) {
  evt.preventDefault();

  placesContainer.prepend(createPlaceCard(inputPlaceName.value, inputPlaceImg.value));
  formAddPlace.reset();

  closePopup(evt);
}

function openPlacePopup (img, name) {
  openPopup(placePopup);
  popupImg.setAttribute('src', `${img}`);
  popupImg.setAttribute('alt', `${name}`);
  popupText.textContent = name;
}

placeCards.forEach(function (item) {
  placesContainer.append(createPlaceCard(item.name, item.link));
})

buttonEditProfile.addEventListener('click', function () {
  inputAuthor.value = profileAuthor.textContent;
  inputAboutAuthor.value = profileAboutAuthor.textContent;
  openPopup(popupEditProfile);
});

buttonAddPlace.addEventListener('click', function () {
  openPopup(popupAddPlace);
});

buttonClosePopupEditProfile.addEventListener('click', closePopup);
buttonClosePopupAddPlace.addEventListener('click', closePopup);
buttonClosePopupPlace.addEventListener('click', closePopup);

formEditProfile.addEventListener('submit', handleSubmitPopupProfile);

formAddPlace.addEventListener('submit', handleAddPlaceCard);

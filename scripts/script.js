const buttonEditProfile = document.querySelector('.profile__edit-profile');
const popupEditProfile = document.querySelector('#edit-profile-popup');
const buttonClosePopupEditProfile = document.querySelector('#close-edit-profile-popup');

const formEditProfile = document.querySelector('#popup-edit-profile-form');
const profileAuthor = document.querySelector('.profile__author');
const profileAboutAuthor = document.querySelector('.profile__about-author');

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

const popupsArray = Array.from(document.querySelectorAll('.popup'));

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function handleClosePopup(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

function handleSubmitPopupProfile (evt) {
  evt.preventDefault();
  profileAuthor.textContent = inputAuthor.value;
  profileAboutAuthor.textContent = inputAboutAuthor.value;
  closePopup(popupEditProfile);
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
    openPlacePopup(placeImageLink, placeTitle);
  });

  return placeElement;
}

function handleAddPlaceCard (evt) {
  evt.preventDefault();

  placesContainer.prepend(createPlaceCard(inputPlaceName.value, inputPlaceImg.value));
  formAddPlace.reset();

  closePopup(popupAddPlace);
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

function closePopupByEscape(evt) {
  if (evt.key === 'Escape') {
    popupsArray.forEach((item) => {
      if (item.classList.contains('popup_opened')) {
        item.classList.remove('popup_opened');
        document.removeEventListener('keydown', closePopupByEscape);
      }
    });
  }
}

buttonEditProfile.addEventListener('click', function () {
  inputAuthor.value = profileAuthor.textContent;
  inputAboutAuthor.value = profileAboutAuthor.textContent;
  openPopup(popupEditProfile);
});

buttonAddPlace.addEventListener('click', function () {
  openPopup(popupAddPlace);
});


buttonClosePopupEditProfile.addEventListener('click', function () {
  closePopup(popupEditProfile);
});
buttonClosePopupAddPlace.addEventListener('click', function () {
  closePopup(popupAddPlace);
});
buttonClosePopupPlace.addEventListener('click', function () {
  closePopup(placePopup);
});

formEditProfile.addEventListener('submit', handleSubmitPopupProfile);

formAddPlace.addEventListener('submit', handleAddPlaceCard);

popupsArray.forEach((item) => {
  item.addEventListener('click', handleClosePopup);
});




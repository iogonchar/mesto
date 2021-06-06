// container: place cards
export const cardsContainer = document.querySelector('.places');

// popup: place card
export const cardPopup = document.querySelector('#place-popup');

// button: edit-profile and add-card
export const buttonEditProfile = document.querySelector('.profile__edit-profile');
export const buttonAddPlace = document.querySelector('.profile__add-button');

// button: close edit-profile, add-card and place
export const buttonClosePopupEditProfile = document.querySelector('#close-edit-profile-popup');
export const buttonClosePopupAddPlace = document.querySelector('#close-add-place-popup');
export const buttonClosePopupPlace = document.querySelector('#place-popup-close');

// popup: edit-profile, add-card and place
export const popupEditProfile = document.querySelector('#edit-profile-popup');
export const popupAddPlace = document.querySelector('#add-place-popup');
export const popupPlace = document.querySelector('#place-popup');

// profile data
export const profileAuthor = document.querySelector('.profile__author');
export const profileAboutAuthor = document.querySelector('.profile__about-author');

// form: edit-profile and add-card
export const formEditProfile = document.querySelector('#popup-edit-profile-form');
export const formAddPlace = document.querySelector('#popup-add-place-form');

// form inputs: edit profile
export const inputAuthor = document.querySelector('#author');
export const inputAboutAuthor = document.querySelector('#about-author');

// form inputs: add place card
export const inputPlaceName = document.querySelector('#place');
export const inputPlaceImg = document.querySelector('#place-img');

// popups array
export const popupsArray = Array.from(document.querySelectorAll('.popup'));

// popup: place img and text
export const popupImg = document.querySelector('.popup__img');
export const popupText = document.querySelector('.popup__text');

// button: add-place-submit-form
export const buttonSubmitAddPlace = document.querySelector('#add-place-submit');

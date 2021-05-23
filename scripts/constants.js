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

const placeTemplate = document.querySelector('#place-template').content;


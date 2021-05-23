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
  const placeElement = placeTemplate.querySelector('.places__place').cloneNode(true);

  placeElement.querySelector('.places__img').src = placeImageLink;
  placeElement.querySelector('.places__img').alt = placeTitle;
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
  popupImg.src = img;
  popupImg.alt = name;
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




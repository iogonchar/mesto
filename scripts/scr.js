const profileInfo = document.querySelector('.profile-info');
const editButtonProfile = profileInfo.querySelector('.profile-info__edit-button');
const addButtonElem = document.querySelector('.profile__add-button');

const profileInfoTitle = profileInfo.querySelector('.profile-info__title');
const profileInfoSubtitle = profileInfo.querySelector('.profile-info__subtitle');

const popupCover = document.querySelector('.popup_type_edit-form');
const popupCoverElem = document.querySelector('.popup_type_add-card');
const popupCoverImg = document.querySelector('.popup_type_show-image');

const popupContainer = popupCover.querySelector('.popup__content');
const popupContainerElem = popupCoverElem.querySelector('.popup__content');
const popupContainerImg = popupCoverImg.querySelector('.popup__content-img');

const popupItemElemPerson = popupContainer.querySelector('.popup__item_elem_person');
const popupItemElemIntro = popupContainer.querySelector('.popup__item_elem_intro');
const popupCloseButton = popupContainer.querySelector('.popup__close-button');
const popupCloseButtonElem = popupContainerElem.querySelector('.popup__close-button');
const popupItemElemTitle = popupContainerElem.querySelector('.popup__item_elem_title');
const popupItemElemLnk = popupContainerElem.querySelector('.popup__item_elem_lnk');
const popupCloseButtonImg = popupContainerImg.querySelector('.popup__close-button');

const popupBigImg = document.querySelector('.popup__big-img');
const popupTitle = document.querySelector('.popup__title');

// куда клонировать будем
const elemSection = document.querySelector('.elements');
// получить содержимое template, через его свойство content
const elemTemplate = document.querySelector('#element').content;

// Находим все
// сделаем из них массив методом Array.from
const popupList = Array.from(document.querySelectorAll('.popup'));

function setPopupItemProfile () {
  popupItemElemPerson.value = profileInfoTitle.textContent;
  popupItemElemIntro.value = profileInfoSubtitle.textContent;
}

function openPopup (popupCoverParam) {
  popupCoverParam.classList.remove('popup_trans-delay');
  popupCoverParam.classList.add('popup_opened');
  // скрыть подсветку прежнмх ошибок
  const inputList = Array.from(popupCoverParam.querySelectorAll('.popup__item'));
  inputList.forEach((inputElement) => {
    hideInputError(popupCoverParam, inputElement, 'popup__item_type_error', 'popup__item-error_active');
  });
}

function openPopupProfile () {
  openPopup(popupCover);
  setPopupItemProfile();
}

function openPopupElem () {
  openPopup(popupCoverElem);
  // очистим поля формы
  popupCoverElem.querySelector('.popup__content').reset();
}

function openPopupImg (imageSrc, imageAlt) {
  openPopup(popupCoverImg);
  popupBigImg.src = imageSrc;
  popupBigImg.alt = imageAlt;
  popupTitle.textContent = imageAlt;
}

editButtonProfile.addEventListener('click', openPopupProfile);
addButtonElem.addEventListener('click', openPopupElem);

function closePopup (popupCoverParam) {
  popupCoverParam.classList.add('popup_trans-delay');
  popupCoverParam.classList.remove('popup_opened');
}

function closePopupProfile () {
  closePopup(popupCover);
}

function closePopupElem () {
  closePopup(popupCoverElem);
}

function closePopupImg () {
  closePopup(popupCoverImg);
}

popupCloseButton.addEventListener('click', closePopupProfile);
popupCloseButtonElem.addEventListener('click', closePopupElem);
popupCloseButtonImg.addEventListener('click', closePopupImg);

function keyHandlerClick(evt) {
  if (evt.target === evt.currentTarget){
    closePopup (evt.target);
  }
}

// закрытие popup по клику на оверлее
popupList.forEach((item) => {
  item.addEventListener('click', keyHandlerClick);
});

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileInfoTitle.textContent = popupItemElemPerson.value;
  profileInfoSubtitle.textContent = popupItemElemIntro.value;
  closePopup(popupCover);
}

function getNewElement(imageSrc, imageAlt, elemTitle){
  // клонируем содержимое тега template
  const newElement = elemTemplate.querySelector('.element').cloneNode(true);
  // наполняем содержимым
  newElement.querySelector('.element__image').src = imageSrc;
  newElement.querySelector('.element__image').alt = imageAlt;
  newElement.querySelector('.element__title').textContent = elemTitle;

  // повесить обработчик на новый добавленный элемент
  const likeButtonElem = newElement.querySelector('.element__like-button');
  likeButtonElem.addEventListener('click', function (evt) {
    // в переменной evt.target окажется элемент
    // button, на который мы кликнули
    evt.target.classList.toggle('element__like-button_liked');
  });

  // повесить обработчик картинки на новый добавленный элемент
  // const imgElem = newElement.querySelector('.element__image');
  const imgElem = newElement.querySelector('.element__image');
  imgElem.addEventListener('click', function (evt){
    openPopupImg (evt.target.src, evt.target.alt);
  });

  // повесить обработчик на новый добавленный элемент
  const delButtonElem = newElement.querySelector('.element__del-button');
  delButtonElem.addEventListener('click', function (evt) {
    // в переменной evt.target окажется элемент
    // button, на который мы кликнули
    evt.target.closest('.element').remove();
  });
  return newElement;
}

function addNewElement(newElement){
  // отображаем на странице
  elemSection.prepend(newElement);
}

function formSubmitHandlerElem (evt) {
  evt.preventDefault();
  // Получим параметры из формы
  // сформируем и добавим новый Element
  addNewElement(getNewElement(popupItemElemLnk.value,popupItemElemTitle.value,popupItemElemTitle.value));
  // очистим поля формы
  evt.target.closest('.popup__content').reset();
  // закроем форму
  closePopup(popupCoverElem);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupContainer.addEventListener('submit', formSubmitHandler);
popupContainerElem.addEventListener('submit', formSubmitHandlerElem);

// закрытие popup esc
document.addEventListener('keydown', function(evt){
  if (evt.key === 'Escape'){
    // обойдём все popup, ранее полученные в массив
    popupList.forEach((item) => {
      if (item.classList.contains('popup_opened')){
        closePopup (item);
      }
    });
  }
});

enableValidation({
  formSelector: '.popup__content',
  inputSelector: '.popup__item',
	submitButtonSelector: '.popup__submit-button',
	inactiveButtonClass: 'popup__submit-button_inactive',
	inputErrorClass: 'popup__item_type_error',
	errorClass: 'popup__item-error_active'
  }
);
// инициализация
// объявить массив
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// заполнить карточки из массива
for (var i = 0; i < initialCards.length; i++) {
  addNewElement(getNewElement(initialCards[i].link,initialCards[i].name,initialCards[i].name));
}

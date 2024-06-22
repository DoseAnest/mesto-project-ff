// подключил стили и картинки
import './pages/index.css';
import {initialCards} from './scripts/utils/cards.js';
import {openPopup, closePopup} from './scripts/components/popup.js';
import {createCard, removeCard, likeToggle} from './scripts/components/card.js';
import {editProfile} from './scripts/components/editProfile.js'

// const popupEl = document.querySelector('.popup_is-opened');
const templateCard = document.querySelector('#card-template').content;
const cardList = document.querySelector('.places__list');
const profileEditButtonEl = document.querySelector('.profile__edit-button');
const addCardButtonEl = document.querySelector('.profile__add-button');
const popupImageEl = document.querySelector('.popup__image');
const captionIFullImagePopup = document.querySelector('.popup__caption');
const profileTitleEl = document.querySelector('.profile__title');
const profileDescriptionEl = document.querySelector('.profile__description');
const forms = {
    profile: document.forms['edit-profile'],
    card: document.forms['new-place']
};
const inputNameFormProfile = forms.profile.elements.name;
const inputDescriptionFormProfile = forms.profile.elements.description;
const inputNameFormNewCard = forms.card.elements['place-name'];
const inputLinkFormNewCard = forms.card.elements.link;

const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const popupFullImage = document.querySelector('.popup_type_image');
const popupTypeEdit  = document.querySelector('.popup_type_edit');
const popups = document.querySelectorAll('.popup')

function openPopupFullImage(data){
    captionIFullImagePopup.textContent = data.name;
    popupImageEl.alt = data.name;
    popupImageEl.src = data.link;
    openPopup(popupFullImage);
}

//Функция добавления карточки
function addCard(item, cardList) {
    cardList.prepend(item); 
};

// Вывести карточки на страницу
initialCards.forEach(function(item) { 
    const createdCard = createCard(item, removeCard, likeToggle, templateCard, openPopupFullImage); 
    addCard(createdCard, cardList);
});

profileEditButtonEl.addEventListener('click', function(evt){
    inputNameFormProfile.value = profileTitleEl.textContent;
    inputDescriptionFormProfile.value = profileDescriptionEl.textContent;
    openPopup(popupTypeEdit);
});

addCardButtonEl.addEventListener('click', function(evt) {
    openPopup(popupTypeNewCard);
});

popups.forEach(popup => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
            closePopup(popup);
        }
    });
});

//редактирование профиля
forms.profile.addEventListener('submit', function (evt) {
    evt.preventDefault();
    editProfile( inputNameFormProfile, inputDescriptionFormProfile, profileTitleEl, profileDescriptionEl);
    forms.profile.reset();
    closePopup(popupTypeEdit);
});

//добавление карточки
forms.card.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const newCard = createCard({
        link: inputLinkFormNewCard.value, 
        name: inputNameFormNewCard.value
    }, removeCard, likeToggle, templateCard, openPopupFullImage);
    
    addCard(newCard, cardList);
    forms.card.reset();
    closePopup(popupTypeNewCard);
});





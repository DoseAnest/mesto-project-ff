// подключил стили и картинки
import './pages/index.css';
import {initialCards} from './scripts/utils/cards.js';
import {openPopup, closePopup} from './scripts/components/popup.js';
import {createCard, removeCard, likeToggle} from './scripts/components/card.js';
import {editProfile} from './scripts/components/editProfile.js'

const templateCard = document.querySelector('#card-template').content;
const cardList = document.querySelector('.places__list');
const profileEditButtonEl = document.querySelector('.profile__edit-button');
const addCardButtonEl = document.querySelector('.profile__add-button');
const popupImageEl = document.querySelector('.popup__image');
const popupCaptionEl = document.querySelector('.popup__caption');
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
let popup;
   
//Функция добавления карточки
function addCard(item, cardList) {
    cardList.prepend(item); 
};

// Вывести карточки на страницу
initialCards.forEach(function(item) { 
    const createdCard = createCard(item, removeCard, likeToggle, templateCard, openPopup, popupImageEl, popupCaptionEl); 
    addCard(createdCard, cardList);
});

profileEditButtonEl.addEventListener('click', function(evt){
    inputNameFormProfile.value = profileTitleEl.textContent;
    inputDescriptionFormProfile.value = profileDescriptionEl.textContent;
    popup = document.querySelector('.popup_type_edit');
    openPopup(popup);
});

addCardButtonEl.addEventListener('click', function() {
    popup = document.querySelector('.popup_type_new-card');
    openPopup(popup);
});

document.addEventListener('click', function(evt) {
    const classList = evt.target.classList;
    
    if (classList.contains('popup') || classList.contains('popup__close')) {
        closePopup();
    }
});

//редактирование профиля
forms.profile.addEventListener('submit', function (evt) {
    evt.preventDefault();
    editProfile( inputNameFormProfile, inputDescriptionFormProfile, profileTitleEl, profileDescriptionEl);
    forms.profile.reset();
    closePopup();
});
//редактирование карточки
forms.card.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const newCard = createCard({
        link: inputLinkFormNewCard.value, 
        name: inputNameFormNewCard.value
    }, removeCard, likeToggle, templateCard, openPopup, popupImageEl, popupCaptionEl);
    
    addCard(newCard, cardList);
    forms.card.reset();
    closePopup();
});





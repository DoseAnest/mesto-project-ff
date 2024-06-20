// подключил стили и картинки
import './pages/index.css';
import {initialCards} from './scripts/utils/cards.js';
import {togglePopup} from './scripts/components/togglePopup.js';
import {createCard, addCard, removeCard, likeToggle} from './scripts/components/card.js';
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
}
const nameProfile = forms.profile.elements.name;
const description = forms.profile.elements.description;
const nameImage = forms.card.elements['place-name'];
const linkImage = forms.card.elements.link;


// Вывести карточки на страницу
initialCards.forEach(function(item) { 
    const createdCard = createCard(item, removeCard, likeToggle, templateCard); 
    addCard(createdCard, cardList);
});

// открытие и закрытие poupup
profileEditButtonEl.addEventListener('click', function(evt){
    nameProfile.value = profileTitleEl.textContent;
    description.value = profileDescriptionEl.textContent;
    togglePopup('.popup_type_edit');
});

addCardButtonEl.addEventListener('click', function() {
    togglePopup('.popup_type_new-card');
});

document.addEventListener('click', function(evt) {
    const classList = evt.target.classList;
    
    if (classList.contains('popup') || classList.contains('popup__close')) {
        togglePopup();
    }
})

document.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('card__image')) {
        popupCaptionEl.textContent = evt.target.alt;
        popupImageEl.alt = evt.target.alt;
        popupImageEl.src = evt.target.src;
        togglePopup('.popup_type_image');
    }
});

//редактирование профиля
forms.profile.addEventListener('submit', function (evt) {
    evt.preventDefault();
    editProfile(nameProfile, description, profileTitleEl, profileDescriptionEl);
    forms.profile.reset();
    togglePopup();
});
//редактирование карточки
forms.card.addEventListener('submit', function(evt) {
    evt.preventDefault();
    let newCard = createCard({
        link: linkImage.value, 
        name: nameImage.value
    }, removeCard, likeToggle, templateCard)
    
    addCard(newCard, cardList)
    forms.card.reset();
    togglePopup();
});

//Лайк

document.addEventListener('click', likeToggle);

// подключил стили и картинки
import './pages/index.css';
import {openPopup, closePopup} from './scripts/components/popup.js';
import {createCard, removeCard} from './scripts/components/card.js';
import {editProfile} from './scripts/components/editProfile.js'
import {enableValidation, clearValidation} from './scripts//utils/validation.js';
import {
    addUserCardOnServer, 
    renderUserProfileOnServer, 
    getUserInfoByServer, 
    getCardInfoByServer,
    removeUserCardOnServer,
    addUserlikesInfoOnServer,
    removeUserlikesOnServer,
    renderUserAvatarOnServer
} from './scripts/components/api.js'


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
    card: document.forms['new-place'],
    avatar: document.forms['edit-profile_avatar']
};
const inputNameFormProfile = forms.profile.elements.name;
const inputDescriptionFormProfile = forms.profile.elements.description;
const inputNameFormNewCard = forms.card.elements['place-name'];
const inputLinkFormNewCard = forms.card.elements.link;

const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const popupFullImage = document.querySelector('.popup_type_image');
const popupTypeEdit  = document.querySelector('.popup_type_edit');
const popups = document.querySelectorAll('.popup');

const buttonProfileAvatarEdit = document.querySelector('.profile__avatar-edit-button');
const popupTypeProfileAvatarEdit = document.querySelector('.popup_type_profile_avatar_edit');
const profileImageEl = document.querySelector('.profile__image');
const inputProfileLinkImage = forms.avatar.link;

const validationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
    rules: {
        name: /^[a-zA-Zа-яА-ЯёЁ\s-]*$/,
        description: /^[a-zA-Zа-яА-ЯёЁ\s-]*$/,
        'place-name': /^[a-zA-Zа-яА-ЯёЁ\s-]*$/,
    }
};
export const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-11',
    headers: {
      authorization: 'eed23ad5-f826-4f84-8c2d-d969b17f26f1',
      'Content-Type': 'application/json'
    }
  };

let userId

enableValidation(validationSettings);

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

profileEditButtonEl.addEventListener('click', function(evt){
    inputNameFormProfile.value = profileTitleEl.textContent;
    inputDescriptionFormProfile.value = profileDescriptionEl.textContent;
    openPopup(popupTypeEdit);
    clearValidation(validationSettings, forms.profile);
});

addCardButtonEl.addEventListener('click', function(evt) {
    openPopup(popupTypeNewCard);
    clearValidation(validationSettings, forms.card);
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
    const profileBtnEl = forms.profile.querySelector('.popup__button');
    profileBtnEl.textContent = profileBtnEl.textContent + '...';
    renderUserProfileOnServer({
        name: inputNameFormProfile.value,
        about: inputDescriptionFormProfile.value
    })
    .then(() => {
        editProfile( inputNameFormProfile, inputDescriptionFormProfile, profileTitleEl, profileDescriptionEl);
        forms.profile.reset();
        closePopup(popupTypeEdit);
    })
    .finally(()=> {
        profileBtnEl.textContent = 'Сохранить';
    })
});

//добавление карточки на сервер
forms.card.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const cardBntEl = forms.card.querySelector('.popup__button');
    cardBntEl.textContent = cardBntEl.textContent + '...';
    addUserCardOnServer({
        link: inputLinkFormNewCard.value, 
        name: inputNameFormNewCard.value
    }).then((res) => {
        return res.json()
    })
    .then((res) => { 
        const newCard = createCard({
            link: res.link, 
            name: res.name,
            likes: res.likes,
            owner: res.owner,
            cardId: res._id
        }, removeCard, templateCard, openPopupFullImage, userId, removeUserCardOnServer, addUserlikesInfoOnServer, removeUserlikesOnServer);
        addCard(newCard, cardList);
        forms.card.reset();
        clearValidation(validationSettings, forms.card);
        closePopup(popupTypeNewCard);
    })
    .finally(()=> {
        cardBntEl.textContent = 'Сохранить';
    })
});

function editAvatarProfile(link) {
    profileImageEl.style.backgroundImage = "url(" + link + ")";
}

buttonProfileAvatarEdit.addEventListener('click', function() {
    openPopup(popupTypeProfileAvatarEdit);
    clearValidation(validationSettings, forms.avatar);
});

forms.avatar.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const avatarBntEl = forms.avatar.querySelector('.popup__button');
    avatarBntEl.textContent = avatarBntEl.textContent + '...';
    renderUserAvatarOnServer({
        avatar: inputProfileLinkImage.value
    })
    .then(()=> {
        editAvatarProfile(inputProfileLinkImage.value);
        forms.avatar.reset();
        closePopup(popupTypeProfileAvatarEdit);
    })
    .finally(()=> {
        avatarBntEl.textContent = 'Сохранить';
    })
});

//API
function renderProfile(data) {
    profileTitleEl.textContent = data.name;
    profileDescriptionEl.textContent = data.about;
    profileImageEl.style.backgroundImage = "url(" + data.avatar + ")";
};

Promise.all([
    getUserInfoByServer(),
    getCardInfoByServer()
])
.then((responses)=> {
    const userInfoResponse = responses[0];
    renderProfile(userInfoResponse);
    userId = userInfoResponse._id;

    const cardInfoResponse = responses[1];
    cardInfoResponse.reverse().forEach(function({link, name, likes, owner, _id}) { 
        const createdCard = createCard({link, name, likes, owner, cardId: _id}, removeCard, templateCard, openPopupFullImage, userId, removeUserCardOnServer, addUserlikesInfoOnServer, removeUserlikesOnServer); 
        addCard(createdCard, cardList);
    });
})
.catch(err => {
    console.error(err);
});
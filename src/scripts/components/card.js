
function createCard({link, name}, removeCard, likeToggle, templateCard, openPopupFullImage) {
    const placesItem = templateCard.querySelector('.places__item').cloneNode(true);
    const cardImageEl = placesItem.querySelector('.card__image');
    cardImageEl.src = link;
    cardImageEl.alt = name;
    placesItem.querySelector('.card__title').textContent = name;

    const deleteButton = placesItem.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', removeCard);

    placesItem.addEventListener('click', likeToggle);

    cardImageEl.addEventListener('click', () => openPopupFullImage({link, name}));
    
    return placesItem;
};

//Функция удаления карточки
function removeCard(evt) {
    const deleteCard = evt.target.closest('.places__item');
    deleteCard.remove();
}

// Лайк
function likeToggle(evt) {
    if (evt.target.classList.contains('card__like-button')){
        evt.target.classList.toggle('card__like-button_is-active')
    };
};

export{createCard, removeCard, likeToggle};
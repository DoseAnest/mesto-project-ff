
function createCard({link, name}, removeCard, likeToggle, templateCard, openPopup, popupImageEl, popupCaptionEl) {
    const placesItem = templateCard.querySelector('.places__item').cloneNode(true);
    placesItem.querySelector('.card__image').src = link;
    placesItem.querySelector('.card__image').alt = name;
    placesItem.querySelector('.card__title').textContent = name;

    const deleteButton = placesItem.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', removeCard);

    placesItem.addEventListener('click', likeToggle);

    placesItem.addEventListener('click', function(evt) {
        if (evt.target.classList.contains('card__image')) {
            popupCaptionEl.textContent = evt.target.alt;
            popupImageEl.alt = evt.target.alt;
            popupImageEl.src = evt.target.src;

            const popup = document.querySelector('.popup_type_image');
            openPopup(popup);
        }
    });
    
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

function createCard({link, name}, removeCard, likeToggle, templateCard) {
    const placesItem = templateCard.querySelector('.places__item').cloneNode(true);
    placesItem.querySelector('.card__image').src = link;
    placesItem.querySelector('.card__image').alt = name;
    placesItem.querySelector('.card__title').textContent = name;

    const deleteButton = placesItem.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', removeCard);
    
    return placesItem;
};

function addCard(item, cardList) {
    cardList.prepend(item); 
};

// @todo: Функция удаления карточки
function removeCard(evt) {
    const deleteCard = evt.target.closest('.places__item');
    deleteCard.remove();
}


function likeToggle(evt) {
    if (evt.target.classList.contains('card__like-button')){
        evt.target.classList.toggle('card__like-button_is-active')
    };
};

export{createCard, addCard, removeCard, likeToggle};
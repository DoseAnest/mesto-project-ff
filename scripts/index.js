// @todo: Темплейт карточки

const templateCard = document.querySelector('#card-template').content;

// @todo: DOM узлы

const cardList = document.querySelector('.places__list');

// @todo: Функция создания карточки


function createCard(item, removeCard) {
    const placesItem = templateCard.querySelector('.places__item').cloneNode(true);
        placesItem.querySelector('.card__image').src = item.link;
        placesItem.querySelector('.card__image').alt = item.name;
        placesItem.querySelector('.card__title').textContent = item.name;

    const deleteButton = placesItem.querySelector('.card__delete-button');
        deleteButton.addEventListener('click', removeCard);
    
    return placesItem;
};

function addCard(item) {
    cardList.append(item); 
};

// @todo: Функция удаления карточки
function removeCard(evt) {
    const deleteCard = evt.target.closest('.places__item');
    deleteCard.remove();
}
// @todo: Вывести карточки на страницу
initialCards.forEach(function(item) { 
    const createdCard = createCard(item, removeCard); 
    addCard(createdCard);
 });
 
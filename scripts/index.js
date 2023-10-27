// @todo: Темплейт карточки

const templateCard = document.querySelector('#card-template').content;

// @todo: DOM узлы

const cardList = document.querySelector('.places__list');

// @todo: Функция создания карточки


function createCard({link, name}, removeCard) {
    const placesItem = templateCard.querySelector('.places__item').cloneNode(true);
    placesItem.querySelector('.card__image').src = link;
    placesItem.querySelector('.card__image').alt = name;
    placesItem.querySelector('.card__title').textContent = name;

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
 
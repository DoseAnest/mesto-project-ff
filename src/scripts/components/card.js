function createCard({link, name, likes, owner, cardId}, removeCard, templateCard, openPopupFullImage, userId, removeUserCardOnServer, addUserlikesInfoOnServer, removeUserlikesOnServer) {
    const placesItem = templateCard.querySelector('.places__item').cloneNode(true);
    const cardImageEl = placesItem.querySelector('.card__image');
    const likeNumber = placesItem.querySelector('.card__like-number');
    const ownerId = owner._id;
    let likesIds = likes;
    
    cardImageEl.src = link;
    cardImageEl.alt = name;
    placesItem.querySelector('.card__title').textContent = name;
    likeNumber.textContent = Object.keys(likes).length;

    if (ownerId === userId){
        const deleteButton = placesItem.querySelector('.card__delete-button');
        deleteButton.addEventListener('click', () => {
            removeUserCardOnServer(cardId)
                .then(() => {
                    removeCard(placesItem);
                })
                .catch(err => {
                    console.error(err)
                })
        });
    } else {
        placesItem.querySelector('.card__delete-button').style.display = 'none';
    };

    const likeButton = placesItem.querySelector('.card__like-button');
    if (likesIds.some((likes) => likes._id === userId)) {
        likeButton.classList.add('card__like-button_is-active');
    }
   
    likeButton.addEventListener('click', () => {
        if (likesIds.some((likes) => likes._id === userId)) {
            removeUserlikesOnServer(cardId)
                .then((res) => {
                    likesIds = res.likes
                    likeNumber.textContent = Object.keys(likesIds).length;
                    likeButton.classList.remove('card__like-button_is-active');
                })
                .catch(err => console.error(err));
        } else {
            addUserlikesInfoOnServer(cardId)
                .then((res) => {
                    likesIds = res.likes
                    likeNumber.textContent = Object.keys(likesIds).length;
                    likeButton.classList.add('card__like-button_is-active');
                })
                .catch(err => console.error(err));
        }
    });

    cardImageEl.addEventListener('click', () => openPopupFullImage({link, name}));
    
    return placesItem;
};

//Функция удаления карточки
function removeCard(cardElement) {
    cardElement.remove();
}

export{createCard, removeCard}; 
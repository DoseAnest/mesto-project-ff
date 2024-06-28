function createCard({link, name, likes, owner, _id}, removeCard, templateCard, openPopupFullImage, userId, removeUserCardOnServer, addUserlikesInfoOnServer, removeUserlikesOnServer) {
    const placesItem = templateCard.querySelector('.places__item').cloneNode(true);
    const cardImageEl = placesItem.querySelector('.card__image');
    const likeNumber = placesItem.querySelector('.card__like-number');
    const ownerId = owner._id;
    let likeState = {
        likesIds: likes
    };

    cardImageEl.src = link;
    cardImageEl.alt = name;
    placesItem.querySelector('.card__title').textContent = name;
    likeNumber.textContent = likeState.likesIds.length;

    if (ownerId === userId){
        const deleteButton = placesItem.querySelector('.card__delete-button');
        deleteButton.addEventListener('click', () => {
            handleDeleteButtonClick(_id, placesItem, removeCard, removeUserCardOnServer);
        });
    } else {
        placesItem.querySelector('.card__delete-button').style.display = 'none';
    };

    const likeButton = placesItem.querySelector('.card__like-button');
    if (likeState.likesIds.some((likes) => likes._id === userId)) {
        likeButton.classList.add('card__like-button_is-active');
    }
   
    likeButton.addEventListener('click', () => {
        handleLikeButtonClick(
            _id, 
            userId, 
            likeState, 
            likeNumber, 
            likeButton, 
            removeUserlikesOnServer, 
            addUserlikesInfoOnServer
        );
    });

    cardImageEl.addEventListener('click', () => openPopupFullImage({link, name}));
    
    return placesItem;
};

function handleLikeButtonClick(_id, userId, likeState, likeNumber, likeButton, removeUserlikesOnServer, addUserlikesInfoOnServer) {
    const likeMethod =  likeState.likesIds.some((likes) => likes._id === userId) ? 
    removeUserlikesOnServer : addUserlikesInfoOnServer;

    likeMethod(_id)
    .then((res) => {
        likeState.likesIds = res.likes;
        likeNumber.textContent = likeState.likesIds.length;
        likeButton.classList.toggle('card__like-button_is-active');
    })
    .catch(console.error);
}

function handleDeleteButtonClick(_id, placesItem, removeCard, removeUserCardOnServer) {
    removeUserCardOnServer(_id) 
    .then(() => { 
        removeCard(placesItem); 
    }) 
    .catch(console.error)
}

//Функция удаления карточки
function removeCard(cardElement) {
    cardElement.remove();
}

export{createCard, removeCard}; 
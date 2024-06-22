function openPopup(popupEl){
    if (!popupEl) {
        return;
    };
    if(!popupEl.classList.contains('popup_is-opened')){
        popupEl.classList.add('popup_is-opened');   
        document.addEventListener('keydown', handleEscape); 
    }
};
function closePopup(popupEl) {
    if (!popupEl) {
        return;
    };
    if(popupEl.classList.contains('popup_is-opened')){
        popupEl.classList.remove('popup_is-opened');
        document.removeEventListener('keydown', handleEscape);
    }
};

function handleEscape (evt){
    if(evt.key === 'Escape') {
        const popup = document.querySelector('.popup_is-opened');
        closePopup(popup);
    }
};
export{openPopup, closePopup} 
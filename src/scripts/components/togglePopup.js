function togglePopup(popupClass = '.popup_is-opened') {
    let popupEl = document.querySelector(popupClass);
   
    if (!popupEl) {
        return;
    };

    if (popupEl.classList.contains('popup_is-opened')){
        popupEl.classList.remove('popup_is-opened');
        document.removeEventListener('keydown', handleEscape);     
    } else {
        popupEl.classList.add('popup_is-opened');   
        document.addEventListener('keydown', handleEscape); 
    }
}

function handleEscape (evt){
    if(evt.keyCode === 27){
        togglePopup();
    }
};
export{togglePopup}
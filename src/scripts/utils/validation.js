const showInputError = (settings, formEl, inputSelector, errorMessage) => {
    const errorElement = formEl.querySelector(`.${inputSelector.name}-error`);
    inputSelector.classList.add(settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(settings.errorClass);
};

const hideInputError = (settings, formEl, inputSelector) => {
    const errorElement = formEl.querySelector(`.${inputSelector.name}-error`);
    inputSelector.classList.remove(settings.inputErrorClass);
    errorElement.classList.remove(settings.errorClass);
    errorElement.textContent = '';
};

const checkInputValidity = (settings, formEl, inputSelector) => {
    let isCustomRulesValid = true;
    let errorMessage = inputSelector.validationMessage;
    
    if (!inputSelector.value.match(settings.rules[inputSelector.name])) {
        isCustomRulesValid = false;
        errorMessage = inputSelector.getAttribute('data-error-message'); 
    }

    if (!inputSelector.validity.valid || !isCustomRulesValid) {
        showInputError(settings, formEl, inputSelector, errorMessage);
        return false;
    } else {
        hideInputError(settings, formEl, inputSelector);
        return true;
    };
};

const toggleButtonState = (settings, submitButtonSelector, formEl, inputList) => {
    if(hasInvalidInput(settings, formEl, inputList)) {
        submitButtonSelector.classList.add(settings.inactiveButtonClass);
        submitButtonSelector.disabled = true;
    } else {
        submitButtonSelector.classList.remove(settings.inactiveButtonClass);
        submitButtonSelector.disabled = false;
    };
};

const hasInvalidInput = (settings, formEl, inputList) => {
    return inputList.some((inputSelector) => {
        return !checkInputValidity(settings, formEl, inputSelector);
    });
};

const setEventListeners = (settings, formEl,) => {
    const inputList = Array.from(formEl.querySelectorAll(settings.inputSelector));
    const submitButtonSelector = formEl.querySelector(settings.submitButtonSelector);

    inputList.forEach((inputSelector) => {
        inputSelector.addEventListener('input', function () {
            toggleButtonState(settings, submitButtonSelector, formEl, inputList);
        });
    });
};

const clearValidation = (settings, formEl) => {
    const inputList = Array.from(formEl.querySelectorAll(settings.inputSelector));
    const submitButtonSelector = formEl.querySelector(settings.submitButtonSelector);

    toggleButtonState(settings, submitButtonSelector, formEl, inputList);

    inputList.forEach((inputSelector) => {
        hideInputError(settings, formEl, inputSelector);
    });
};

const enableValidation = (settings) => {
    const formList = Array.from(document.querySelectorAll(settings.formSelector));
    formList.forEach((formEl) => {
        formEl.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(settings, formEl);
    });
};

export {enableValidation, clearValidation}
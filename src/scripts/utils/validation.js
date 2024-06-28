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
    let errorMessage = inputSelector.validationMessage;
    if (inputSelector.validity.patternMismatch) {
        errorMessage = inputSelector.getAttribute('data-error-message'); 
    }

    if (!inputSelector.validity.valid) {
        showInputError(settings, formEl, inputSelector, errorMessage);
    } else {
        hideInputError(settings, formEl, inputSelector);
    };
};

const toggleButtonState = (settings, submitButtonSelector, inputList) => {
    if(hasInvalidInput(inputList)) {
        submitButtonSelector.classList.add(settings.inactiveButtonClass);
        submitButtonSelector.disabled = true;
    } else {
        submitButtonSelector.classList.remove(settings.inactiveButtonClass);
        submitButtonSelector.disabled = false;
    };
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputSelector) => {
        return !inputSelector.validity.valid;
    });
};

const setEventListeners = (settings, formEl) => {
    const inputList = Array.from(formEl.querySelectorAll(settings.inputSelector));
    const submitButtonSelector = formEl.querySelector(settings.submitButtonSelector);

    inputList.forEach((inputSelector) => {
        inputSelector.addEventListener('input', function () {
            checkInputValidity(settings, formEl, inputSelector);
            toggleButtonState(settings, submitButtonSelector, inputList);
        });
    });
};

const clearValidation = (settings, formEl) => {
    const inputList = Array.from(formEl.querySelectorAll(settings.inputSelector));
    const submitButtonSelector = formEl.querySelector(settings.submitButtonSelector);

    toggleButtonState(settings, submitButtonSelector, inputList);

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
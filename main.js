/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config)\n/* harmony export */ });\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _scripts_components_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/components/popup.js */ \"./src/scripts/components/popup.js\");\n/* harmony import */ var _scripts_components_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/components/card.js */ \"./src/scripts/components/card.js\");\n/* harmony import */ var _scripts_components_editProfile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/components/editProfile.js */ \"./src/scripts/components/editProfile.js\");\n/* harmony import */ var _scripts_utils_validation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts//utils/validation.js */ \"./src/scripts/utils/validation.js\");\n/* harmony import */ var _scripts_components_api_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/components/api.js */ \"./src/scripts/components/api.js\");\n// подключил стили и картинки\n\n\n\n\n\n\n\n// const popupEl = document.querySelector('.popup_is-opened');\nvar templateCard = document.querySelector('#card-template').content;\nvar cardList = document.querySelector('.places__list');\nvar profileEditButtonEl = document.querySelector('.profile__edit-button');\nvar addCardButtonEl = document.querySelector('.profile__add-button');\nvar popupImageEl = document.querySelector('.popup__image');\nvar captionIFullImagePopup = document.querySelector('.popup__caption');\nvar profileTitleEl = document.querySelector('.profile__title');\nvar profileDescriptionEl = document.querySelector('.profile__description');\nvar forms = {\n  profile: document.forms['edit-profile'],\n  card: document.forms['new-place'],\n  avatar: document.forms['edit-profile_avatar']\n};\nvar inputNameFormProfile = forms.profile.elements.name;\nvar inputDescriptionFormProfile = forms.profile.elements.description;\nvar inputNameFormNewCard = forms.card.elements['place-name'];\nvar inputLinkFormNewCard = forms.card.elements.link;\nvar popupTypeNewCard = document.querySelector('.popup_type_new-card');\nvar popupFullImage = document.querySelector('.popup_type_image');\nvar popupTypeEdit = document.querySelector('.popup_type_edit');\nvar popups = document.querySelectorAll('.popup');\nvar buttonProfileAvatarEdit = document.querySelector('.profile__avatar-edit-button');\nvar popupTypeProfileAvatarEdit = document.querySelector('.popup_type_profile_avatar_edit');\nvar profileImageEl = document.querySelector('.profile__image');\nvar inputProfileLinkImage = forms.avatar.link;\nvar validationSettings = {\n  formSelector: '.popup__form',\n  inputSelector: '.popup__input',\n  submitButtonSelector: '.popup__button',\n  inactiveButtonClass: 'popup__button_disabled',\n  inputErrorClass: 'popup__input_type_error',\n  errorClass: 'popup__error_visible',\n  rules: {\n    name: /^[a-zA-Zа-яА-ЯёЁ\\s-]*$/,\n    description: /^[a-zA-Zа-яА-ЯёЁ\\s-]*$/,\n    'place-name': /^[a-zA-Zа-яА-ЯёЁ\\s-]*$/\n  }\n};\nvar config = {\n  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-11',\n  headers: {\n    authorization: 'eed23ad5-f826-4f84-8c2d-d969b17f26f1',\n    'Content-Type': 'application/json'\n  }\n};\nvar userId;\n(0,_scripts_utils_validation_js__WEBPACK_IMPORTED_MODULE_4__.enableValidation)(validationSettings);\nfunction openPopupFullImage(data) {\n  captionIFullImagePopup.textContent = data.name;\n  popupImageEl.alt = data.name;\n  popupImageEl.src = data.link;\n  (0,_scripts_components_popup_js__WEBPACK_IMPORTED_MODULE_1__.openPopup)(popupFullImage);\n}\n\n//Функция добавления карточки \nfunction addCard(item, cardList) {\n  cardList.prepend(item);\n}\n;\nprofileEditButtonEl.addEventListener('click', function (evt) {\n  inputNameFormProfile.value = profileTitleEl.textContent;\n  inputDescriptionFormProfile.value = profileDescriptionEl.textContent;\n  (0,_scripts_components_popup_js__WEBPACK_IMPORTED_MODULE_1__.openPopup)(popupTypeEdit);\n  (0,_scripts_utils_validation_js__WEBPACK_IMPORTED_MODULE_4__.clearValidation)(validationSettings, forms.profile);\n});\naddCardButtonEl.addEventListener('click', function (evt) {\n  (0,_scripts_components_popup_js__WEBPACK_IMPORTED_MODULE_1__.openPopup)(popupTypeNewCard);\n  (0,_scripts_utils_validation_js__WEBPACK_IMPORTED_MODULE_4__.clearValidation)(validationSettings, forms.card);\n});\npopups.forEach(function (popup) {\n  popup.addEventListener('click', function (evt) {\n    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {\n      (0,_scripts_components_popup_js__WEBPACK_IMPORTED_MODULE_1__.closePopup)(popup);\n    }\n  });\n});\n\n//редактирование профиля\nforms.profile.addEventListener('submit', function (evt) {\n  evt.preventDefault();\n  var profileBtnEl = forms.profile.querySelector('.popup__button');\n  profileBtnEl.textContent = profileBtnEl.textContent + '...';\n  (0,_scripts_components_api_js__WEBPACK_IMPORTED_MODULE_5__.renderUserProfileOnServer)({\n    name: inputNameFormProfile.value,\n    about: inputDescriptionFormProfile.value\n  }).then(function () {\n    (0,_scripts_components_editProfile_js__WEBPACK_IMPORTED_MODULE_3__.editProfile)(inputNameFormProfile, inputDescriptionFormProfile, profileTitleEl, profileDescriptionEl);\n    forms.profile.reset();\n    (0,_scripts_components_popup_js__WEBPACK_IMPORTED_MODULE_1__.closePopup)(popupTypeEdit);\n  }).finally(function () {\n    profileBtnEl.textContent = 'Сохранить';\n  });\n});\n\n//добавление карточки на сервер\nforms.card.addEventListener('submit', function (evt) {\n  evt.preventDefault();\n  var cardBntEl = forms.card.querySelector('.popup__button');\n  cardBntEl.textContent = cardBntEl.textContent + '...';\n  (0,_scripts_components_api_js__WEBPACK_IMPORTED_MODULE_5__.addUserCardOnServer)({\n    link: inputLinkFormNewCard.value,\n    name: inputNameFormNewCard.value\n  }).then(function (res) {\n    return res.json();\n  }).then(function (res) {\n    var newCard = (0,_scripts_components_card_js__WEBPACK_IMPORTED_MODULE_2__.createCard)({\n      link: res.link,\n      name: res.name,\n      likes: res.likes,\n      owner: res.owner,\n      cardId: res._id\n    }, _scripts_components_card_js__WEBPACK_IMPORTED_MODULE_2__.removeCard, templateCard, openPopupFullImage, userId, _scripts_components_api_js__WEBPACK_IMPORTED_MODULE_5__.removeUserCardOnServer, _scripts_components_api_js__WEBPACK_IMPORTED_MODULE_5__.addUserlikesInfoOnServer, _scripts_components_api_js__WEBPACK_IMPORTED_MODULE_5__.removeUserlikesOnServer);\n    addCard(newCard, cardList);\n    forms.card.reset();\n    (0,_scripts_utils_validation_js__WEBPACK_IMPORTED_MODULE_4__.clearValidation)(validationSettings, forms.card);\n    (0,_scripts_components_popup_js__WEBPACK_IMPORTED_MODULE_1__.closePopup)(popupTypeNewCard);\n  }).finally(function () {\n    cardBntEl.textContent = 'Сохранить';\n  });\n});\nfunction editAvatarProfile(link) {\n  profileImageEl.style.backgroundImage = \"url(\" + link + \")\";\n}\nbuttonProfileAvatarEdit.addEventListener('click', function () {\n  (0,_scripts_components_popup_js__WEBPACK_IMPORTED_MODULE_1__.openPopup)(popupTypeProfileAvatarEdit);\n  (0,_scripts_utils_validation_js__WEBPACK_IMPORTED_MODULE_4__.clearValidation)(validationSettings, forms.avatar);\n});\nforms.avatar.addEventListener('submit', function (evt) {\n  evt.preventDefault();\n  var avatarBntEl = forms.avatar.querySelector('.popup__button');\n  avatarBntEl.textContent = avatarBntEl.textContent + '...';\n  (0,_scripts_components_api_js__WEBPACK_IMPORTED_MODULE_5__.renderUserAvatarOnServer)({\n    avatar: inputProfileLinkImage.value\n  }).then(function () {\n    editAvatarProfile(inputProfileLinkImage.value);\n    forms.avatar.reset();\n    (0,_scripts_components_popup_js__WEBPACK_IMPORTED_MODULE_1__.closePopup)(popupTypeProfileAvatarEdit);\n  }).finally(function () {\n    avatarBntEl.textContent = 'Сохранить';\n  });\n});\n\n//API\nfunction renderProfile(data) {\n  profileTitleEl.textContent = data.name;\n  profileDescriptionEl.textContent = data.about;\n  profileImageEl.style.backgroundImage = \"url(\" + data.avatar + \")\";\n}\n;\nPromise.all([(0,_scripts_components_api_js__WEBPACK_IMPORTED_MODULE_5__.getUserInfoByServer)(), (0,_scripts_components_api_js__WEBPACK_IMPORTED_MODULE_5__.getCardInfoByServer)()]).then(function (responses) {\n  var userInfoResponse = responses[0];\n  renderProfile(userInfoResponse);\n  userId = userInfoResponse._id;\n  var cardInfoResponse = responses[1];\n  cardInfoResponse.reverse().forEach(function (_ref) {\n    var link = _ref.link,\n      name = _ref.name,\n      likes = _ref.likes,\n      owner = _ref.owner,\n      _id = _ref._id;\n    var createdCard = (0,_scripts_components_card_js__WEBPACK_IMPORTED_MODULE_2__.createCard)({\n      link: link,\n      name: name,\n      likes: likes,\n      owner: owner,\n      cardId: _id\n    }, _scripts_components_card_js__WEBPACK_IMPORTED_MODULE_2__.removeCard, templateCard, openPopupFullImage, userId, _scripts_components_api_js__WEBPACK_IMPORTED_MODULE_5__.removeUserCardOnServer, _scripts_components_api_js__WEBPACK_IMPORTED_MODULE_5__.addUserlikesInfoOnServer, _scripts_components_api_js__WEBPACK_IMPORTED_MODULE_5__.removeUserlikesOnServer);\n    addCard(createdCard, cardList);\n  });\n}).catch(function (err) {\n  console.error(err);\n});\n\n//# sourceURL=webpack://mesto-project-ff/./src/index.js?");

/***/ }),

/***/ "./src/scripts/components/api.js":
/*!***************************************!*\
  !*** ./src/scripts/components/api.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addUserCardOnServer: () => (/* binding */ addUserCardOnServer),\n/* harmony export */   addUserlikesInfoOnServer: () => (/* binding */ addUserlikesInfoOnServer),\n/* harmony export */   getCardInfoByServer: () => (/* binding */ getCardInfoByServer),\n/* harmony export */   getUserInfoByServer: () => (/* binding */ getUserInfoByServer),\n/* harmony export */   removeUserCardOnServer: () => (/* binding */ removeUserCardOnServer),\n/* harmony export */   removeUserlikesOnServer: () => (/* binding */ removeUserlikesOnServer),\n/* harmony export */   renderUserAvatarOnServer: () => (/* binding */ renderUserAvatarOnServer),\n/* harmony export */   renderUserProfileOnServer: () => (/* binding */ renderUserProfileOnServer)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index.js */ \"./src/index.js\");\n\n// render profile\nfunction renderUserProfileOnServer(_ref) {\n  var name = _ref.name,\n    about = _ref.about;\n  return fetch(\"\".concat(_index_js__WEBPACK_IMPORTED_MODULE_0__.config.baseUrl, \"/users/me\"), {\n    method: 'PATCH',\n    headers: {\n      authorization: _index_js__WEBPACK_IMPORTED_MODULE_0__.config.headers.authorization,\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      name: name,\n      about: about\n    })\n  });\n}\n;\nfunction getUserInfoByServer() {\n  return fetch(\"\".concat(_index_js__WEBPACK_IMPORTED_MODULE_0__.config.baseUrl, \"/users/me\"), {\n    method: 'GET',\n    headers: {\n      authorization: _index_js__WEBPACK_IMPORTED_MODULE_0__.config.headers.authorization\n    }\n  }).then(function (res) {\n    return res.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n}\n;\n\n// Вывести карточки на страницe\nfunction getCardInfoByServer() {\n  return fetch(\"\".concat(_index_js__WEBPACK_IMPORTED_MODULE_0__.config.baseUrl, \"/cards\"), {\n    method: 'GET',\n    headers: {\n      authorization: _index_js__WEBPACK_IMPORTED_MODULE_0__.config.headers.authorization\n    }\n  }).then(function (res) {\n    return res.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n}\n;\n\n//add card on server\nfunction addUserCardOnServer(_ref2) {\n  var link = _ref2.link,\n    name = _ref2.name;\n  return fetch(\"\".concat(_index_js__WEBPACK_IMPORTED_MODULE_0__.config.baseUrl, \"/cards\"), {\n    method: 'POST',\n    headers: {\n      authorization: _index_js__WEBPACK_IMPORTED_MODULE_0__.config.headers.authorization,\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      link: link,\n      name: name\n    })\n  });\n}\n;\n//remove card\nfunction removeUserCardOnServer(cardId) {\n  return fetch(\"\".concat(_index_js__WEBPACK_IMPORTED_MODULE_0__.config.baseUrl, \"/cards/\").concat(cardId), {\n    method: 'DELETE',\n    headers: {\n      authorization: _index_js__WEBPACK_IMPORTED_MODULE_0__.config.headers.authorization,\n      'Content-Type': 'application/json'\n    }\n  });\n}\n;\n//add likes on server\nfunction addUserlikesInfoOnServer(cardId) {\n  return fetch(\"\".concat(_index_js__WEBPACK_IMPORTED_MODULE_0__.config.baseUrl, \"//cards/likes/\").concat(cardId), {\n    method: 'PUT',\n    headers: {\n      authorization: _index_js__WEBPACK_IMPORTED_MODULE_0__.config.headers.authorization,\n      'Content-Type': 'application/json'\n    }\n  }).then(function (res) {\n    return res.json();\n  });\n}\n;\n//remove likes\nfunction removeUserlikesOnServer(cardId) {\n  return fetch(\"\".concat(_index_js__WEBPACK_IMPORTED_MODULE_0__.config.baseUrl, \"//cards/likes/\").concat(cardId), {\n    method: 'DELETE',\n    headers: {\n      authorization: _index_js__WEBPACK_IMPORTED_MODULE_0__.config.headers.authorization,\n      'Content-Type': 'application/json'\n    }\n  }).then(function (res) {\n    return res.json();\n  });\n}\n;\nfunction renderUserAvatarOnServer(_ref3) {\n  var avatar = _ref3.avatar;\n  return fetch(\"\".concat(_index_js__WEBPACK_IMPORTED_MODULE_0__.config.baseUrl, \"/users/me/avatar \"), {\n    method: 'PATCH',\n    headers: {\n      authorization: _index_js__WEBPACK_IMPORTED_MODULE_0__.config.headers.authorization,\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      avatar: avatar\n    })\n  });\n}\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/components/api.js?");

/***/ }),

/***/ "./src/scripts/components/card.js":
/*!****************************************!*\
  !*** ./src/scripts/components/card.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   removeCard: () => (/* binding */ removeCard)\n/* harmony export */ });\nfunction createCard(_ref, removeCard, templateCard, openPopupFullImage, userId, removeUserCardOnServer, addUserlikesInfoOnServer, removeUserlikesOnServer) {\n  var link = _ref.link,\n    name = _ref.name,\n    likes = _ref.likes,\n    owner = _ref.owner,\n    cardId = _ref.cardId;\n  var placesItem = templateCard.querySelector('.places__item').cloneNode(true);\n  var cardImageEl = placesItem.querySelector('.card__image');\n  var likeNumber = placesItem.querySelector('.card__like-number');\n  var ownerId = owner._id;\n  var likesIds = likes;\n  cardImageEl.src = link;\n  cardImageEl.alt = name;\n  placesItem.querySelector('.card__title').textContent = name;\n  likeNumber.textContent = Object.keys(likes).length;\n  if (ownerId === userId) {\n    var deleteButton = placesItem.querySelector('.card__delete-button');\n    deleteButton.addEventListener('click', function () {\n      removeUserCardOnServer(cardId).then(function () {\n        removeCard(placesItem);\n      }).catch(function (err) {\n        console.error(err);\n      });\n    });\n  } else {\n    placesItem.querySelector('.card__delete-button').style.display = 'none';\n  }\n  ;\n  var likeButton = placesItem.querySelector('.card__like-button');\n  if (likesIds.some(function (likes) {\n    return likes._id === userId;\n  })) {\n    likeButton.classList.add('card__like-button_is-active');\n  }\n  likeButton.addEventListener('click', function () {\n    if (likesIds.some(function (likes) {\n      return likes._id === userId;\n    })) {\n      removeUserlikesOnServer(cardId).then(function (res) {\n        likesIds = res.likes;\n        likeNumber.textContent = Object.keys(likesIds).length;\n        likeButton.classList.remove('card__like-button_is-active');\n      }).catch(function (err) {\n        return console.error(err);\n      });\n    } else {\n      addUserlikesInfoOnServer(cardId).then(function (res) {\n        likesIds = res.likes;\n        likeNumber.textContent = Object.keys(likesIds).length;\n        likeButton.classList.add('card__like-button_is-active');\n      }).catch(function (err) {\n        return console.error(err);\n      });\n    }\n  });\n  cardImageEl.addEventListener('click', function () {\n    return openPopupFullImage({\n      link: link,\n      name: name\n    });\n  });\n  return placesItem;\n}\n;\n\n//Функция удаления карточки\nfunction removeCard(cardElement) {\n  cardElement.remove();\n}\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/components/card.js?");

/***/ }),

/***/ "./src/scripts/components/editProfile.js":
/*!***********************************************!*\
  !*** ./src/scripts/components/editProfile.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   editProfile: () => (/* binding */ editProfile)\n/* harmony export */ });\nfunction editProfile(inputNameFormProfile, inputDescriptionFormProfile, profileTitleEl, profileDescriptionEl) {\n  profileTitleEl.textContent = inputNameFormProfile.value;\n  profileDescriptionEl.textContent = inputDescriptionFormProfile.value;\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/components/editProfile.js?");

/***/ }),

/***/ "./src/scripts/components/popup.js":
/*!*****************************************!*\
  !*** ./src/scripts/components/popup.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closePopup: () => (/* binding */ closePopup),\n/* harmony export */   openPopup: () => (/* binding */ openPopup)\n/* harmony export */ });\nfunction openPopup(popupEl) {\n  if (!popupEl) {\n    return;\n  }\n  ;\n  if (!popupEl.classList.contains('popup_is-opened')) {\n    popupEl.classList.add('popup_is-opened');\n    document.addEventListener('keydown', handleEscape);\n  }\n}\n;\nfunction closePopup(popupEl) {\n  if (!popupEl) {\n    return;\n  }\n  ;\n  if (popupEl.classList.contains('popup_is-opened')) {\n    popupEl.classList.remove('popup_is-opened');\n    document.removeEventListener('keydown', handleEscape);\n  }\n}\n;\nfunction handleEscape(evt) {\n  if (evt.key === 'Escape') {\n    var popup = document.querySelector('.popup_is-opened');\n    closePopup(popup);\n  }\n}\n;\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/components/popup.js?");

/***/ }),

/***/ "./src/scripts/utils/validation.js":
/*!*****************************************!*\
  !*** ./src/scripts/utils/validation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearValidation: () => (/* binding */ clearValidation),\n/* harmony export */   enableValidation: () => (/* binding */ enableValidation)\n/* harmony export */ });\nvar showInputError = function showInputError(settings, formEl, inputSelector, errorMessage) {\n  var errorElement = formEl.querySelector(\".\".concat(inputSelector.name, \"-error\"));\n  inputSelector.classList.add(settings.inputErrorClass);\n  errorElement.textContent = errorMessage;\n  errorElement.classList.add(settings.errorClass);\n};\nvar hideInputError = function hideInputError(settings, formEl, inputSelector) {\n  var errorElement = formEl.querySelector(\".\".concat(inputSelector.name, \"-error\"));\n  inputSelector.classList.remove(settings.inputErrorClass);\n  errorElement.classList.remove(settings.errorClass);\n  errorElement.textContent = '';\n};\nvar checkInputValidity = function checkInputValidity(settings, formEl, inputSelector) {\n  var isCustomRulesValid = true;\n  var errorMessage = inputSelector.validationMessage;\n  if (!inputSelector.value.match(settings.rules[inputSelector.name])) {\n    isCustomRulesValid = false;\n    errorMessage = inputSelector.getAttribute('data-error-message');\n  }\n  if (!inputSelector.validity.valid || !isCustomRulesValid) {\n    showInputError(settings, formEl, inputSelector, errorMessage);\n    return false;\n  } else {\n    hideInputError(settings, formEl, inputSelector);\n    return true;\n  }\n  ;\n};\nvar toggleButtonState = function toggleButtonState(settings, submitButtonSelector, formEl, inputList) {\n  if (hasInvalidInput(settings, formEl, inputList)) {\n    submitButtonSelector.classList.add(settings.inactiveButtonClass);\n    submitButtonSelector.disabled = true;\n  } else {\n    submitButtonSelector.classList.remove(settings.inactiveButtonClass);\n    submitButtonSelector.disabled = false;\n  }\n  ;\n};\nvar hasInvalidInput = function hasInvalidInput(settings, formEl, inputList) {\n  return inputList.some(function (inputSelector) {\n    return !checkInputValidity(settings, formEl, inputSelector);\n  });\n};\nvar setEventListeners = function setEventListeners(settings, formEl) {\n  var inputList = Array.from(formEl.querySelectorAll(settings.inputSelector));\n  var submitButtonSelector = formEl.querySelector(settings.submitButtonSelector);\n  inputList.forEach(function (inputSelector) {\n    inputSelector.addEventListener('input', function () {\n      toggleButtonState(settings, submitButtonSelector, formEl, inputList);\n    });\n  });\n};\nvar clearValidation = function clearValidation(settings, formEl) {\n  var inputList = Array.from(formEl.querySelectorAll(settings.inputSelector));\n  var submitButtonSelector = formEl.querySelector(settings.submitButtonSelector);\n  toggleButtonState(settings, submitButtonSelector, formEl, inputList);\n  inputList.forEach(function (inputSelector) {\n    hideInputError(settings, formEl, inputSelector);\n  });\n};\nvar enableValidation = function enableValidation(settings) {\n  var formList = Array.from(document.querySelectorAll(settings.formSelector));\n  formList.forEach(function (formEl) {\n    formEl.addEventListener('submit', function (evt) {\n      evt.preventDefault();\n    });\n    setEventListeners(settings, formEl);\n  });\n};\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/utils/validation.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/pages/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
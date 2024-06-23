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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _scripts_utils_cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/utils/cards.js */ \"./src/scripts/utils/cards.js\");\n/* harmony import */ var _scripts_components_popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/components/popup.js */ \"./src/scripts/components/popup.js\");\n/* harmony import */ var _scripts_components_card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/components/card.js */ \"./src/scripts/components/card.js\");\n/* harmony import */ var _scripts_components_editProfile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/components/editProfile.js */ \"./src/scripts/components/editProfile.js\");\n// подключил стили и картинки\n\n\n\n\n\n\n// const popupEl = document.querySelector('.popup_is-opened');\nvar templateCard = document.querySelector('#card-template').content;\nvar cardList = document.querySelector('.places__list');\nvar profileEditButtonEl = document.querySelector('.profile__edit-button');\nvar addCardButtonEl = document.querySelector('.profile__add-button');\nvar popupImageEl = document.querySelector('.popup__image');\nvar captionIFullImagePopup = document.querySelector('.popup__caption');\nvar profileTitleEl = document.querySelector('.profile__title');\nvar profileDescriptionEl = document.querySelector('.profile__description');\nvar forms = {\n  profile: document.forms['edit-profile'],\n  card: document.forms['new-place']\n};\nvar inputNameFormProfile = forms.profile.elements.name;\nvar inputDescriptionFormProfile = forms.profile.elements.description;\nvar inputNameFormNewCard = forms.card.elements['place-name'];\nvar inputLinkFormNewCard = forms.card.elements.link;\nvar popupTypeNewCard = document.querySelector('.popup_type_new-card');\nvar popupFullImage = document.querySelector('.popup_type_image');\nvar popupTypeEdit = document.querySelector('.popup_type_edit');\nvar popups = document.querySelectorAll('.popup');\nfunction openPopupFullImage(data) {\n  captionIFullImagePopup.textContent = data.name;\n  popupImageEl.alt = data.name;\n  popupImageEl.src = data.link;\n  (0,_scripts_components_popup_js__WEBPACK_IMPORTED_MODULE_2__.openPopup)(popupFullImage);\n}\n\n//Функция добавления карточки\nfunction addCard(item, cardList) {\n  cardList.prepend(item);\n}\n;\n\n// Вывести карточки на страницу\n_scripts_utils_cards_js__WEBPACK_IMPORTED_MODULE_1__.initialCards.forEach(function (item) {\n  var createdCard = (0,_scripts_components_card_js__WEBPACK_IMPORTED_MODULE_3__.createCard)(item, _scripts_components_card_js__WEBPACK_IMPORTED_MODULE_3__.removeCard, _scripts_components_card_js__WEBPACK_IMPORTED_MODULE_3__.likeToggle, templateCard, openPopupFullImage);\n  addCard(createdCard, cardList);\n});\nprofileEditButtonEl.addEventListener('click', function (evt) {\n  inputNameFormProfile.value = profileTitleEl.textContent;\n  inputDescriptionFormProfile.value = profileDescriptionEl.textContent;\n  (0,_scripts_components_popup_js__WEBPACK_IMPORTED_MODULE_2__.openPopup)(popupTypeEdit);\n});\naddCardButtonEl.addEventListener('click', function (evt) {\n  (0,_scripts_components_popup_js__WEBPACK_IMPORTED_MODULE_2__.openPopup)(popupTypeNewCard);\n});\npopups.forEach(function (popup) {\n  popup.addEventListener('click', function (evt) {\n    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {\n      (0,_scripts_components_popup_js__WEBPACK_IMPORTED_MODULE_2__.closePopup)(popup);\n    }\n  });\n});\n\n//редактирование профиля\nforms.profile.addEventListener('submit', function (evt) {\n  evt.preventDefault();\n  (0,_scripts_components_editProfile_js__WEBPACK_IMPORTED_MODULE_4__.editProfile)(inputNameFormProfile, inputDescriptionFormProfile, profileTitleEl, profileDescriptionEl);\n  forms.profile.reset();\n  (0,_scripts_components_popup_js__WEBPACK_IMPORTED_MODULE_2__.closePopup)(popupTypeEdit);\n});\n\n//добавление карточки\nforms.card.addEventListener('submit', function (evt) {\n  evt.preventDefault();\n  var newCard = (0,_scripts_components_card_js__WEBPACK_IMPORTED_MODULE_3__.createCard)({\n    link: inputLinkFormNewCard.value,\n    name: inputNameFormNewCard.value\n  }, _scripts_components_card_js__WEBPACK_IMPORTED_MODULE_3__.removeCard, _scripts_components_card_js__WEBPACK_IMPORTED_MODULE_3__.likeToggle, templateCard, openPopupFullImage);\n  addCard(newCard, cardList);\n  forms.card.reset();\n  (0,_scripts_components_popup_js__WEBPACK_IMPORTED_MODULE_2__.closePopup)(popupTypeNewCard);\n});\n\n//# sourceURL=webpack://mesto-project-ff/./src/index.js?");

/***/ }),

/***/ "./src/scripts/components/card.js":
/*!****************************************!*\
  !*** ./src/scripts/components/card.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   likeToggle: () => (/* binding */ likeToggle),\n/* harmony export */   removeCard: () => (/* binding */ removeCard)\n/* harmony export */ });\nfunction createCard(_ref, removeCard, likeToggle, templateCard, openPopupFullImage) {\n  var link = _ref.link,\n    name = _ref.name;\n  var placesItem = templateCard.querySelector('.places__item').cloneNode(true);\n  var cardImageEl = placesItem.querySelector('.card__image');\n  cardImageEl.src = link;\n  cardImageEl.alt = name;\n  placesItem.querySelector('.card__title').textContent = name;\n  var deleteButton = placesItem.querySelector('.card__delete-button');\n  deleteButton.addEventListener('click', removeCard);\n  placesItem.addEventListener('click', likeToggle);\n  cardImageEl.addEventListener('click', function () {\n    return openPopupFullImage({\n      link: link,\n      name: name\n    });\n  });\n  return placesItem;\n}\n;\n\n//Функция удаления карточки\nfunction removeCard(evt) {\n  var deleteCard = evt.target.closest('.places__item');\n  deleteCard.remove();\n}\n\n// Лайк\nfunction likeToggle(evt) {\n  if (evt.target.classList.contains('card__like-button')) {\n    evt.target.classList.toggle('card__like-button_is-active');\n  }\n  ;\n}\n;\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/components/card.js?");

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

/***/ "./src/scripts/utils/cards.js":
/*!************************************!*\
  !*** ./src/scripts/utils/cards.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialCards: () => (/* binding */ initialCards)\n/* harmony export */ });\nvar initialCards = [{\n  name: \"Архыз\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg\"\n}, {\n  name: \"Челябинская область\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg\"\n}, {\n  name: \"Иваново\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg\"\n}, {\n  name: \"Камчатка\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg\"\n}, {\n  name: \"Холмогорский район\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg\"\n}, {\n  name: \"Байкал\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg\"\n}];\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/utils/cards.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
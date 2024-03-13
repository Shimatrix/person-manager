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

/***/ "./src/components/Clock.ts":
/*!*********************************!*\
  !*** ./src/components/Clock.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Clock = void 0;\nclass Clock {\n    constructor(timeElementId, dateElementId) {\n        const timeElement = document.getElementById(timeElementId);\n        const dateElement = document.getElementById(dateElementId);\n        if (!timeElement || !dateElement) {\n            throw new Error(`Элемент с ID ${timeElementId} или ${dateElementId} не найден`);\n        }\n        this.timeElement = timeElement;\n        this.dateElement = dateElement;\n        setInterval(() => {\n            this.updateTime();\n            this.updateDate(); // обновляем дату каждую секунду\n        }, 1000); // устанавливается интервал с помощью функции setInterval, которая будет вызывать метод updateTime и метод updateDate каждую секунду\n    }\n    updateTime() {\n        const now = new Date();\n        const hours = this.formatTime(now.getHours());\n        const minutes = this.formatTime(now.getMinutes());\n        const seconds = this.formatTime(now.getSeconds());\n        this.timeElement.textContent = `${hours}:${minutes}:${seconds}`;\n    }\n    updateDate() {\n        const now = new Date();\n        const year = now.getFullYear();\n        const month = now.toLocaleString('en-US', { month: 'long' });\n        const day = this.formatTime(now.getDate());\n        this.dateElement.textContent = `${year} ${month} ${day}`;\n    }\n    formatTime(time) {\n        return time < 10 ? `0${time}` : time.toString();\n    }\n}\nexports.Clock = Clock;\n\n\n//# sourceURL=webpack:///./src/components/Clock.ts?");

/***/ }),

/***/ "./src/components/Counter.ts":
/*!***********************************!*\
  !*** ./src/components/Counter.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Counter = void 0;\nclass Counter {\n    constructor(containerId, listId) {\n        var _a;\n        this.container = document.getElementById(containerId);\n        this.countElement = (_a = this.container) === null || _a === void 0 ? void 0 : _a.querySelector('#count');\n        this.listElement = document.getElementById(listId);\n        this.updateCounter();\n        const observer = new MutationObserver(() => {\n            this.updateCounter();\n        });\n        observer.observe(this.listElement, { childList: true });\n    }\n    updateCounter() {\n        const counter = this.listElement.children.length;\n        if (!counter) {\n            this.countElement.textContent = '0';\n        }\n        else {\n            this.countElement.textContent = counter.toString();\n        }\n    }\n}\nexports.Counter = Counter;\n\n\n//# sourceURL=webpack:///./src/components/Counter.ts?");

/***/ }),

/***/ "./src/components/Popup.ts":
/*!*********************************!*\
  !*** ./src/components/Popup.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Popup = void 0;\nclass Popup {\n    constructor(popupSelector) {\n        var _a;\n        this.closeByEsc = false;\n        this.handleEscClose = (event) => {\n            if (event && event.key === 'Escape') {\n                this.close();\n            }\n        };\n        this.popup = document.querySelector(popupSelector);\n        this.closeButton = (_a = this.popup) === null || _a === void 0 ? void 0 : _a.querySelector('.popup__close');\n    }\n    open() {\n        var _a;\n        document.addEventListener('keydown', this.handleEscClose);\n        (_a = this.popup) === null || _a === void 0 ? void 0 : _a.classList.add('popup_open');\n    }\n    close() {\n        var _a;\n        document.removeEventListener('keydown', this.handleEscClose);\n        (_a = this.popup) === null || _a === void 0 ? void 0 : _a.classList.remove('popup_open');\n    }\n    setEventListener() {\n        var _a, _b;\n        (_a = this.closeButton) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {\n            this.close();\n        });\n        (_b = this.popup) === null || _b === void 0 ? void 0 : _b.addEventListener('mousedown', (event) => {\n            if (event.target === event.currentTarget) {\n                this.close();\n            }\n        });\n    }\n}\nexports.Popup = Popup;\n\n\n//# sourceURL=webpack:///./src/components/Popup.ts?");

/***/ }),

/***/ "./src/components/User.ts":
/*!********************************!*\
  !*** ./src/components/User.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.User = void 0;\nclass User {\n    constructor(data, templateId, _infoUserUp, _infoUserUnder) {\n        this._element = null;\n        this._infoUserUp = [];\n        this._infoUserUnder = [];\n        this.name = data.name;\n        this.email = data.email;\n        this.birthDay = data.birthDay;\n        this.job = data.job;\n        this.salary = data.salary;\n        this.experience = data.experience;\n        this.templateId = templateId;\n        this._infoUserUp = _infoUserUp;\n        this._infoUserUnder = _infoUserUnder;\n    }\n    getTemplate() {\n        var _a;\n        const template = document.querySelector(this.templateId);\n        return (_a = template === null || template === void 0 ? void 0 : template.content.querySelector('.member__person')) === null || _a === void 0 ? void 0 : _a.cloneNode(true);\n    }\n    createCardUser() {\n        this._element = this.getTemplate();\n        this._element.querySelector('.member__title').textContent = this.changeName();\n        this._element.querySelector('.member__email').textContent = this.email;\n        this.setEventListener();\n        return this._element;\n    }\n    setEventListener() {\n        var _a, _b, _c;\n        if (!this._element) {\n            return console.error('Ошибка: не найден элемент member__person');\n        }\n        (_a = this._element) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (event) => {\n            this.handleActive(event);\n        });\n        (_c = (_b = this._element) === null || _b === void 0 ? void 0 : _b.querySelector('.member__delete')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {\n            this.handleDelete();\n        });\n    }\n    handleActive(event) {\n        const selected = event.currentTarget;\n        if (selected !== User.activeUser) {\n            // Деактивируем текущего активного пользователя, если он есть\n            if (User.activeUser) {\n                User.activeUser.classList.remove('member__person_active');\n            }\n            // Активируем нового пользователя\n            selected.classList.add('member__person_active');\n            User.activeUser = selected;\n            this.refreshInfoUser();\n        }\n    }\n    handleDelete() {\n        if (!this._element) {\n            return console.error('Ошибка: не найден элемент member__person');\n        }\n        this._element.remove();\n        this.clearUserInfo();\n    }\n    clearUserInfo() {\n        this._infoUserUp.forEach(item => item.textContent = '');\n        this._infoUserUnder.forEach(item => item.textContent = '');\n    }\n    changeName() {\n        return this.name.split(' ').slice(0, 2).join(' ');\n    }\n    calculateAge() {\n        const birthDayParts = this.birthDay.split(\".\"); // Разбиваем строку даты рождения на составляющие части по разделителю \".\" и сохраняем в массив\n        const birthDate = new Date(// Создаем объект даты рождения, используя полученные значения из birthDayParts\n        parseInt(birthDayParts[2]), parseInt(birthDayParts[1]) - 1, parseInt(birthDayParts[0]));\n        const today = new Date(); // Создаем объект сегодняшней даты\n        let age = today.getFullYear() - birthDate.getFullYear(); // Вычисляем разницу между текущим годом и годом рождения.\n        const isBirthdayPassed = // Проверяем, прошел ли уже день рождения в этом году.\n         today.getMonth() > birthDate.getMonth() ||\n            (today.getMonth() === birthDate.getMonth() &&\n                today.getDate() >= birthDate.getDate());\n        if (!isBirthdayPassed) {\n            age--;\n        } // Если день рождения еще не наступил в этом году, уменьшаем возраст на 1.\n        return age;\n    }\n    calculateBirthDay() {\n        return this.birthDay.split('.').slice(0, 2).join('.');\n    }\n    refreshInfoUser() {\n        const labelsUp = [\n            `${this.name}`,\n            `${this.calculateAge()}`,\n            `${this.job}`,\n            `${this.experience}`,\n            `15 октября 2029`,\n            `${(this.experience / 10) * this.calculateAge()}%`,\n        ];\n        this._infoUserUp.forEach((item, index) => {\n            item.textContent = labelsUp[index];\n        });\n        const labelsUnder = [\n            `MSC`,\n            `${this.calculateBirthDay()}`,\n            `${this.salary}`\n        ];\n        this._infoUserUnder.forEach((item, index) => {\n            item.textContent = labelsUnder[index];\n        });\n    }\n}\nexports.User = User;\nUser.activeUser = null; // Статическое свойство для отслеживания текущего активного пользователя\n\n\n//# sourceURL=webpack:///./src/components/User.ts?");

/***/ }),

/***/ "./src/cosntants/constants.ts":
/*!************************************!*\
  !*** ./src/cosntants/constants.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.initialUsers = void 0;\nexports.initialUsers = [\n    {\n        name: 'Иванов Иван Иванович',\n        birthDay: '15.06.1990',\n        job: 'CEO проекта.',\n        salary: 250000,\n        experience: 5,\n        email: 'myEmail@gmail.com'\n    },\n    {\n        name: 'Петров Петя Петрович',\n        birthDay: '03.11.1983',\n        job: 'Product manager',\n        salary: 150000,\n        experience: 3,\n        email: 'petya@gmail.com'\n    },\n    {\n        name: 'Чеблять Коля Петрович',\n        birthDay: '03.11.1991',\n        job: 'developer',\n        salary: 120000,\n        experience: 1,\n        email: 'petya@gmail.com'\n    }\n];\n\n\n//# sourceURL=webpack:///./src/cosntants/constants.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Popup_1 = __webpack_require__(/*! ./components/Popup */ \"./src/components/Popup.ts\");\nconst Clock_1 = __webpack_require__(/*! ./components/Clock */ \"./src/components/Clock.ts\");\nconst Counter_1 = __webpack_require__(/*! ./components/Counter */ \"./src/components/Counter.ts\");\nconst User_1 = __webpack_require__(/*! ./components/User */ \"./src/components/User.ts\");\nconst constants_1 = __webpack_require__(/*! ./cosntants/constants */ \"./src/cosntants/constants.ts\");\n//инстансы\nnew Clock_1.Clock('time-active', 'date-active');\nconst popup = new Popup_1.Popup('.popup');\nconst counter = new Counter_1.Counter('counter', 'user-list');\n//переменные\nconst addMember = document.querySelector('.member__add');\nconst usersList = document.querySelector('#user-list');\nconst infoUserUp = Array.from(document.querySelectorAll(\".info__text\")); //6 полей\nconst infoUserUnder = Array.from(document.querySelectorAll(\".info2__subtitle\")); //3 поля\n//методы инстансов\npopup.setEventListener();\ncounter.updateCounter();\n//слушатели\naddMember === null || addMember === void 0 ? void 0 : addMember.addEventListener('click', () => {\n    popup.open();\n});\n//функции\nconst createNewUser = (data) => {\n    const user = new User_1.User(data, '#user-card', infoUserUp, infoUserUnder);\n    return user.createCardUser();\n};\nconst addInitialCards = (data) => {\n    const cardElement = createNewUser(data);\n    if (usersList) {\n        usersList.append(cardElement);\n    }\n};\nconstants_1.initialUsers.forEach((user) => {\n    addInitialCards(user);\n});\n// import { Modal, UserPrewiew, UserFullInfo } from './components/common';\n// import { usersInfo } from \"./cosntants/constants\";\n// import { Clock } from \"./components/clock\";\n// import { UserManager } from \"./components/addUser\";\n// //работа модалки\n// const button = document.querySelector(\".member__add\");\n// const popup = document.querySelector(\".popup\");\n// if (popup instanceof HTMLElement) {\n//   const modalka = new Modal(popup);\n//   button?.addEventListener(\"click\", () => {\n//     modalka.open();\n//   });\n// } else {\n//   console.error(\"Ошибка: переменная popup не является HTMLElement.\");\n// }\n// let cardCount = 0; // Создаем переменную для счетчика карточек\n// //заполнить инфу\n// usersInfo.forEach((obj) => {\n//     const user = new UserPrewiew(obj.name, obj.email);\n//     const cardUser = user.createCardUser() // Создаем карточку пользователя\n//     const changeUser = new UserFullInfo(obj.name, obj.email, obj.birthDay, obj.job, obj.salary, obj.experience);\n//     const counter = document.querySelector('.member__total-bold');\n//     if (cardUser) {\n//         user.setEventListener(cardUser, changeUser); // Устанавливаем обработчики на клик и на удаление карточки\n//         document.querySelector('#user-list')?.append(cardUser); // Добавляем карточку пользователя на страницу\n//         cardCount++;\n//     } else {\n//         console.log('Не нашлись элементы member__title и member__email')\n//     }\n//     if (counter) {\n//       counter.textContent = cardCount.toString(); // Обновляем количество карточек пользователей\n//     }\n// });\n// //активное время на странице\n// new Clock('time-active', 'date-active');\n// const form = document.querySelector('.form');\n// if (form) {\n//     form.addEventListener('submit', (event) => {\n//         event.preventDefault(); // Предотвращаем стандартное поведение отправки формы\n//         UserManager.addUser(form as HTMLFormElement);\n//     });\n// }\n\n\n//# sourceURL=webpack:///./src/index.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
import './blocks/pages/style.css';
import { Popup } from "./components/Popup";
import { Clock } from "./components/clock";
import { Counter } from "./components/Counter";
import { User } from "./components/User";
import { IUser, IValidation } from "./types/types";
import { initialUsers } from "./cosntants/constants";
import { Validation } from "./components/validation";

//валидация
const form = document.querySelector<HTMLFormElement>('.form');
const formValidationConfig: IValidation = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.popup__button',
  inActiveButtonClass: 'popup__button_type_disabled',
  inputErrorClass: 'form__input_type_error'
}

//инстансы
new Clock('time-active', 'date-active');
const popup = new Popup('.popup');
const counter = new Counter('counter', 'user-list');
const validation = new Validation(formValidationConfig, form as HTMLFormElement);

//константы
const addMember = document.querySelector<HTMLButtonElement>('.member__add');
const usersList = document.querySelector<HTMLElement>('#user-list');
const infoUserUp = Array.from(document.querySelectorAll(".info__text")) as HTMLElement[]; //6 полей
const infoUserUnder = Array.from(document.querySelectorAll(".info2__subtitle")) as HTMLElement[]; //3 поля
const placeholder = document.querySelector('.about__placeholder') as HTMLElement;

//методы инстансов
popup.setEventListener();
counter.updateCounter();
validation.enableValidation();

//слушатели
addMember?.addEventListener('click', () => {
    popup.open();
});


//функции
const createNewUser = (data: IUser) => {
  const user = new User(data, '#user-card', infoUserUp, infoUserUnder, placeholder);
  return user.createCardUser();
}

const addInitialCards = (data: IUser) => {
    const cardElement = createNewUser(data);
    if (usersList) {
        usersList.append(cardElement);
    }
}

initialUsers.forEach((user) => {
  addInitialCards(user);
});

const addUserWithForm = (data: IUser) => {
    const cardElement = createNewUser(data);
    if (usersList) {
        usersList.append(cardElement);
    }
}

form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const userData = {
        name: formData.get('name') as string,
        birthDay: formData.get('birthDay') as string,
        email: formData.get('email') as string,
        job: formData.get('job') as string,
        salary: parseInt(formData.get('salary') as string),
        experience: parseInt(formData.get('experience') as string)
    }
    addUserWithForm(userData);
    popup.close();
    form.reset();
});

import { Modal, UserPrewiew, UserFullInfo } from "./components/common";
import { defaultUser } from "./cosntants/constants";
import { Clock } from "./components/clock";

//работа модалки
const button = document.querySelector(".member__add");
const popup = document.querySelector(".popup");

if (popup instanceof HTMLElement) {
  const modalka = new Modal(popup);
  button?.addEventListener("click", () => {
    modalka.open();
  });
} else {
  console.error("Ошибка: переменная popup не является HTMLElement.");
}

//заполнить превью слева
const createDefaultUserPreview = new UserPrewiew(defaultUser.name, defaultUser.email);
const getInfoPreview = createDefaultUserPreview.getUserInfoForPrewiew();
const memberTitle: HTMLParagraphElement | null = document.querySelector(".member__title");
const memberEmail: HTMLParagraphElement | null = document.querySelector(".member__email");

if (memberTitle && memberEmail) {
  memberTitle.textContent = createDefaultUserPreview.changeName(getInfoPreview.name);
  memberEmail.textContent = getInfoPreview.email;
} else {
  console.log("Ошибка: не найдено поле имени или емейла");
}

//заполнить 6 полей
const createDefaultUserFullInfo = new UserFullInfo(
    defaultUser.name, defaultUser.email, defaultUser.birthDay, defaultUser.job, defaultUser.salary, defaultUser.experience
);
const infoFullText = Array.from(document.querySelectorAll(".info__text")) as HTMLElement[];

const labels = [
  `${createDefaultUserFullInfo.name}`,
  `${createDefaultUserFullInfo.calculateAge(createDefaultUserFullInfo.birthDay)}`,
  `${createDefaultUserFullInfo.job}`,
  `${createDefaultUserFullInfo.experience}`,
  `15 октября 2029`,
  `${(createDefaultUserFullInfo.experience / 10) * createDefaultUserFullInfo.calculateAge(createDefaultUserFullInfo.birthDay)}%`,
];

infoFullText.forEach((item, index) => {
  item.textContent = labels[index];
});

//заполнить 3 поля
const getUnderInfo = Array.from(document.querySelectorAll(".info2__subtitle")) as HTMLElement[];

const underLabels = [
    `MSC`,
    `${createDefaultUserFullInfo.calculateBirthDay(createDefaultUserFullInfo.birthDay)}`,
    `${createDefaultUserFullInfo.salary}`
]

getUnderInfo.forEach((item, index) => {
    item.textContent = underLabels[index];
  });

//активное время на странице
new Clock('time-active');

// const userList = document.querySelector('#user-list');
// const cardUser = createDefaultUserFullInfo.createCardUser() as HTMLElement;
// userList?.append(cardUser)

// const nastya = new UserFullInfo('SHLUHA', 'SHLUHA@gmal.nahui', '21.11.1111', 'PUTANA', 112331, 1)
// const newNastya = nastya.createCardUser() as HTMLElement;
// userList?.append(newNastya)


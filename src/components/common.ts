import { IModal, IUserFullInfo, IUserPrewiew } from "../types/types";

export class UserPrewiew implements IUserPrewiew {
    name: string;
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    getUserInfoForPrewiew() {
        return {
            name: this.name,
            email: this.email
        }
    }

    changeName(name: string): string {
        const correctName = name.split(' ').slice(0,2).join(' ')
        return correctName
    }
}

export class UserFullInfo extends UserPrewiew implements IUserFullInfo {
    birthDay: string;
    job: string;
    salary: number;
    experience: number;

    constructor(name: string, email: string, birthDay: string, job: string, salary: number, experience: number) {
        super(name, email)
        this.birthDay = birthDay;
        this.job = job;
        this.salary = salary;
        this.experience = experience;
    }

    getUserInfoForFull() {
        return {
            name: this.name,
            email: this.email,
            birthDay: this.birthDay,
            job: this.job,
            salary: this.salary,
            experience: this.experience
        }
    }

    calculateAge(birthDay: string): number {
        const birthDayParts = birthDay.split("."); // Разбиваем строку даты рождения на составляющие части по разделителю "." и сохраняем в массив
        const birthDate = new Date( // Создаем объект даты рождения, используя полученные значения из birthDayParts
          parseInt(birthDayParts[2]),
          parseInt(birthDayParts[1]) - 1,
          parseInt(birthDayParts[0])
        );
        const today = new Date(); // Создаем объект сегодняшней даты
        let age = today.getFullYear() - birthDate.getFullYear(); // Вычисляем разницу между текущим годом и годом рождения.
        const isBirthdayPassed = // Проверяем, прошел ли уже день рождения в этом году.
          today.getMonth() > birthDate.getMonth() ||
          (today.getMonth() === birthDate.getMonth() &&
            today.getDate() >= birthDate.getDate());
    
        if (!isBirthdayPassed) {age--;} // Если день рождения еще не наступил в этом году, уменьшаем возраст на 1.
        return age;
      }

    calculateBirthDay(birthDay: string) {
        return birthDay.split('.').slice(0,2).join('.')
    }

    getTemplate() {
        const userTemplate: HTMLTemplateElement | null = document.querySelector('#user-card') as HTMLTemplateElement;
        
        return userTemplate.content.cloneNode(true) as HTMLElement;
    }

    createCardUser() {
        const temlate = this.getTemplate();

        const nameUserCard = temlate.querySelector('.member__title');
        const emailUserCard = temlate.querySelector('.member__email');

        if (nameUserCard && emailUserCard) {
            nameUserCard.textContent = this.name;
            emailUserCard.textContent = this.email;
            return temlate;
        } else {
            console.log('Не нашлись элементы member__title и member__email')
        }
    }
}

export class Modal implements IModal {
    content: HTMLElement;
    protected closeButton: HTMLButtonElement;

    constructor(content: HTMLElement) {
        this.content = content;
        this.closeButton = content.querySelector('.popup__close') as HTMLButtonElement;
        if (this.closeButton) {
            this.closeButton.addEventListener('click', this.close.bind(this))
        } else {
            console.error('Ошибка: кнопка закрытия не найдена в контенте модального окна.');
        }
    }

    open() {
        this.content.classList.add('popup_open');
    }

    close() {
        this.content.classList.remove('popup_open');
    }
}


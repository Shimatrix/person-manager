import { IUser } from "../types/types";

export class User implements IUser {
    name: string;
    email: string;
    birthDay: string;
    job: string;
    salary: number;
    experience: number;
    templateId: string;
    private _element: HTMLElement | null = null;
    private _infoUserUp: HTMLElement[] = [];
    private _infoUserUnder: HTMLElement[] = [];
    private _placeholder: HTMLElement | null = null;
    static activeUser: HTMLElement | null = null; // Статическое свойство для отслеживания текущего активного пользователя

    constructor(data: IUser, templateId: string, _infoUserUp: HTMLElement[], _infoUserUnder: HTMLElement[], _placeholder: HTMLElement) {
        this.name = data.name;
        this.email = data.email;
        this.birthDay = data.birthDay;
        this.job = data.job;
        this.salary = data.salary;
        this.experience = data.experience;
        this.templateId = templateId;
        this._infoUserUp = _infoUserUp;
        this._infoUserUnder = _infoUserUnder;
        this._placeholder = _placeholder;
    }

    getTemplate(): HTMLElement {
        const template = document.querySelector<HTMLTemplateElement>(this.templateId);
        return template?.content.querySelector('.member__person')?.cloneNode(true) as HTMLElement;
    }

    createCardUser(): HTMLElement {
        this._element = this.getTemplate();
        this._element.querySelector('.member__title')!.textContent = this.changeName();
        this._element.querySelector('.member__email')!.textContent = this.email;
        this.setEventListener();
        return this._element;
    }

    setEventListener() {
        if (!this._element) {
            return console.error('Ошибка: не найден элемент member__person');
        }
        this._element?.addEventListener('click', (event) => {
            this.handleActive(event);
        });
        this._element?.querySelector('.member__delete')?.addEventListener('click', () => {
            this.handleDelete();
        });
    }
    
    private handleActive(event: MouseEvent): void {
        const selected = event.currentTarget as HTMLElement;
        if (selected !== User.activeUser) {
            // Деактивируем текущего активного пользователя, если он есть
            if (User.activeUser) {
                User.activeUser.classList.remove('member__person_active');
            }
            // Активируем нового пользователя
            selected.classList.add('member__person_active');
            User.activeUser = selected;
            this.refreshInfoUser();
            this._placeholder?.classList.add('about__placeholder_disabled');
        }
    }

    private handleDelete(): void {
        if (!this._element) {
            return console.error('Ошибка: не найден элемент member__person');
        }
        this._element.remove();
        this.clearUserInfo();
        this._placeholder?.classList.remove('about__placeholder_disabled');
    }

    private clearUserInfo(): void {
        this._infoUserUp.forEach(item => item.textContent = '');
        this._infoUserUnder.forEach(item => item.textContent = '');
    }

    changeName(): string {
        return this.name.split(' ').slice(0,2).join(' ');
    }

    calculateAge(): number {
        const birthDayParts = this.birthDay.split("."); // Разбиваем строку даты рождения на составляющие части по разделителю "." и сохраняем в массив
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

    calculateBirthDay(): string {
        return this.birthDay.split('.').slice(0,2).join('.')
    }

    refreshInfoUser() {
        const labelsUp = [
        `${this.name}`,
        `${this.calculateAge()}`,
        `${this.job}`,
        `${this.experience}`,
        `15 октября 2029`,
        `${(this.experience / 10) * this.calculateAge()}%`,
        ];

        this._infoUserUp.forEach((item, index) => {
            item.textContent = labelsUp[index];
        });

        const labelsUnder = [
        `MSC`,
        `${this.calculateBirthDay()}`,
        `${this.salary}`
        ]

        this._infoUserUnder.forEach((item, index) => {
            item.textContent = labelsUnder[index];
        });
    }
}
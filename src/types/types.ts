export interface IUser {
    name: string;
    email: string;
    birthDay: string;
    job: string;
    salary: number;
    experience: number;
}

export interface IPopup {
    popup: HTMLElement | null;
    open(): void;
    close(): void;
    handleEscClose(event: KeyboardEvent): void;
    setEventListener(): void;
}

export interface IClock {
    timeElement: HTMLElement;
    dateElement: HTMLElement;
    updateTime(): void;
    updateDate(): void;
    formatTime(time: number): string;
}

export interface ICounter {
    container: HTMLElement | null;
    countElement: HTMLElement;
    listElement: HTMLElement;
    updateCounter(): void;
}

export interface IValidation {
    formSelector: string;
    inputSelector: string;
    submitButtonSelector: string;
    inActiveButtonClass: string;
    inputErrorClass: string;
  }
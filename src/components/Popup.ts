import { IPopup } from "../types/types";

export class Popup implements IPopup {
    popup: HTMLElement | null;
    protected closeButton: HTMLButtonElement | null;
    closeByEsc: boolean = false;

    constructor(popupSelector: string) {
        this.popup = document.querySelector(popupSelector);
        this.closeButton = this.popup?.querySelector<HTMLButtonElement>('.popup__close')!;
    }

    open(): void {
        document.addEventListener('keydown', this.handleEscClose);
        this.popup?.classList.add('popup_open');
    }

    close(): void {
        document.removeEventListener('keydown', this.handleEscClose);
        this.popup?.classList.remove('popup_open');
    }

    handleEscClose = (event: KeyboardEvent): void => {
        if (event && event.key === 'Escape') {
            this.close();
        }
    }

    setEventListener(): void {
        this.closeButton?.addEventListener('click', () => {
            this.close();
        });
        this.popup?.addEventListener('mousedown', (event) => {
            if (event.target === event.currentTarget) {
                this.close();
            }
        });
    }
}
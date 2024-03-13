import { IValidation } from "../types/types";

export class Validation {
    private config: IValidation;
    private form: HTMLFormElement;
    private submitButton: HTMLButtonElement;
    private inputList: HTMLInputElement[];

    constructor(config: IValidation, form: HTMLFormElement) {
        this.config = config;
        this.form = form;
        this.submitButton = this.form.querySelector<HTMLButtonElement>(this.config.submitButtonSelector)!;
        this.inputList = Array.from(this.form.querySelectorAll<HTMLInputElement>(this.config.inputSelector));
    }

    showError(input: HTMLInputElement, errorMessage: string) {
        input.classList.add(this.config.inputErrorClass);
        const errorElement = this.form.querySelector<HTMLElement>(`#${input.id}-error`);
        if (errorElement) {
            errorElement.textContent = errorMessage;
        }
    }

    hideError(input: HTMLInputElement) {
        input.classList.remove(this.config.inputErrorClass);
        const errorElement = this.form.querySelector<HTMLElement>(`#${input.id}-error`);
        if (errorElement) {
            errorElement.textContent = '';
        }
    }

    checkInputValidity(input: HTMLInputElement) {
        if (!input.validity.valid) {
            this.showError(input, input.validationMessage);
        } else {
            this.hideError(input);
        }
    }

    enableSubmitButton() {
        this.submitButton.classList.remove(this.config.inActiveButtonClass);
        this.submitButton.disabled = false;
    }

    disableSubmitButton() {
        this.submitButton.classList.add(this.config.inActiveButtonClass);
        this.submitButton.disabled = true;
    }

    toggleButtonState() {
        const allInputsValid = this.inputList.every((input) => input.validity.valid);
        if (allInputsValid) {
            this.enableSubmitButton();
        } else {
            this.disableSubmitButton();
        }
    }

    setEventListener() {
        this.inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this.checkInputValidity(input);
                this.toggleButtonState();
            });
        });
    }

    enableValidation() {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.toggleButtonState();
        });

        this.form.addEventListener('reset', () => {
            this.inputList.forEach((input) => {
                this.hideError(input);
            });
            this.disableSubmitButton();
        });

        this.setEventListener();
        this.toggleButtonState();
    }
}
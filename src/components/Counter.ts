import { ICounter } from "../types/types";

export class Counter implements ICounter {
    container: HTMLElement | null;
    countElement: HTMLElement;
    listElement: HTMLElement;

    constructor(containerId: string, listId: string) {
        this.container = document.getElementById(containerId);
        this.countElement = this.container?.querySelector<HTMLElement>('#count')!;
        this.listElement = document.getElementById(listId)!;
        this.updateCounter();
        const observer = new MutationObserver(() => {
            this.updateCounter();
        });
        observer.observe(this.listElement, { childList: true });
    }

    updateCounter(): void {
        const counter = this.listElement.children.length;
        if (!counter) {
            this.countElement.textContent = '0';
        } else {
            this.countElement.textContent = counter.toString();
        }
    }
}
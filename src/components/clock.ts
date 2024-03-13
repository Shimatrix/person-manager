import { IClock } from "../types/types";

export class Clock implements IClock {
    timeElement: HTMLElement;
    dateElement: HTMLElement;

    constructor(timeElementId: string, dateElementId: string) {
        const timeElement = document.getElementById(timeElementId);
        const dateElement = document.getElementById(dateElementId);
        
        if (!timeElement || !dateElement) {
            throw new Error(`Элемент с ID ${timeElementId} или ${dateElementId} не найден`);
        }

        this.timeElement = timeElement;
        this.dateElement = dateElement;
        
        setInterval(() => {
            this.updateTime();
            this.updateDate(); // обновляем дату каждую секунду
        }, 1000); // устанавливается интервал с помощью функции setInterval, которая будет вызывать метод updateTime и метод updateDate каждую секунду
    }

    updateTime(): void {
        const now: Date = new Date();
        const hours: string = this.formatTime(now.getHours());
        const minutes: string = this.formatTime(now.getMinutes());
        const seconds: string = this.formatTime(now.getSeconds());
        this.timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    }

    updateDate(): void {
        const now: Date = new Date();
        const year: number = now.getFullYear();
        const month: string = now.toLocaleString('en-US', { month: 'long' });
        const day: string = this.formatTime(now.getDate());
        this.dateElement.textContent = `${year} ${month} ${day}`;
    }

    formatTime(time: number): string {
        return time < 10 ? `0${time}` : time.toString();
    }
}

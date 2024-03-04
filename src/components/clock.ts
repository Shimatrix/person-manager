export class Clock {
    private element: HTMLElement;

    constructor(elementId: string) {
        const element = document.getElementById(elementId);
        if (!element) {
            throw new Error(`Элемент с ID ${elementId} не найден`);
        }
        this.element = element;
        this.updateTime(); // метод updateTime для первоначального обновления времени
        setInterval(() => this.updateTime(), 1000); // устанавливается интервал с помощью функции setInterval, которая будет вызывать метод updateTime каждую секунду
    }

    private updateTime(): void {
        const now: Date = new Date();
        const hours: string = this.formatTime(now.getHours());
        const minutes: string = this.formatTime(now.getMinutes());
        const seconds: string = this.formatTime(now.getSeconds());
        this.element.textContent = `${hours}:${minutes}:${seconds}`;
    }

    private formatTime(time: number): string {
        return time < 10 ? `0${time}` : time.toString();
    }
}

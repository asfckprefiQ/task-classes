export class Counter {
    counter: number = 0;

    constructor(start?: number) {
        if (start !== undefined) {
            this.counter = start;
        }
    }

    increment(): number {
        this.counter++;
        return this.counter;
    }

    decrement(): number {
        this.counter--;
        return this.counter;
    }
}
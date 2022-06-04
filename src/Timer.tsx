export interface ITimer {
    previousTime: number;
    currentTime: number;
}

export class Timer implements ITimer {
    previousTime!: number;
    currentTime!: number;

    static defaults: ITimer = {
        previousTime: 0,
        currentTime: 0
    }

    constructor(from?: ITimer) {
        Object.assign(this, from ?? Timer.defaults);
    }

    with(changes: Partial<ITimer>): Timer {
        return Object.assign(new Timer(this), changes);
    }

    get timeDelta(): number {
        return this.currentTime - this.previousTime;
    }

    nextTick(): Timer {
        return new Timer({
            previousTime: this.currentTime,
            currentTime: Date.now()
        });
    }
}
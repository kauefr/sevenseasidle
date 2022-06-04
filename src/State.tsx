import { Resource } from "./Resource";
import { Timer } from "./Timer";

export interface IState {
    timer: Timer,
    resources: Resource[]
}

export class State implements IState {
    timer!: Timer;
    resources!: Resource[];

    static defaults: IState = {
        timer: new Timer(),
        resources: []
    }

    constructor(from?: IState) {
        Object.assign(this, from ?? State.defaults);
    }

    with(changes: Partial<IState>): State {
        return Object.assign(new State(this), changes);
    }

    static initialState(): State {
        const now = Date.now();
        return new State({
            timer: new Timer({
                previousTime: now,
                currentTime: now
            }),
            resources: [
                new Resource("gold", 0)
            ]
        });
    }
}
import { Resource } from "./Resource";
import { State } from "./State";

export type ActionTypes = "base" | "tick" | "change_resource_by_amount";

export class BaseAction {
    actionType: ActionTypes = "base";

    transform(oldState: State): State { return oldState; }
}

export class TickAction extends BaseAction {
    constructor() {
        super();
        this.actionType = "tick";
    }
    transform(oldState: State): State { return oldState; }
}
export const TICK_ACTION = new TickAction();

export class ChangeResourceByAmountAction extends BaseAction {
    targetResource: string = "";
    amount: number = 0;
    constructor(targetResource: string, amount: number) {
        super();
        this.actionType = "change_resource_by_amount";
        this.targetResource = targetResource;
        this.amount = amount;
    }
    transform(oldState: State): State {
        return oldState.with({
            resources: oldState.resources.map(r => (r.name !== this.targetResource ?
                r : new Resource(r.name, r.amount + this.amount))
                , this)
        });
    }
}
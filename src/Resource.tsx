export class Resource {
    name: string;
    amount: number;
    constructor(name: string, amount: number = 0) {
        this.name = name;
        this.amount = amount;
    }
}
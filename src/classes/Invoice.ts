//classes: 

export class Invoice {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) {}

    format() {
        // inv.client = "something else..." //produces an error because it is only readonly 
        return `${this.client} owes ₴${this.amount} for ${this.details} `
    }
}


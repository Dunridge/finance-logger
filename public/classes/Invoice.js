//classes: 
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        // inv.client = "something else..." //produces an error because it is only readonly 
        return `${this.client} owes ₴${this.amount} for ${this.details} `;
    }
}

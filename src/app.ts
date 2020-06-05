import {Invoice} from './classes/invoice.js'; 

const invOne = new Invoice("Mario", "work on the mario website", 250)
const invTwo = new Invoice("Luigi", "work on the mario website", 300)

let invoices: Invoice[] = [];
// invoices.push("hi") //this is not allowed 
invoices.push(invOne);
invoices.push(invTwo);


invoices.forEach(inv => {
    // inv.client = "something else..." //produces an error because it is only readonly 
    console.log(inv.client, inv.amount, inv.format())
})


// console.log('invoices: ', invoices);

// invOne.amount = 40;
// invTwo.client = "Max";

// console.log(invOne, invTwo);

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
        )
})
import {Invoice} from './classes/Invoice.js'; 
import {Payment} from './classes/Payment.js';
import {HasFormatter} from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance 
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values: [string, string, number]; //specify the numbers
    values = [toFrom.value, details.value, amount.valueAsNumber]
    let doc: HasFormatter;
    if(type.value === "invoice") {
        doc = new Invoice(...values); //because of the tuple defined above we can get rid of that type error 
    } else {
        doc = new Payment(...values);
    }

    list.render(doc, type.value, "end");

    console.log(doc);
})

//Generics

const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40});
// let docTwo = addUID('hi'); //this works because we haven't specified that we only want to get objects 

// console.log(docOne.name);

//enums
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON };

//generics with interfaces 

interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docThree: Resource<object> = {
    uid: 1, 
    resourceType: ResourceType.BOOK, 
    data: {name: 'shaun'}
}

const docFour: Resource<String[]> = {
    uid: 2,
    resourceType: ResourceType.PERSON,
    data: [
        'bread', 'milk'
    ]

}

console.log(docThree, docFour);

//arrays  

let arr = ["ryu", 25, true];
arr[0] = false;
arr[1] = true;

arr = [30, false, "yoshi"] //you can change the defined values 

//tuples 

let tup: [string, number, boolean] = ['ryu', 25, true]; //you cannot change a tuple after it's defined
tup[0] = 'ken';
tup[1] = 20;
tup[2] = false;

let student: [string, number];
student = ["Max", 7] 
// student = [7, "Max"]; //this produces an error because the order is wrong  
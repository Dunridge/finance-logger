import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector(".new-item-form");
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance 
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values; //specify the numbers
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values); //because of the tuple defined above we can get rid of that type error 
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
    console.log(doc);
});
//Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
// let docTwo = addUID('hi'); //this works because we haven't specified that we only want to get objects 
// console.log(docOne.name);
//enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
;
const docThree = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { name: 'shaun' }
};
const docFour = {
    uid: 2,
    resourceType: ResourceType.PERSON,
    data: [
        'bread', 'milk'
    ]
};
console.log(docThree, docFour);
//arrays  
let arr = ["ryu", 25, true];
arr[0] = false;
arr[1] = true;
arr = [30, false, "yoshi"]; //you can change the defined values 
//tuples 
let tup = ['ryu', 25, true]; //you cannot change a tuple after it's defined
tup[0] = 'ken';
tup[1] = 20;
tup[2] = false;
let student;
student = ["Max", 7];
// student = [7, "Max"]; //this produces an error because the order is wrong  

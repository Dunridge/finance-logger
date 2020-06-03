// console.log("test max 1234")

let greet: Function;

greet = () => {
    console.log("Hello, World!")
}

// greet = "hello" //produces an error 
// number | string - union type

// const add = (a: number, b: number, c: number | string = 10): void => { //by default returns void 
const add = (a: number, b: number, c: number | string = 10) => { //by default returns void 
    console.log(a + b);
    console.log(c);
}

add(5, 10, 20);

const minus = (a: number, b: number): number => {
    return a - b;
}

let result = minus(10, 7); //result will be a number 


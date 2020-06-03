"use strict";
// console.log("test max 1234")
var greet;
greet = function () {
    console.log("Hello, World!");
};
// greet = "hello" //produces an error 
// number | string - union type
// const add = (a: number, b: number, c: number | string = 10): void => { //by default returns void 
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 10, 20);
var minus = function (a, b) {
    return a - b;
};
var result = minus(10, 7); //result will be a number 

// JavaScript Variables

let age = 23; // Number
let temperature = -3.5; // Number
let name = "John"; // String
let message = "Hello, JavaScript"; //String

console.log("Message: " + message);

//Dynamic type.
let myVar = 10; // Number
myVar = "10"; // String
myVar = false; // Boolean

let isRaining = false; // or true;

//Arrays
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];

//How to iterate through the array of numbers
for (let i = 1; i <= numbers.length; i++) {
  /*if (i % 2 == 0){
        console.log(i, " Even");
    }else{
        console.log(i, " Odd");
    }*/

  const msg = i % 2 == 0 ? i + " EVEN" : i + " ODD"; // Ternary Operator
  console.log(msg);
}

for (let i of numbers) {
  const msg = i % 2 == 0 ? i + " EVEN" : i + " ODD"; // Ternary Operator
  console.log(msg);
}

//numbers.forEach(() => {});

//Objects
let person = { name: "Alice", age: 30, isStudent: true };

let nullVar = null;
let description; //Undefined

//let sum = description + 40; // NaN

description = "Hello, JS";
description = "Hello";

const API_URL = "http://localhost:8080/api/v1/tasks"; //String
//API_URL = "Hello"; // we can not modify the value of this variable

console.log("Variable: " + API_URL);

/*
let day = "Monday";
switch(day){
    case "Monday":
        console.log("This is the start ofthe week.");
        break;
    default:
        console.log("Not sure");
}*/

//Operators

let n1 = 10; //Number
let n2 = "10"; //String
//let sum = n1 + n2;

// === used to check equal value and equal type
// == used to check equal value

let isEqual = n1 === n2;
let isEqualValue = n1 == n2;

console.log("Is Equal: " + isEqual);

//Function Declaration
function greet(message) {
  //console.log(message);
  return message;
}
// What is the return type? whatever you return.

function isPositive(number) {
  return number >= 0;
}

//Function Execution
console.log(greet("Hello World"));

//Arrow Functions
const addition = (num1, num2) => num1 + num2;
const _greet = (message) => console.log(message);

//Higher-Order Function and callback
function calculate(num1, num2, operation) {
  return operation(num1, num2);
}

console.log(calculate(2, 5, addition));
_greet("Hello group");

function division(n1, n2) {
  if (n2 === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return n1 / n2;
}

try {
  console.log(division(5, 0));
} catch (error) {
  console.log("Caught an error:", error.message);
}

let text = "Hello, World!";

console.log(text.toLowerCase()); // convert to lowercase
console.log(text.toUpperCase()); // convert to uppercase
console.log(text.indexOf("World")); // index of a substring
console.log(text.slice(0, 5)); // Extract a substring

let date = new Date();
console.log(date);

let nextLectureDate = new Date("2025-03-04T09:00:00");
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

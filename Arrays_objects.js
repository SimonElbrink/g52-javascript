//Array

let numbers = [1, 2, 3, 4];

console.log(numbers[2]); // 3
console.log(numbers[20]); // undefined

numbers.push(5, 6, 7);

numbers.pop();

console.log(numbers);

const filteredArray = numbers.filter((n) => n % 2 === 0);

console.log(filteredArray);

const squaredNumbers = numbers.map((n) => n * n);

console.log(squaredNumbers);

//numbers.forEach( num => console.log(num));

let fruits = ["apple", "banana", "orange", "grape"];
fruits.splice(2, 0, "Kiwi", "Raspberry"); // used to add and remove
// after two elements add, actually index 2

console.log(fruits);

let indexOfBanana = fruits.indexOf("banana");
fruits.splice(indexOfBanana, 1);

console.log(fruits);

console.log("-----------------");

const person = {
  name: "John",
  age: 30,
  isStudent: true,
  address: {
    city: "NY",
    country: "USA",
  },
};

console.log(person.name);
console.log(person.address.city);
console.log("Is Studen: " + person.isStudent);

person["isStudent"] = false;
console.log("Is Studen: " + person.isStudent);

const menus = [{ item: "Test" }, { item: "Test 2" }];

let itemListElements = menus.map((element) => {
  let ilElement = "<li>" + element.item + "</li>";
  return ilElement;
});

console.log(itemListElements);

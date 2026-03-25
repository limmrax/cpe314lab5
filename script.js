// Variables
let name = "Alice";
let age = 21;
let major = "Computer Science";

// Log to console
console.log("Hello, " + name);
console.log("Age:", age);
console.log("Major:", major);

// Greet function
function greet(user) {
    alert("Welcome, " + user);
}
greet("Bob");

// Sum function
function sum(a, b) {
    let result = a + b;
    alert("Sum is: " + result);
}
sum(5, 7);

// Even or Odd checker
let number = prompt("Enter a number:");

if (number % 2 === 0) {
    alert(number + " is Even");
} else {
    alert(number + " is Odd");
}

// Loop through array
let fruits = ["Apple", "Banana", "Orange", "Mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
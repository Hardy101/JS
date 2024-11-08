//### #1 - Let, const, var

/*
### Basic operators

let age = 32;
let age_1 = 31;
console.log(age >= age_1);

*/

/*
### Operator Precedence
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y); */

/*
### Strings and template literals

let firstName = 'Eghosa'
let lastName = 'Ordia'
let age = 20;
const string = `Hi, My name is ${firstName}. I am ${age} of age`;
console.log(string)

*/

/* 
### Taking decisions: If/Else statements

let firstName = 'Eghosa'
let age = 20;

if (age >= 18) {
    console.log(`${firstName} is allowed to take his driver's licence test! 🕺`);
}
else{
    console.log(`${firstName} is not allowed to take his driver's licence test! 😢`);
}

*/

/* 
### Type conversion and coercion
const inputYear = "1991";
console.log(inputYear + 18); // Type coercion (on 18)
console.log(Number(inputYear) + 18, inputYear); // Type conversion (on inputYear)

console.log(typeof "Jonas");
console.log("23" * "3");
*/

/*

### Truthy and Falsy Values

console.log(Boolean(NaN));

const money = 0;

if (money) {
  console.log("Don't Spend it all");
} else {
    console.log("You should get a job!");
}

let height;

if (height) {
    console.log("Defined");
} else {
    console.log(undefined);
}

*/
//### Equality Operators
/* */
const age = 20;
if (age === 20) console.log("You are an adult!");
else console.log("Fish");

const favoriteNumber = prompt('What is your favourite number?')

if (favoriteNumber == 23) {
    console.log('That is a very naughty number!');
}
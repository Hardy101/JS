/* */
"use strict";

// Function Declaration and Function Expression

/*

`
A function expression is very similar to, and has almost the same syntax as, a function declaration. The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions. A function expression can be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined. See also the chapter about functions for more information.

Function Declarations are hoisted while Function Expression aren't
`

console.log(calcAge_1(2004));
console.log(calcAge_2());

// Function Declaration
function calcAge_1(birthYear) {
    const age = 2024 - birthYear;
    return age;
}
// Function expression
const calcAge_2 = function () {
    return 2024 - 2004;
};
console.log(calcAge_1(2004));
console.log(calcAge_2());
*/

// Arrow Function

/*
`
Arrow functions are a special form of function expression.
Arrow functions already have the return property explicitly added to the code property
To create a codeblock, you need the curly braces
`;

const arrowFunc = (birthYear) => 2024 - birthYear;
console.log(arrowFunc(2004));

const yearsUntilRetirement = (birthYear) => {
  const age = 2024 - birthYear;
  const retirementAge = 60 - age;
  return retirementAge;
};

console.log(yearsUntilRetirement(2004));
*/

// Introduction to Array
/* 
const list = "Osaretin, Xander, Deborah, Shalom";
const friends = ["Osaretin", "Xander", "Deborah", "Shalom"];
const friends_array = new Array("Osaretin", "Xander", "Deborah", "Shalom");

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1997, 2004, 2011, 2018];
const year = 1990;
console.log(calcAge(year));

*/

// Array Methods

/* 
const friends = ["Osaretin", "Xander", "Deborah", "Shalom"];

friends.push("Eghosa");
console.log(friends);
console.log(friends.indexOf("Eghosa"));
console.log(friends.includes("Eghosa"));

*/

// Introduction to objects
/* */
const array_list = ["Eghosa", 20, "Microbiologist"];

const detailsEghosa = {
  firstName: "Eghosa",
  lastName: "Ordia",
  age: 20,
  course: "Microbiology",
  friends: ["Osaretin", "Xander", "Deborah", "Shalom"],
  hasDriversLicense: false,
};

console.log(detailsEghosa.firstName);

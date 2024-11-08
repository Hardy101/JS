/* */
"use strict";

// Function Declaration and Function Expression
/* 

A function expression is very similar to, and has almost the same syntax as, a function declaration. The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions. A function expression can be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined. See also the chapter about functions for more information.

*/

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

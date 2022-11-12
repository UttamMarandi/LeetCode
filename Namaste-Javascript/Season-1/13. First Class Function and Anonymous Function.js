// Function Statement
//Just a function defined using the function keyword and function name
function a() {
  console.log("a called");
}
a();

// Function Expression
//When the function is not given a name but is assigned to a variable
//Both Function statament and function expression are ways of creating a function

const b = function () {
  console.log("b called");
};
b();

// Difference between Function statement and function expression
// Hoisting
//
//
c();
function c() {
  console.log("c called");
}
d();
const d = function () {
  console.log("d called");
};

//Let's think in terms of execution context.
// Memory phase :
//a:{...} // the entire function gets stored
//b:undefined //as b is a variable it gets value of undefined

// Execution phase
// a() , a get called, logs "a called"
// b, TypeError : b is not a function. As b is set to undefined during function call at line 28. We have not assigned the function to the variable yet

//Function declaration => function statement and function declaration are the same thing
function a() {
  console.log("a called");
}
a();

// Anonyomous function
// A function without a name is called an anonyomous function.
// An anonyomous function does not have their own identity.

// function () {

// };
// Above code will give syntax error "Function statement requires a function name". According to ES6, every function should have a name

//Anonyomous functions are used in places where functions are used as values.
// Such as callback functions or IIFE (Immediatly invoked function expression)
(function () {});

// Named function expression
// A function expression where the function is given a name is called a named function expression
let e = function f() {
  console.log("f called");
};

e(); // this will call f()
f(); // this will cause an Reference error , f() is not defined
// The reason being f() is not available to global scope. e() is available to global scope which holds the function when line 60 is executed
// f() is only available in the local scope. When we want to access a function itself inside it's body , we can use this using named function expression.
// This is helpful in recurrsion
//

// Difference between parameters &arguments ?
// Function parametes
// variabls or identifier used during function defination either function statement or function expression to label the values passed to a function is
// called function parameters
//
// Function declaration
// Variables or functions passed to a function during function call is called function declaration

// First class functions
// In Javascript, functions are first class objects and treated as first class citizens. First-class functions means when functions in that language are treated like any other variable.
//  a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.
// The ability of functions to be used as values are first class functions.

// First order function
// First-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.

// Higher order function
// Higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.

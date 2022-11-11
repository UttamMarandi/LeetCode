console.log(b); // we get undefined wihthout causing any error
//console.log(a); // Referrece error : cannot acceess a after initializatio
let a = 10;
var b = 100;

// let are hoisted to top but not initialized
//Meaning
// b is present inside global scope with value set to undefined
// For let and const memory is allocated but not inside global scope. They are stored in a different memory space (Script scope)
// So you cannot access let and const variables before putting some value inside them
//let ans const are not stored in global scope

// Temporal dead zone
// Temporal dead zone is the time between  between let and const variable are hoisted (move to top of scope and memory allocation ) and they are initialized with some value

// window.a // undefined
// As let and const are not present in the the global object , window.a is not defined

// redeclaration is not allowed
//let a = 20 , // Syntax error,
// When syntax error occurs not a single line is run
//var a = 30; // Syntax error

var b = 1000;
console.log("b:", b);

// But in case of var it is possible to redeclare

// Const

const f = 10; // Same as let , not stored in global scope

let g;

g = 20; // Declaration and then initialization is allowed for let.

//const h; A const variable has to initialized during the time of redeclaration. // syntax error =>Missing initializer in the const declaration

// f = 100; TypeError , Assignmenet to a constant variable

//  Syntax Error , Referrence Error, Type Error

// Syntax Error : If there is any syntax issues in the code then js throws syntax error . Not a single line of code will run
// Referrence Error : When js tries to access a variable in all the available scope and cannot access it
// Type Error : When you want to change the type of a const and variable

// Temporal dead zone can cause error if devs are not careful
// So, write all the initialization and the declaration are pushed to the top of the scope to minimize the window of the temporal dead zone

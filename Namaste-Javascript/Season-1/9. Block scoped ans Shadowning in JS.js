// A block id defined by curly braces
{
  // Block is also known as compound statement
}
// Compound statement are used to group lines a js code to used in place where js expecets only one statement

//if(true)// syntax error : Unexpected end of input , meaning it expects one statment.

if (true) true; // this is okay. We are passing the expected one statment
//What if we need to pass multiple line of statement. For that we need to use block scope i.e curly braces to group line of code

if (true) {
  let b = 10;
  console.log(b);
}

// if in iteself does not have any curly braces syntax. But to pass mutiple lines of statement , we need to pass these lines inside a block

// Block scope
// All the variables and scope that can be accessed inside a block is called block scope
var a = 40;
let b = 30;
{
  var a = 10; // this declaration shadows the earlier declaration and also changes the value, also a is not stored in Block scope and not block scope b.c it is var declaration
  let b = 20;
  const c = 30;
  console.log(b);
  console.log(a);
  console.log(c);
}
console.log(a); // here a is 10 , b.c the value also changed during redeclaration, both a refers to the same memory space
console.log(b); // b is let declaration.
// We have two b in memory allocation. One b is present in Script (Global) scope. Another b is present in the Block scope

//   console.log(b); // referrence error
//   console.log(c); // referrence error

// Global Ececution context
// Memory allocation phase
// c is stored inside block scope.
// But a,b are stored inside Block scope. If no block is present , then they are stored inside Script scope

// let and const are block scoped variable
// Block scope variables cannot be accessed outside the block

// Illegal Shadowing

var a = 20;
{
  var a = 30;
}

// Above shadowing is allowed

// let aa = 30;
// {
//   var aa = 30;
// }

// Above is illegal shadowing. You cannot shadow a let variable with a var variable

let ab = 20;
{
  let ab = 40;
}

// Above is alloed. B.c ab ab are present in different level of scopes. One is in block scope and another is in Script scope.

// Illegal shadowing occurs when boundries of variables declaration collides. Meaning same variable name is getting allocated twice in the same scope.

//Block scope also follows lexical scope

//Mutiple block scopes are created for nested lexical enviroments

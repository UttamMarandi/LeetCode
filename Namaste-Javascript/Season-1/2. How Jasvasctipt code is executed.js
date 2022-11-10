//How Javascript code is executed.?

// In order to run js first an execution context is created.

let n = 2;
function square(num) {
  let ans = num * num;
  return ans;
}
let square2 = square(n);
let square4 = square(4);

// Execution context
//=> Two components : Memory component , Code Component
// => This is created in two phases =>
// 1. Memory Creation phase => In this phase memory is allocated for all the variables and functions
// 2. Code execution phase

// ANALYSIS
// 1. Memory creation phase // Javascript skims through the entire code and allocates memory to the variables and funciton

//n:undefined // ALl variables are initially stored with undefined value
//square:{...} // It  stores the whole code of the function inside square
//square2:undefined =>4
//square4:undefined

// 2. Code Execution phase //Javascript executes the code line by line

// let n = 2; // allocates 2 to n in memory
// function square(num) {// line no 30 to 34 will not executed as it is function declaration only and stored in memory
//   let ans = num * num;
//   return ans;
// }
// let square2 = square(n);// function square invoked. so line 30-34 executed. Now another whole new execution context is created.
// let square4 = square(4);

// FUNCTION EXECUTION CONTEXT
// Two components => 1. Memory component 2. Code component

//1 . Memory creation phase => funciton parameters also get memory space.

// num : undefined =>2
// ans : undefined =>4

//2. Code execution phase
// function square(num) { num is given the value num in memory i.e 2
//   let ans = num * num; // ans will get the value of num * num
//   return ans; //this sets the value of square2 ro 4
// }

//This whole function execution context will get deleted after the function execution is complete

//When square(4) line is executed a whole new function execution context is again created.

// Function execution context.
// Memory component :
// num => undefined => 4
// ans => undefined => 16

// Code execution phase
// num gets the value 4
// num * num is executed and ans gets the value 16
// return ans => square4 gets the value of ans i.e 16. It replaces undefined

// After the entire js code is executed , the entire global execution is destroyed.

// How Javascript manages execution context
// Javascript manages execution context using a call stack

// CAll STACK
// Call stack is stack type data structure which is used to manage the execution contexts.
// In the bottom of the call stack we have the global execution context
// Whenever a new execution  context is created , it is pushed into the call stack.
// After execution of the function is complete the related execution context is popped out of the call stack.
//So, global execution context is the last one to be popped.

// Call stack maintains the order of execution of the execution contexts

// Also known as :
//1. Call stack
// Execution context stack
//Program stack
//Control stack
//Runtime stack
//Machine stack

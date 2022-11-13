//  Callback functions
// A function which is passed to another function as a a parameter is called a callback function.
// Callback functions allows us to do async operations in javacscript
// It is called a callback function b.c the function is not executed right away. It is the responsiblity of the function x() to execute the callback function y()
// It is upto x when it wants to call y() and execute it.

function x() {}
x(function (y) {}); // function y is the callback function

// Handling asynchronous tasks with callbacks

// Code 1
setTimeout(function () {
  // this is a callback function pass to  setTimeout
  console.log("Timer");
}, 500);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});

//Analysis.
// Execution context created
// Memory Allocation phase
// setTimeout is async so the callback is stored in a different space with a timer attached to it.
// x:{...}
//
// Code Execution phase
// x get's called // logs x
// y get's called // create a new local execution context // logs y => Here we are sort of doing async work. It is the responsibility of the x() to execute y() when it wants.
// After 5s, the timer expires and callback passed to setTimeOut is executed.// logs Timer

// Result
//x
//y
//Timer

// Call stack analysis
// push => (Anonyomous) => Global execution context is created
// push => x()
// push => y()
// pop => y()
// pop => x()
// After 5 ms
// push => (Anonyomous) => setTimeout Timer expires
// pop => (Anonyomous) => setTimeout
// pop => (Anonyomous) => Global execution context destroyed

// Main Thread
// Javascript has only one call stack. You can also call it as the main thread
// Any operation that blocks the call stack means we are blocking the main thread.

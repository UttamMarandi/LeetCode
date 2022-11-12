// Garbage collecter is program that resides in the browser or the javascript engine whose job is to free up the un-utilised memory.
//Javascript is a ligh level programming language. So, the Javascript engine executes everything related to memory like memory allocation and memory deallocation
// In other programming language like C or C++ , these stuff are handled by developers itself
//
//
//Relation between Garbage Collector and Closures

function a() {
  var x = 0;
  return function b() {
    console.log(x);
  };
}

a();

// If any variable or function is used by the inner function , then that variable can't be garbage collected.

//In modern browsers like chrome V8, they have smart garbage collectors. If a variable is unreachable or not-used, than it is garbage collected even it is included inside a closure
//
//
//
//Smart Garbage collection

function a() {
  var x = 0,
    z = 10;
  return function b() {
    console.log(x);
  };
}

const y = a();
y();

// According to smart garbage collection z is garbage collected and x is not b.c x is accessed inside b()

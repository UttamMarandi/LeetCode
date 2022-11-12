// Code 1

function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  inner();
}
outer();
// We are able to access a because of closure. The function along with it's lexical enviroment is called a closure.
//
//
//

// Code 2
function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}

const innerA = outer();
// equivalent to
outer()(); // call whatever outer returns i.e call inner

console.log(innerA()); //This will log a as innerA not only contains the the inner funtion code but also it's lexical enviroment

// Code 3
function outer() {
  function inner() {
    console.log(a);
  }
  var a = 10;
  return inner;
}

const innerB = outer();
innerB();
// still this will log 10 as var is hoisted to the top during memory allocation. And during code execution we have value a set to 10.
// Don't get confused with function on top. That is just function defination and not function call

// Code 4
// var changed to let

function outer() {
  function inner() {
    console.log(a);
  }
  let a = 10;
  return inner;
}

const innerC = outer();
innerC(); // It will still log 10

// Code 5
// Passing a parameter to outer function

function outer(b) {
  function inner() {
    console.log(a, b);
  }
  let a = 10;
  return inner;
}

const innerD = outer("hello");
innerD(); // still it logs 10 // we can also access "hello" as the return function's lexical scope also contains the passed parameter

// Code 6
function outest() {
  const c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c); // inner has access to outest scope variable b.c of lexical scope
    }
    let a = 10;
    return inner;
  }
  return outer;
}
const innerE = outest()("hello"); // first outest() is executed . This returns outer() which is executed with "hello" as it's parameter. outer() returns inner() which get's stored in innerE variable
innerE();

// Code 7
// Global variable with a conflicting name
function outest() {
  const c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c); // inner has access to outest scope variable b.c of lexical scope
    }
    let a = 10; // Closure
    return inner;
  }
  return outer;
}
let a = 100; // variable in global scope
const innerF = outest()("hello"); // first outest() is executed . This returns outer() which is executed with "hello" as it's parameter. outer() returns inner() which get's stored in innerE variable
innerF(); //returns 10"hello"20
// The closer variable with the same name is present inside outside lexical enviroment. So it will access 10

// Advantages of closure
// Moduel Pattern
// Function currying
// Higher order functions => memoization and once method
// Data hiding and encapsulation

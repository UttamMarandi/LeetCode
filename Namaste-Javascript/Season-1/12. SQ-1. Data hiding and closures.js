//code 1
var count = 0;

function incrementCounter() {
  count++;
}

//The problem with above code is that any part of the code can access the counter variable . So we want counter to increment only be 1.
//But there is a possiblity that it can be modified somewhere else.

// Code 2
//We warap the above code inside a function
function counter() {
  var count = 0;
  return function incrementCounter() {
    count++;
  };
}

var counter1 = counter();
counter1();
counter1();

const counter2 = counter();
counter2(); // Another execution context

// so memory is allocated to counter only inside local/function execution cotext. So , global code don't have access to counter variable.
// Hence we achieve data hiding
// Data hiding basically means only a certain part of the code have access to the variable or function. If other parts want to access it , they have to use a proxy.

//  Also have decrement counter
// Write a constructer function that has two functions for incrementing and decrementing counter.

function CounterCon() {
  // We are bascially defining a class
  // Better to define a class
  var counter = 0;
  this.incrementCounter = function () {
    counter++;
    console.log(counter);
  };
  this.decrementCounter = function () {
    counter--;
    console.log(counter);
  };
}

const myCounter = new CounterCon();
myCounter.incrementCounter();
myCounter.incrementCounter();
myCounter.incrementCounter();
myCounter.incrementCounter();
myCounter.incrementCounter();
myCounter.decrementCounter();
myCounter.decrementCounter();
myCounter.decrementCounter();

// Disadvantages of Closures
//Overconsumption of memeory. Every time a closure is formed it consumes memory. Also  variables are not garbage collected, till the program expires.  so there are chances of memory leak

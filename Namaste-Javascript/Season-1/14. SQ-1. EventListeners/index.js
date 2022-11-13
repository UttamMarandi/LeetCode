// Event Listeners
document.getElementById("clickMe").addEventListener("click", function ab() {
  console.log("Button Clicked");
}); // function passed is a callback function
// When only a user clicks on the button , then only callback function is executed.
// At that time, the function execution context will automatically be pushed into the call stack
//

//Closure along with event listener
// Print how many times a button is clicked?

// Code 1

let count = 0;

document.getElementById("clickMe2").addEventListener("click", function bc() {
  console.log("Button clicked", ++count);
});

// The above is not a good solution b.c count can be accessed by other global function and local functions also due to cloure

// Code 2

const countOnClick = () => {
  let count = 0;
  document.getElementById("clickMe3").addEventListener("click", function xy() {
    console.log("Button Clicked", ++count);
  });
};

countOnClick();
// In the avove ,the count variable has local scope so outside code can't access it.
// When countOnclick is called a new execution context is created.
// Memory Allocation phase
// count : undefined
// A listener is added to "click" event
// when user clicks on the button , a new execution context is created which executes the log line. Here the count variable is available due to closure

// Remove Eventlisteners and Garbage collection
// Adding event listener to an element is a heavy and high memory consumption operation.
// Reason for eventListener being heavy : b.c they form closure with other variables. and garbage colletor can't free up the space by removing those variables.
// We don't know when the event will get triggered by the user.

// So, it's a good practice to remove the eventlistener , when you know that the event listener is no longer required.

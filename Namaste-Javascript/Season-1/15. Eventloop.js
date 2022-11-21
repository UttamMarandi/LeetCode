// Javascript is a synchronous single threaded language.
// Call stack is present inside the JS engine.

// Code 1
function a() {
  console.log("a");
}

a();
console.log("End");
// Result
//a
//End

// Analysis
// GLobal Ececution context
// Memory phase
// a:{..}
// Execution phase
// a pushed to call stack
// logs a
// a poped from call stack
// logs "End"

// Job of the call stack is to execute any execution contexts that is pushed to it.
// Call stack cannot perform async tasks. Meaning if we give a context and tell it to run this context after 5s , it is not possible
// Call stack does not have a timer

// Contents of Browser
// JS-Engine which contains the call stack
// Timer
// Localstorage
// url container
// Ui display
// Bluetooth access , Geolocation
// Connecting to server

// SO , let's say our context need to access  any of the above components.

// Web APIs
// 1.setTimeout()
// 2.DOM APIs // document.
// 3.fetch()
// 4.localstorage
// 5.console
// 6.location

// Web APIs are not a part of javascript. They are accessible to other languages also
// Call stack have access to these Web APIs through global object called window
// we don't write window.setTimeout but only setTimeout b.c setTimeout is present in global object i.e window

// Code 2

console.log("start");

setTimeout(function cb() {
  console.log("Callback");
}, 5000);

console.log("End");

// Result
// start
// End
// Callback

//Analysis
// push => Global execution context (GEC)
//logs "start" // we use console web api provided by window
//setTimeout call the setTimeout web api provided by browser . setTimeout takes a callback and a delay. It registers this callback in the browser web api enviroment and starts the delay
// logs End
// pop => Global execution context (GEC)
// After 5s , a new execution context is pushed into the call stack to execute the callback of setTimeout
//But somehow we need to remember the callback function that is attached to the setTimeout

// This is where the event loop and callback queue comes to picture

// Event Loop & Callback queue
// Right now 5000ms timer is running and callback is registered in web api enviroment.
// As soon as the timer expires it needs to go directly into the call stack.
// But it can't go direclty into the callstack b.c maybe some other task has more priority
// So it goes to the callstack through this callback queue
// Callback function after the timer expiration moves into the callback queue
// Event Loop : The job of the event loop is to periodically check and monitor the callback queue and the callstack and push the callback function stored in callback queue into the call stack if
// the call stack is empty.
// Event loop acts like a gatekeeper

// Code 3

console.log("Start");
document.getElementById("btn").addEventListener("click", function cb() {
  console.log("Callback");
});

console.log("End");

// Analysis
// push => Global Execution Context is created
// Memory execution phase => No variable and function , so nothing done  here
// Code execution
// conole web api is called to log "Start" in console ui
// We select the button and attach a click listener to it. addEventListener is a web api provided by the browser to access the DOM related APIs.
// When we do document.... we are using the DOM APIs. DOM => Document Object Model
// In Web api 's enviroment, I am considering this as  a context (doubt) , the callback is registered and an event is attached to it. The event in this case is the click event. This all is done
// by the documnent.addEventListener
// console web api is called to log "End" in console ui
// As the code has completed execution ,Global execution cotext is destroyed.
// pop => GEC

// But the eventlistener along with the callback function and it's closure will stay in the web api eniroment until we explicitly remove the eventListener or we close the browser
//
// User clicks
// When the user clicks on the button , the callback function present in the web api enviroment is pushed to the callback queue waiting for it's turn to get executed
//
//Event loop
//Event loop's job is to continuously monitor the callstack and the callback queue. If the call stack is empty and there is some function present in the callback queue , it will
//move the callback function from the callback queue to the call stack
// push => cb execution context
// So , cb callback is pushed to the call stack as call back is empty and removed from the callback queue. Even the GEC is popped.
// console web api is called to log "Callback"
//pop =>  cb execution context

// Why we need callback queue
// Let's think that the user instead of clicking once , clicks the button 5-6 times
// When this happens , 5-6 same callback function cb is pushed to the callback queue waiting to be picked up by the eventloop and pushed to call stack
// In real world their will be multiple eventlistner, timers , web apis and other async tasks are pushed to the callback queue so that they can be executed one after another

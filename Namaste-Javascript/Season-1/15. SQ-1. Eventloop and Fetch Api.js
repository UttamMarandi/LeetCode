// How fetch api works

// Code 1

console.log("Start");
setTimeout(function cbT() {
  console.log("CB Timeout");
}, 5000);

fetch("https://api.netflix.com").then(function cbF() {
  console.log("CB Netflix");
});

console.log("End");

// Fetch function send a request to the given api endpoint. It returns a promise which in turn follows the .then() block which contains the callback function cbF which gets executed once
// the fetch is resolved
//
// Analysis
// push => Global Execution context (GEC) into call stack
// console wep api is called to log "Start"
// setTimout web api is called , which register the callback function cbT inside the web api's enviroment and starts a timer to it.
// Now the js engine moves to line 10.
// fetch is a web api which is used to make network calls. the fetch web api also registers the cbF callback of .then() block to the web api enviroment
// So we have two callback functions in WebAPi's enviroment
// cbT is waiting for the timer to get expired and cbF is waiting for the data from the servers
// Let's say after 50ms we receive data from the server
// But the cbF() callback is not pushed to the callback queue.
// Instead it is pushed to microtask queue. Why ?
//
// Microtask Queue
// Microtask queue is similar to callback queue but it has higher priority. Functions inside microtask queue is executed first and functions inside callback queue is executed later.
// Eventloop also monitors the microtask queue
// Let's say we have millions line of code in the our file and it is taking more than 5s to execute all of it.
// By that time both the cbF() and cbT() are ready pushed into the microtask queue and callback queue respectively.
// logs "End"
// pop => Global execution context
// push => cbF() => into the call stack and removed from the microtask queue
// logs "CB netflix"
// pop => cbF() from call stack
// push => cbT() into the call stack
// logs => "CB setTimeout"
// pop => cbT() from the call stack

// What can come inside microtask queue ?
// All the callback functions which comes from promises goes into the microtask queue.

// Mutation observer
// Mutation observer checks if there is any changes in the dom tree or not.
// Callback functions from the mutation observers also goes into microtask queue

// Callback queue is also known as Task queue

// Starvation of callback queue
// Let's say if the callback functions inside the microtask queue creates a new callback which is pushed into the microtask queue again.
// If this process continues for a long period of time , then the event loop will will never pick up the functions inside the callback queue
// This is called starvation of callback queue

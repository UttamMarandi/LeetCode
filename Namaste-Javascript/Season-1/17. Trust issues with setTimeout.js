// Concurrency Model

// The callback queue runs only after call stack is empty
// So , even if setTimeout() is set to run after 5ms, it can run only when call stack is empty and event loop pushes the callback to the call stack

//  Block the main thread/ call stack

//Code 1

console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 5000);

console.log("End");

// million

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate <= startDate + 10000) {
  // wait for 10000ms
  endDate = new Date().getTime();
}

console.log("While expires");

// In above way we simulate the 10s synchronous code

//  Output

// Start
// End
// While Expires // After 10s
// Callback // Immediatly after 10s

// setTimeout gurantees the delay , but doest not gurantee that the code will run  exactly after the delay

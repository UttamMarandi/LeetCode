// Js is a single threaded language => Only one call stack
//
//Callbacks
//

//Run one function after 5s

console.log("Namaste");

setTimeout(() => {
  // callback is a function passed as a parameter
  console.log("Namaste");
}, 500);

// We wrapped our sync. code inside a function and passed the function as a callback function to the setTimeout method. Now it is the responsiblity of setTimeOut function to execute itselft first and then execute the passed callback method. This is the basis of async. code. The control flow is dependent on the completion of antother piece of code.

// E-COMMERCE-WEBSITE

const cart = ["shoes", "pants", "kurta"];

// Steps in Ecommerce website : Create an order => Proceed to payment => OrderSummary => update Wallet

api.createOrder();

api.proceedToPayment();

api.orderSummary();

api.updateWallet();

//We can call proceedPayment() only after order has been created. So we pass the card and a function wrapping the api.proceedToPayment() as a callback function to api.createOrder()

api.createOrder(cart, () => {
  api.proceedToPayment();
});

// We have passed proceedToPayment() as a callback to createOrder() function.So it is the responsiblity of the createOrder function to execute itself first and then call proceedToPayment back.This is way we can handle async code is js.

api.createOrder(cart, () => {
  api.proceedToPayment(() => {
    // after payment we need to show the order summary page.so only after proceedToPayment we want to execute orderSummary page
    api.orderSummary(() => {
      api.updateWallet();
    });
  });
});

//PROBLEMS
//1. Callback Hell
// Callback hell is the nesting of callback functions and logic associated with it.The code grows horizentally and not vertically
//  => Makes code unmaintainable and unreadable. Callback hell structure is also known as pyramid of doom

//2. Inversion of control
//Inversion of control means the controll of the execution of the passed callback function now depends on the function to which we pass the function as callback. This is very risky piece of code as we dont what the outer function contains.
//It may never complete it's own execution. Or it may execute twice which in turn will execute the call back funciton twice.

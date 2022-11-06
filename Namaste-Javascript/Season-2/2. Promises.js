const cart = ["shoes", "pants", "kurta"];

createOrder(cart); // returns orderId

proceedToPayment(orderId);

// Both the above functions are async. proceedToPayment depends on the createOrder function.

// Callback way
//pass the proceedToPayment as callback function to createOrder()

() => {
  proceedToPayment(orderId);
};

createOrder(cart, () => {
  proceedToPayment(orderId);
});

// It is the responsiblity of createOrder to create an order first and ther proceedTOPayment
// This causes inversion of control and the callback function has no control of when or if the outer function will call the callback function back.

// PROMISE WAY

const promise = createOrder(cart);

//Instead of passing the proceedToPayment as callback to the createdOrder func. Now the createOrder() function returns a promise.
//createOrder(cart) is an async code and after exection it will return a promise.
//promise is basically an object which will contain the return value of createOrder(cart)
//{data:undefined}
//This promise will get data value after the async code has completed execution. In the meantime other sync code will get executed
// when the promise is resolved data key inside promise will get the return value of createOrder

// Now we need to attach a callback function to the promise.then().

//When createOrder(card) get's resolved.  data field inside promise will get filled

promise.then((orderId) => {
  proceedToPayment(orderId);
});

//Differnce between callback and promise

//  In callback we are passing our callback func. to another async function
//  But in promise we are attaching our callback func. to a promise object

// In promise way we have control over when our callback async code will run.
//Whenever the promise object will filled with data , then only our callback async code will run. Also we are not passing our code to some other external function. So , our async code will surely run and run once the promise is fulfilled meaning we have data field filled.

// Promise Object
// fetch(); => function to make external api calls

const GITHUB_API = "https://api.github.com/users/uttammarandi";

const user = fetch(GITHUB_API); // fetch returns a promise. so user is a promise

// Initially user will be undefiend.
// The moment above line of code is executed , user holds a promsie with state "pending"
// user : {[[Prototype]]:Promise [[PromiseState]]:"pending" [[PromiseResult]]:undefined}

// After fetch api get completed , the user promise will have fulfilled state
// After api is successful

//  user :{[[Prototype]]:Promise,[[PromiseState]]:"rulfilled", [[PromiseResult]]
// :Response :{
//     body:ReadableStream,
//     bodyUsed:false,
//     ok:true,
//     status:200
//  }}

user.then((data) => {
  console.log(data);
}); //initially data is undefined. The moment promise has "fulfilled state", callback in .then() will get called with [ResponseResut] : value as data value.

// Promise can have three state : pending, fulfilled, rejected
// data received from a promise is immutable meaning we cannot modify the data
//THis is how we show inversion control

//What is a promise ?
//A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Async funciton

api.createOrder(cart);
api.proceedToPayment(orderId);
api.orderSummary(paymentInfo);
api.updateWallet(amount);

// Callback ways

api.createOrder(cart, () => {
  api.proceedToPayment(orderId, () => {
    orderSummary(paymentInfo, () => {
      api.updateWallet();
    });
  });
});

// Promise Way
// Promise chaining
const promises = api.createOrder(cart);
promises.then(() => {});

//is equivalent to

api
  .createOrder(cart)
  .then((orderId) => {
    return api.proceedToPayment(orderId);
  })
  .then((paymentInfo) => {
    return api.showOrderSummary();
  })
  .then((amount) => {
    return api.updateWallet();
  });

//   Data is piped through promise chains. In order to pipe the data down to be accessible  to below then statement we need to return the promise
//  Promise used to handle async ops
// - Has advantage over callbacks that unlike callbacks, Promises avoid inversion of control,
// and thus Promise ensures execution exactly once, resulting in success or error.
// - Promise is a special object in JS mainly having PromiseState and PromiseResult
// - PromiseState might have following values:
//   - "pending": While async operation is in progress
//   - "fulfilled": When async operation is completed
//   - "rejected": When there is any error in async execution
// - PromiseState stores the data returned by Promise once it is resolved, i.e. once the async operation is completed
// - Example - fetch is a JS api used to make async calls to external resources. It returns a Promise object
// - By using "then" method on Promise, we can attach a callback which accepts the data and process it as per needed. Promise, when resolved, returns data to callback function parameter attached through "then" method.
// - Promise object is immutable and can be passed to anywhere in code.
// - Promise can defined as a object with a placeholder whose values would get eventually filled, once async execution is completed.
// - Promise more precisely can be defined as an object representing eventual completion (might result in success or failed) of an async operation.
// - Promise chaining helps to avoid callback hell

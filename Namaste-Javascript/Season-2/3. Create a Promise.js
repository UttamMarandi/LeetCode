// Create a promise
const cart = ["shoes", "pants", "kurta"];

createOrder(cart); // returns orderId

//createOrdere api is an async operation , so it returns a promise

proceedToPayment(orderId); //

const promise = createOrder(cart);
promise.then(() => {
  proceedToPayment(orderId);
});

//////////////////////////////////////////////
// Create a async function that returns a promise
//We create a promise by creating an instanse of Promise keyword using the new keyword. The promise will take a callback function with resolve and reject as it's parameters
//resolve and reject are functions provided by js to build promises.

const createOrder = (cart) => {
  const pr = new Promise((resolve, reject) => {
    //logic to create an order. any async function
    //validateCart
    //api call to create an order
    //orderId is received from the api
    if (!validateCart(cart)) {
      //If cart not validated , then we reject the promise
      const err = new Error("Cart is not valide");
      reject(err);
    }
    //logic to create order
    const orderId = DBcalll.getOrderId();
    if (orderId) {
      resolve(orderId);
      //   Whatever data is passed to the parameter of resolve becomes the PromiseResult after the promise is fullfilled
    }
  });
  return pr; // createOrder is returning a promise
};

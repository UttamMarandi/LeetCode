const cart = ["shoes,kurta,pajamas"];

//createOrder
//proceedToPayment
//showPaymentInfo
//updateWallet

const validateCart = () => {
  return true;
};

const validOrder = () => {
  return true;
};

// Creation phase
const createOrder = (cart) => {
  const pr = new Promise((resolve, reject) => {
    const orderId = "12345";
    if (validateCart(cart)) {
      setTimeout(() => {
        resolve(orderId);
      }, 3000);
    } else {
      const err = new Error("Cart is not valid");
      reject(err);
    }
  });
  return pr;
};

const proceedToPayment = (orderId) => {
  return new Promise((resolve, reject) => {
    const paymentInfo = "Payment Successful";
    if (validOrder) {
      setTimeout(() => {
        resolve(paymentInfo);
      }, 5000);
    } else {
      const err = new Error("Payment denied");
      reject(err);
    }
  });
};

// Consumption phase

//Both the functions will return a promise

const promise = createOrder(cart);
console.log("createOrder Promise:befor then", promise);

promise
  .then((orderId) => {
    // a .then() has to either return a promise fullfilled value or a promise object to the next .then block , Whaterver is returned become the parameted of the next .then block()
    console.log("orderId:", orderId);
    return orderId; // returning a value
  })
  .then((orderId) => {
    return proceedToPayment(orderId); // returning a promise
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
    return paymentInfo;
  });

//  .then() have a sequential parameter type. If top .then() returns a promise then next .then() will return a value. But we can return subequent promises also.

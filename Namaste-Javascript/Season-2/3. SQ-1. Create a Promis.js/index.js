const cart = ["shoes", "kurta", "sarree"];

const validateCart = () => {
  return false;
};

const createOrder = (cart) => {
  // arrow functions are not hoisted to the top
  const pr = new Promise((resolve, reject) => {
    if (validateCart(cart)) {
      const odrerId = "12345";
      setTimeout(() => {
        //delay // making code async
        resolve(odrerId);
      }, 5000);
    } else {
      const err = new Error("Cart is not valid");
      reject(err);
    }
  });
  return pr;
};

// Consuming the promise
const promise = createOrder(cart);
console.log("promise: before then", promise);

promise
  .then((prder) => {
    console.log("prderId:", prder);
  })
  .catch((err) => {
    console.log("error", err);
    console.log("error.msg", err.message);
  });

//  If we don't write catch block and an error occurs , then it will give an unhandled error msj in the browser. We should always gracefully handle errors in the catch block

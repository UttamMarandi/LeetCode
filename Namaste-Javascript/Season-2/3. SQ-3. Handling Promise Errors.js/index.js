const cart = ["shoes,kurtas", "pajamas"];

//createOrder
//ProceedtoPayment
//showPaymentInfo
//UpdateWallet

const validateCart = () => {
  return true;
};

const validOrder = () => {
  return false;
};

const isPaymentSuccess = () => {
  return true;
};

const createOrder = (cart) => {
  return new Promise((resolve, reject) => {
    const orderId = "12345";
    if (validateCart()) {
      setTimeout(() => {
        resolve(orderId); // we cannot resolve a promise twice
      }, 5000);
    } else {
      const err = new Error("Cart is not valid");
      reject(err);
    }
  });
};

const proceedToPayment = (orderId) => {
  return new Promise((resolve, reject) => {
    const paymentInfo = {
      message: "Payment Successful",
      amount: 250,
    };
    if (validOrder()) {
      setTimeout(() => {
        resolve(paymentInfo);
      }, 3000);
    } else {
      const err = new Error("Order Id is not valid");
      reject(err);
    }
  });
};

const updateWallet = (amount) => {
  return new Promise((resolve, reject) => {
    const message = "Wallet Updated";
    if (isPaymentSuccess()) {
      setTimeout(() => {
        resolve(message);
      }, 2000);
    } else {
      const err = new Error("Payment was unsuccessful");
      reject(err);
    }
  });
};

/// Consuming part

createOrder(cart)
  .then((orderId) => {
    console.log(orderId);
    return orderId;
  })
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .catch((err) => {
    console.log("err:.In between", err.message);
  })
  .then((paymentInfo) => {
    console.log("paymentInfo:", paymentInfo);
    return updateWallet(paymentInfo.amount);
  })
  .then((message) => {
    console.log("message:", message);
    return message;
  })
  .catch((err) => {
    // this catch block handles all the errors for the above then blocks
    console.log("err:.In the end", err.message);
  })
  .then(() => {
    console.log("I will run no matter what");
  });

//The lowermost catch is a generic catch and will handle the erros for all the top then blocks
// If there is a catch in between the then blocks , then the catch block is responsible for handling only the top most block.
//Also the below thens will get executed even if the error occurs
//Also the generic catch in the will run. This will probably cause an undefined error because of data piping and data not available in subsequent .then() block b.c of error
//If there is a .then() block in the end , that will run too

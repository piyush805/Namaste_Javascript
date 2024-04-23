const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);

promise
  .then(function (orderId) {
    console.log(orderId);
    //   proceedToPayment(orderId);
  })
  .catch(function (err) {
    // Gracefully handle the error on promise rejection
    console.log(err.message);
  });

// Producer End
function createOrder(cart) {
  // Promise constructor takes resolve and reject
  const pr = new Promise(function (resolve, reject) {
    // createOrder
    // validateCart
    // orderId
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    // logic for create Order - API call
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function validateCart(cart) {
  return false;
}

// ++++++++++++++++++++ PROMISE CHAINING +++++++++++++++++++++++++

// Now suppose proceedToPayment is also an API - so we have to execute it in .then(function(){}) of createOrder

function proceedToPayment(orderId) {
  // logic to handle the payment
  return new Promise(function (resolve, reject) {
    resolve("Payment successful");
  });
}

promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId; // When chaining, you have to keep returning things from one chain to another
  })
  .then(function (orderId) {
    proceedToPayment(orderId);
  })
  .catch(function (err) {
    // Gracefully handle the error on promise rejection
    console.log(err.message);
  });

// Further there can be third API to handle payment Info
promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId; // When chaining, you have to keep returning things from one chain to another
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    // Gracefully handle the error on promise rejection
    console.log(err.message);
  });
// Catch will handle any error in the chain - we don't need a catch for every then

// Any catch handles error of all chain above it - After it, things keep running
// Example below - proceedToPayment will still happen even after cart validation fails - then after the catch block will run
promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId; // When chaining, you have to keep returning things from one chain to another
  })
  .catch(function (err) {
    // Gracefully handle the error on promise rejection
    console.log(err.message);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  });
// There can be multiple catch blocks in the chain - including the generic one too

promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId; // When chaining, you have to keep returning things from one chain to another
  })
  .catch(function (err) {
    // Gracefully handle the error on promise rejection
    console.log(err.message);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    // Gracefully handle the error on promise rejection
    console.log(err.message);
  })
  .then(function (paymentInfo) {
    console.log("No matter what, this then will run");
  });

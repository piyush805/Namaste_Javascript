const cart = ["shoes", "pants", "kurta"];

// Callbacks are SUPER POWERFUL ways of handling ASYNC Operations in JS - ASYNC programming in JS exists due to callbacks only

// each api given a callback to execute after it finishes executing its own code
api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummmary(function () {
      api.updateWallet();
    });
  });
});
// code starts to grow horizontally instead of vertically
// Pyramid of Doom

// ++++++++++++++++ INVERSION OF CONTROL: Important for Promises ++++++++++++++++++++
// We tend to lose control over our code when we use callbacks
// Because we provide callback to other functions and blindly trust them to be successful in executing their own code
// as well as successfully invoke and execute the callback

// Why Risky?
// Because we don't know what is happening in the first api - what is the logic, how correct is it, how is failure handled there etc
// so we dont know what will happen to our callback in those cases

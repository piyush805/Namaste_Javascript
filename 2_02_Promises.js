// Promises solve the issues of callbacks: Callback hell, Inversion of control
// When we handle async operation via promise
// Initially Promise object is <pending>
// when that promise is resolve or rejected - Promises objects contains whatever is returned on resolving or rejecting
// The resolution and rejection can be handled with .then(function(res){}) and .catch(function(rej){})
// Both of which take in a callback function as arg - and the arg of those function is automatically - value returned in resolved or reject

/**
 * Example:
 *
 * const promise = createOrder(cart);
 *
 * promise.then(function(orderId){
 *      proceedToPayment(orderId)
 * });
 */

// But we are still using callback, so how is this better?
// - Earlier we were passing callback function to another API and trusting it, here we are attaching callback function to promise object. Here, we have control as to where callback is invoked - as soon as Promise is handled- it wil automatically call our function.
// - Also, we know that callback will definitely 100% be called and it will be called once.

// REAL PROMISE OBJECT
/**
 * Prototype: Promise
 * PromiseState: "pending" - or this converts to "fulfilled/resolved" or "rejected"
 * PromiseResult: undefined - this will store the data returned - this is immutable
 */

// MDN Definition: An object representing the eventual completion or failure of an asynchronous operation.

// Promise chaining: we pipe the data
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId); // in order to pass each data into the next - we have to explicitly return from every step
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
  });
// This way code doesn't grow horizontally - but lean in a meaningful function

// When using arrow functions
createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((paymentInfo) => updateWalletBalance(paymentInfo));

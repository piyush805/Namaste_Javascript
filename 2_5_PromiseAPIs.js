// ++++++++++++++++++++++++++++++ Promise.All() ++++++++++++++++++++++++++++++
// for parallel API calls - waits for all promises to finishes
/**
 * 

Promise.all(p1, p2, p3)
  .then(function ([val1, val2, val3]) {
    console.log("Values", val1, val2, val3);
  })
  .catch(function (err) {
    console.log("err", err);
  }); 
  */
// When all promises success - Promise will return resolve - an array of all the results of the promises
// What is any of these fail?
/**
 * - Output will he Error: which will be same as error returned by failed promise
 * - It will not wait for others to be resolved/rejected - it will return failed result immediately
 * - Because it is expecting all promises to be resolved successfully - so this Promise.all will get rejected irrespective of other promise completions
 */

// ++++++++++++++++++++++++++++++ Promise.allSettled() +++++++++++++++++++++++
// - This is different from promise.all in that - it waits for all the promises to be completed even if some promises fail
// - And also irrespective of success or failure it returns - array of all the results
// - [val1, err2, val3, err4,...]

// ++++++++++++++++++++++++++++++ Promise.race() +++++++++++++++++++++++++++++
// Fastest returning promise is the winner - as soon as any promise is resolved/rejected - it gives the result/error of that promise - it will not wait for other promises to get resolved/rejected

// ++++++++++++++++++++++++++++++ Promise.any() ++++++++++++++++++++++++++++++
// Wait for any successful promise before return the success result
// Returns error only when all fail - returned result will be an aggregated error

// ++++++++++++++++++++++++++++++ Examples +++++++++++++++++++++++++

const p1 = new Promise((res, rej) => {
  // setTimeout(() => res("P1 Success"), 1000);
  setTimeout(() => rej("P1 Fail"), 3000);
});

const p2 = new Promise((res, rej) => {
  // setTimeout(() => res("P2 Success"), 1000);
  setTimeout(() => rej("P2 Fail"), 4000);
});

const p3 = new Promise((res, rej) => {
  setTimeout(() => res("P3 Success"), 2000);
  // setTimeout(() => rej("P3 Fail"), 500);
});
// Promise.all([p1, p2, p3]); // result if all success, or error if any fails
// Promise.race([p1, p2, p3]);   // race to fail or succeed
// Promise.allSettled([p1, p2, p3]) // aggregate of the three results
Promise.any([p1, p2, p3]) // result if any success, else return aggregate err // err AggregateError: All promises were rejected
  // Error message in case of any are in console.log(err.errors)  object
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.error("err", err);
  });

// Lingos for Promises(Settled could mean any of the things)
// - resolve, success, fulfilled
// - reject, failure, rejected

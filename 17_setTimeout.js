// a setTimeout with timer of 5000ms may not always wait for 5000ms - sometimes it executes after 6, 7s etc
// It all depends on call stack - that is after how long event loop will find call stack to be empty before pushing setTimeout callback into the call-stack to be executed
// or microtasks queue has lot of task - so this callback will starve beyond when it was supposed to execute

// That's why it is recommended not to block the main thread
console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 5000);

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("While expires");
// So here it prints Start and End then waits 10s in while loop, then prints While prints- then immediately prints callback
// Generally we don't deliberately block the main thread but we should understand such concurrency model

//! What about setTimeout of 0ms?
// It still gets executed the same way - just that this time wait time for callback to get into callback queue is 0ms - but still waits for call stack to be empty and them micro-task queue as well before its gets pushed into it by event loop and gets executed
// So even 0ms set timeout will not be part of main thread but executed the same way as regular setTimeout
console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 0);

console.log("End");
/**
 * Start
 * End
 * Callback
 */
// Suppose we want to 'differ' some piece of code  - so instead of pushing it to main thread - we pass it to setTimeout

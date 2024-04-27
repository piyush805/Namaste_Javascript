// In order to understand event loop properly, we need to understand callback function

/**
 * * What is a callback function in JS?
 * - when we pass a function into another function then this passed function is called callback function
 * - this give us access to whole async side of JS world in a sync single threaded languages
 * - we give responsibility of calling this passed function to another function - this passed function will be called back sometime later in our code
 */
function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});

setTimeout(function () {
  console.log("timer");
}, 1000); // callback function to be called after sometime, which is 2nd arg in milliseconds

// output of above code will be
/** x
 *  y
 *  timer
 */
// In devtools, after printing x, y - everything will disappear but after 5000ms, callback will magically pop up in call-stack - by name anonymous
// So without the first call function, and whole idea of being able to pass callback function which can be executed some time later  - async operations wouldn't be possible

// Blocking the main thread in JS

// Event listeners
document.getElementById("clickMe").addEventListener("click", function () {
  console.log("click event occurred");
}); // callback function on click event comes into call-stack, gets executed and gets popped out

// Closure demo with event listener
// We use closures for data hiding because they automatically takes their parent's lexical scope along with them
let count = 0;
function attachEventListener() {
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button clicked", ++count);
  });
}
attachEventListener();
/**
 * Button clicked 1
 * Button clicked 2
 * Button clicked 3
 * so only the callback function is fired but it remembers the reference to its last time value of 'count'
 * In devTools, Elements > event Listeners > we can see click events and its callback, and its scope as well
 * Scope has 2 scopes: 1 global scope with window object \
 * 2nd Closure scope with count value + parent env which is global again
 */

// Garbage Collection & removeEventListeners
// - event listeners are memory heavy, even when we don't have to execute them they are freed automatically from the memory
// - when we have a lot of event listeners attached on our page then that can make our page very slow to load and work - with memory baggage of all their scope and all their callback functions
/**
removeEventListener(type, listener)
removeEventListener(type, listener, options)
removeEventListener(type, listener, useCapture)
 */

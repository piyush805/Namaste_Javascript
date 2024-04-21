// Job of normal JS is to push it inside callback call-stack - instantly execute it line by line and pops it out
// But what we need to execute something as a callback or after some fixed time in our code

// Browser has JS engine in it among other things - JS engine has a call-stack in it
// Browser also has timer, url, memory, power to communicate with the external world servers, geolocation, bluetooth
// JS code that we run in call-stack may need access to these powers in order to do complex operations

/**
 * Web APIs (not a part of core JS) - browser superpower shared with JS engine
 * -  setTimeout()
 * -  DOM APIs
 * -  fetch()
 * -  Local storage
 * -  console
 * -  Location
 * -  and a lot more...
 */
// These would typically need to be accessed with window keyword but since these are present in global scope
// We don't need window keyword prefix but can access them directly

// ++++++++++++++ EXAMPLE 1 : setTimeout +++++++++++++++

console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 5000);

console.log("End");
/**
- Global execution context is created and pushed into callstack
- "Start" prints into console via web API
- callback is registered by browser and a timer of 5000ms is started
- "End" prints into console via web API
- Global execution context is popped out
- When 5000ms expires, callback is pushed into 'Callback queue'
- Event Loops constantly checks for something in callback queue- when it finds it pushes into call-stack
- Execution context for this function is created
- "Callback" is printed into console
- Execution context is popped out
*/

// ++++++++++++++ EXAMPLE 2: Event Listener +++++++++++++++
console.log("Start");

document.getElementById("btn").addEventListener("click", function cb() {
  console.log("Callback");
});

console.log("End");
/**
- Global execution context is created and pushed into call-stack
- "Start" prints into console via web API
- Browser DOM API - access html code and returns btn, registers event listen on click of that element 
- "End" prints into console via web API
- Global execution context is popped out
- Callback event handlers stays in env until we explicitly remove it 
- Whenever event occurs, callback is pushed into 'Callback queue'
- Event Loops constantly checks for something in callback queue- when it finds it pushes into call-stack
- Execution context for this function is created
- "Callback" is printed into console
- Execution context is popped out
*/
/**
 * Why is there a callback queue, why can't event loop directly push callback into call-stack
 * - If there are several callback with the event or even with the timeouts at the same time
 * - then event loop cannot push all of them together - so they are sent into queue first
 * - from where are execute one by one by getting pushed into queue
 */

// ++++++++++++++ EXAMPLE 3: fetch +++++++++++++++
// fetch works a bit differently where callback is fired on promise resolution

console.log("Start");

setTimeout(function cbT() {
  console.log("CB SetTimeout");
}, 5000);

fetch("https://api.netflix.com").then(function cbF() {
  console.log("CB Netflix");
});

console.log("End");
/**
Output:
 - Start
 - End
 - CB Netflix
 - CB setTimeout
 */
/**
- Global execution context is created and pushed into call-stack
- "Start" prints into console via web API
- callback cbT is registered by browser and a timer of 5000ms is started
- Fetch callback function is also registered in callback env,
- Browser DOM API - access html code and returns btn, registers event listen on click of that element 
- "End" prints into console via web API
- Global execution context is popped out
- Now cbT is waiting for timer to expires to get pushed into callback queue 
- cbF is waiting for data to be returned from servers

Just like the callback there is also a microtasks queue
- exactly similar to callback queue but is has higher priority than callback queue
- hence also known as Priority queue 

- once data is fetched, cbF goes into this micro-tasks queue
- Lets says there are millions of lines of code - and meanwhile servers have also returned data and timer has also expired 
- so both cbF and cbT are in microtasks and callback queue respectively
- Events loop waits until it finds the call-stack empty
- once "End" is printed
- it first pushed cbF into call-stack and waits for it be to empty again
- then it pushed cbT into call-stack
*/

/** So what all can come into micro-tasks queue?
    - Promise callback
    - Mutation observer callback (it check whether some change has to be made into DOM tree)

Everything else like setTimeout, eventHandlers go inside normal callback queue

* ! Event loop gives any opportunity to the callback queue once all the tasks of micro-task queue gets completed - even if there is just a single event in the callback queue
*/

// +++++++++++++++++++++++ STARVATION OF THE CALLBACK QUEUE ++++++++++++++++++++++
/**
 * Situation where callback queue does not get a chance to be executed
 * Such situation may occur when some events in the micro-tasks queue create micro-tasks of their own
 */

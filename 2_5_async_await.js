/**
 * What is async?
 * What is await?
 * How async await works behind the scenes?
 * Examples of using async/await
 * Error Handling
 * Interviews
 * Async await vs Promise.then/.catch
 */

// ++++++++++++++++ What is async? +++++++++++++++
/** async is keyword used in a function to create async functions
    How are they different than normal function 
    - it always returns a promise - if we return a simple value - this function will wrap it inside a promise - and return it
 */
async function getData() {
  return "Namaste";
}
const data = getData();
console.log(data); // Promise {<fulfilled>: 'Namaste'}
/**
 *  How to get actual data out of this ? 
    We have to use .then() 
 */
const dataPromise = getData();
dataPromise.then((res) => console.log(res)); // 'Namaste'

/**
 * If we are explicitly returning a promise then it will return it as it is
 */
const p = new Promise((res, rej) => {
  res("Promise resolved value!");
});
async function getData() {
  return p;
}
const dataPromise1 = getData();
dataPromise1.then((res) => console.log(res)); // this is exactly like doing p.then(...) - // Promise Resolved Value =

// Before async-await how do we use to handle promises?
function getData() {
  p.then((res) => console.log(res));
}
// How do we handle the same thing in async-await
async function handlePromise() {
  const val = await p; // when promise will get resolved - value will be in the val after that
}

// await keyword can only be used inside an async function - syntax err otherwise

// ++++++++++++++++++++++ DIVE DEEP INTO ASYNC/AWAIT ++++++++++++++++++++++++++
//A Promise is something that gets resolved or rejected after some time - so lets add some artificial delay

function getData() {
  p.then((res) => console.log(res));
  console.log("Post then statement");
}
getData();
// first 'Post then statement', then promise will get resolved and Promise setTimeout will be kept separately - it will not wait for it to complete
// But in an async-await, code will wait for promise to resolve before moving on

const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    resolve("Promise Resolved Value1!!");
  }, 10000);
});

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    resolve("Promise Resolved Value2!!");
  }, 10000);
});

async function handlePromise() {
  console.log("Hello World!!");
  const val1 = await p1;
  console.log("Namaste Javascript1");
  console.log(val1);

  const val2 = await p2;
  console.log("Namaste Javascript2");
  console.log(val2);
}

/**
 * In above handlePromise
 * 1. When both Promise are same - of 10sec each, JS doesn't wait on each line in sequence, but prints
 *  - Namaste Javascript1         // after 10s
 *  - Promise Resolved Value1!!   // immediate
 *  - Namaste Javascript2         // immediate
 *  - Promise Resolved Value2!!   // immediate
 * Why doesn't it wait 10sec on each line?
 *
 * 2. When p1 is 10 sec, p2 is 5 sec, JS waits only 10sec on val1 but still prints all at once
 *  - Namaste Javascript1         // after 10s
 *  - Promise Resolved Value1!!   // immediate
 *  - Namaste Javascript2         // immediate
 *  - Promise Resolved Value2!!   // immediate
 *
 * 3. When p1 is 5 sec, p2 is 10 sec, JS waits only 5 sec on val1 and another 5s on val2 before executing further
 *  - Namaste Javascript1         // after 5s
 *  - Promise Resolved Value1!!   // immediate
 *  - Namaste Javascript2         // after 5s more
 *  - Promise Resolved Value2!!   // immediate
 */

// From Event loop, JS execution concept - we know that Promise waiting doesn't happen in the call-stack
// Else it will block the main thread - and page will be frozen
// It is only apparent that JS engine is waiting but is not actually true

// ++++++++++++++++++++++ BEHIND THE SCENE ++++++++++++++++++++++++++
// JS in synchronous single threaded language - it waits for none
// Hoisting - Promise resolving start at the beginning only
// handlePromise goes into callback - it JS executes it line by line
// prints 1st line - waits until p1 resolved - at that points handlePromise execution is suspended until p1 resolved
// once resolved at given time t1 - moves forward
// and checks whether p2 resolved yet - if no then execution suspended again - else further code executed

// So in case of 10, 10 - It finds both promises resolved simultaneously - so keep executing p1 onwards
// In case of 10, 5 - by time p1 resolved, p2 also resolved - so executes everything after 10s waiting
// In case of 5, 10 - p1 resolved and execute after 5s, but waits another 5s for p2 it resolved - then executes forwards

// This is more so because both promises creation constructor itself starts the setTimeout at top itself
// If p2 is created after we await p1 then it would wait for each one after the other
// But since both Promise instances are created simultaneously - they are counted simultaneously

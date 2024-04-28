"use strict";
// Debouncing in Javascript
let counter = 0;
const getData = () => {
  // calls an API  and gets Data
  console.log("Fetching Data..." + counter++);
};

const doSomeMagic = function (fn, d) {
  let timer;
  return function () {
    let context = this, // undefined in strict mode, global object otherwise
      args = arguments; // this is fn, d, etc passed
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, d);
  };
};

const betterFunction = doSomeMagic(getData, 300); // DEBOUNCE METHOD
// betterFunction invoked on <input onkeyup/>
// Here, on every keystroke - timer of 300ms starts
// And if before that another key stroke happens - existing timer if any is cleared and new one is put in place
// if 300ms passed without key stroke, fn.apply(context, arguments); is invoked - which fetched data
// In this case just fn() would work as well, without apply, and this
// But in case getData has to use any data passed from input side, or any other variable
// Then lexical scope with args and context need to be taken care of

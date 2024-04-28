// 2 ways of event propagation in the DOM tree:
//Any element in the Child Div will propagate to the Parent as well

// onClick method of child will also trigger subsequence Parent's onClick

// Event Capturing is the opposite of this where event goes down the hierarchy

// Earlier days - NETSCAPE Chose Event Capturing as default, where as Microsoft chose Bubbling to make more sense
// w3c has now made it developer friendly to now be able to use both approaches

// addEventListener takes 3 args - eventName, callback, useCapture(bool) to enable bubbling or capturing

/** 
element.addEventListener(
  "click",
  () => {
    console.log("callback");
  },
  true
);
*/

// true - eventCapturing mode is enabled - event comes DOWN the DOM hierarchy
// false - eventCapturing mode if off - event bubbles UP

// Event cycle will be on in both - we can control the direction of that cycle
document.querySelector("#Element1").addEventListener(
  "click",
  () => {
    console.log("E1 clicked");
  },
  true
);
document.querySelector("#Element2").addEventListener(
  "click",
  () => {
    console.log("E2 clicked");
  },
  false
);
document.querySelector("#Element3").addEventListener(
  "click",
  () => {
    console.log("E3 clicked");
  },
  false
);
// Order By Default is E3, E2, E1 - bubbling by default - useCapture false by default
// Or just E2, E1 - when middle clicked
// Or just E1

// When all true flag -
// E1, E2, E3 - capturing from top to inner most
// Or just E1, E2 - when middle clicked
// Or Just E1

// What is we use a mix and match of these - true, false, true
// E1, E3, E2 - first the events are captured from E1 to E3 - then captured to E2

// Now - true, false, false
// Capture phase - E1 only
// Bubbling phase - E3  then E2

// ! Stop Propagation
// This bubbling and capturing is quite expensive operation - how to prevent it
// In each callback function we have access to 'e' event
/**
 * * e.stopPropagation(); - at whatever element/point we want it to stop
 */
// If bubbling is on for all 3, and stop propagation at E3 then only E3 will be triggered
// If capturing on for all 3, and stop propagation at E3, then all will be triggered because capture starts from E1

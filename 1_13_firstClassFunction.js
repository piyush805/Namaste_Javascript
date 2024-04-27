// Function statement or Function Declaration
function a() {
  console.log("a called");
}

// Function expression
var b = function () {
  console.log("b called");
};

// - Major difference between function statement, function expression is hoisting
// - Function statement gets hoisted with full definition, but function expression get hoisted with undefined or even in temporal dead zone and cannot be accessed before program reaches their initialization

// - Anonymous Function - function without a name - doesn't have their own identity
// - They are used at places where function have to be used a values
/**
 * function (){
 *
 * }
 */
setTimeout(function () {
  console.log("anonymous function called");
}, 1000); // here 1st arg to setTimeout must be a function, hence we can create anonymous function directly and pass it

// Named function expression
var b = function xyz() {
  console.log("Named function");
};
b();
// -  we cannot call it with xyz() - ReferenceError: xyz is not defined - xyz is not a function created in the outer scope

// Difference between Parameter & Arguments
// - Local variables that function takes are referred to as parameters
// - whereas what we pass to those function are called arguments

// First Class Functions
// - function which take function as argument and return a function
var b = function (param1) {
  return function () {};
};
var c = b(); // c gets returned the anonymous function returned by b; we can also return a named function from it too
// Functions are first class citizens means ability of these functions to be used as first class functions

// Arrow Function
// introduced in ES6 - all these statement, expression, can be created using arrow function as well

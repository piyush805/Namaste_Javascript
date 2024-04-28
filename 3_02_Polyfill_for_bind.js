// Polyfill - is like a fallback for when actual function is not available in env. you are working in
// Polyfill for bind here means - when bind method is not available in browser - how will we write our own implementation of it
// Bind method returns copy of function attached to object with which it is invoked - this copy can be invoked later without name of the object itself - because it is already attached to it

let name1 = {
  firstName: "Akshay",
  lastName: "Saini",
};
let printName = function () {
  console.log(this.firstName + " " + this.lastName);
};

let printNameCopy = printName.bind(name1);
printNameCopy();

// when we attach function to Function prototype then each and every method we write has access to those function
//
/**
 * Requirement:
 *  - Every function is JS has access to bind method
 *  - It should return a function it is invoked with that can be later used
 */
Function.prototype.myBind = function (...args) {
  let obj = this; // 'this' here will refer to the function it is invoked with
  // comma-separated args can be taken here as '...args'
  // first one with be name1 - so args[0]
  // obj.call(args[0]) is same as functionName.call(objectName)
  return function () {
    obj.call(args[0]);
  };
};

let printNameCopy2 = printName.myBind(name1);
printNameCopy2();

// Now we also need to handle other arguments that are passed to myBind
// They will be received within args itself
Function.prototype.myBind = function (...args) {
  let obj = this,
    params = args.slice(1);
  return function () {
    obj.call(args[0], params);
  };
};
printNameCopy2 = printName.myBind(name1, "Dehradun");
printNameCopy2(); // <= This one

// Also have to handle argument passed while invoking returned function
// They will be params received in returned function
Function.prototype.myBind = function (...args) {
  let obj = this,
    params = args.slice(1);
  return function (...args2) {
    // concatenate both params and args2 into while and pass into call
    obj.call(args[0], [...params, ...args2]);
  };
};
printNameCopy2 = printName.myBind(name1, "Dehradun");
printNameCopy2("Uttarakhand"); // <= This one

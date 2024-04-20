function a() {
  console.log(b);
}
var b = 10;
a();
/**
 * On execution -
 * Line 4: b is assigned value 10
 * Line 5: a's execution context will be created and
 * in its execution phase - JS will try to find 'b' in local memory space that was created
 * when it cannot find, it moves one level up and tries to find it there
 * here that one level up is Global execution context's memory space
 * It finds 'b' there (with value 10) - so prints it
 * deletes this execution context - goes back to upper level EC
 * deletes that as well as there is no more code to execute
 */

function x() {
  function y() {
    console.log(c);
  }
  y();
}
var c = 20;
x();
/**
 * Here as well on executing Line 22: EC of y is created
 * It looks for c there, cant find, moves to x's EC Memory space
 * Still can't find, moves to global EC memory space
 * It finds c there with value 20 - so prints it
 * destroys y's EC
 * destroys x's EC
 * destroys Global EC
 *
 * => If c is defined value after invoking function x, then console.log(c) will prints "undefined"
 * because c is assigned placeholder undefined at that point in time when it finds it
 * Only after finishing executing x, c is assigned value 20
 */

// But when a variable defined inside a particular scope is attempted to be accessed outside it then
// Then it gives 'not defined' error because that variable was destroyed along with its memory space then inner scope stopped executing
function a() {
  var b = 10;
  c();
  function c() {}
}
a();
console.log(b); // ! ReferenceError: b is not defined

// ! ++++++++ Lexical Scope ++++++++++++
/**
Whenever a execution context is created
A lexical env is also created
Lexical Environment refers to local memory + Lexical env of its parent
    - In above example - c's code is physically inside a - so c is LEXICALLY INSIDE a
    - a is lexically inside global env
*/

// What this implies is that when executing code at a particular hierarchy
// It looks for variable value and functions not only in local memory - but if it cannot find it
// Then it looks for them in reference of parent's lexical env it has been assigned
// Parent's lexical scope is again its memory + reference to its parent lexical env
// Global's reference to parent is null
// These are in chain form

// ! SCOPE CHAINING
// JS engine moves up this scope chain to looks for variable values and function definitions up to top level Global scope
// It no where found then it throws ReferenceError: ___ is not defined -
// that is it cannot find any reference of the variable being accessed or function being executed

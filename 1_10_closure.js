// Closure is a function bind together with its lexical environment

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}
x();
// When function y has to access 'a', it has to form a closure with lexical scope - i.e. its local memory and lexical scope of its parent - then only it'll be able to access 'a'.

// We can also pass function into other functions are parameter
// That's we we do when we pass function to child component as a props

// +++++++++++++++ Returning a function ++++++++++++++
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
}
var z = x();
console.log(z); // f y(){ console.log(a) };
// So now that z contains function y even after execution context of x is destroyed - both variable a and function y
// Now executing z - which executes y - it still contains 'a' from its lexical scope
// So it does print 7 still

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  a = 100;
  return y;
}
var z = x();
console.log(z);
// Executing z now will execute y and prints 100 - the value of reference to a before y was returned
// 'a' is not exact value 7 inside y - but reference to its memory location in local/lexical memory
function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    a = 100;
    return y;
  }
  x();
}
z(); // this executes x, which executes  y -> which access both a and b from its parent and parent's parent lexical scope

/**  Closures are used
 * 1. Module design pattern
 * 2. Currying
 * 3. Functions that only run once
 * 4. memoize
 * 5. maintaining state in async world
 * 6. setTimeouts
 * 7. Iterators
 * 8. and many more...
 * */

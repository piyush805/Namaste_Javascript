getName(); // Namaste Javascript
console.log(x); // undefined, why?

var x = 7;
function getName() {
  console.log("Namaste Javascript");
}

/**
 - In Memory allocation phase itself, JS skims through program and allocation memory to all variables and functions
    - In case of variables it assigns them placeholder 'undefined'
    - and in case of function it assigns them entire definition
 - That is why (x) is still accessible in line 2 before it is defined in line 4 
*/

// *  Difference between undefined and not defined
/**
 * In line 4 is removed altogether then in memory allocation phase we have not allocated it any space
 * So it will throw an error because it has neither has any value for x not any allocation to it
 * !ReferenceError: x is not defined
 */

//* What if we have arrow Arrow instead of normal function
var getName = () => {
  console.log("Namaste Javascript");
};

/**
 * Now getName behaves like a variable instead of a function
 * So it gets assigned undefined in the memory allocation phase instead of entire definition
 * When we try to execute it at the top It throws error
 * !TypeError: getName is not a function
 * Because it has value 'undefined'
 */
var getName = function () {
  // Here as well it behaves like a variable and not a function
};

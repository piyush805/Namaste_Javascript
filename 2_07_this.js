// * this in global space
/**
 * JS can run inside browser, mobile, backend server, smart watch env
 * Whatever the global env it is running in - it will represent thats
 * In browser - this will be window
 * In node - this will be global
 */
console.log(this); // globalObject - window, object

// * this inside a function
function x() {
  // value depend on strict/non strict mode
  console.log(this);
}
x();
/**  Both above - have 'window' - but are they same? No - JS behaves differently in strict mode and non strict mode
    In strict mode - value of this will be 'undefined' inside a function 
*/

// * this in strict mode  (this substitution)
/**
 *  There is a phenomenon of 'this substitution'
 *  !- Any time value of this keyword is null or undefined - 'this' keyword will be replaced by globalObject - only in non-strict mode
 */

// this value depends on how this is called (window)
x(); //- in strict mode - value of 'this' - undefined - in non-strict mode 'this' substitution will happen
window.x(); //- in strict mode as well - value of 'this' - becomes - window object

// * this inside a object's method
const obj = {
  a: 10,
  x: function () {
    // here, x is method of the object - obj
    console.log(this);
  }, 
};
obj.x(); //- value of this will be {a:10, x: f} - the object wherever this method is present

// * call apply bind methods (sharing methods)
// how to share same method among 2 objects
const student = {
  name: "Akshay",
  printName: function () {
    // here, x is method of the object - obj
    console.log(this.name);
  },
};
const student2 = {
  name: "Deepika",
};
student.printName.call(student2); //- pass into call function - new value of 'this' that it should reference when invoking printName

// * this inside arrow function
const obj3 = {
  a: 10,
  x: function () {
    console.log(this); // here this will not be obj3, but the "enclosing lexical context"
    // so here it will globalObject again - which is windows - here the lexical context
  },
};
obj.x();

// * this inside nested arrow function
const obj4 = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};
obj4.x();
// So, now y, is not method of this object
// But, it is enclosed inside a method- which is method of this object
// So, here this keyword will be obj4 - which is enclosing lexical context of y
// It will behaves as if it is not there and - it is directly inside x arrow function
// MDN Docs: arrow functions don't provide their own this binding (it retains this value of the enclosing lexical context).

//* this inside DOM => reference to HTML Elements
/**
 * <button onclick="alert(this)">Click Me</button>
 * Here this keyword will be HTML Button Element
 * this.tagName // prints "BUTTON"
 */

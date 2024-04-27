// Even before single line of code is executed JS has allocated memory to variables
// and given them a placeholder value of 'undefined'
console.log(a); // prints undefined
var a = 7;
console.log(a); // prints 7
// console.log(x);
// On the other hand if we try to access something which we have not allocated memory to
// Then ReferenceError: x is not defined

// undefined is not like its empty, or not taking any memory
// If we do not assign any value to that variable then throughout program it remains undefined
console.log(a === undefined); // holds true when just var a;

// ! Bad Practice: to assign any variable explicitly 'undefined'
// undefined has special purpose of being placeholder for value when a variable has not been assigned anything
// Deliberately assigning undefined may lead to unexpected behavior and inconsistency

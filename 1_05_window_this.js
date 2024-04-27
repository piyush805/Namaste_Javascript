// Even executing empty file
// JS engine creates global execution context
// Allocates memory to global object in memory allocation phase
// Using which we are immediately able to access window object
// and it exists in the console as well, even when we explicitly did not define it
// This is given by JS engine

// and it provides 'this' keyword  - which refers to this Global execution context

console.log(this === window); //true in console
// Global space is anything we do not explicitly defined scope for using curly braces
// Whatever we define outside it gets attached to the global space
console.log(this);
console.log(window);

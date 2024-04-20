// let and const declaration are hoisted
// But differently than var
// !They are in the Temporal Dead Zone for the time being

// Let and const declarations are also hoisted bu they are attached to Global Object
// Hence cannot be accessed immediately without initializing
// They lie in Temporal dead zone <called Script in debug console> - and only after the initialization - they become accessible

// Time from its hoisting to assigning some value = Temporal dead zone
/**
 * Attempting to access them during that time gives reference error
 * !ReferenceError: Cannot access 'a' before initialization
 * It does not say 'a' is not defined
 * But here error is different - it does not say it is not defined
 */
// We cannot access them in the console either - using this keyword or using window object

// Let is stricter - we cannot do re-declaration
// !SyntaxError: Identifier 'a' has already been declared
// it is not a runtime but compile time error itself - JS will not execute a single line of code

// Const is even more strict
// Behaves the same way for hoisting
// It can neither be re-declared - nor re-assigned

/**const b;
b = 1000;
 * !SyntaxError: Missing initializer in const declaration
*/
/**
 * const b = 1000;
 * b = 10000;
 * !TypeError: Assignment to constant variable
 */
// Difference between ReferenceError, TypeError, SyntaxError
/**
 * Reassignment to const value -> TypeError because const type variable cannot be reassigned value
 * No initialization while declaring const -> SyntaxError
 * let duplication declaration -> SyntaxError
 * When JS tries to find variable inside memory space but cannot access it -> ReferenceError: Eg: accessing variable from temporal dead zone, or an undeclared variable
 */
// *Good Practice: To have all variable declarations and initialization at top of scope - so we dont run into such problems - We want to shrink window for temporal dead zone to near zero

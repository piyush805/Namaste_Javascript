{
  // Block, Compound statement
  // Group multiples statement together
  // Why? In order to be able to use multiple statements in place where JS expects only 1 statement
  /**
   * like in if condition: JS expects
   * if(conditions)
   *    single_statement_only
   *
   * When we want to execute multiple statements over here
   * if(condition){
   *    statement1
   *    statement2
   *    statement3
   * }
   */
}

// * Block Scope - what all variables and functions we can access inside this block
{
  var a = 10;
  let b = 20;
  const c = 30;
}
/**
 * In JS debugger scope Tab : a comes in global scope window object
 * whereas b & c comes in Block scope tab automatically
 */
// Accessing b outside the bloc throws reference error

// +++++++++++++ Shadowing +++++++++++++++
// When you have a same named variable outside and inside the block scope
// Then inner variable 'shadows' the outer variable
// When these are 'var' then it also transform the value as well

// If it is let or const
// then accessing it inside the block provides inner value
// Accessing it outside gives outer value
let b = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;
}
console.log(b); // 100 remains

// But we cannot shadow let/const variable with var - it is like declaring because inner var is in global scope
// !Illegal shadowing
let x = 10;
{
  let x = 20;
}
// But var can be shadowed with let/const
// * But var is a function scoped as well
let y = 20;
function func() {
  var y = 20; // this is fine because y does not cross the function boundary
}
// const with const is also fine

// Block scopes follow lexical scope

const z = 10;
{
  const z = 20;
  {
    const z = 30;
    console.log(z);
  }
}
// All are initialized into temporal zone one by one and initialized with value
// If const z removed from innermost then console will access value 20,
// if that is also removed it will access value 10
// Because lexical scope has its own + reference to its parent's memory space

// And scope rules for normal function v/s arrow functions work exactly the same way

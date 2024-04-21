// JS runtime environment
// Both browser and Node JS have it
// Open source JS runtime env - it can run JS outside the browser
// for same time of function ex: setTimeout are internally implemented very differently on the browser and the node env side
// Wikipedia: list of JS engines available
/**
 * Edge: Chakra
 * Firefox: Spider-monkey
 * Chrome: V8 - used in Dino, Node as well
 */
// Each JS engine has to follow ECMA script standards
// JS engine takes code
/**
1. Parsing: Code is broken down into tokens
-  Syntax parser: job is to be convert code into AST (Abstract syntax tree) : astexplorer.net

2. Compilation 
3. Execution
Both go hand in hand:
JS has just-in-time (JIT) compilation
Interpreter: executes code line by line - it does not know what is going to happen in the next line
- code is fast - it doesn't have to compiled
Compiler: whole code is compiled first before executing -> new optimized version of code is formed 
- code is more efficient
Whether JS behaves as interpreted or compiled languages it depends on JS engine.
Initially, it was an interpreted language - because it could not wait to be compiled before running on browser side.
Now most engines use interpreter and compiler both - so we use the term JIT Compiled.

AST given to interpreter which converts to be byte code to be executed
During execution it takes help of compiler to optimize the code.

Each engine have different algorithms of implementing these.
It may not be one cycle thing but happens in multiple phases.

Some engine have AOT Ahead of time compilation where interpreter takes piece of code that will be executed later and tries to optimize it as much as it can.

In order to be executed JS needs 2 things: Memory Heap and Call Stack.
 - Memory heap is in sync with call stack and garbage collector
 */

/** Garbage collector
 *  - uses Mark-and-Sweep Algorithm(uses across garbage collectors for other languages as well)

Compiler does other optimizations as well
- In-lining
- Copy alison
- Inline caching
 */
// ! These are very generic overview of JS engines - each one have their own way of implementing these things - both most things remains common - like AST, interpreter, compiler
// Google V8 considered currently to be fastest among all
/**
 * 1. Ignition interpreter
 * 2. Turbo-fan optimizing compiler
 */

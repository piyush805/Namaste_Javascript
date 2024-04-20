var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}
/**
1st Global execution context;  (Pushed in call-stack)
    - Memory creation phase: x undefined, a definition, b definition
    - Code execution: 
    Line 1: x assigned 1
    Line 2: Another execution context (Pushed in call-stack)
        - Memory creation phase: x undefined(as a separate variable all together)
        - Code execution: 
        Line 7: x assigned 10
 *  !   Line 8: print value x as 10
        Delete this context(along with x variable memory and value)
    Line 3:  Another execution context (Pushed in call-stack)
        - Memory creation phase: x undefined(as a separate variable all together)
        - Code execution: 
        Line 7: x assigned 100
 *  !   Line 8: print value x as 100
        Delete this context(along with x variable memory and value)
 *  !   Line 4: print value of x as 1 (from local memory of this context)
 * Nothing more to execute - whole execution context deleted, removed from call-stack
 */
/**
 * Console will have
 * 10
 * 100
 * 1
 */

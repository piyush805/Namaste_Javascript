var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}
var square2 = square(n);
var square4 = square(4);

/**
1st phase Memory Allocation: 
JS will allocate memory to all variables and functions
 - variable n : undefined
 - function square: function definition
 - variable square2: undefined
 - variable square4: undefined

JS assigns variables value `undefined`
For function - it stores whole function code


2nd phase Code execution:
Line 1: variable n now assigned value 2

Line 2-5: nothing to execute

Line 6: Function execution
    - Function are like Mini program in JS and altogether new Execution Context is created
    - Memory allocation phase:
        - num(parameter) and ans(variable) allocated memory 
        - both assigned undefined
    - Code execution: 
        - Line 2: takes value of n(argument: which is 2) - assigns 2 to num(parameter of function)
        - Line 3: Executes multiplication and assigns value 4 to ans
        - Line 4: return control of program to context where function was invoked
        - current context with variable, definition gets destroyed
    - Square2 gets assigned value 4 which is returned from function

Line 7: Again function invocation
- Memory allocation phase:
        - num and ans allocated memory and assigned undefined
    - Code execution: 
        - Line 2: takes value of n(which is 4) - assigns 4 to num
        - Line 3: Executes multiplication and assigns value 16 to ans
        - Line 4: return control of program to context where function was invoked
        - current context with variable, definition gets destroyed
    - square4 gets assigned value 16

    Entire Bigger exec context gets deleted
 */
/**
    JS does all this by managing a stack - Call stack 
    First entire execution context is pushed inside stack
    Same for function execution when new context is created it is pushed again into stack
    And popped first on entire execution
    Global execution context gets pushed first so popped last - and call stack becomes empty
 */

/**
Call stack maintains order of execution of contexts
It i s known by many fancy names
 * 1. Execution Context Stack
 * 2. Program Stack
 * 3. Control Stack
 * 4. Runtime stack
 * 5. Machine Stack
 */

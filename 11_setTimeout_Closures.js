function x() {
  var i = 0;
  setTimeout(function () {
    console.log(i);
  }, 1000);
  console.log("after setTimeout function");
}
x();
/**
 after setTimeout function // gets printed before
 1
 */
// JS stores this timer somewhere to execute later and moves on to execute next line

// Problem: print 1 to 5 numbers in console after each and every second
function y() {
  var i = 1;
  var timer = setInterval(function () {
    console.log(i);
    i++;
    if (i > 5) {
      clearTimeout(timer);
    }
  }, 1000);
}
y();
/** 
 Using a for loop for this initializes loop each time
 Also it will not wait for setTimeout to execute before incrementing value of i
 i will be incremented all the way to 6 before setTimeout executes even once
 and then setTimeout will have value of i as 6 only each time
 */
for (var i = 0; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
/**  Closure: here setTimeout remembers reference to variable 'i' which got incremented to 6; it doesn't remember value to i - all 5 callbacks of setTimeout are pointing to same reference of i

 Using let instead of var: let has a block scope
 So each time loop runs- it is a new variable altogether - so each time the callback has its own new copy of i with it - which doesn't get affected by loop running

 */
for (let i = 0; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
// Another way to do it is with closure - it using let is not allowed here
function x() {
  for (var i = 1; i <= 5; i++) {
    function close(z) {
      setTimeout(function () {
        console.log(z);
      }, z * 1000);
    }
    close(i); // each time new copy of i is created for the function even if i itself is declared as var
  }
}
x();

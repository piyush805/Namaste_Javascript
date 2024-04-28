let name1 = {
  firstName: "Akshay",
  lastName: "Saini",
  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};
name1.printFullName();

let name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};
// ! CALL - In function borrowing

name1.printFullName.call(name2);

let printFullName2 = function () {
  console.log(this.firstName + " " + this.lastName);
};
// Below works as well
printFullName2.call(name1); // call function takes as first arg - what to refer to 'this' when used inside a function
// Any other arg can be 2nd, 3rd and so on - individually
printFullName2.call(name2, "Mumbai", "Maharashtra");

// ! APPLY - This is for function borrowing as well, but the only diff is in the way we pass arg
printFullName2.apply(name1, ["Mumbai", "Maharashtra"]); // - here 2nd arg is array

// ! BIND
// it returns us a copy of invoked by attaching it to the object which invoked it
// It doesnt invoke function - but returns copy of same function which can be invoked later
let printFullNameCopy = printFullName2.bind(name1, "Mumbai", "Maharashtra");
console.log(printFullNameCopy);
printFullNameCopy(); // so now since it is bound with name1, it can be used outside it without name of object as well

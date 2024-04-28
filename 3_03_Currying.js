let multiply = function (x, y) {
  console.log("args", x, y);
  console.log(x * y);
};
let multiplyByTwo = multiply.bind(this, 2); // 2 will be x
multiplyByTwo(5); // 5 will be y

let multiplyByThree = multiply.bind(this, 3); // 3 will be x
multiplyByThree(5); // 5 will be y

let multiplyByTwoThree = multiply.bind(this, 2, 3); // 2 will be x, 3 will be y
multiplyByTwoThree(5); // 5 will be ignored and it will always return 6 by 2 * 3

// This is function currying
// How we make copy of a given function by pre-setting some arguments inside it
// Like 2,3 in first case in place of x - and later passing our own arg as y

// Another way is Function Closures

let multiplyC = function (x) {
  return function (y) {
    console.log(x * y); // returned function will have access to x even after return
  };
};

let multiplyByTwoC = multiplyC(2);
multiplyByTwoC(3); // 6
let multiplyByThreeC = multiplyC(3);
multiplyByThreeC(5); // 15

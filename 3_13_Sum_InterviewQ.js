// sum(1)(2)(3)(4)....(n) function to give sum of all the numbers

// How will sum(1)(2)() to give output 3 will work?
// a = 1, b = 2;
let sum = function (a) {
  return function (b) {
    return a + b;
  };
};
// But for more variables it should behave like this
let sum2 = function (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};
// So we see pattern here lets try to solve it recursively
let sumGeneral = function (a) {
  return function (b) {
    console.log("arg", a, b); // 1 2, 3 3, 6 4, 10 undefined
    if (b) {
      return sumGeneral(a + b);
    }
    return a;
  };
};
let sumGeneral2 = (a) => (b) => b ? sum(a + b) : a;
console.log(sumGeneral2(1)(2)(3)(4)());

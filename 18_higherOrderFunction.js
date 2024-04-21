const radius = [3, 1, 2, 4];

// Given an array of radius: Implement functions to get area of circles
const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};
console.log(calculateArea(radius));

// What if you also had to calculate circumferences
const calculateCircumference = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};
console.log(calculateCircumference(radius));

// What if you also had to calculate diameter
const calculateDiameter = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
};
console.log(calculateDiameter(radius));

/**
 * !Problem: We are repeating ourselves - 90% code in functions is same
 * * Implement Functional Programming
 *  */
// Now we have extracted formula logic and passed that as generic function into loop where we invoke whatever logic we passed
// Here each extracted function has single responsibility and we are also not repeating ourselves
const area = function (r) {
  return Math.PI * r * r;
};
const circumference = function (r) {
  return 2 * Math.PI * r;
};
const diameter = function (r) {
  return 2 * r;
};
const calculate = function (arr, func) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(func(arr[i]));
  }
  return output;
};
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

/**
 * * Array HOC map function
 */
// Here calculate function is starting to look like map function where we iterate through an array of element, perform some operation on them and return another array
// So we don't even need to loop through element, Array have an inbuilt HOC for it already
// What we did above was writing our implementation of map function
// console.log(radius.map(area));
// console.log(radius.map(circumference));
// console.log(radius.map(diameter));

/**
 * ! But our implementation takes radius as an argument whereas function problem is property of array itself
 * * So for this we need to create this implementation in prototype of Array itself - because that's where radius arr inherits this map method
 * We need to put our function in Array.prototype
 */
Array.prototype.calculate1 = function (func) {
  const output = [];
  // we dont need explicit arr now since we are attaching to Array prototype itself
  // so 'this' will refer to Array object we are iterating upon - which will have property this.length and this.[i]
  for (let i = 0; i < this.length; i++) {
    output.push(func(this[i]));
  }
  return output;
};
console.log(radius.calculate1(area));
console.log(radius.calculate1(circumference));
console.log(radius.calculate1(diameter));

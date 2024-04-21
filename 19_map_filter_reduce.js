const arr = [5, 1, 3, 2, 6];

// ++++++++++++++++++++++++++ MAP ++++++++++++++++++++++++
// when we want to transform each element of the array and return a new array out of it
// this doesn't mutate the array
// map function takes in arg a function telling it what kind of transformation we want to do
function double(x) {
  return x * 2;
}
function triple(x) {
  return x * 2;
}
function binary(x) {
  return x.toString(2);
}
const output = arr.map(double);
console.log(output);

// Sometimes instead of extracting map function arg - we directly write it there itself
const output2 = arr.map(function double(x) {
  return x * 2;
});

// Even with arrow function
const output3 = arr.map((x) => {
  return x * 2;
});

// Since this is single line return we can remove curly braces and return statement
const output4 = arr.map((x) => x * 2);

// ++++++++++++++++++++++++++ FILTER ++++++++++++++++++++++++
// when we want to filter out some elements based on some logic and return a new array out of it
function odd(num) {
  return num % 2 !== 0;
}
const output5 = arr.filter(odd);
console.log(output5);
// Same way we can directly write function inside filter, write arrow function, remove curly braces and return statement if its a single line

// ++++++++++++++++++++++++++ REDUCE ++++++++++++++++++++++++
// Use case: find sum of all, multiplication, largest/smallest
// reduce takes a 2 args
// 1st is callback with 2 args  - which it iterates over each element of the array
//      - accumulator = accumulates the result which we have to get - this has to be initialized with something in the beginning
//      - current points to current value in iteration phase
// 2nd is initial value of the accumulator before it starts looping : Eg: 0 for sum, arr[0] for min/max

const sum = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

const max = arr.reduce(function (max, curr) {
  // acc is acting as max now
  if (curr > max) {
    max = curr;
  }
  return max;
}, arr[0]);

// From this arr determine set of unique age sand how many of users have that and return object like below
// {26: 2, 75: 1, 50: 1}
const users = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 26 },
];
// So clearly we don't need an array so no map or filter is needed - we need single object

const obj = users.reduce(function (acc, curr) {
  console.log("acc", acc, curr);
  if (acc[curr.age]) {
    // if such key present increment it by 1 for this element
    acc[curr.age] += 1;
  } else {
    // create key for such first user element
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(obj);

// +++++++++++++++++++++++++++++ CHAINING +++++++++++++++++++++++++++++++

// Find the last name of all the people with age < 30
const obj1 = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(obj1); //['akshay', 'deepika']

// But this can be also be done with reduce alone
const obj2 = users.reduce(function (arr, curr) {
  if (curr.age < 30) {
    arr.push(curr.firstName);
  }
  return arr;
}, []);
console.log(obj2); //['akshay', 'deepika']

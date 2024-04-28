// PROTOTYPAL INHERITANCE

// Inheritance in JS is different than other languages

// Whenever we create a variable, array, function, object - JS behind the scene attaches them to their designated prototype - which enable created entities to have access to prototype properties as well which we can access with the dot notation.

// We can access that hidden object by entityName.__proto__
const arr = [1, 2];
arr.__proto__; // dot notation over this shows us properties available with this inbuilt object

Array.prototype; // this is same as arr.__proto__
// This behind the scene object also have its own prototype
arr.__proto__.__proto__;
Object.prototype;

arr.__proto__.__proto__.__proto__; // Now this is actually `null`
// This is the prototype chain
// Deepest is the Object prototype for any type entity we create in JS : For array, object, function everything

// !Modifying the prototype itself - not advisable - causes performance issues
let object = {
  name: "Akshay",
  city: "Dehradun",
  getIntro: function () {
    console.log(this.name + " form " + this.city);
  },
};

let object2 = {
  name: "Aditya",
};

object2.__proto__ = object; // So now prototype points to object - so we can access properties of object inside object2

object2.getIntro(); // Aditya from Dehradun
// it checks for property inside own, when not found it looks for it in the parent
// this -> will point to object2; it found name but couldn't find city - so looked in the parent

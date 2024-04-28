// N-level deep object - Input - Write a function to return this in form of output object
let user = {
  name: "Akshay",
  address: {
    personal: {
      city: "Dehradun",
      area: "Majra",
    },
    office: {
      city: "Hyderabad",
      area: {
        landmark: "Hitech",
      },
    },
  },
};

let output = {
  user_name: "Akshay",
  user_address_personal_city: "Dehradun",
  user_address_personal_area: "Majra",
  user_address_office_area: "Hyderabad",
  user_address_office_area_landmark: "Hitech",
};

// Object iteration, for each key value pair
// append access value, while appending key names together in order to flatten the object correctly - "for (let key in obj)"
// For each key there is sub-object where we have to re-iterate again
// So until when it find no sub-object further we can return from there - this will be the base case for recursion

let finalObject = {};
let magic = function (obj, parentKey) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      magic(obj[key], parentKey + "_" + key);
    } else {
      finalObject[parentKey + "_" + key] = obj[key];
    }
  }
};
magic(user, "user");
console.log(finalObject);
// Edges cases? Not object cases can be null. undefined, 0, anything - so do we need to handle that as well - if so how?
// Here,  it was just if-else in object - there could be other complex variations of this as well

// There could be nested array of things to deal with - like category, sub category, product, variant etc and so on

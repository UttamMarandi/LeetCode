// Q. Write a function to merge two JavaScript Object dynamically?
// Example:

// Input:

// const person = {
//   name: "Tanvi",
//   age: 28
// };

// const address = {
//   addressLine1: "Some Location x",
//   addressLine2: "Some Location y",
//   city: "Bangalore"
// };

// Output:

// // Now person should have 5 properties
// name, age, addressLine1, addressLine2, city

const person = {
  name: "Tanvi",
  age: 28,
};

const address = {
  addressLine1: "Some Location x",
  addressLine2: "Some Location y",
  city: "Bangalore",
};

// Object.assign(target , ...sources) => It modifies the target object and stores all enumerable keys in the target object.

const mergeOne = (toObj, fromObj) => {
  return Object.assign(toObj, fromObj);
};

console.log(mergeOne(person, address));

const mergeTwo = (toObj, fromObj) => {
  if (typeof toObj === "object" && typeof fromObj === "object") {
    for (let key in fromObj) {
      if (fromObj.hasOwnProperty(key)) {
        //Assign only own properties and not inherited properties
        toObj[key] = fromObj[key];
      }
    }
    return toObj;
  } else {
    return "Merging requires two object";
  }
};

console.log(mergeTwo(person, address));

// Higher Order Funtion

// A function that takes another function as an argument or returns a function from it or both is known as higher order function.

function x() {
  console.log("Namaste");
}

function y(x) {
  x();
}

// y() is the higher order function and x() is the callback function.

// Question 1
// We have an array containing radius of 4 circles.

// Calculate the area of all circles.

// Code 1

const radius = [3, 1, 2, 4];
const calculateArea = (radius) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

const area = calculateArea(radius);
console.log("area:", area);

// Calculate circumference of these circles

const calculateCircumference = (radius) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};

const circumference = calculateCircumference(radius);
console.log("circumference:", circumference);

// Calculate Diameter of the circle

const calculateDiameter = (radius) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
};

const diameter = calculateDiameter(radius);
console.log("diameter:", diameter);

// Above way is not the right way to write code.
// We are not following the DRY priniciple, Do Not repeat yourself

// Code 2
// Extract the logic to find diameter , area and circumference out

const findArea = (radius) => {
  return Math.PI * radius * radius;
};

const findCircumference = (radius) => {
  return 2 * Math.PI * radius;
};

const findDiameter = (radius) => {
  return 2 * radius;
};

const calculate = (radius, logic) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

const totalArea = calculate(radius, findArea);
console.log("totalArea:", totalArea);

const totalCircumference = calculate(radius, findCircumference);
console.log("totalCircumference:", totalCircumference);

const totalDiameter = calculate(radius, findDiameter);
console.log("totalDiameter:", totalDiameter);

//  THis way of writing code is more modular and DRY

//  Use .map() in calculate

const mapCalculate = (radius, logic) => {
  return radius.map((rad) => logic(rad));
};

const totalAreaMap = mapCalculate(radius, findArea);
console.log("totalArea:", totalArea);

const totalCircumferenceMap = mapCalculate(radius, findCircumference);
console.log("totalCircumference:", totalCircumference);

const totalDiameterMap = mapCalculate(radius, findDiameter);
console.log("totalDiameter:", totalDiameter);

// Make calculate a part of Array Prototype
// Map Polyfill

Array.prototype.calculate = function (arr, logic) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(logic(arr[i]));
  }
  return output;
};

const mapArea = radius.calculate(radius, findArea);
console.log("mapArea:", mapArea);

//  Make calculate prototype pass only one argument

// Arrow functions are not used while defining prototype b.c they don't have thei own this keyword , arguments object or element.target
Array.prototype.mapCalculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    // here this refers to the array on which we will use this prototype
    output.push(logic(this[i]));
  }
  return output;
};

const mapCalculateArea = radius.mapCalculate(findArea);
console.log("mapCalculateArea:", mapCalculateArea);

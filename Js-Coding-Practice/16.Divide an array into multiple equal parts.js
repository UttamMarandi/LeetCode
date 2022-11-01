// Q. Write a function to divide an array into multiple equal parts?
// Example: Input: [10, 20, 30, 40, 50];
// Length: 3;
// Output: [10, 20, 30][(40, 50)];

let input = [10, 20, 30, 40, 50, 60, 89];
let length = 3;

const divideArray = (arr, length) => {
  for (let i = 0; i < arr.length; i = i + length) {
    //the logic is wrong here. count the i value
    console.log(arr.slice(i, length)); //.slice() returns a new array
  }
};
// wrong only returning one set
console.log(divideArray(input, length));
console.log("input:", input);

const divideArray2 = (arr, length) => {
  let result = [];
  while (arr.length > 0) {
    console.log(arr.splice(0, length));
    // because slice makes changes to the original array. we are slicing twice here
    const value = arr.slice(0, length);
    result.push(value);
    //.splice() makes changes to the original array and returns the deleted values.
  }
  return result;
};

console.log(divideArray2(input, length));

let input2 = [10, 20, 30, 40, 50, 60, 89];

const divideArray3 = (arr, length) => {
  while (arr.length > 0) {
    console.log(arr.splice(0, length));
  }
};

divideArray3(input2, length);

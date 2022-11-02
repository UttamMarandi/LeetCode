// How do you find min and max value in an array?
// Example:

// Input: [50, 20, 70, 60, 45, 30];
// Output:
// Min: 20
// Max: 70

const input = [50, 20, 70, 60, 45, 30];

const findMin = (arr) => {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

const findMax = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log(findMin(input));
console.log(findMax(input));

const findMin2 = (arr) => {
  return Math.min(...arr); //Math.min take values separated by commas
};

const findMax2 = (arr) => {
  return Math.max(...arr); //Math.max take values separated by commas
};

console.log(findMin2(input));
console.log(findMax2(input));

const findMin3 = (arr) => {
  return Math.min.apply(null, arr); //.apply(this object,arguments object) // this is one of the ways to not use spread operator
};

const findMax3 = (arr) => {
  return Math.max.apply(null, arr);
};

console.log(findMin3(input));
console.log(findMax3(input));

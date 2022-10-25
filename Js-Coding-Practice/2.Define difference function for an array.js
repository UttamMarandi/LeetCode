// Q. Write a function to accept argument like [array1].diff([array2]);
// Example:

// Input: [1, 2, 3, 4, 5, 6].diff([3, 4, 5]);
// Output: [1, 2, 6];

const a1 = [1, 2, 3, 4, 5, 6];
const a2 = [1, 2, 6];

// we are defining a diff funciton
Array.prototype.diff = function (a) {
  return this.filter((item) => !a.includes(item));
};

const diff = a1.diff(a2);
console.log("diff:", diff);

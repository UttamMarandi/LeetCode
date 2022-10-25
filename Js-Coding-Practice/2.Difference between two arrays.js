//  Write a function to get the difference between two arrays?
// Example:

// Input:
// var a1 = ['a', 'b'];
// var a2 = ['a', 'b', 'c', 'd'];

// Output:
// ["c", "d"]

const a1 = ["a", "b"];
const a2 = ["a", "b", "c", "d"];

const diff = a2.filter((item) => !a1.includes(item));
console.log("diff:", diff);

const findDiff = (a1, a2) => {
  if (a1.length > a2.length) {
    return a1.filter((item) => a2.includes(item));
  } else {
    return a2.filter((item) => a1.includes(item));
  }
};

const diff3 = findDiff(a1, a2);
console.log("diff3:", diff3);

const diff4 = findDiff(a2, a1);
console.log("diff4:", diff4);

const diff2 = a1.filter((item) => !a2.includes(item));

console.log("diff2:", diff2);

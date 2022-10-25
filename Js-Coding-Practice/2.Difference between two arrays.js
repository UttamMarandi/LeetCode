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

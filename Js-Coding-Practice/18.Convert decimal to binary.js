// Q. Write a function to convert decimal number to binary number?
// Example 01:

// Input: 10
// Output: 1010
//  Save
// Example 02:

// Input: 7
// Output: 111

const input = 10;

const decimalToBinary = (input) => {
  if (typeof input === "number") {
    return input.toString(2); // 2 is the radix meaning binary number
  } else {
    return Number(input).toString(2);
  }
};

console.log(decimalToBinary(10));
console.log(decimalToBinary("10"));

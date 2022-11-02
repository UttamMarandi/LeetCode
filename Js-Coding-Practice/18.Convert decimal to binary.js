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

const decimalToBinary2 = (input) => {
  if (Number.isInteger(input)) {
    let bin = 0;
    let i = 1;
    let rem;

    while (input !== 0) {
      rem = input % 2;
      bin = bin + i * rem;
      input = parseInt(input / 2);
      i = i * 10; // i is sort of acting like the nth position place from left hand side.
    }
    console.log(bin);
    return bin;
  } else {
    console.log("Error: Cannot convert float values");
    return `Error: Cannot convert float values`;
  }
};

console.log(decimalToBinary2(20));

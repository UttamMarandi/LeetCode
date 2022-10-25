// Write a function to accept argument like sum(num1)(num2); or sum(num1,num2);
// Example 1:

// Input: sum(10)(20);
// Output: 30
// Explanation: 10 + 20 = 30
//  Save
// Example 2:

// Input: sum(10, 20);
// Output: 30
// Explanation: 10 + 20 = 30

const funcCall = (x, y) => {
  if (y === undefined) {
    return (y) => x + y;
  } else {
    return x + y;
  }
};

const value1 = funcCall(10)(20);
console.log("value1:", value1);

const value2 = funcCall(10, 20);
console.log("value2:", value2);

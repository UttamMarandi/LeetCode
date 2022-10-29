// Write a program to reverse a string?

const reverseString = (str) => {
  let reverse = "";
  for (let i = str.length; i >= 0; i--) {
    reverse = reverse + str.charAt(i);
  }
  return reverse;
};

console.log(reverseString("Uttam"));

// 2nd Way

const reverseString2nd = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverseString2nd("Uttam"));

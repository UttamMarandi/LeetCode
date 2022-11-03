// Q. Write a script that returns the number of occurrences of character given a string as input?

const checkTimes = (str, char) => {
  const splitChar = str.split("");
  console.log("splitChar:", splitChar);
  return splitChar.filter((item) => item === char).length;
};

console.log(checkTimes("Uttam", "t"));
console.log(checkTimes("Uttam", "a"));

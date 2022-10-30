// Q. Given a string, reverse each word in the sentence
// Example:

// Input: "Hello World";
// Output: "olleH dlroW";

const myString = "Hello World";

const reverseWord = (myString) => {
  const splitWords = myString.split(" ");
  console.log("splitWords:", splitWords);

  return splitWords.map((word) => word.split("").reverse().join(""));
};

console.log(reverseWord(myString));

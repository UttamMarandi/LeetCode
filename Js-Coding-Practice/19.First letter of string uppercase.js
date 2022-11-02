// Q. Write a function make first letter of the string in an uppercase?
// Example:

// Input: hello world
// Output: Hello World

const capitalizeWord = (str) => {
  if (typeof str === "string") {
    const splitWords = str.split(" ");
    console.log("splitWords:", splitWords);
    const mapWords = splitWords.map(
      (word) => `${word.charAt(0).toUpperCase()}${word.substring(1)}` //we could have also used .slice(1) => .slice() works with strings
    );
    console.log("splitWords:", mapWords);
    return mapWords.join(" ");
  }
};

console.log(capitalizeWord("uttam marandi"));

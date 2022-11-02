// Q. Write a function which will test string as a literal and as an object?
// Example 01:

// Input:  const ltrlStr = "Hi I am string literal";
// Output: It is a string literal
//  Save
// Example 02:

// Input:  const objStr = new String("Hi I am string object");
// Output: It is an object of string

const ltlrStr = "Hi I am string literal";
const objStr = new String("Hi I am a string object");

const checkType = (str) => {
  if (str instanceof String) {
    console.log(str);
    return `instace string ${objStr}`;
  } else if (typeof str === "string") {
    console.log(str);
    return `liteal string ${str}`;
  } else {
    console.log("Some other type");
    return `Some Other type`;
  }
};

console.log(checkType(ltlrStr));

console.log(checkType(objStr));

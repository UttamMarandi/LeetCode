console.log(a); // returns undefined // accessing after memory allocation and before code execution phase
var a = 7;
// Even before running the above code , global execution context is created and then memory is also allocated
//undefined is like a placeholer for a variable in memory so that a value gets passed to it in future
console.log(a); // returns 7 because accesing variable after code execution line 2
//console.log(x); //returns reference error : x is not defined b.c we don't have any space allocated to it in memory

if (a === undefined) {
  // a got some value , but if line 2 is written in line 15 , then it will be equal to undefined
  console.log("a is undefined");
} else {
  console.log("a is not undefined");
}

//Javascript is a loosly-typed language. Meaning js does not attach a type to it's variable. also known as weakly-typed is language
// A variable with number stored can also store a string

let b;

console.log(b);

b = 10;

console.log(b);

b = "Uttam";

console.log(b);

// DO NOT DO THIS
b = undefined; // undefined should always be provided by the system.devs should not do this. intead assign b as null

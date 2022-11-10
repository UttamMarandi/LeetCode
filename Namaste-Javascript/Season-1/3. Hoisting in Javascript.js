getName(); //trying to access a function before declaring it. getName() is executed normally
console.log(x);
console.log(getName); // we log the entire function
var x = 7; //x gets undefined b.c of hoisting. move to the top of scope and initialized to zero. If we remove varibale x from code , then an error is caused => "x is not defined"

function getName() {
  console.log("Uttam Marandi");
}

console.log(getName); //here also we log the entire function

// Why the above phenomena is happening

// Because of execution context phases.
// At first memory is allocated to variables and function. variables are initialized with value undefined and the entire function code is stored for function key
//Then only code execution phase begins.
// So when value of x will get value undefined. getName will return the entire funciton code.
//getName() function call will create a new function execution cotext and run function code there. So , it will log expected values.

console.log(getRealName());
//Arrow functions are not hoisted to the top.Because arrow functions during memeory exxecution phase behave like a variable not function and hence given the value undefined.
//That's why we get the error as getRealName is not a function so you cannot call it because you cannot call a variable

var getRealName = () => {
  //getRealName is an arrow name
  console.log("Real Name");
};

console.log(dummyName());
// This will also get error of dummyName is not a funciton b.c during memory execution phase dummyName is treated as variable b.c we are assigning a function to this variable.

const dummyName = function () {
  console.log("Dummy Name");
};

// Code 1

const person = { name: "neha" };
const array = [person, person, person];
array[1].name = "";
console.log(array[2].name);

// Code 2

console.log(+"Hello");

// Code 3
var result;
for (var i = 5; i > 0; i--) {
  result = result + i;
}
console.log(result);
console.log(undefined + 1);

// Code 4
var a = 1.2;
console.log(typeof a);

// Code 5
var x = 10;
if (x) {
  let x = 4;
}
console.log(x);

// Code 6
console.log(0.1 + 0.2 == 0.3);

// Code 7
console.log(1 + -"1" + 2);
// If number and string are + operands , then number takes priority

// Code 8
(function (x) {
  return (function (y) {
    console.log(x);
  })(10);
})(20);

// Code 9
var num = 20;
var getNumber = function () {
  console.log(num); // confused // SOlved => here we are trying to access variable from function execution context which is undefined at this point
  var num = 10;
  console.log(num);
};
console.log(num);
getNumber();

// Code 10
function f1() {
  num = 10;
}
f1();
console.log("window.num: " + window.num); // Confusion, In browser it is giving 10.
// Solved => Earlier I was thingking that a new local execution context will be created. But that's not the case. The function and it's variables are present inside the global object only.

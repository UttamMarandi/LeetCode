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
// The negative operator converts the string "1" to number
console.log(1 + "1" + 2);

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
// console.log("window.num: " + window.num); // Confusion, In browser it is giving 10.
// Solved => Earlier I was thingking that a new local execution context will be created. But that's not the case. The function and it's variables are present inside the global object only.

// Code 11
console.log("(null + undefined): " + (null + undefined));

// Code 12
(function () {
  var a = (b = 3);
})();

console.log(`value of a : " + ${a}`); // a is undefined
console.log("value of b : " + b);
//a is local to function execution context b.c it is declared with var
// var a = b =3 is equivalent
// var a =b; // local
// b =3; // global

// Code 13
var y = 1;
if (function f() {}) {
  // In function statement , function name inside local E.C is undefined.
  // But name function expression, we can access function name in L.E.C
  console.log(typeof f);
  y += typeof f;
}
console.log(y);

// Code 14
var k = 1;
if (1) {
  eval(function foo() {});
  k += typeof foo;
}
console.log(k);

// Code 15
var k = 1;
if (1) {
  function foo() {}
  k += typeof foo;
}
console.log(k);

// Code 16
console.log("(-1 / 0): " + -1 / 0);
console.log("(1 / 0): " + 1 / 0);
console.log("(0 / 0): " + 0 / 0);
console.log("(0 / 1): " + 0 / 1);

// Code 17

var a = 4;
var b = "5";
var c = 6;

console.log("(a + b): " + (a + b));
console.log("(a - b): " + (a - b));
console.log("(a * b): " + a * b);
console.log("(a / b): " + a / b);
console.log("(a % b): " + (a % b));

// Code 18
console.log("MAX : " + Math.max(10, 2, NaN)); // Nan // No idea why
console.log("MAX : " + Math.max()); // -Infinity , b.c that is the smallest number

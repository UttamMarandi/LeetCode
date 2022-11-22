// Code 57
var arrA = [0, 1, 2, 3, 4, 5];
var arrB = arrA;
arrB[0] = 42;
console.log(arrA);

// Code 58
var arrC = [
  { prop1: "value of array A!!" },
  { someProp: "also value of array A!" },
  3,
  4,
  5,
];
var arrD = arrC;
arrD[0].prop1 = 42;
console.log(arrC);
arrD[0] = 42;
console.log(arrC);

// Code 59
var arrA = [
  { prop1: "value of array A!!" },
  { someProp: "also value of array A!" },
  3,
  4,
  5,
];
var arrB = arrA.slice();
arrB[0].prop1 = 42;
arrB[3] = 20;
console.log(arrA);

// The output will be [{prop1: 42}, {someProp: "also value of array A!"}, 3,4,5].

// The slice function copies all the elements of the array returning the new array. However, it doesn't do deep copying. Instead it does shallow copying. You can imagine slice implemented like this:

// function slice(arr) {
//   var result = [];
//   for (i = 0; i < arr.length; i++) {
//     result.push(arr[i]);
//   }
//   return result;
// }

// Look at the line with result.push(arr[i]). If arr[i] happens to be a number or string, it will be passed by value, in other words, copied. If arr[i] is an object, it will be passed by reference.
// In case of our array arr[0] is an object {prop1: "value of array A!!"}. Only the reference to this object will be copied. This effectively means that arrays arrA and arrB share first two elements.
// This is why changing the property of arrB[0] in arrB will also change the arrA[0].

// Code 60

// console.log(employeeId); Referrence Error : employeeId is not defined

// Code 61
console.log(employeeId);
var employeeId = "19000";

// Code 62
var employeeId = "1234abe";
(function () {
  console.log(employeeId);
  var employeeId = "122345";
})();

// Code 63
var employeeId = "1234abe";
(function () {
  console.log(employeeId);
  var employeeId = "122345";
  (function () {
    var employeeId = "abc1234";
  })();
})();

// Code 64
(function () {
  console.log(displayFunc);
  console.log(typeof displayFunc);
  var displayFunc = function () {
    console.log("Hi I am inside displayFunc");
  };
})();

// Code 65 => Boubt

var employeeId5 = "abc123";
function foo() {
  employeeId5 = "123bcd";
  console.log(employeeId5);
  return;
}
foo();
console.log(employeeId5);

// Code 66

var employeeIds = "abc123";
function foos() {
  employeeIds = "123bcd";
  return;

  function employeeIds() {}
}
foos();
console.log(employeeIds);
// I think the reason being employeeIds is converted to a function inside foos() execution context.
// During memory allocation phase :
// employeeIds = undefined
// employeeIds = function{...} // This makes employeeIds a local execution context  variable
// When we log employeeIds outside in foos scope , we get global variable

// Const 67 => Doubt

{
  var employeeId = "abc123";

  function foo() {
    console.log(foo);
    employeeId();
    return;

    function employeeId() {
      // In function statement , function name is availaible
      console.log(typeof employeeId);
    }
  }
  foo();
}

// Code 68

function foo() {
  employeeId();
  var product = "Car";
  return;

  function employeeId() {
    console.log(product);
  }
}
foo();

// Code 69
(function foo() {
  bar();

  function bar() {
    abc();
    console.log(typeof abc);
  }

  function abc() {
    console.log(typeof bar);
  }
})();

// Code 70

(function () {
  "use strict";

  var person = {
    name: "John",
  };
  person.salary = "10000$";
  person["country"] = "USA";

  Object.defineProperty(person, "phoneNo", {
    value: "8888888888",
    enumerable: true,
  });

  console.log(Object.keys(person));
})();

// Code 71

(function () {
  "use strict";

  var person = {
    name: "John",
  };
  person.salary = "10000$";
  person["country"] = "USA";

  Object.defineProperty(person, "phoneNo", {
    value: "8888888888",
    enumerable: false, // Enumerabe set to false means we can't access the "phoneNo" key in Object.keys() .
  });

  console.log(person.phoneNo); // We can use .operation but
  console.log(Object.keys(person));
})();

// Code 41
let sum = (a, b) => {
  a + b;
};
console.log(sum(10, 20));

// Code 42
var arr = ["javascript", "typescript", "es6"];

var searchValue = (value) => {
  return arr.filter((item) => {
    return item.indexOf(value) > -1;
  });
};

console.log(searchValue("script"));

// Code 43
var output = (function (x) {
  delete x;
  return x;
})(0);
//The code above will output 0 as output. delete operator is used to delete a property from an object.
//Here x is not an object it's local variable. delete operator doesn't affect local variables.

console.log(output);

// Code 44
var x = 1;
var output = (function () {
  delete x;
  return x;
})();

console.log(output);

// Code 45
var x = { foo: 1 };
var output = (function () {
  delete x.foo;
  return x.foo;
})();

console.log(output);

// Code 46
var Employee = {
  company: "xyz",
};
var emp1 = Object.create(Employee);
delete emp1.company;

console.log(emp1.company);

// The code above will output xyz as output. Here emp1 object got company as prototype property. delete operator doesn't delete prototype property.
// emp1 object doesn't have company as its own property. you can test it console.log(emp1.hasOwnProperty('company')); //output : false However, we can delete company property directly from Employee object using delete Employee.company or we can also delete from emp1 object using __proto__ property delete emp1.__proto__.company.

// Code 47

var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
delete trees[3];
console.log(trees.length);

// The code above will output 5 as output. When we used delete operator for deleting an array element then, the array length is not affected by this. This holds even if you deleted all elements of an array using delete operator.

// So when delete operator removes an array element that deleted element is no longer present in the array. In place of value at deleted index undefined x 1 in chrome and undefined is placed at the index. If you do console.log(trees) output ["xyz", "xxxx", "test", undefined × 1, "apple"] in Chrome and in Firefox ["xyz", "xxxx", "test", undefined, "apple"].

// Code 48
var bar = true;

console.log(bar + 0);
console.log(bar + "xyz"); // here true is not converted to 1 b.c the other operator is string
console.log(bar + true);
console.log(bar + false);

// Number + Number -> Addition
// Boolean + Number -> Addition
// Boolean + Boolean -> Addition
// Number + String -> Concatenation
// String + Boolean -> Concatenation
// String + String -> Concatenation

// Code 49
var z = 1,
  y = (z = typeof y);
console.log(y);

// The code above will print string "undefined" as output. According to associativity rule operator with the same precedence are processed based on their associativity property of operator. Here associativity of the assignment operator is Right to Left so first typeof y will evaluate first which is string "undefined" and assigned to z and then y would be assigned the value of z. The overall sequence will look like that:

// var z;
// z = 1;
// var y;
// z = typeof y;
// y = z;

// Code 50
// var foo = function bar() { // Refereence error
//   return 12;
// };
// typeof bar();

//The function definition can have only one reference variable as a function name

var bar = function () {
  return 12;
};
console.log(typeof bar());

var foo = function bar() {
  // foo is visible here
  // bar is visible here
  console.log(typeof bar()); // Works here :)
};

// foo is visible here
// bar is undefined here

// Code 51
bar();
(function abc() {
  console.log("something");
})();
function bar() {
  console.log("bar got called");
}

// output
// bar got called
// something

// Code 52
var salary = "1000$";

(function () {
  console.log("Original salary was " + salary);

  var salary = "5000$";

  console.log("My New Salary " + salary);
})();

// Code 53 => Doubt
function User(name) {
  this.name = name || "JsGeeks";
}

var person = (new User("xyz")["location"] = "USA");
console.log(person);

// Code 54
var strA = "hi there";
var strB = strA;
strB = "bye there!";
console.log(strA);

//The output will 'hi there' because we're dealing with strings here. Strings are passed by value, that is, copied.

var mar = 10;
var masi = mar;
masi = 30;
console.log("mar:", mar);
// I think primitive types are passed by value

// Code 55
var objA = { prop1: 42 };
var objB = objA;
objB.prop1 = 90;
console.log(objA);

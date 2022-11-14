// Code 19
(function () {
  var a = (b = 3);
})();

console.log(b);
console.log("a defined? " + (typeof a !== "undefined"));
console.log("b defined? " + (typeof b !== "undefined"));

// Code 20

var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo);
    console.log("outer func:  self.foo = " + self.foo);
    (function () {
      // this function will have it's own this keyword. We will be creating a new execution context
      console.log("inner func:  this.foo = " + this.foo);
      console.log("inner func:  self.foo = " + self.foo);
    })();
  },
};
myObject.func();

// Code 21
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Code 22
(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
})();

// Code 23
var arr1 = "john".split("");
console.log("arr1:", arr1.length);
console.log("arr1.slice(-1):", arr1.slice(-1));
var arr2 = arr1.reverse(); // reverse works on original array
console.log("arr1:", arr1);
console.log("arr2:", arr2);
var arr3 = "jones".split("");
console.log("arr3:", arr3);

arr2.push(arr3); // arra1 and arra2 are same
console.log("arr2:", arr2);
console.log("arr1:", arr1);

console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// Code 24
console.log(1 + "2" + "2");
console.log(1 + +"2" + "2"); // Extra "+" operator converts it to a number
console.log(1 + -"1" + "2");
console.log(+"1" + "1" + "2");
console.log("A" - "B" + "2"); // operator "-" tries to converet "B" to a number
console.log("A" - "B" + 2);

// Code 25
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

// Code 26
for (var i = 0; i < 5; i++) {
  (function (x) {
    setTimeout(function () {
      console.log(x);
    }, x * 1000);
  })(i);
}

// Code 27
console.log("0 || 1 = " + (0 || 1));
console.log("1 || 2 = " + (1 || 2));
console.log("0 && 1 = " + (0 && 1));
console.log("1 && 2 = " + (1 && 2));

// Code 28
console.log(false == "0");
console.log(false === "0");

// Code 29 // Doubt
var a = {},
  b = { key: "b" },
  c = { key: "c" };

console.log("a:", a);
console.log("b:", b);
a[b] = 123;
console.log("a:", a);
a[c] = 456;
console.log("a:", a);

console.log(a[a]);

// Code 30
console.log(
  (function f(n) {
    return n > 1 ? n * f(n - 1) : n;
  })(10)
);

// Code 31
var hero = {
  _name: "John Doe",
  getSecretIdentity: function () {
    return this._name;
  },
};
var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity()); // here this represent the function scope
console.log(hero.getSecretIdentity()); // here this represents the object scope

// Code 32 => Doubt
var length = 10;
function fn() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function (fn) {
    fn();
    arguments[0]();
  },
};

obj.method(fn, 1);

// Code 33 => Doubt
(function () {
  try {
    throw new Error();
  } catch (x) {
    // Here we are defining a new x inside the catch block.
    // So var x=1 , changes this local catch block and not the function level x
    var x = 1;
    var y = 2;
    console.log(x);
  }
  console.log(x);
  // here it is still undefined b.c x got hoisted to in line 57 , but the function scope x is not initialzied yet. b.c line 57 changes the local x passed to the catch block
  console.log(y);
  console.log(x);
})();

// Code 34
var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};
girl();

// Code 35
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

// Code 36
console.log(typeof typeof 1);

// Code 37
var b = 1;
function outer() {
  var b = 2;
  function inner() {
    b++;
    console.log(b);
    var b = 3;
    console.log(b);
  }
  inner();
}
outer();

// Code 38
{
  x = 10;
  console.log(x);
  var x;
}

// Code 39
const arr = [1, 2];
arr.push(3);
console.log("arr:", arr);

// // Code 40 => Doubt
// var o = new F();
// o.constructor === F;
// Ans : true , the constructor property specifies the class.

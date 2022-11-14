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

// Code 32
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

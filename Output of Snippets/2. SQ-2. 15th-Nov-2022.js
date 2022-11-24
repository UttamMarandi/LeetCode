// Code 72

(function () {
  var objA = {
    foo: "foo",
    bar: "bar",
  };
  var objB = {
    foo: "foo",
    bar: "bar",
  };
  console.log(objA == objB);
  console.log(objA === objB);
})();

// false , b.c they point to differenct objects in memory.

// Code 73
(function () {
  var objA = new Object({ foo: "foo" });
  var objB = new Object({ foo: "foo" });
  console.log(objA == objB);
  console.log(objA === objB);
})();

// Code 74
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = Object.create({
    foo: "foo",
  });
  console.log(objA == objB);
  console.log(objA === objB);
})();

// Code 74
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = Object.create(objA);
  console.log(objA == objB);
  console.log(objA === objB);
})();

// Code 75
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = Object.create(objA);
  console.log(objA.toString() == objB.toString());
  console.log(objA.toString() === objB.toString());
})();

// Code 76
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = objA;
  console.log(objA == objB);
  console.log(objA === objB);
  console.log(objA.toString() == objB.toString());
  console.log(objA.toString() === objB.toString());
})();

// Code 77
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = objA;
  objB.foo = "bar";
  console.log(objA.foo);
  console.log(objB.foo);
})();

// Code 78
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = objA;
  console.log(objA);
  console.log(objB);

  // Both the objects are empty. Food is assigned to the __proto__ object .
  // Assignment to Object.create({}) do not create it's own property but the assigned object inherits the keys of the passed object through __proto__ object.

  objB.foo = "bar"; // That's why this assignment does not work

  objB.__proto__.foo = "bar";

  delete objA.foo;
  console.log(objA.foo);
  console.log(objB.foo);
  delete objA.__proto__.foo;
  console.log(objA.foo);
  console.log(objB.foo);
})();

// var objA = Object.create({
//     foo: 'foo'
// });
// creates an object objA with objA.__proto__ (its prototype) set to {foo: 'foo'}. There is not an actual objA.foo property, it is actually objA.__proto__.foo, so nothing is deleted.
// If you do instead
// var objA = {foo: 'foo'}

// Code 79

(function () {
  var objA = {
    foo: "foo",
  };
  var objB = objA;
  objB.foo = "bar";

  console.log(objA.foo);
  console.log(objB.foo);

  delete objA.foo;
  console.log(objA.foo);
  console.log(objB.foo);
})();

// Code 80
(function () {
  var array = new Array("100");
  console.log(array);
  console.log(array.length);
})();

// Code 81
(function () {
  var array1 = [];
  var array2 = new Array(100); // passing integer as argument means , we are creating an array of size 100
  var array3 = new Array(["1", 2, "3", 4, 5.6]); // Array constructor takes parameters separated by commas.
  console.log(array1);
  console.log(array2);
  console.log(array3);
  console.log(array3.length);
})();

// Code 82
(function () {
  var array = new Array("a", "b", "c", "d", "e");
  array[10] = "f";
  console.log("array:", array);
  delete array[10];
  console.log("array:", array);
  console.log(array.length);
})();

// Code 83
(function () {
  var animal = ["cow", "horse"];
  animal.push("cat");
  animal.push("dog", "rat", "goat");
  console.log(animal.length);
})();

// Code 84
(function () {
  var animal = ["cow", "horse"];
  animal.push("cat");
  animal.unshift("dog", "rat", "goat");
  console.log(animal);
})();

// Code 85
(function () {
  var array = [1, 2, 3, 4, 5];
  console.log(array.indexOf(2));
  console.log([{ name: "John" }, { name: "John" }].indexOf({ name: "John" })); //  indexOf can't compare objects.
  console.log([[1], [2], [3], [4]].indexOf([3])); //  indexOf can't compare objects and array is an object
  console.log("abcdefgh".indexOf("e"));
})();

// Code 86
(function () {
  var array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6];
  console.log(array.indexOf(2));
  console.log(array.indexOf(2, 3)); // indexOf(searchElement, fromIndex)
  console.log(array.indexOf(2, 10));
})();

// Code 87
(function () {
  var numbers = [2, 3, 4, 8, 9, 11, 13, 12, 16];
  var even = numbers.filter(function (element, index) {
    return element % 2 === 0;
  });
  console.log(even);

  var containsDivisibleBy3 = numbers.some(function (element, index) {
    // some returns a boolean value
    // at least one element in the array passes the test
    return element % 3 === 0;
  });

  console.log(containsDivisibleBy3);
})();

// Code 88 // Doubt
(function () {
  var containers = [2, 0, false, "", "12", true];
  var containers = containers.filter(Object);
  console.log(containers);
  var containers = containers.filter(Number);
  console.log(containers);
  var containers = containers.filter(String);
  console.log(containers);
  var containers = containers.filter(Boolean); // Boolean means true
  console.log(containers);
})();

// Code 89

(function () {
  var list = ["foo", "bar", "john", "ritz"]; //.slice() return new array. .slice(startIndex, endIndex)
  console.log(list.slice(1));
  console.log(list.slice(1, 3));
  console.log(list.slice());
  console.log(list.slice(2, 2));
  console.log(list);
})();

// Codr 90

(function () {
  var list = ["foo", "bar", "john"];
  console.log(list.splice(1));
  console.log(list.splice(1, 2));
  console.log(list);
})();

// Code 91
(function () {
  var arrayNumb = [2, 8, 15, 16, 23, 42];
  arrayNumb.sort(); // Numbers are sorted as strings. That's why 1s get priority
  console.log(arrayNumb);
  arrayNumb.sort((a, b) => (b > a ? -1 : 0));
  console.log(arrayNumb);
})();

// Code 92
function funcA() {
  console.log("funcA ", this);
  (function innerFuncA1() {
    console.log("innerFunc1", this);
    (function innerFunA11() {
      console.log("innerFunA11", this);
    })();
  })();
}

console.log(funcA());

// Code 93 => Doubt
var obj = {
  message: "Hello",
  innerMessage: !(function () {
    console.log(this.message); // innerMessage is a IIFE , so it creates it's own ecexution context. and this keyword doesnot have reference to obj.message
  })(),
};

console.log(obj.innerMessage);

// undefined is due to console.log statement in IIFE

// (function() {
//         console.log(this.message);
//     })() //prints undefined and returns `undefined`
// And true is because innerMessage is a boolean as you negated !undefined ==> true.

// Code 94
var obj = {
  message: "Hello",
  innerMessage: function () {
    return this.message;
  },
};

console.log(obj.innerMessage());

// Code 95
var obj = {
  message: "Hello",
  innerMessage: function () {
    (function () {
      console.log(this.message);
    })();
  },
};
console.log(obj.innerMessage());

// Code 96
var obj = {
  message: "Hello",
  innerMessage: function () {
    var self = this;
    (function () {
      console.log(self.message);
    })();
  },
};
console.log(obj.innerMessage());

// Code 97
function myFunc() {
  console.log(this.message);
}
myFunc.message = "Hi John";

console.log(myFunc());

// Code 98
function myFunc() {
  console.log(myFunc.message);
}
myFunc.message = "Hi John";

console.log(myFunc());

// Code 99
function myFunc() {
  myFunc.message = "Hi John";
  console.log(myFunc.message);
}
console.log(myFunc());

// Code 100
function myFunc(param1, param2) {
  console.log(myFunc.length);
}
// A Function object's length property indicates how many arguments the function expects, i.e. the number of formal parameters.
console.log(myFunc());
console.log(myFunc("a", "b"));
console.log(myFunc("a", "b", "c", "d"));

// Code 101
function myFunc() {
  console.log(arguments.length);
}
console.log(myFunc());
console.log(myFunc("a", "b"));
console.log(myFunc("a", "b", "c", "d"));

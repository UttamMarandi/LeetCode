function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}
x();

// Result
// 7; // This result is from the Closure scope

// Closure basically means a function bind together with it's  lexical enviroment
//

function a() {
  var b = function c() {
    // we can assign a function to a variable
    console.log(b);
  };
  y();
}

x();

x(function (d) {
  // we can also pass a function as parameter to another function
  console.log(a);
});

function e() {
  var f = function g() {
    // we can assign a function to a variable
    console.log(f);
  };
  return g; // a function can also be returned
}

//  RETURNING A FUNCITON FROM ANOTHER FUNCTION

function h() {
  var k = 7;
  function j() {
    console.log(k);
  }
  return j; // we are returing a function ;
}

var l = h(); // it returns the entire function

// But after completion of execution of the funciton the execution context created for the function is destroyed.
// We have returned and exposed an outside function .

console.log(l);

l(); // logs 7

// When we call l() , which contains the function j(). But function j tries to access variable k which is in function scope and get's deleted after h() execution is complete
// But still calling l() returns 7
//THis happens b.c when returing a funciton , not just the function code is returned but a closure was returned. closure is the funciton along with lexical scope.
// so in it's lexical scope we have access/reference to value k

// CORNER-CASES
// Code 1

function h() {
  var k = 7;
  function j() {
    console.log(k);
  }
  k = 100;
  return j; // we are returing a function ;
}

var l = h();
l(); // it will log 100

// Reason , While returning a function we are returing the closure which contains the function and lexical enviroment. We have references to the variables and functions.
//Think of it as after memory allocation ,
// k:undefined => line 67 ---- k:7 => line 71 => k:100, so before returing j() which gets stored in l, the value of k has already become 100
//Javascript is pass by reference and not pass by value
//
//
// Code 2

function z() {
  var b = 900;
  function h() {
    var k = 7;
    function j() {
      console.log(k, b); // here we are trying to access lexical enviroment of it's parent and also it's parent's parent lexical enviroment
      // and it's possible
    }
    k = 100;
    y();
    return j; // we are returing a function ;
  }
  h();
}
z();

//So we can say that Closure is a function along with it's lexical enviroment and also it's parent lexical enviroment till the top i.e the global execution context

// USE CASES
// Uses of closure
//1. Module design pattern
//2. Currying
//3. Functions like once
//4. Memoize
//5. Maintaining state in async world
//6. setTimeOuts
//7. Iterators

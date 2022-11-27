//  Currying means dividing a function with multiple parameters  to multiple functions with single parameters
// By Currying

{
  let multiply = function (x, y) {
    console.log(x * y);
  };

  let multiplyByTwo = multiply.bind(this, 2, 10); // here this is the window object
  // Generates a copy and did not call this immidiatly
  // This is similar to multiply method with x value permanently set to 2

  multiplyByTwo(3); // argument pass will refer to the y value.
  // If multiplyByTwo function already has required parameters while binding, than it will ignore the parameters passed during call of multiplyByTwo

  let multiplyByThree = multiply.bind(this, 3);

  multiplyByThree(5);
}

// By closure

let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyClosusre = function (x) {
  return function (y) {
    // access to x b.c of closure
    console.log(y * x);
  };
};

let multiplyByTwo = multiplyClosusre(2);

multiplyByTwo(6);

// or

multiplyClosusre(2)(4); // this will also work

//  Code 1
{
  let name = {
    firstName: "Uttam",
    lastName: "Marandi",
    printFullName: function () {
      console.log(`${this.firstName} ${this.lastName}`);
      // here this refers to the name object
    },
  };

  name.printFullName();

  let name2 = {
    firstName: "Sanjay",
    lastName: "Soren",
  };

  // Using .call() we can do a function borrowing
  //.call()=> first parameter is the object to which we want to borrow the function i.e the name2 object.
  // this now will point to name2
  name.printFullName.call(name2); // prints Sanjay Soren
}
// Code 2
{
  let name = {
    firstName: "Uttam",
    lastName: "Marandi",
  };

  let name2 = {
    firstName: "Sanjay ",
    lastName: "Soren",
  };

  let printFullName = function () {
    console.log(`${this.firstName} ${this.lastName}`);
  };

  printFullName.call(name);
  printFullName.call(name2); // the passed parameter will have reference to this keyword.
}

// Code 3
// Paramters in a function
{
  let name = {
    firstName: "Uttam",
    lastName: "Marandi",
  };

  let name2 = {
    firstName: "Sanjay ",
    lastName: "Soren",
  };

  let printFullName = function (hometown) {
    console.log(`${this.firstName} ${this.lastName} from ${hometown}`);
  };

  printFullName.call(name, "Baripada");
  // the first passed parameter will have reference to this keyword. The next parameters are arguments to the function
  printFullName.call(name2); // here hometown is undefined
}

// Code 4
// Mutilple parameters

{
  let name = {
    firstName: "Uttam",
    lastName: "Marandi",
  };

  let name2 = {
    firstName: "Sanjay ",
    lastName: "Soren",
  };

  let printFullName = function (hometown, state) {
    console.log(
      `${this.firstName} ${this.lastName} from ${hometown} , ${state}`
    );
  };

  printFullName.call(name, "Baripada", "Odisha");
  // the first passed parameter will have reference to this keyword. The next parameters are arguments to the function
  printFullName.call(name2); // here hometown is undefined
}

//  Apply
//  Apply is also used for function borrowing.
//  The only difference is that we pass the function parameters in the form of an array instead of single parameters

let name = {
  firstName: "Uttam",
  lastName: "Marandi",
};

let name2 = {
  firstName: "Sanjay ",
  lastName: "Soren",
};
let printFullName = function (hometown, state) {
  console.log(`${this.firstName} ${this.lastName} from ${hometown} , ${state}`);
};

printFullName.call(name2, "Baripada", "Odisha");
printFullName.apply(name2, ["Baripada", "Odisha"]); // pass function arguments as an array
// The first parameter is always an object to which this paramter will refer inside the function context

// .bind()
// Instead of calling the method like in .call() and .apply() , .bind() binds the method with the  object and
// and returns us the copy of the method.

let printMyName = printFullName.bind(name2, "Mumbai", "Baripada"); // printMyName is a function
console.log(printMyName);

printMyName();

// .bind() is mostly used to bind the method with an object and call the return function later.
// In case of .call() & .apply() we make the function call right away.

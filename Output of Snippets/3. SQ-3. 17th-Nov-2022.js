//  Code 102
function Person(name, age) {
  this.name = name || "John";
  this.age = age || 24;
  this.displayName = function () {
    console.log(this.name); // here this represents the local function scope. and it has access to name keyword.
  };
}

Person.name1 = "Johnny";
Person.displayName = function () {
  console.log(this.name1);
  console.log(this.name);
  //The name property returns the name of a function .
  // displayName is the property of function Person
  // This keyword has reference to name1
};

var person1 = new Person("Uttam");
person1.displayName();
Person.displayName();

// Code 103
function passWordMngr() {
  var password = "12345678";
  this.userName = "John";
  return {
    pwd: password,
  };
}
// Block End
var userInfo = passWordMngr(); // we are not creating an instance of the function. There is no "new" keyword.
console.log(userInfo.pwd);
console.log(userInfo.userName);
// userInfo holds the return of passWordMngr. and it does not have key userName

// Code 104
var employeeId = "aq123";
function Employee() {
  this.employeeId = "bq1uy";
}
console.log(Employee.employeeId); // returns undefined . I thought it will return "bq1uy". But that's not the case.
//Here we are trying to access a property defined on Employee function and not inside employee function.
const enEmployee = new Employee();
console.log(enEmployee.employeeId); // In order to get this keyword into play , we have to create an instance of the function.
Employee.employeeId = "Uttam";
console.log(Employee.employeeId);

const myEmployee = new Employee();
console.log(myEmployee.employeeId);

//  Code 105 => Doubt
var employeeId = "aq123";

function Employee() {
  this.employeeId = "bq1uy";
}
console.log(new Employee().employeeId);
Employee.prototype.employeeId = "kj182";
Employee.prototype.JobId = "1BJKSJ";
console.log(new Employee().JobId); // We can access protoype values using .operator
console.log(new Employee().employeeId); // Here the objec empolyeedId takes precedence before prototype employeeId

// A.C to prototype chain first JobId will be searched inside Employee function. If not found , then it will move to prototype values i.e __proto__ object and check there.
// If not found in any __proto__ object , then it returns undefined

// Code 106
var employeeId = "aq123";
(function Employee() {
  try {
    throw "foo123";
  } catch (employeeId) {
    console.log(employeeId);
  }
  console.log(employeeId);
})();

//  Code 107
(function () {
  var greet = "Hello World";
  var toGreet = [].filter.call(greet, function (element, index) {
    return index > 5;
  });
  console.log(toGreet);
})();

// Code 108
(function () {
  var fooAccount = {
    name: "John",
    amount: 4000,
    deductAmount: function (amount) {
      this.amount -= amount; // amount is a primitive value. so passed by value instead of passed by reference.
      return "Total amount left in account: " + this.amount;
    },
  };
  var barAccount = {
    name: "John",
    amount: 6000,
  };
  var withdrawAmountBy = function (totalAmount) {
    return fooAccount.deductAmount.bind(barAccount, totalAmount);
  };
  console.log(withdrawAmountBy(400)());
  // this.amount remembers the value
  console.log(withdrawAmountBy(300)());
})();

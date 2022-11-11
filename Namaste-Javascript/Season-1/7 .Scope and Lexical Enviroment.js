//  Scope , Scope Chain and Lexical enviroment

function a() {
  var d = 10;
  c();
  console.log(b); // returns 10
  function c() {
    console.log(b); // returns 10, outside ececution context variable are accessible to the the inner execution context
  }
}
// first js tries to find b in it's local enviroment. As it is not available in local enviroment , it will check in the global scope

var b = 10;
a();
//console.log(d); // d is not present in the global enviroment. And global enviroment code cannot access varibales of local enviroments

// Scope
// Scope of a varioble is the area of code where we can access that variable

// Scope is directly dependenet in the lexical enviroment

// Global Ececution context
// a:{...}

// Local Execution context func b()
// b:undefined =>10
// c:{...}

// Locaa Ecectution context func c()
//

// Call Stack
// push => (Anonyomous) => Global ececution context
// push => L.E.C => Local execution context

// Whenever an execution context is created , global enviroment is also created with it.
//
//
// Lexixal enviroment is the local memory along with the lexical envioroment of it's parent
// Lexiacal means in hierarchy or in relation where it is physically present
// Ex : func c() is lexically present inside func a() & a() is lexically inside the global scope

//Scope chain is the chaining of lexical enviroments from it's local enviroment and it's parent lexical references.

var x = 7;

function getName() {
  console.log("Uttam Marandi");
}

getName();
console.log(x);
console.log(getName);

// ANALYSIS

// Stack
//push => (anonyomous)  // Global execution context // line 1
//push=> getName // Function execution context for getName // line 5
//pop => getName // After getName execution complete this execution context is deleted

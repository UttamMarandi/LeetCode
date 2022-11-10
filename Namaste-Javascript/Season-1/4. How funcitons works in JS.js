var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}

//Analysis
// Global execution context
// Memory components => Memory execution phase
//x:undefined => 1
//a:{...}
//b:{...}
//Code component => code execution phase
//x gets value 1
//a() crates a execution context and push to call stack
// 1. F.E.C
// M.C => x:undefined =>10
// x is separate variable than global x
// C.C => x gets value 10 ,
// logs x i.e 10, Javascript first looks at the closest execution context
// b()
//2. F.E.C
// M.C => x:undefined
//C.C => x gets value 100
//logs x i.e 100
// x gets value 1 in line 4 , value 1 b.c all other execution context is deleted and global execution is remaining

// CALL STACK
//pop =>(Anonyomous) => global execution is also deleted from call stack
// pop => (b) => line 3 => contol goes to line 4
//push => (b) => line 3 => control goes to line 11
//pop => (a) => line 2 => control goes back to G.E.C i.e line 3
//push => (a) => line 2 => control goes to line 6
//push => (Anonyomoue) => line1

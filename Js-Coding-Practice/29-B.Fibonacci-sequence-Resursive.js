// Q. Write a recursive and non recursive fibonacci-sequence?
// 1, 1, 2, 3, 5, 8, 13, 21, 34

// ----CALL STACK ----//
// recurFibonacci(3) = recurFibonacci(2) + recurFibonacci(1) = 1+1 = 2
// recurFibonacci(3) = recurFibonacci(2) + recurFibonacci(1) = 1+1 = 2;
// recurFibonacci(4) = recurFibonacci(3) + recurFibonacci(2) => 2+1 = 3;
// recurFibonacci(5) = recurFibonacci(4) + recurFibonacci(3) => 3 + "Not availbale"; b.c recurFibonacci(3) is popped off call stack. so pushed to call stack again, then result recurFibonacci(2) return 2. So recurFiboncacci(5) returns5

// ------------------//

// const recurFibonacci = (num) => {
//   if (num < 3) return 1;
//   return recurFibonacci(num - 1) + recurFibonacci(num - 2);
// };

// console.log(recurFibonacci(5));

// 1,1,2,3,5,8

// .................................CALL STACK.........................//
//fib(3) => fib(2) + fib(1) = 1+1 = 1
//fib(4) =>fib(3) + fib(2) = 2 +1=3
//fib(3)=>fib(2)+fib(1) => 1+1 =2
//fib(3) = fib(2) + fib(1) => 1+1 =2
//fib(4) = fib(3) + fib(2) => 2 + 1=3
//fib(5)=fib(4) + fib(3) => 3 + 2 = 5
// fib(6)=>fib(5) + fib(4) => 5 + fib(4) => 5+3 = 8
//......................................................................//

// ...........original Call stack .................//
//pop fib(6) => call stack empty
//execute fib(6) => fib(5) + fib(4) => 5 + 3 = 8
//pop fib(4) => control at fib(6)
//execute fib(4) => fib(3) + fib(2) => 2 +1 = 3
//pop => fib(3) => control at fib(4)
//execute => fib(3) => fib(2) ++ fib(1) => 1+1 =2
//push=>fib(3)
//push=> fib(4)
//pop => fib(5) => control at fib(6)
//execute => fib(5) => fib(4) + fib(3) => 3+2 = 5
//pop=> fib(3) => control at fib(5)
//execute => fib(3) => fib(2) + fib(1) => 1+1 = 2
//push=> fib(3)
//pop => fib(4) => control at fib(5)
//execute => fib(4) => fib(3) + fib(2) => 2 + 1 => return 3
//pop => fib(3) => control at fib(4)
//execute => fib(3) => fib(2) + fib(1) => reutn 2
//push=>fib(3)
//push=>fib(4)
//push=>fib(5)
//push=>fib(6)
//..................................................//

const fib = (num) => {
  if (num < 3) return 1;
  return fib(num - 1) + fib(num - 2);
};
console.log(fib(6));

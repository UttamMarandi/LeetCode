// Q. Write a recursive and non recursive fibonacci-sequence?
// 1, 1, 2, 3, 5, 8, 13, 21, 34

const fibonnaci = (num) => {
  // we are assigning b the value of a , and we are assigning a the value of a+b
  let a = 1,
    b = 0,
    temp;
  const result = [];
  const aValue = [];
  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
    result.push(b);
    aValue.push(a);
  }
  console.log("result:", result);
  console.log("aValue:", aValue);
  return result;
};

console.log(fibonnaci(5));

const fibonacci1 = (num) => {
  let a = 1;
  let b = 0;
  let temp;
  const result = [];
  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    result.push(b);
    num--;
  }
  return result;
};

console.log(fibonacci1(10));

// Shifting pointer pattern
//Fibonacci

// 1, 1, 2, 3, 5, 8, 13, 21, 34

const fibonacci3 = (num) => {
  if (num < 3) return 1;
  let prev = 1;
  let cur = 1;
  let next;

  for (let i = 2; i < num; i++) {
    next = prev + cur;
    prev = cur;
    cur = next;
  }
  return cur;
};

console.log(fibonacci3(8));

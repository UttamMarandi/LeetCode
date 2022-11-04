// Q. Write a recursive and non-recursive Factorial function?
// Non -recursive

const findFactorial = (num) => {
  let factValue = 1;
  for (let i = num; i > 0; i--) {
    factValue = factValue * i;
  }
  return factValue;
};

console.log(findFactorial(1));

const findFactorial2 = (num) => {
  if (num < 1) return `Number should be greater than 1`;
  if (num === 1) return 1;

  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
};

console.log(findFactorial2(10));
console.log(findFactorial2(-2));

const findFactorial3 = (num) => {
  if (num < 1) return `Num should be greater than 1`;
  if (num === 1) {
    return 1;
  } else {
    return num * findFactorial3(num - 1);
  }
};

console.log("findFactorial3:", findFactorial3(4));

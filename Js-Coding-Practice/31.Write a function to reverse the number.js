// Write a function to reverse the number?
const reverseNum = (num) => {
  //does-not work for negative values
  const value = num.toString();
  return parseInt(value.split("").reverse().join(""));
};

console.log(reverseNum(1089));

const reverseNum2 = (num) => {
  //works for negative values also
  const value = num.toString().split("");
  console.log("value:", value);
  const reverseValue = value.reverse();
  console.log("reverseValue:", reverseValue);
  if (reverseValue[reverseValue.length - 1] === "-") {
    return parseInt(`-${reverseValue.join("")}`);
  } else {
    return parseInt(`${reverseValue.join("")}`);
  }
};

console.log(reverseNum2(-1254));
console.log(reverseNum2(1254));
console.log(reverseNum2(1250)); //In parseInt if 0 is the first number, then 0 is discarded

// Iterations
//12345

//result => 0 , 0, 0+5=5 //// 50, 50+4=54 //// 540 ,540 + 3 = 543 ////  5430 + 2 = 5432 //54320, 54320 +1= 54321
//num=> 1234 //// 123 //// 12 //// 1 //// 0

const reverse = (num) => {
  let result = 0;
  while (num != 0) {
    result = result * 10;
    result = result + (num % 10);
    num = Math.floor(num / 10);
  }
  return result;
};
console.log(reverse(12345));

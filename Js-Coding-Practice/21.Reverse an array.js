// Q. How do you reversing an array?

const array1 = [23, 45, 87, 34];

const reverseArray1 = array1.reverse(); //.reverse() also changes the original array
console.log("reverseArray1:", reverseArray1);
console.log("array1:", array1);

const array2 = [23, 45, 87, 34];

const arrayReverse = (arr) => {
  let reverseArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArray.push(arr[i]);
  }
  return reverseArray;
};

console.log(arrayReverse(array2));

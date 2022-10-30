// Being told that an unsorted array contains (n - 1) of n consecutive numbers (where the bounds are defined), find the missing number in O(n) time?\

// Example: Input: array = [2, 5, 1, 4, 9, 6, 3, 7];
// upperBound = 9;
// lowerBound = 1;

// Output: 8;

/**
 *  Find theoretical sum of the consecutive numbers using a variation of Gauss Sum.
 *  Formula: [(Max * (Max + 1)) / 2] - [(Min * (Min - 1)) / 2];
 *  Max is the upper bound and Min is the lower bound
 */

const inputArray = [2, 5, 1, 4, 9, 6, 3, 7];
const upperBound = 9;
const lowerBound = 1;

const findMissingNumbers = (inputArray, upperBound, lowerBound) => {
  let sum = 0;

  for (let i = 0; i < inputArray.length; i++) {
    sum = sum + inputArray[i];
  }
  console.log("sum:", sum);

  const upperSum = (upperBound * (upperBound + 1)) / 2;
  console.log("upperSum:", upperSum);

  const lowerSum = (lowerBound * (lowerBound - 1)) / 2;
  console.log("lowerSum:", lowerSum);
  const theorySum = upperSum - lowerSum;
  console.log("theorySum:", theorySum);

  const missingValue = theorySum - sum;
  return missingValue;
};

console.log(findMissingNumbers(inputArray, upperBound, lowerBound));
